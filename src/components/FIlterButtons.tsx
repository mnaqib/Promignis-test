import React from 'react'

const FIlterButtons = () => {
  return (
    <ul className="grid grid-cols-3 gap-x-5 text-sm">
      <li className="relative">
        <input
          className="sr-only peer"
          type="radio"
          value="yes"
          name="answer"
          id="answer_yes"
          defaultChecked={true}
        />
        <label
          className="flex justify-center items-center w-14 text-gray-400 bg-white border border-gray-300 rounded-sm cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-[rgb(0,153,255)] peer-checked:ring-1 peer-checked:border-transparent peer-checked:bg-sky-100 peer-checked:text-[rgb(0,153,255)]"
          htmlFor="answer_yes"
        >
          Title
        </label>
      </li>

      <li className="relative">
        <input
          className="sr-only peer"
          type="radio"
          value="no"
          name="answer"
          id="answer_no"
        />
        <label
          className="flex justify-center items-center text-gray-400 bg-white border border-gray-300 rounded-sm cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-[rgb(0,153,255)] peer-checked:ring-1 peer-checked:border-transparent peer-checked:bg-sky-100 peer-checked:text-[rgb(0,153,255)]"
          htmlFor="answer_no"
        >
          Date
        </label>
      </li>

      <li className="relative">
        <input
          className="sr-only peer"
          type="radio"
          value="maybe"
          name="answer"
          id="answer_maybe"
        />
        <label
          className="flex justify-center items-center text-gray-400 bg-white border border-gray-300 rounded-sm cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-[rgb(0,153,255)] peer-checked:ring-1 peer-checked:border-transparent peer-checked:bg-sky-100 peer-checked:text-[rgb(0,153,255)]"
          htmlFor="answer_maybe"
        >
          Size
        </label>
      </li>
    </ul>
  )
}

export default FIlterButtons
