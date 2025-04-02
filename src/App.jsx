import React, { useEffect, useState } from 'react'
import InputsContainer from './components/InputsContainer'
import MainInput from './components/MainInput'
import Navbar from './components/Navbar'
import { populateDB, getAllWords } from './utils/indexedDB'

function App() {
  const [words, setWords] = useState([])

  useEffect(() => {
    const initializeDB = async () => {
      try {
        const storedWords = await getAllWords()
        if (storedWords.length > 0) {
          console.log(`Loaded ${storedWords.length} words from IndexedDB`)
          setWords(storedWords)
        } else {
          console.log('IndexedDB is empty, populating now...')
          await populateDB()
          console.log('IndexedDB populated successfully!')
          const newWords = await getAllWords()
          setWords(newWords)
        }
      } catch (error) {
        console.error('Error initializing IndexedDB:', error)
      }
    }

    initializeDB()
  }, [])

  return (
    <>
      <MainInput />
      <Navbar />
      <InputsContainer words={words} />
    </>
  )
}

export default App
