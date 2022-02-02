import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { addAll, selectImages } from '../features/images/imageSlice'
import { sortByDate, sortBySize, sortByTitle } from '../utils/sortBy'

const FIlterButtons = () => {
  const images = useAppSelector(selectImages)
  const dispatch = useAppDispatch()
  return (
    <ul className="grid grid-cols-3 gap-x-5 text-xs">
      <li className="relative">
        <input
          className="sr-only peer"
          type="radio"
          value="yes"
          name="answer"
          id="answer_yes"
          defaultChecked={true}
          onClick={() => {
            console.log('clicking')
            dispatch(addAll(sortByTitle(images)))
          }}
        />
        <label
          className="flex justify-center p-0.5 items-center w-14 text-gray-400 bg-white border border-gray-300 rounded-sm cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-[rgb(0,153,255)] peer-checked:ring-1 peer-checked:border-transparent peer-checked:bg-sky-100 peer-checked:text-[rgb(0,153,255)]"
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
          onClick={() => dispatch(addAll(sortByDate(images)))}
        />
        <label
          className="flex justify-center p-0.5 items-center text-gray-400 bg-white border border-gray-300 rounded-sm cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-[rgb(0,153,255)] peer-checked:ring-1 peer-checked:border-transparent peer-checked:bg-sky-100 peer-checked:text-[rgb(0,153,255)]"
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
          onClick={() => dispatch(addAll(sortBySize(images)))}
        />
        <label
          className="flex justify-center p-0.5 items-center text-gray-400 bg-white border border-gray-300 rounded-sm cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-[rgb(0,153,255)] peer-checked:ring-1 peer-checked:border-transparent peer-checked:bg-sky-100 peer-checked:text-[rgb(0,153,255)]"
          htmlFor="answer_maybe"
        >
          Size
        </label>
      </li>
    </ul>
  )
}

export default FIlterButtons
