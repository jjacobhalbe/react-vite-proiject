import React, { useState, useEffect } from 'react'
import FloatingLevels from './FloatingLevels'
import './intro.css'

const IntroSection = ({ onExitComplete }) => {
  const [isExiting, setIsExiting] = useState(false)
  const [showIntro, setShowIntro] = useState(true)
  const [rollCurtain, setRollCurtain] = useState(false)

  useEffect(() => {
    if (isExiting) {
      const curtainDelay = 1800
      const curtainDuration = 1200

      const curtainTimer = setTimeout(() => {
        setRollCurtain(true)
      }, curtainDelay)

      const exitTimer = setTimeout(() => {
        setShowIntro(false)
        onExitComplete()
      }, curtainDelay + curtainDuration)

      return () => {
        clearTimeout(curtainTimer)
        clearTimeout(exitTimer)
      }
    }
  }, [isExiting, onExitComplete])

  if (!showIntro) return null

  return (
    <div className={`intro-container ${rollCurtain ? 'roll-up' : ''}`}>
      <section className="intro-section-container">
        <h1 className="intro-title">Welcome to CEFR Checker</h1>
        <p className="intro-description">
          Paste or type your text, click the button and see each word's CEFR
          level instantly. Built with React, CSS, and a sprinkle of AI's magic.
        </p>
        <div className="intro-buttons">
          <button className="primary-btn" onClick={() => setIsExiting(true)}>
            Let's go!
          </button>
        </div>
      </section>
      <FloatingLevels isExiting={isExiting} />
    </div>
  )
}

export default IntroSection
