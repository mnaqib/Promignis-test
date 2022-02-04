import React, { useEffect } from 'react'
import bytes from 'bytes'

interface IProps {
  url: string
  size: number
  height: number
  width: number
  description: string
  setTitle: React.Dispatch<React.SetStateAction<string>>
  title: string
  error: string
  success: boolean
  length: number
}

const AddImage: React.FC<IProps> = ({
  url,
  size,
  height,
  width,
  description,
  title,
  setTitle,
  error,
  success,
  length,
}) => {
  useEffect(() => {
    if (!success) {
      description.length > 0
        ? setTitle(description)
        : setTitle(`img${length + 1}`)
    }
  }, [])

  return (
    <div className="flex flex-col basis-auto mx-4 mt-4">
      <div className="rounded">
        <img
          className={
            success
              ? 'object-cover w-[20rem] h-[10rem] xs:w-[34rem] xs:h-[17rem] sm:w-[37.5rem] sm:h-[20rem] opacity-50'
              : 'object-cover w-[20rem] h-[10rem] xs:w-[34rem] xs:h-[17rem] sm:w-[37.5rem] sm:h-[20rem]'
          }
          src={url}
          alt=""
        />
      </div>
      <div className="flex gap-1 flex-wrap sm:justify-between justify-center mt-6">
        <div className="mb-3 xs:mb-6 mr-2">
          <label className="form-label inline mb-1 text-grayCustom/50 text-xs">
            Title
          </label>
          <input
            type="text"
            className="
        form-control
        block
        w-[15rem]
        xs:w-[19.25rem]
        px-3
        py-1.5
        text-base
        font-semibold
        text-grayCustom/75
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            placeholder="img"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {error.length > 0 && (
            <p className="text-xs text-red-500 my-2">
              {error === 'char'
                ? 'Title Should be 1-128 characters'
                : 'Image already in list'}
            </p>
          )}
        </div>
        <div className="flex sm:gap-4 gap-6 mt-3 mb-3 ">
          <div>
            <label className="form-label inline mb-1 text-grayCustom/50 text-xs">
              File Type
            </label>
            <p className="text-sm font-semibold">JPG</p>
          </div>
          <div>
            <label className="form-label inline mb-1 text-grayCustom/50 text-xs">
              File Size
            </label>
            <p className="text-sm font-semibold">{bytes(size)}</p>
          </div>
          <div>
            <label className="form-label inline mb-1 text-grayCustom/50 text-xs">
              Dimensions
            </label>
            <p className="text-sm font-semibold">
              {width}x{height}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddImage
