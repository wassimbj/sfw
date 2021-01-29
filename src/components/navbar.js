import { Link } from 'gatsby';
import React from 'react';
import CakeImg from '../images/fw-icon.png'

export default function NavBar() {
  return (
    <header className="bg-gray-800 px-3">
      <div className="text-center flex justify-center">
        <Link to="/" className="block py-2 hover:text-gray-300">Home</Link>
      </div>
    </header>
  )
}
