import { Link } from 'gatsby';
import React from 'react';
import activeLang from '../lang/activeLang'

export default function NavBar({ category }) {
  const handleLangChange = (e) => {
    if(typeof window !== 'undefined'){
      const lang = e.target.value;
      window.localStorage.setItem('lang', lang);
      // if we are at home, just reload the page
      if(window.location.pathname === '/'){
        window.location.reload();
      } else {
        // change the lang route
        window.location.pathname = `/${lang}/category/${category}`;
      }
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
        <select
          onChange={handleLangChange}
          className="text-gray-300 pr-2 cursor-pointer focus:outline-none border-none rounded-sm bg-gray-800"
        >
          <option value="en" selected={activeLang === 'en'}> English </option>
          <option value="tn" selected={activeLang === 'tn'}> Tounsiii </option>
        </select>
      </div>
    </header>
  )
}
