import { openDB } from 'idb'

const DB_NAME = 'WordsDatabase'
const STORE_NAME = 'words'

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

const fetchWordList = async () => {
  const response = await fetch(
    'https://raw.githubusercontent.com/first20hours/google-10000-english/master/20k.txt'
  )
  const text = await response.text()

  const words = text.split('\n').map((word) => word.trim())

  console.log(`Loaded ${words.length} words!`)
  return words
}

const addWord = async (word) => {
  const db = await initDB()
  const existingWord = await db.get(STORE_NAME, word)
  if (!existingWord) {
    await db.put(STORE_NAME, { word, level: 'unknown' })
  }
}

const populateDB = async () => {
  const words = await fetchWordList()
  const db = await initDB()
  const tx = db.transaction(STORE_NAME, 'readwrite')
  const store = tx.objectStore(STORE_NAME)

  for (const word of words) {
    const existingWord = await store.get(word)
    if (!existingWord) {
      store.put({ word, level: 'unknown' })
    }
  }

  await tx.done
  console.log('Database populated with words!')
}

const getAllWords = async () => {
  const db = await initDB()
  return await db.getAll(STORE_NAME)
}

const getWord = async (word) => {
  const db = await initDB()
  return await db.get(STORE_NAME, word)
}

export { addWord, getAllWords, getWord, populateDB }
