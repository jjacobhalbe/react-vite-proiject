import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-blue-600 p-4 text-white shadow-lg">
      <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Website</h1>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <ul className={`gap-6 ${isOpen ? 'block' : 'hidden'} md:flex`}>
          <li>
            <a href="#" className="hover:text-gray-200">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-200">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-200">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-200">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
