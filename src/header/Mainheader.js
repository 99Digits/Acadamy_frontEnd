import React, { useState } from 'react'
import '../header/header.css'

function Mainheader() {

      const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }; 
  return (
    <div>
     <nav className="bg-gradient-to-r from-green-500 to-pink-400 to-green-500 p-4">
  <div className="container mx-auto flex justify-between items-center">
    <div className="text-white text-xl font-bold">LEADERS</div>
    <div className="lg:hidden">
      <button
        onClick={toggleMenu}
        className="text-white focus:outline-none hamburger-button"
      >
        <svg
          className={`h-6 w-6 fill-current transition-transform transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 6C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8H20C20.5523 8 21 7.55228 21 7C21 6.44772 20.5523 6 20 6H4ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM4 18C3.44772 18 3 18.4477 3 19C3 19.5523 3.44772 20 4 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H4Z"
          />
        </svg>
      </button>
    </div>
    <div
      className={`lg:flex items-center space-x-4 ${
        isOpen ? 'block' : 'hidden'
      } lg:block`}
    >
     <ul className="lg:flex items-center space-x-4">
  <li>
    <a href="/" className="text-white menu-item">
      Home <i class="fa-solid fa-house"></i>
    </a>
  </li>
  <li>
    <a href="student_login" className="text-white menu-item">
      StudentLogin <i class="fa-solid fa-graduation-cap"></i>
    </a>
  </li>
  <li>
    <a href="/login_admin" className="text-white menu-item">
      AdminLogin <i class="fa-solid fa-lock"></i> &nbsp;<i class="fa-solid fa-user"></i>
    </a>
  </li>
  <li>
    <a href="#" className="text-white menu-item">
      Contact
    </a>
  </li>
</ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Mainheader