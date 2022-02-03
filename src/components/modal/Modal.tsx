import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../app/hooks'
import {
  addAll,
  addImage,
  Image,
  selectImages,
} from '../../features/images/imageSlice'
import { sortByDate, sortBySize, sortByTitle } from '../../utils/sortBy'
import Search from '../Search'
import AddImage from './AddImage'
import ImageList from './ImageList'

interface IState extends Image {
  width: number
  height: number
}

interface IProps {
  sortBy: string
}

const Modal: React.FC<IProps> = ({ sortBy }) => {
  const [showModal, setShowModal] = useState(false)
  const [addImageModal, setAddImageModal] = useState(false)
  const [search, setSearch] = useState('')
  const [images, setImages] = useState<IState[]>([])
  const [selectedImage, setSelectedImage] = useState('')
  const [image, setImage] = useState<IState>()
  const [title, setTitle] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [sort, setSort] = useState(false)
  const dispatch = useDispatch()

  const imageSet = useAppSelector(selectImages)
  const length = imageSet.length

  useEffect(() => {
    if (selectedImage) {
      setImage(images.find((img) => img.id === selectedImage))
    }
  }, [selectedImage])

  useEffect(() => {
    setError('')
  }, [title])

  useEffect(() => {
    if (sort) {
      console.log('ran')
      if (sortBy === 'title') {
        dispatch(addAll(sortByTitle(imageSet)))
      } else if (sortBy === 'date') {
        dispatch(addAll(sortByDate(imageSet)))
      } else {
        dispatch(addAll(sortBySize(imageSet)))
      }
    }
  }, [sort])

  const searchImage = async () => {
    const { results: response } = await fetch(
      `https://api.unsplash.com/search/photos?client_id=-7u_QQ4JL8yujr4-xaQDCq3l7VL812xDzGElyerQ4w8&query=${search}`
    ).then((res) => res.json())
    let data: IState[] = response.map((result: any, index: number) => {
      return {
        id: result.id,
        description: result.description ? result.description.split(' ')[0] : '',
        url: result.urls.small,
        date: result.created_at,
        size: result.height * result.width,
        height: result.height,
        width: result.width,
      }
    })
    setImages(data)
  }

  function unShowModal() {
    setAddImageModal(false)
    setShowModal(false)
    setSuccess(false)
    setSort(false)
    setImage(undefined)
  }

  const handleAddImage = () => {
    if (title.length > 128 || title.length < 1) {
      setError('char')
    } else {
      if (image && imageSet.find((img) => img.id === image.id)) {
        return setError('inList')
      }
      image && console.log(imageSet.find((img) => img.id === image.id))
      image &&
        dispatch(
          addImage({
            url: image.url,
            date: image.date,
            description: image.description,
            id: image.id,
            size: image.size,
            title: title.concat('.jpg'),
          })
        )
      setSort(true)
      setTitle('')
      setSelectedImage('')
      setSuccess(true)
      setTimeout(unShowModal, 500)
    }
  }

  return (
    <>
      <div>
        <button
          className="bg-blue-500 text-white active:bg-blue-600 text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Add Image
        </button>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
            {/*content*/}
            {addImageModal ? (
              <div
                className={
                  success
                    ? 'relative my-6 mx-24 w-[44.5 rem] h-[48.1875 rem] border-4 border-green-300 rounded-lg'
                    : error.length > 0
                    ? 'relative my-6 mx-24 w-[44.5 rem] h-[48.1875 rem] border-4 border-red-300 rounded-lg'
                    : 'relative my-6 mx-24 w-[44.5 rem] h-[48.1875 rem]'
                }
              >
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between m-5">
                    <div className="flex flex-col">
                      <h3 className="text-2xl font-semibold">Add Image</h3>
                      <p className="mb-5">Edit your media files here</p>
                    </div>

                    <div>
                      <svg
                        onClick={() => {
                          setShowModal(false)
                          setAddImageModal(false)
                          setSelectedImage('')
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                  {/*body*/}
                  <div className=" mx-5 p-4 border-2 rounded border-dashed border-gray-300">
                    <div className="m-2">
                      {image && (
                        <AddImage
                          url={image.url}
                          height={image.height}
                          width={image.height}
                          description={image.description}
                          size={image.size}
                          title={title}
                          setTitle={setTitle}
                          error={error}
                          success={success}
                          length={length}
                        />
                      )}
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6">
                    <button
                      className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleAddImage}
                    >
                      Add Image
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative my-6 mx-24 w-[74.375rem] h-[48.1875 rem]">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between m-5">
                    <div className="flex flex-col">
                      <h3 className="text-2xl font-semibold">Select Image</h3>
                      <p className="mb-5">Search and select an image</p>
                      <div className="flex">
                        <Search search={search} setSearch={setSearch} />
                        <button
                          onClick={searchImage}
                          type="button"
                          className="inline-block mx-3 px-2 py-1 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                          Search
                        </button>
                      </div>
                    </div>

                    <div>
                      <svg
                        onClick={() => {
                          setShowModal(false)
                          setSelectedImage('')
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                  {/*body*/}
                  <div className=" mx-5 p-4 border-2 rounded border-dashed border-gray-300 overflow-y-auto max-h-96 ">
                    <div className="m-2">
                      <ImageList
                        images={images}
                        selectedImage={selectedImage}
                        setSelectedImage={setSelectedImage}
                      />
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6">
                    <button
                      disabled={selectedImage ? false : true}
                      className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        setAddImageModal(true)
                      }}
                    >
                      Select Image
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}

export default Modal
