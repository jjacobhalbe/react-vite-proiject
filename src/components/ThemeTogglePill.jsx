import React from 'react'
import { useTheme } from '../context/ThemeContext'

const ThemeTogglePill = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <div className="pill-toggle-container">
      <button
        className={`pill-toggle ${isDarkMode ? 'active' : ''}`}
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        <div className="pill-indicator"></div>
      </button>
    </div>
  )
}

export default ThemeTogglePill
