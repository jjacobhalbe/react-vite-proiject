import React from 'react'
import './sidebar.css'

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>
        ✖
      </button>
      <h2>Menu</h2>
      <ul>
        <li>Home</li>
        <li>Your CEFR Words</li>
        <li>Settings</li>
        <li>About</li>
      </ul>
    </div>
  )
}

export default Sidebar
