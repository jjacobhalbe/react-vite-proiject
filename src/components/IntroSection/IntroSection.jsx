import React from 'react'
import { motion } from 'framer-motion'
import './IntroSection.css'

const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']

const IntroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="intro-container"
    >
      <h1 className="intro-title">AI Word Classifier</h1>

      <p className="intro-description">
        Paste or type your text, click the button and see each word's CEFR level
        instantly. Built with React, CSS, and a sprinkle of AI's magic.
      </p>

      <div className="intro-buttons">
        <button className="primary-btn">Let's go!</button>
        <button className="secondary-btn">How does it work?</button>
      </div>

      {levels.map((level, idx) => (
        <motion.div
          key={level}
          className={`floating-level level-${idx}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2, y: [-10, 10, -10] }}
          transition={{
            duration: 3 + idx,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {level}
        </motion.div>
      ))}
    </motion.div>
  )
}

export default IntroSection
