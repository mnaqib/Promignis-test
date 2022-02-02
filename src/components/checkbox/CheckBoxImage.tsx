import React, { useEffect, useState } from 'react'

interface IProps {
  setListToDelete: React.Dispatch<React.SetStateAction<string[]>>
  id: string
  listToDelete: string[]
  checkAll: boolean
}

const CheckboxImage: React.FC<IProps> = ({
  setListToDelete,
  listToDelete,
  id,
  checkAll,
}) => {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setChecked(checkAll)
  }, [checkAll])

  const handleChange = () => {
    setChecked((state) => !state)
    const list = [...listToDelete]
    if (checked) {
      const index = list.indexOf(id)
      list.splice(index, 1)
      setListToDelete(list)
    } else {
      setListToDelete([...list, id])
    }
  }

  return (
    <div className="flex justify-center">
      <div>
        <div className="form-check">
          <input
            className="form-check-input appearance-none h-4 w-4 border-2 border-gray-200 rounded bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            value=""
            checked={checked}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  )
}

export default CheckboxImage
