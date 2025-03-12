import React, { useEffect, useState } from 'react'
import InputsContainer from './components/InputsContainer'
import MainInput from './components/MainInput'

// This will hold the words fetched from GitHub
function App() {
  const [words, setWords] = useState([])

  useEffect(() => {
    // Fetching data from the Gist raw URL
    fetch(
      'https://gist.githubusercontent.com/eyturner/3d56f6a194f411af9f29df4c9d4a4e6e/raw/20k.txt'
    )
      .then((response) => response.text()) // Use .text() because the file is a plain text file
      .then((data) => {
        // Split the data into an array of words (assuming each word is on a new line)
        const wordList = data.split('\n') // Splitting by newline to get each word as an element
        setWords(wordList) // Set the words state with the fetched data
        console.log('Words fetched:', wordList) // You can log them to the console to check
      })
      .catch((error) => {
        console.error('Error fetching words:', error)
      })
  }, []) // This ensures that the fetch runs only once when the app loads

  return (
    <>
      <MainInput />
      <InputsContainer words={words} />{' '}
      {/* Pass words data to InputsContainer */}
    </>
  )
}

export default App

/*
➖➖➖➖ NOTES ➖➖➖➖
App.js is our root component.
This is where all components MEET.

🟣 #1 HTML code is exported
🟣 #2 In React, we can split our code in different files.
🟠 For the Smooth Scroll, I can do the following: <a href='#services'> services </a>
which will connect to the ID'd element, e.g <section id='service'></section>
html: scroll-behavior: smooth
section: scroll-margin-top: 4rem; 
🟣 #3 Values should be stored in different files and then utilized when needed. What does that do?
It keeps the code clean, well maintained.
*/
