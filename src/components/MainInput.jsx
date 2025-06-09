import { useState } from 'react'
import Button from './Button'
import '../styles/inputs.css'
import '../styles/button.css'

const MainInput = ({ onWordsUpdate, onSentencesUpdate }) => {
  const [text, setText] = useState('')
  const [error, setError] = useState(null)

  const handleCheckLevel = async () => {
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
      setTimeout(() => setError(null), 5000)
    }
  }

  return (
    <main>
      <div className="main-container">
        <textarea
          placeholder="Paste your text here..."
          className="mainInput"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault()
              handleCheckLevel()
            }
          }}
        ></textarea>

        <Button onClick={handleCheckLevel} />
        {error && <p className="errMsg">{error}</p>}
      </div>
    </main>
  )
}

export default MainInput
