import React from 'react'
import '../sidebar.css'
const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>
        ✕
      </button>
      <ul>
        <li>
          <a href="#about">About CEFR</a>
        </li>
        <li>
          <a href="#levels">Level Descriptions</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
