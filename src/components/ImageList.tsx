import React from 'react'
import { useAppSelector } from '../app/hooks'
import { selectImages } from '../features/images/imageSlice'
import ImageCard from './ImageCard'

interface IProps {
  setListToDelete: React.Dispatch<React.SetStateAction<string[]>>
  listToDelete: string[]
  checkAll: boolean
}

const ImageList: React.FC<IProps> = ({
  setListToDelete,
  listToDelete,
  checkAll,
}) => {
  const images = useAppSelector(selectImages)

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
      {images.map((image, index) => (
        <ImageCard
          key={image.id}
          url={image.url}
          index={index}
          id={image.id}
          setListToDelete={setListToDelete}
          listToDelete={listToDelete}
          checkAll={checkAll}
        />
      ))}
    </div>
  )
}

export default ImageList
