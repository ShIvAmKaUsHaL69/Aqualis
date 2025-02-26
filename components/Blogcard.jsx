import React from 'react'

export default function Blogcard() {
  return (
    <div className="border rounded-lg overflow-hidden bg-white w-full lg:w-[30%] shadow-lg">
      <img src='/shipfromtop.jpg' alt='test' className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="text-gray-600 text-sm mb-2">
          <span className="font-semibold">Admin</span> • 10 sept 2025
        </div>
        <h3 className="text-lg font-bold mb-2">Test</h3>
        <p className="text-gray-700">Helllo hello</p>
      </div>
    </div>
  )
}
