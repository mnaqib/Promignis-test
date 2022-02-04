import React from 'react'
import { Id } from '../App'
import Checkbox from './Checkbox'

interface IProps {
  url: string
  id: string
  listToDelete: string[]
  title: string
  checkAll: boolean
  ids: Id[]
  setIds: React.Dispatch<React.SetStateAction<Id[]>>
  setListToDelete: React.Dispatch<React.SetStateAction<string[]>>
  setCheckAll: React.Dispatch<React.SetStateAction<boolean>>
}

const ImageCard: React.FC<IProps> = ({
  url,
  id,
  setListToDelete,
  listToDelete,
  title,
  setCheckAll,
  checkAll,
  ids,
  setIds,
}) => {
  return (
    <div className="flex basis-40 flex-col h-[7.75rem]">
      <div className="absolute">
        <Checkbox
          name={id}
          ids={ids}
          setIds={setIds}
          setCheckAll={setCheckAll}
          checkAll={checkAll}
          listToDelete={listToDelete}
          setListToDelete={setListToDelete}
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
