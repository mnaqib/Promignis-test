import React, { useState } from 'react'

const Search = () => {
  const [search, setSearch] = useState('')
  return (
    <div className="flex items-center p-2 h-8 w-60 border-2 border-gray-200 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-5 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        placeholder="Search Media"
        className="ml-2 text-xs h-7 w-48 focus:outline-none transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:border-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}

export default Search
