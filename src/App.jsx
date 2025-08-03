import React, { useState } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import { AnimatePresence, motion } from 'framer-motion'
import MainInput from './components/MainInput'
import InputsContainer from './components/InputsContainer'
import Sidebar from './components/Sidebar'
import Hamburger from './components/Hamburger'
import IntroSection from './components/IntroSection/IntroSection'

function App() {
  const [classifiedWords, setClassifiedWords] = useState([])
  const [sentences, setSentences] = useState([])
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const [showIntro, setShowIntro] = useState(true)

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen)
  }

  return (
    <ThemeProvider>
      <>
        <AnimatePresence>
          {showIntro && (
            <IntroSection onExitComplete={() => setShowIntro(false)} />
          )}
        </AnimatePresence>

        {!showIntro && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Hamburger onClick={toggleSidebar} isActive={isSidebarOpen} />
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setSidebarOpen(false)}
              />
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <MainInput
                onWordsUpdate={setClassifiedWords}
                onSentencesUpdate={setSentences}
              />
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <InputsContainer
                wordResults={classifiedWords}
                sentenceResults={sentences}
              />
            </motion.div>
          </motion.div>
        )}
      </>
    </ThemeProvider>
  )
}

export default App
