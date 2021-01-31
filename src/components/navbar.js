import { Link } from 'gatsby';
import React from 'react';
import CakeImg from '../images/fw-icon.png'

export default function NavBar() {
  const selectedLang = typeof window !== 'undefined' ? window.localStorage.getItem('lang') : 'en';
  const handleLangChange = (e) => {
    if(typeof window !== 'undefined'){
      window.localStorage.setItem('lang', e.target.value);
      window.location.reload();
    }
  }

  return (
    <header className="bg-gray-800 px-3">
      <div className="text-center flex justify-around">
        <Link to="/" className="block py-2 hover:text-gray-300">
          Home
        </Link>
        <a href="https://github.com/wassimbj/sfw" target="_blank" className="block py-2 hover:text-gray-300">
          Github
        </a>
        <select onChange={handleLangChange} className="text-gray-300 px-3 rounded-full bg-gray-800">
          <option value="en" selected={selectedLang === 'en'}> English </option>
          <option value="tn" selected={selectedLang === 'tn'}> Tounsiii </option>
        </select>
      </div>
    </header>
  )
}
