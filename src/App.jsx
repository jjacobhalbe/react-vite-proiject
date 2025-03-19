import React, { useEffect, useState } from 'react'
import InputsContainer from './components/InputsContainer'
import MainInput from './components/MainInput'
import { populateDB } from './utils/indexedDB' // Import the function here

function App() {
  const [words, setWords] = useState([])

  useEffect(() => {
    // The words array that you want to classify
    const wordsToProcess = ['word1', 'word2', 'word3'] // Example list of words

    // Send a POST request to your backend server with the word list
    fetch(
      'https://node-project-production-2e8a.up.railway.app/api/process-words',
      {
        method: 'POST', // Use POST instead of GET
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ words: wordsToProcess }), // Send the word list in the body
      }
    )
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => {
        setWords(data.processedWords) // Set the fetched word-level data to state
        console.log(
          `Fetched ${data.processedWords.length} words with their levels`
        )

        // Populate IndexedDB with the word-level data after setting state
        populateDB(data.processedWords) // Pass the fetched word-level data to populateDB
          .then(() => {
            console.log('IndexedDB populated successfully!')
          })
          .catch((error) => {
            console.error('Error populating IndexedDB:', error)
          })
      })
      .catch((error) => console.error('Error fetching words:', error))
  }, []) // Empty array ensures this runs once when the component is mounted

  return (
    <>
      <MainInput />
      <InputsContainer words={words} />
    </>
  )
}

export default App
