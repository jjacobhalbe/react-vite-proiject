import React, { useEffect, useState } from 'react'
import InputsContainer from './components/InputsContainer'
import MainInput from './components/MainInput'
import { populateDB } from './utils/indexedDB' // Import the function here

function App() {
  const [words, setWords] = useState([])

  // Define the processWords function here
  const processWords = async (wordList) => {
    try {
      const response = await fetch(
        'https://node-project-production-2e8a.up.railway.app/api/process-words',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ words: wordList }),
        }
      )
      const data = await response.json()
      console.log(data) // Check the processed words
      return data.processedWords // Returns the processed words with their levels
    } catch (error) {
      console.error('Error processing words:', error)
    }
  }

  useEffect(() => {
    // Fetch word-level data from your backend server (make sure the URL is correct)
    fetch(
      'https://node-project-production-2e8a.up.railway.app/api/process-words'
    ) // Ensure this is the right endpoint
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => {
        setWords(data) // Set the fetched word-level data to state
        console.log(`Fetched ${data.length} words with their levels`) // Log the fetched words

        // Populate IndexedDB with the word-level data after setting state
        populateDB(data) // Pass the fetched word-level data to populateDB
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
