import React, { useEffect, useState } from 'react'
import { Image } from '../../features/images/imageSlice'
import ImageCard from './ImageCard'

interface IProps {
  images: Image[]
  setSelectedImage: React.Dispatch<React.SetStateAction<string>>
  selectedImage: string
}

const ImageList: React.FC<IProps> = ({
  images,
  setSelectedImage,
  selectedImage,
}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {images.map((image) => (
        <ImageCard
          key={image.id}
          url={image.url}
          description={image.description}
          id={image.id}
          setSelectedImage={setSelectedImage}
          selectedImage={selectedImage}
        />
      ))}
    </div>
  )
}

export default ImageList
