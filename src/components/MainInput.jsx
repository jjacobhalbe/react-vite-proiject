import { useState } from 'react'
import Button from './Button'

const MainInput = () => {
  const [text, setText] = useState('')

  const handleCheckLevel = () => {
    console.log('🚀 Text to process:', text)
  }

  const handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault()
      handleCheckLevel()
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
          onKeyDown={handleKeyDown}
        ></textarea>
        <Button onClick={handleCheckLevel} />
      </div>
    </main>
  )
}

export default MainInput
