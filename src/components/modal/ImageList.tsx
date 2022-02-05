import React from 'react'
import { Image } from '../../features/images/imageSlice'
import ImageCard from './ImageCard'

interface IProps {
  images: Image[]
  setSelectedImage: React.Dispatch<React.SetStateAction<string>>
  selectedImage: string
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  loading: boolean
  counter: React.MutableRefObject<number>
}

const ImageList: React.FC<IProps> = ({
  images,
  setSelectedImage,
  selectedImage,
  setLoading,
  counter,
  loading,
}) => {
  const imageLoaded = () => {
    counter.current += 1
    if (counter.current >= images.length) {
      setLoading(false)
    }
  }
  return (
    <div
      className={
        loading
          ? 'hidden'
          : 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'
      }
    >
      {images.map((image) => (
        <ImageCard
          key={image.id}
          url={image.url}
          description={image.description}
          id={image.id}
          setSelectedImage={setSelectedImage}
          selectedImage={selectedImage}
          imageLoaded={imageLoaded}
        />
      ))}
    </div>
  )
}

export default ImageList
