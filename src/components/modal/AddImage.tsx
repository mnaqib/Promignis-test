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
        : setTitle(`img-${length + 1}`)
    }
  }, [])

  return (
    <div className="flex flex-col basis-full m-2 p-2 max-h-96">
      <div>
        <img
          className={
            success
              ? 'object-cover basis-36 mx-1 my-1 max-h-96 rounded opacity-50'
              : 'object-cover basis-36 mx-1 my-1 max-h-96 rounded'
          }
          src={url}
          alt=""
        />
      </div>
      <div className="flex justify-between mt-5 items-center">
        <div className="mb-3 basis-[40%]">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label inline-block mb-2 text-gray-700 text-xs"
          >
            Title
          </label>
          <input
            type="text"
            className="
        form-control
        block
        w-fit
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
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
        <div>
          <label className="form-label inline-block mb-1 text-gray-700 text-xs">
            File Type
          </label>
          <p className="text-sm font-semibold">JPG</p>
        </div>
        <div>
          <label className="form-label inline-block mb-1 text-gray-700 text-xs">
            File Size
          </label>
          <p className="text-sm font-semibold">{bytes(size)}</p>
        </div>
        <div>
          <label className="form-label inline-block mb-1 text-gray-700 text-xs">
            Dimensions
          </label>
          <p className="text-sm font-semibold">
            {width}x{height}
          </p>
        </div>
      </div>
    </div>
  )
}

export default AddImage
