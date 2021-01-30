import { Link } from 'gatsby';
import React from 'react';
import CakeImg from '../images/fw-icon.png'

export default function NavBar() {
  return (
    <header className="bg-gray-800 px-3">
      <div className="text-center flex justify-around">
        <Link to="/" className="block py-2 hover:text-gray-300">
          Home
        </Link>
        <a href="https://github.com/wassimbj/sfw" target="_blank" className="block py-2 hover:text-gray-300">
          Github
        </a>
      </div>
    </header>
  )
}
