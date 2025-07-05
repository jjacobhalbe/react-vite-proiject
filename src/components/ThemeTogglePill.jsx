import { useTheme } from '../context/ThemeContext'
import { Sun, Moon } from 'lucide-react'

const ThemeTogglePill = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <div className="pill-toggle-container">
      <button
        className={`pill-toggle ${isDarkMode ? 'active' : ''}`}
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        <div className={`pill-indicator ${isDarkMode ? 'moon' : 'sun'}`}>
          {isDarkMode ? (
            <Moon size={14} color="#fff" />
          ) : (
            <Sun size={14} color="#fff" />
          )}
        </div>
      </button>
    </div>
  )
}

export default ThemeTogglePill
