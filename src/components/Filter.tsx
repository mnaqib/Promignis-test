import React from 'react'
import ControlledRadioButtonsGroup from './FIlterButtons'
import Search from './Search'

const Filter = () => {
  return (
    <div className="flex flex-col border-gray-200 border-2 h-28 my-3">
      <div className="flex basis-full border-gray-200 border-b-2 h-16">
        <div className="flex basis-1/5 justify-center items-center border-gray-200 border-r-2">
          <p className="text-gray-500 font-medium text-sm">Select All</p>
        </div>
        <div className="flex basis-4/5 items-center justify-between p-4">
          <button disabled={true} className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
          <div>
            <Search />
          </div>
        </div>
      </div>
      <div className="flex basis-full">
        <div className="flex basis-[6%] text-xs sm:text-base justify-center items-center border-gray-200 border-r-2">
          Sort By
        </div>
        <div className="flex basis-[94%] items-center p-3">
          <ControlledRadioButtonsGroup />
        </div>
      </div>
    </div>
  )
}

export default Filter
