import React, { useEffect, useState } from 'react'

interface IProps {
  id: string
  url: string
  setSelectedImage: React.Dispatch<React.SetStateAction<string>>
  selectedImage: string
  imageLoaded: () => void
}

const ImageCard: React.FC<IProps> = ({
  url,
  id,
  selectedImage,
  setSelectedImage,
  imageLoaded,
}) => {
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    if (selectedImage !== id) {
      setClicked(false)
    }
  }, [selectedImage])

  return (
    <div
      className="flex basis-40 flex-col h-[7.75rem] cursor-pointer"
      onClick={() => {
        id === selectedImage ? setSelectedImage('') : setSelectedImage(id)
        setClicked((state) => !state)
      }}
    >
      <img
        src={url}
        alt=""
        className={
          clicked && selectedImage === id
            ? 'object-cover basis-36 mx-1 my-1 h-24  rounded opacity-70 ring-4 ring-blue-600'
            : 'object-cover basis-36 mx-1 my-1 h-24  rounded'
        }
        onLoad={imageLoaded}
      />
    </div>
  )
}

export default ImageCard
