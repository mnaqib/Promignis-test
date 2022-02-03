import React from 'react'
import { useAppDispatch } from '../app/hooks'
import { removeImage } from '../features/images/imageSlice'
import CheckboxAll from './checkbox/CheckboxAll'
import ControlledRadioButtonsGroup from './FIlterButtons'
import Search from './Search'

interface IProps {
  isdeleteEnabled: boolean
  listToDelete: string[]
  checkAll: boolean
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
  setIsdeleteEnabled: React.Dispatch<React.SetStateAction<boolean>>
  setListToDelete: React.Dispatch<React.SetStateAction<string[]>>
  setCheckAll: React.Dispatch<React.SetStateAction<boolean>>
  setSortBy: React.Dispatch<React.SetStateAction<string>>
}

const Filter: React.FC<IProps> = ({
  isdeleteEnabled,
  listToDelete,
  setIsdeleteEnabled,
  setListToDelete,
  setCheckAll,
  checkAll,
  search,
  setSearch,
  setSortBy,
}) => {
  const dispatch = useAppDispatch()

  return (
    <div className="flex flex-col border-gray-200 border-2 h-28 mt-1 mb-8">
      <div className="flex basis-full border-gray-200 border-b-2 h-16">
        <div className="flex flex-col md:flex-row basis-[8%] justify-center items-center border-gray-200 border-r-2">
          <CheckboxAll
            setIsdeleteEnabled={setIsdeleteEnabled}
            setCheckAll={setCheckAll}
            checkAll={checkAll}
            listToDelete={listToDelete}
          />
          <p className="text-gray-500 font-medium text-sm">Select All</p>
        </div>
        <div className="flex basis-[92%] items-center justify-between p-4">
          <button
            disabled={!isdeleteEnabled}
            className={
              isdeleteEnabled
                ? 'cursor-pointer'
                : 'text-gray-300 cursor-default'
            }
            onClick={() => {
              dispatch(removeImage(listToDelete))

              setIsdeleteEnabled(false)
              setCheckAll(false)
              setListToDelete([])
            }}
          >
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
            <Search search={search} setSearch={setSearch} />
          </div>
        </div>
      </div>
      <div className="flex basis-full">
        <div className="flex basis-[6%] text-xs sm:text-base justify-center items-center border-gray-200 border-r-2">
          Sort By
        </div>
        <div className="flex basis-[94%] items-center p-3">
          <ControlledRadioButtonsGroup setSortBy={setSortBy} />
        </div>
      </div>
    </div>
  )
}

export default Filter
