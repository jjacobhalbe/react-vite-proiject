import React, { useState } from 'react'
import MainInput from './components/MainInput'
import InputsContainer from './components/InputsContainer'

function App() {
  const [classifiedWords, setClassifiedWords] = useState([])
  const [sentences, setSentences] = useState([])

  return (
    <>
      <MainInput
        onWordsUpdate={setClassifiedWords}
        onSentencesUpdate={setSentences}
      />
      <InputsContainer
        wordResults={classifiedWords}
        sentenceResults={sentences}
      />
    </>
  )
}

export default App
