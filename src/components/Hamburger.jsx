import React from 'react'
import '../styles/sidebar.css'

const Hamburger = ({ onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`hamburger-btn ${isActive ? 'active' : ''}`}
      aria-label="Toggle sidebar menu"
    >
      ☰
    </button>
  )
}
export default Hamburger
