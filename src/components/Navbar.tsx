import React from 'react'

const Navbar = () => {
  return (
    <div className="flex flex-wrap sm:justify-between">
      <div>
        <p className="text-2xl font-semibold">Media Library</p>
        <p className="text-gray-400 mt-2 mb-3 sm:mt-2 ">
          create, edit, and manage the media on your community
        </p>
      </div>
      <div className="bg-blue-500 w-auto h-8 text-white flex items-center p-2 rounded-md hover:bg-blue-400 hover:cursor-pointer">
        Add Image
      </div>
    </div>
  )
}

export default Navbar
