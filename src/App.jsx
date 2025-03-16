import React, { useEffect, useState } from 'react'
import InputsContainer from './components/InputsContainer'
import MainInput from './components/MainInput'

function App() {
  const [words, setWords] = useState([])

  useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/eyturner/3d56f6a194f411af9f29df4c9d4a4e6e/raw/20k.txt'
    )
      .then((response) => response.text())
      .then((data) => {
        const wordList = data.split('\n')
        setWords(wordList)
        console.log('Words fetched:', wordList)
      })
      .catch((error) => {
        console.error('Error fetching words:', error)
      })
  }, [])

  return (
    <>
      <MainInput />
      <InputsContainer words={words} />{' '}
    </>
  )
}

export default App
