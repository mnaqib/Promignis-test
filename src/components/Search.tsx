import React, { useState } from 'react'

interface IProps {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

const Search: React.FC<IProps> = ({ search, setSearch }) => {
  const [focus, setFocus] = useState(false)
  return (
    <div
      className={
        focus
          ? 'flex items-center p-2 h-8 w-60 border-2 border-blue-400 rounded'
          : 'flex items-center p-2 h-8 w-60 border border-gray-200 rounded'
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-5 text-gray-300"
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
        className="ml-2 text-xs placeholder:text-grayCustom placeholder:opacity-25 h-7 w-48 focus:outline-none transition ease-in-out text-grayCustom/75 font-semibold focus:bg-white"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </div>
  )
}

export default Search
