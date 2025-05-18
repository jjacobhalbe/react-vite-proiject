import React from 'react'
import { levelDefinitions } from '../utils/definitions'
import '../tooltip.css'

const LevelBadge = ({ level }) => {
  const definition = levelDefinitions[level]

  return (
    <span className={`word-span ${level}`}>
      {level}
      <span className="tooltip">
        {definition ? (
          <>
            <div>{definition.description}</div>
            <a
              href={definition.link}
              target="_blank"
              rel="noopener noreferrer"
              className="wiki-link"
            >
              See full definition
            </a>
          </>
        ) : (
          'No definition available.'
        )}
      </span>
    </span>
  )
}

export default LevelBadge
