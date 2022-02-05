import React, { useEffect, useRef, useState } from 'react'
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
  const [loading, setLoading] = useState(false)
  const [disableSearch, setDisableSearch] = useState(true)
  const counter = useRef(0)
  const dispatch = useDispatch()

  const imageSet = useAppSelector(selectImages)
  const length = imageSet.length

  useEffect(() => {
    if (search.length > 0) {
      setDisableSearch(false)
    } else {
      setDisableSearch(true)
    }
  }, [search])

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
    setLoading(true)
    const { results: response } = await fetch(
      `https://api.unsplash.com/search/photos?client_id=-7u_QQ4JL8yujr4-xaQDCq3l7VL812xDzGElyerQ4w8&query=${search}`
    ).then((res) => res.json())
    let data: IState[] = response.map((result: any) => {
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
    setDisableSearch(true)
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
          className="bg-gradient-to-b from-[#0099FF] to-[#0B79C3] hover:opacity-80 text-white active:bg-blue-600 font-medium text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Add Image
        </button>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex fixed inset-0 z-50 bg-black bg-opacity-[.65] backdrop-blur-[2px] outline-none focus:outline-none">
            {/*content*/}
            {addImageModal ? (
              <div
                className={
                  success
                    ? 'flex basis-auto flex-col border-4 border-green-300 rounded-xl mx-1'
                    : error.length > 0
                    ? 'flex basis-auto flex-col border-4 border-red-300 rounded-xl mx-1'
                    : 'flex basis-auto flex-col mx-1'
                }
              >
                <div className="border-0 rounded-lg shadow-lg basis-auto bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between mx-5 mt-5">
                    <div className="flex flex-col">
                      <div className="text-xl font-bold text-grayCustom/75 opacity-75">
                        Add Image
                      </div>
                      <p className=" text-grayCustom/75 opacity-50 text-xs">
                        Edit your media files here
                      </p>
                    </div>

                    <div>
                      <svg
                        onClick={() => {
                          setAddImageModal(false)
                          setSelectedImage('')
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-grayCustom/25 cursor-pointer hover:text-gray-800"
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
                  <div className=" mx-5 mt-2 border-[3px] rounded border-dashed border-[#CCD2E2BF]/75">
                    <div>
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
                      className="bg-gradient-to-b from-[#0099FF] to-[#0B79C3] text-white active:bg-blue-600 text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleAddImage}
                    >
                      Add Image
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className={
                  loading
                    ? 'flex basis-auto mx-1 ring-2 rounded-lg ring-blue-300'
                    : 'flex basis-auto mx-1'
                }
              >
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between m-5">
                    <div className="flex flex-col">
                      <div className="text-2xl font-bold text-grayCustom/75 opacity-75">
                        Select Image
                      </div>
                      <p className="mb-5 text-grayCustom/75 opacity-50 text-xs">
                        Search and select an image
                      </p>
                      <div className="flex">
                        <Search search={search} setSearch={setSearch} />
                        <button
                          disabled={disableSearch}
                          onClick={searchImage}
                          type="button"
                          className="inline-block mx-3 px-2 py-1 bg-gradient-to-b from-[#F1F5FA] to-[#FDFEFF] text-grayCustom/75 font-semibold text-xs leading-tight rounded shadow hover:shadow-lg transition duration-150 ease-in-out"
                        >
                          Search
                        </button>
                      </div>
                    </div>

                    <div>
                      <svg
                        onClick={() => {
                          setShowModal(false)
                          setAddImageModal(false)
                          setSelectedImage('')
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-grayCustom/25 cursor-pointer hover:text-gray-800"
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
                  <div
                    className={
                      images.length > 0
                        ? ' mx-5 border-2 flex justify-center rounded-xl border-dashed border-gray-300 max-h-80'
                        : ' mx-5 flex justify-center border-none'
                    }
                  >
                    <div className="basis-auto overflow-y-auto m-2">
                      <div className="mx-2">
                        <ImageList
                          images={images}
                          selectedImage={selectedImage}
                          setSelectedImage={setSelectedImage}
                          loading={loading}
                          setLoading={setLoading}
                          counter={counter}
                        />
                      </div>
                    </div>
                  </div>
                  {/*footer*/}
                  <div
                    className={
                      images.length > 0
                        ? 'flex items-center justify-end p-6'
                        : 'hidden'
                    }
                  >
                    <button
                      disabled={selectedImage ? false : true}
                      className="bg-gradient-to-b from-[#0099FF] to-[#0B79C3] disabled:opacity-50 text-white active:bg-blue-600 text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
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
        </>
      ) : null}
    </>
  )
}

export default Modal
