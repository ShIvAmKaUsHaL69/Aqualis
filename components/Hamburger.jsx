'use client'
import Link from 'next/link';
import React, { useState } from 'react'

export default function Hamburger() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        aria-label="menu button"
        className="p-2 rounded-md focus:outline-none focus:ring-gray-500 text-white text-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✖' : '☰'}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden">
          <ul className="flex flex-col text-[#05363B]">
          <Link href='/'><li className="p-3 hover:bg-gray-200 cursor-pointer">Home</li></Link>
          <Link href='/#about'><li className="p-3 hover:bg-gray-200 cursor-pointer">About Us</li></Link>
          <Link href='/#bunkering'><li className="p-3 hover:bg-gray-200 cursor-pointer">Bunkering</li></Link>
          <Link href='/#services'><li className="p-3 hover:bg-gray-200 cursor-pointer">Other Services</li></Link>
          <Link href='/blogs'><li className="p-3 hover:bg-gray-200 cursor-pointer">Blogs</li></Link>
          <Link href='/#contact'><li className="p-3 hover:bg-gray-200 cursor-pointer">Contact Us</li></Link>
          </ul>
        </div>
      )}
    </div>
  )
}
