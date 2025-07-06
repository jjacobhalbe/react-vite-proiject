import React from 'react'
import { motion } from 'framer-motion'
import './intro.css'

const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', '?']

const generateFloatingLevels = (count) => {
  return Array.from({ length: count }, () => {
    const randomLevel = levels[Math.floor(Math.random() * levels.length)]
    return randomLevel
  })
}

const floatingLevels = generateFloatingLevels(60)

const IntroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="intro-container"
    >
      <section className="intro-section-container">
        <h1 className="intro-title">Welcome to CEFR Checker</h1>

        <p className="intro-description">
          Paste or type your text, click the button and see each word's CEFR
          level instantly. Built with React, CSS, and a sprinkle of AI's magic.
        </p>

        <div className="intro-buttons">
          <button className="primary-btn">Let's go!</button>
          <button className="secondary-btn">How does it work?</button>
        </div>
      </section>

      {/* Floating levels */}
      {floatingLevels.map((level, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.12,
            y: [0, -15, 10, -10, 0],
            x: [0, 5, -3, 2, 0],
            rotate: [0, 5, -3, 5, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: Math.random() * 3,
          }}
          className="floating-level"
          style={{
            top: `${Math.random() * 85}%`,
            left: `${Math.random() * 85}%`,
          }}
        >
          {level}
        </motion.div>
      ))}
    </motion.div>
  )
}

export default IntroSection
