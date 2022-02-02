import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../app/hooks'
import { Image, selectImages } from '../features/images/imageSlice'
import ImageCard from './ImageCard'

interface IProps {
  setListToDelete: React.Dispatch<React.SetStateAction<string[]>>
  listToDelete: string[]
  checkAll: boolean
  search: string
}

const ImageList: React.FC<IProps> = ({
  setListToDelete,
  listToDelete,
  checkAll,
  search,
}) => {
  const images = useAppSelector(selectImages)
  const [imageList, setImageList] = useState<Image[]>(images)

  useEffect(() => {
    setImageList(images.filter((img) => img.title.includes(search)))
  }, [search, images])

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
      {imageList.map((image) => (
        <ImageCard
          key={image.id}
          url={image.url}
          title={image.title}
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
