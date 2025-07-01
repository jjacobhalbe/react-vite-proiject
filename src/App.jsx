import React, { useState } from 'react'
import MainInput from './components/MainInput'
import InputsContainer from './components/InputsContainer'
import Sidebar from './components/Sidebar'
import Hamburger from './components/Hamburger'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  const [classifiedWords, setClassifiedWords] = useState([])
  const [sentences, setSentences] = useState([])
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen)
  }

  return (
    <ThemeProvider>
      <Hamburger onClick={toggleSidebar} isActive={isSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      <MainInput
        onWordsUpdate={setClassifiedWords}
        onSentencesUpdate={setSentences}
      />
      <InputsContainer
        wordResults={classifiedWords}
        sentenceResults={sentences}
      />
    </ThemeProvider>
  )
}

export default App
