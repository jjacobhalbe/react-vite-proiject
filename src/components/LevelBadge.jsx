import React from 'react'
import { levelDefinitions } from '../utils/definitions'
import '../styles/tooltip.css'

const LevelBadge = ({ level }) => {
  const info = levelDefinitions[level] || {}
  const { description, link } = info

  return (
    <span className={`word-span ${level}`}>
      {level}
      <span className="tooltip">
        {description}
        {link && (
          <>
            <br />
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="wiki-link"
            >
              Learn more
            </a>
          </>
        )}
      </span>
    </span>
  )
}

export default LevelBadge
