import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { addAll, selectImages } from '../features/images/imageSlice'
import { sortByDate, sortBySize, sortByTitle } from '../utils/sortBy'

interface IProps {
  setSortBy: React.Dispatch<React.SetStateAction<string>>
}

const FIlterButtons: React.FC<IProps> = ({ setSortBy }) => {
  const images = useAppSelector(selectImages)
  const dispatch = useAppDispatch()
  return (
    <ul className="grid grid-cols-3 gap-x-5 text-xs font-medium">
      <li className="relative">
        <input
          className="sr-only peer"
          type="radio"
          value="title"
          name="filter"
          id="answer_title"
          defaultChecked={true}
          onClick={() => {
            dispatch(addAll(sortByTitle(images)))
            setSortBy('title')
          }}
        />
        <label
          className="flex justify-center p-0.5 items-center w-[3.375rem] h-6 text-gray-400 bg-white border border-gray-300 rounded-sm cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-blueCustom peer-checked:ring-1 peer-checked:border-transparent peer-checked:bg-blueCustom peer-checked:bg-opacity-[0.08] peer-checked:text-blueCustom"
          htmlFor="answer_title"
        >
          Title
        </label>
      </li>

      <li className="relative">
        <input
          className="sr-only peer"
          type="radio"
          value="date"
          name="filter"
          id="answer_date"
          onClick={() => {
            dispatch(addAll(sortByDate(images)))
            setSortBy('date')
          }}
        />
        <label
          className="flex justify-center p-0.5 items-center w-[3.375rem] h-6 text-gray-400 bg-white border border-gray-300 rounded-sm cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-blueCustom peer-checked:ring-1 peer-checked:border-transparent peer-checked:bg-blueCustom peer-checked:bg-opacity-[0.08] peer-checked:text-blueCustom"
          htmlFor="answer_date"
        >
          Date
        </label>
      </li>

      <li className="relative">
        <input
          className="sr-only peer"
          type="radio"
          value="size"
          name="filter"
          id="answer_size"
          onClick={() => {
            dispatch(addAll(sortBySize(images)))
            setSortBy('size')
          }}
        />
        <label
          className="flex justify-center p-0.5 items-center w-[3.375rem] h-6 text-gray-400 bg-white border border-gray-300 rounded-sm cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-blueCustom peer-checked:ring-1 peer-checked:border-transparent peer-checked:bg-blueCustom peer-checked:bg-opacity-[0.08] peer-checked:text-blueCustom"
          htmlFor="answer_size"
        >
          Size
        </label>
      </li>
    </ul>
  )
}

export default FIlterButtons
