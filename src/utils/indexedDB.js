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
  return db
}

const populateDB = async () => {
  const db = await initDB()

  // ✅ Fetch words from OUR backend
  const response = await fetch('http://localhost:8080/api/word-list')
  const words = await response.json()

  const tx = db.transaction(STORE_NAME, 'readwrite')
  const store = tx.objectStore(STORE_NAME)

  for (const word of words) {
    store.put({ word, level: 'unknown' })
    console.log(`Added word: ${word}`)
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
