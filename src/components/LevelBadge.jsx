import React from 'react'
import { levelDefinitions } from './definitions'
import './tooltip.css'

const LevelBadge = ({ level }) => {
  return (
    <span className={`word-span ${level}`}>
      {level}
      <span className="tooltip">{levelDefinitions[level]}</span>
    </span>
  )
}

export default LevelBadge
