import React from 'react'
import { Id } from '../App'
import { useAppDispatch } from '../app/hooks'
import { removeImage } from '../features/images/imageSlice'
import Checkbox from './Checkbox'
import ControlledRadioButtonsGroup from './FIlterButtons'
import Search from './Search'

interface IProps {
  isdeleteEnabled: boolean
  listToDelete: string[]
  checkAll: boolean
  search: string
  ids: Id[]
  setSearch: React.Dispatch<React.SetStateAction<string>>
  setIsdeleteEnabled: React.Dispatch<React.SetStateAction<boolean>>
  setListToDelete: React.Dispatch<React.SetStateAction<string[]>>
  setCheckAll: React.Dispatch<React.SetStateAction<boolean>>
  setSortBy: React.Dispatch<React.SetStateAction<string>>
  setIds: React.Dispatch<React.SetStateAction<Id[]>>
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
  ids,
  setIds,
}) => {
  const dispatch = useAppDispatch()

  return (
    <div className="flex flex-col border-gray-200 border h-40 xs:h-28 mt-3 mb-8 rounded-md bg-white">
      <div className="flex basis-full flex-col xs:flex-row border-gray-200 border-b h-16">
        <div className="flex xs:basis-[25%] sm:basis-[20%] lg:basis-[15%] mt-2 ml-4 xs:ml-0 xs: mt:0 xs:justify-center items-center border-gray-200 xs:border-r">
          <div>
            <Checkbox
              ids={ids}
              setIds={setIds}
              name="checkAll"
              checkAll={checkAll}
              setCheckAll={setCheckAll}
              listToDelete={listToDelete}
              setListToDelete={setListToDelete}
            />
          </div>

          <div className="text-grayCustom opacity-75 font-semibold text-xs xs:text-sm">
            Select All
          </div>
        </div>
        <div className="flex xs:basis-[75%] sm:basis-[80%] lg:basis-[85%] items-center justify-between p-4">
          <button
            disabled={!isdeleteEnabled}
            className={
              isdeleteEnabled
                ? 'cursor-pointer text-gray-500'
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
              className="h-5 w-5"
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
        <div className="flex basis-[16%] xs:basis-[13%] sm:basis-[10%] lg:basis-[7%] text-xs xs:text-sm justify-center items-center border-gray-200 border-r text-grayCustom opacity-75 font-semibold">
          Sort By
        </div>
        <div className="flex basis-[84%] xs:basis-[87%] sm:basis-[90%] lg:basis-[93%] items-center p-3">
          <ControlledRadioButtonsGroup setSortBy={setSortBy} />
        </div>
      </div>
    </div>
  )
}

export default Filter
