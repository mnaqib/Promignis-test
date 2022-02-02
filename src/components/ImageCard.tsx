import React, { useState } from 'react'
import CheckboxImage from './checkbox/CheckBoxImage'

interface IProps {
  url: string
  index: number
  id: string
  setListToDelete: React.Dispatch<React.SetStateAction<string[]>>
  listToDelete: string[]
  checkAll: boolean
}

const ImageCard: React.FC<IProps> = ({
  url,
  index,
  id,
  setListToDelete,
  listToDelete,
  checkAll,
}) => {
  const [checked, setChecked] = useState(false)

  return (
    <div className="flex basis-40 flex-col h-[7.75rem]">
      <div className="absolute">
        <CheckboxImage
          checked={checked}
          setChecked={setChecked}
          setListToDelete={setListToDelete}
          id={id}
          listToDelete={listToDelete}
          checkAll={checkAll}
        />
      </div>

      <img
        src={url}
        alt=""
        className="object-cover basis-36 mx-1 my-1 h-24  rounded"
      />
      <p className="ml-1 text-xs">{`img-${index}.jpg`}</p>
    </div>
  )
}

export default ImageCard
