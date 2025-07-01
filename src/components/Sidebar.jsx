import React, { useState, useRef, useEffect } from 'react'
import ThemeTogglePill from './ThemeTogglePill'
import '../styles/sidebar.css'

const AccordionItem = ({ title, isOpen, onClick, children }) => {
  const contentRef = useRef(null)
  const [height, setHeight] = useState('0px')

  useEffect(() => {
    setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px')
  }, [isOpen])

  return (
    <li>
      <button
        className="accordion-button"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        {title}
      </button>
      <div
        ref={contentRef}
        className="accordion-content"
        style={{
          maxHeight: height,
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        {children}
      </div>
    </li>
  )
}

const Sidebar = ({ isOpen, onClose }) => {
  const [openSection, setOpenSection] = useState(null)

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section))
  }

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-buttons">
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
        <div className="theme-toggle-wrapper">
          <ThemeTogglePill />
        </div>
      </div>

      <ul>
        <AccordionItem
          title="About CEFR"
          isOpen={openSection === 'about'}
          onClick={() => toggleSection('about')}
        >
          <p>
            It is a guideline used to describe achievements of learners of
            foreign languages across Europe and, increasingly, in other
            countries. Learn more here{' '}
            <a
              href={
                'https://en.wikipedia.org/wiki/Common_European_Framework_of_Reference_for_Languages'
              }
              target="_blank"
              rel="noopener noreferrer"
              className="wiki-link"
            >
              Wikipedia
            </a>
          </p>
        </AccordionItem>

        <AccordionItem
          title="Level Descriptions"
          isOpen={openSection === 'levels'}
          onClick={() => toggleSection('levels')}
        >
          <p className="levels AA1">A1 — Beginner, everyday phrases.</p>
          <p className="levels AA2">
            A2 — Simple interactions, familiar topics.
          </p>
          <p className="levels BB1">
            B1 — Can deal with most travel situations.
          </p>
          <p className="levels BB2">
            B2 — Can discuss abstract ideas and opinions.
          </p>
          <p className="levels CC1">
            C1 — Fluent, spontaneous, complex discussions.
          </p>
          <p className="levels CC2">
            C2 — Near-native, nuanced, idiomatic use.
          </p>
        </AccordionItem>

        <AccordionItem
          title="Contact"
          isOpen={openSection === 'contact'}
          onClick={() => toggleSection('contact')}
        >
          <a
            href={'https://github.com/jjacobhalbe'}
            target="_blank"
            rel="noopener noreferrer"
            className="wiki-link github"
          >
            Github Profile
          </a>
        </AccordionItem>
      </ul>
    </div>
  )
}

export default Sidebar
