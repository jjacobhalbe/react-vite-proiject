import React from 'react'
import './sidebar.css'

const Hamburger = ({ onClick }) => {
  return (
    <div className="hamburger" onClick={onClick}>
      ☰
    </div>
  )
}

export default Hamburger
