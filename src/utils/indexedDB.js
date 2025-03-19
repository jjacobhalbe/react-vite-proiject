import { openDB } from 'idb'

const DB_NAME = 'WordsDatabase'
const STORE_NAME = 'words'

// Initialize the database
const initDB = async () => {
  const db = await openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'word' })
      }
    },
  })
  return dbw
}

// Fetch the word list from the GitHub repository
const fetchWordList = async () => {
  const response = await fetch(
    'https://raw.githubusercontent.com/jjacobhalbe/react-vite-proiject/main/public/20k.txt'
  )
  const text = await response.text()
  const words = text.split('\n').map((word) => word.trim())
  console.log(`Loaded ${words.length} words!`)
  return words
}

// Populate the IndexedDB with words
const populateDB = async () => {
  const words = await fetchWordList()
  const db = await initDB()
  const tx = db.transaction(STORE_NAME, 'readwrite')
  const store = tx.objectStore(STORE_NAME)

  for (const word of words) {
    // No need to check if the word exists because we'll use the AI to update the levels later
    store.put({ word, level: 'unknown' })
    console.log(`Added word: ${word}`) // Log each word added
  }

  await tx.done
  console.log('Database populated with words!')
}

// Retrieve all words from the database
const getAllWords = async () => {
  const db = await initDB()
  return await db.getAll(STORE_NAME)
}

// Retrieve a specific word from the database
const getWord = async (word) => {
  const db = await initDB()
  return await db.get(STORE_NAME, word)
}

export { populateDB, getAllWords, getWord }
