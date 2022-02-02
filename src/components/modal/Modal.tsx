import React, { useState } from 'react'
import Search from '../Search'
import AddImage from './AddImage'
import ImageList from './ImageList'

export default function Modal() {
  const [showModal, setShowModal] = useState(false)
  const [addImage, setAddImage] = useState(false)
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
            {addImage ? (
              <div className="relative my-6 mx-24 w-[44.5 rem] h-[48.1875 rem]">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between m-5">
                    <div className="flex flex-col">
                      <h3 className="text-2xl font-semibold">Add Image</h3>
                      <p className="mb-5">Edit your media files here</p>
                    </div>

                    <div></div>
                  </div>
                  {/*body*/}
                  <div className=" mx-5 p-4 border-2 rounded border-dashed border-gray-300">
                    <div className="m-2">
                      <AddImage />
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6">
                    <button
                      className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        setShowModal(false)
                        setAddImage(false)
                      }}
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
                      <Search />
                    </div>

                    <div></div>
                  </div>
                  {/*body*/}
                  <div className=" mx-5 p-4 border-2 rounded border-dashed border-gray-300 overflow-y-auto max-h-96 ">
                    <div className="m-2">
                      <ImageList />
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6">
                    <button
                      className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        setAddImage(true)
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
