import React, { useEffect, useState } from 'react'
import InputsContainer from './components/InputsContainer'
import MainInput from './components/MainInput'

function App() {
  const [words, setWords] = useState([])

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/your-username/your-repo/main/public/20k.txt'
    )
      .then((response) => response.text())
      .then((data) => {
        const wordList = data.split('\n')
        setWords(wordList)
      })
      .catch((error) => console.error('Error fetching words:', error))
  }, [])
  return (
    <>
      <MainInput />
      <InputsContainer words={words} />{' '}
    </>
  )
}

export default App
