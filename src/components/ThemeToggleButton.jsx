import React from 'react'
import { useTheme } from '../context/ThemeContext'

const ThemeToggleButton = () => {
  const { toggleTheme } = useTheme()

  return (
    <button
      className="iconButton"
      aria-label="Toggle Light Mode"
      onClick={toggleTheme}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="themeToggleButton"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="24"
        height="24"
      >
        <path d="M12 2a9.99 9.99 0 0 0 0 20 9.99 9.99 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" />
      </svg>
    </button>
  )
}

export default ThemeToggleButton
