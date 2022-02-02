import React from 'react'

const AddImage = () => {
  return (
    <div className="flex flex-col basis-full m-2 p-2">
      <div>
        <img
          className="object-cover basis-36 mx-1 my-1 h-96 rounded"
          src="https://images.unsplash.com/photo-1638913662415-8c5f79b20656?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTY3MTl8MXwxfGFsbHwxfHx8fHx8Mnx8MTY0Mzc0ODkxMg&ixlib=rb-1.2.1&q=80&w=1080"
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
            id="exampleFormControlInput1"
            placeholder="img"
          />
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
          <p className="text-sm font-semibold">324 kb</p>
        </div>
        <div>
          <label className="form-label inline-block mb-1 text-gray-700 text-xs">
            Dimensions
          </label>
          <p className="text-sm font-semibold">600 x 400</p>
        </div>
      </div>
    </div>
  )
}

export default AddImage
