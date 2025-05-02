import { useState } from 'react'
import Button from './Button'

const MainInput = ({ onWordsUpdate, onSentencesUpdate }) => {
  const [text, setText] = useState('')

  const handleCheckLevel = async () => {
    const data = { text }

    try {
      const response = await fetch('http://localhost:8080/api/classify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      onSentencesUpdate(result.sentences)
      onWordsUpdate(result.classifiedWords)
      console.log('clearing input')
      setText('')
    } catch (error) {
      console.error('Error:', error)
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
      </div>
    </main>
  )
}

export default MainInput
