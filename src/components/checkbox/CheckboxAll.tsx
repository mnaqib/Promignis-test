import React, { useEffect } from 'react'

interface IProps {
  setDeleteAll: React.Dispatch<React.SetStateAction<boolean>>
  setIsdeleteEnabled: React.Dispatch<React.SetStateAction<boolean>>
  setChecked: React.Dispatch<React.SetStateAction<boolean>>
  checked: boolean
  setCheckAll: React.Dispatch<React.SetStateAction<boolean>>
  checkAll: boolean
}

const CheckboxAll: React.FC<IProps> = ({
  setDeleteAll,
  setIsdeleteEnabled,
  setChecked,
  checked,
  setCheckAll,
  checkAll,
}) => {
  useEffect(() => {
    setChecked(checkAll)
  }, [checkAll])

  return (
    <div className="flex justify-center">
      <div>
        <div className="form-check">
          <input
            className="form-check-input appearance-none h-4 w-4 border-2 border-gray-200 rounded bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            onClick={() => {
              setDeleteAll((state) => !state)
              setIsdeleteEnabled((state) => !state)
              checked ? setChecked(false) : setChecked(true)
              setCheckAll((state) => !state)
            }}
            checked={checked}
          />
        </div>
      </div>
    </div>
  )
}

export default CheckboxAll
