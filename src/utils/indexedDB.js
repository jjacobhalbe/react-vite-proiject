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

const populateDB = async () => {
  const db = await initDB()
  try {
    const response = await fetch(
      'https://node-project-production-2e8a.up.railway.app/api/classify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
      }
    )
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json()
    const words = data.processedWords || []

    const tx = db.transaction(STORE_NAME, 'readwrite')
    const store = tx.objectStore(STORE_NAME)
    for (const wordObj of words) {
      store.put({ word: wordObj.word, level: wordObj.level || 'unknown' })
      console.log(`Added word: ${wordObj.word} with level: ${wordObj.level}`)
    }
    await tx.done
    console.log(`IndexedDB populated with ${words.length} words!`)
  } catch (error) {
    console.error('Error populating IndexedDB:', error)
  }
}

const getAllWords = async () => {
  const db = await initDB()
  return await db.getAll(STORE_NAME)
}

const getWord = async (word) => {
  const db = await initDB()
  return await db.get(STORE_NAME, word)
}

export { populateDB, getAllWords, getWord }
