import React from 'react'

export default function ReadingModal({ data, isOpen }) {
  return (
    <div
      style={{
        boxShadow: '0 0 20px rgba(0,0,0,0.25)',
        height: '350px',
        transform: `translateY(${isOpen ? 0 : 100}%)`,
        transition: 'transform 400ms cubic-bezier(0.4, 0, 0.2, 1)'
      }}
      className="fixed bottom-0 left-0 w-full p-3 overflow-y-auto bg-gray-800 text-gray-200 z-50 rounded-t-xl transition"
    >
      <div className="max-w-screen-lg p-3 mx-auto block overflow-hidden">
        {data}
      </div>
    </div>
  )
}
