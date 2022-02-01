import React from 'react'
import Checkbox from './Checkbox'

interface IProps {
  description?: String
  url: string
  index: number
}

const ImageCard: React.FC<IProps> = ({ description, url, index }) => {
  return (
    <div className="flex basis-40 flex-col h-[7.75rem]">
      <div className="absolute">
        <Checkbox />
      </div>

      <img
        src={url}
        alt=""
        className="object-cover basis-36 mx-1 my-1 h-24  rounded"
      />
      <p className="ml-1">{`img-${index}`}</p>
    </div>
  )
}

export default ImageCard
