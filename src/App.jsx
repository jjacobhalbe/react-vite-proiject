import React, { useState } from 'react'
import MainInput from './components/MainInput'
import InputsContainer from './components/InputsContainer'
import Sidebar from './components/Sidebar'
import Hamburger from './components/Hamburger'

function App() {
  const [classifiedWords, setClassifiedWords] = useState([])
  const [sentences, setSentences] = useState([])
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <Hamburger onClick={() => setSidebarOpen(true)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
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
