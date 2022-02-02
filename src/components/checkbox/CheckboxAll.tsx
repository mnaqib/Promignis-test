import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../app/hooks'
import { selectImages } from '../../features/images/imageSlice'

interface IProps {
  setIsdeleteEnabled: React.Dispatch<React.SetStateAction<boolean>>
  setCheckAll: React.Dispatch<React.SetStateAction<boolean>>
  checkAll: boolean
  listToDelete: string[]
}

const CheckboxAll: React.FC<IProps> = ({
  setIsdeleteEnabled,
  setCheckAll,
  checkAll,
  listToDelete,
}) => {
  const images = useAppSelector(selectImages)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setChecked(listToDelete.length === images.length)
  }, [listToDelete, images])

  return (
    <div className="flex justify-center">
      <div>
        <div className="form-check">
          <input
            className="form-check-input appearance-none h-4 w-4 border-2 border-gray-200 rounded bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            value=""
            onChange={() => {
              setIsdeleteEnabled((state) => !state)
              setCheckAll((state) => !state)
              setChecked((state) => !state)
            }}
            checked={checkAll && checked}
          />
        </div>
      </div>
    </div>
  )
}

export default CheckboxAll
