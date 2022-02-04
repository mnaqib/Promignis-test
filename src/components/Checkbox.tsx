import React from 'react'
import { Id } from '../App'

interface IProps {
  name: string
  ids: Id[]
  checkAll: boolean
  listToDelete: string[]
  setIds: React.Dispatch<React.SetStateAction<Id[]>>
  setCheckAll: React.Dispatch<React.SetStateAction<boolean>>
  setListToDelete: React.Dispatch<React.SetStateAction<string[]>>
}

const Checkbox: React.FC<IProps> = ({
  name,
  ids,
  setIds,
  checkAll,
  setCheckAll,
  listToDelete,
  setListToDelete,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    if (name === 'checkAll') {
      setCheckAll((state) => !state)
      checked ? setListToDelete(ids.map((ele) => ele.id)) : setListToDelete([])
      let tempIds = ids.map((ele) => {
        return { ...ele, checked }
      })
      setIds(tempIds)
    } else {
      const list = [...listToDelete]
      if (!checked) {
        const index = list.indexOf(name)
        list.splice(index, 1)
        setListToDelete(list)
      } else {
        setListToDelete([...list, name])
      }
      let tempIds = ids.map((ele) =>
        ele.id === name ? { ...ele, checked } : ele
      )
      setIds(tempIds)
    }
  }

  function handleCheck(name: string) {
    for (let i = 0; i < ids.length; i++) {
      if (ids[i].id === name) {
        return ids[i].checked
      }
    }
  }

  return (
    <div className="flex justify-center">
      <div>
        <div className="form-check">
          <input
            className="form-check-input appearance-none h-4 w-4 border-2 border-gray-200 rounded bg-white checked:bg-blueCustom checked:border-blueCustom focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            name={name}
            value=""
            checked={name === 'checkAll' ? checkAll : handleCheck(name)}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  )
}

export default Checkbox
