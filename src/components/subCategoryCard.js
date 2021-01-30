import React, { useState } from 'react'
import ReadingModal from './readingModal'

export default function SubCategoryCard({ name, absolutePath }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onFocus={() => setIsOpen(!isOpen)}
        onBlur={() => setIsOpen(false)}
        className="focus:outline-none inline-block my-3 px-3 w-full overflow-hidden md:w-1/3 lg:w-1/4 cursor-pointer"
      >
          <div className={`border-2 ${isOpen ? 'bg-gray-900 border-gray-600' : 'bg-gray-800 border-gray-700 hover:border-gray-900'} rounded-lg p-3 transition text-center`}>
          <span className="font-medium text-lg">{name}</span>
        </div>
      </button>

      <ReadingModal isOpen={isOpen} absolutePath={absolutePath} />
    </>
  )
}
