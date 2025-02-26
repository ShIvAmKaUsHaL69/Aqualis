'use client'
import React, { useState } from 'react'

export default function Hamburger() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        className="p-2 rounded-md focus:outline-none focus:ring-gray-500 text-white text-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✖' : '☰'}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden">
          <ul className="flex flex-col">
            <li className="p-3 hover:bg-gray-200 cursor-pointer">Home</li>
            <li className="p-3 hover:bg-gray-200 cursor-pointer">About</li>
            <li className="p-3 hover:bg-gray-200 cursor-pointer">Services</li>
            <li className="p-3 hover:bg-gray-200 cursor-pointer">Contact</li>
          </ul>
        </div>
      )}
    </div>
  )
}
