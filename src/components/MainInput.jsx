import { useState } from 'react'
import Button from './Button'
import ClearButton from '../components/ClearButton'
import { triggerPlaceholderError } from '../utils/triggerPlaceholderError'

const MainInput = ({ onWordsUpdate, onSentencesUpdate }) => {
  const [text, setText] = useState('')
  const [placeholder, setPlaceholder] = useState('Paste your text here...')
  const [placeholderError, setPlaceholderError] = useState(false)
  const [error, setError] = useState(null)

  const handleCheckLevel = async () => {
    if (!text.trim()) {
      triggerPlaceholderError(setPlaceholder, setPlaceholderError)
      setText('')
      return
    }

    const data = { text }

    try {
      const response = await fetch('http://localhost:8080/api/classify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.error) {
        setError(result.error)
        setTimeout(() => setError(null), 5000)
        return
      }

      onSentencesUpdate(result.sentences)
      onWordsUpdate(result.words)
      setText('')
    } catch (error) {
      console.error('Error:', error)
      setError('Something went wrong. Please try again.')
      setTimeout(() => setError(null), 3000)
    }
  }

  const handleClearAll = () => {
    setText('')
    onWordsUpdate([])
    onSentencesUpdate([])
  }

  return (
    <main>
      <section className="main-container">
        <textarea
          id="usersInputContainer"
          name="usersTextArea"
          placeholder={placeholder}
          className={`mainInput ${placeholderError ? 'errorPlaceholder' : ''}`}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault()
              handleCheckLevel()
            }
          }}
        ></textarea>
        <div className="buttonsContainer">
          <Button onClick={handleCheckLevel} />
          <ClearButton onClick={handleClearAll} />
        </div>
      </section>
    </main>
  )
}

export default MainInput
