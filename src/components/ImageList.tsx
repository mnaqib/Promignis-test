import React, { useEffect, useState } from 'react'
import { Id } from '../App'
import { useAppSelector } from '../app/hooks'
import { Image, selectImages } from '../features/images/imageSlice'
import ImageCard from './ImageCard'

interface IProps {
  setListToDelete: React.Dispatch<React.SetStateAction<string[]>>
  setCheckAll: React.Dispatch<React.SetStateAction<boolean>>
  setIds: React.Dispatch<React.SetStateAction<Id[]>>
  ids: Id[]
  listToDelete: string[]
  search: string
  checkAll: boolean
}

const ImageList: React.FC<IProps> = ({
  setListToDelete,
  listToDelete,
  search,
  setCheckAll,
  checkAll,
  ids,
  setIds,
}) => {
  const images = useAppSelector(selectImages)
  const [imageList, setImageList] = useState<Image[]>(images)

  useEffect(() => {
    setImageList(
      images.filter((img) =>
        img.title.toLowerCase().includes(search.toLowerCase())
      )
    )
  }, [search, images])

  return (
    <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
      {imageList.map((image) => (
        <ImageCard
          key={image.id}
          url={image.url}
          title={image.title}
          id={image.id}
          setListToDelete={setListToDelete}
          listToDelete={listToDelete}
          setCheckAll={setCheckAll}
          checkAll={checkAll}
          ids={ids}
          setIds={setIds}
        />
      ))}
    </div>
  )
}

export default ImageList
