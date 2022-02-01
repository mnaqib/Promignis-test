import React, { useEffect, useState } from 'react'
import ImageCard from './ImageCard'

const ImageList = () => {
  const [images, setImages] = useState<any[]>([])

  useEffect(() => {
    ;(async function () {
      const data = await fetch(
        'https://api.unsplash.com/photos/?client_id=-7u_QQ4JL8yujr4-xaQDCq3l7VL812xDzGElyerQ4w8&per_page=20'
      ).then((res) => res.json())
      setImages(data)
      console.log(data)
    })()
  }, [])
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
      {images.map((image, index) => (
        <ImageCard
          url={image.urls.small}
          description={image.description}
          index={index}
        />
      ))}
    </div>
  )
}

export default ImageList
