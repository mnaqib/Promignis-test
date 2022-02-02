import React from 'react'
import CheckboxImage from './checkbox/CheckBoxImage'

interface IProps {
  url: string
  id: string
  setListToDelete: React.Dispatch<React.SetStateAction<string[]>>
  listToDelete: string[]
  checkAll: boolean
  title: string
}

const ImageCard: React.FC<IProps> = ({
  url,
  id,
  setListToDelete,
  listToDelete,
  checkAll,
  title,
}) => {
  return (
    <div className="flex basis-40 flex-col h-[7.75rem]">
      <div className="absolute">
        <CheckboxImage
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
      <p className="ml-1 text-xs">{title}</p>
    </div>
  )
}

export default ImageCard
