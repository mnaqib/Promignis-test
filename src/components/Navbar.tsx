import React from 'react'
import Modal from './modal/Modal'

interface IProps {
  sortBy: string
}

const Navbar: React.FC<IProps> = ({ sortBy }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between pt-5 mt-5">
      <div className="mb-4 sm:mb-0">
        <p className="text-xl font-semibold text-grayCustom">Media Library</p>
        <p className="text-grayCustom opacity-50 mt-2.5 text-sm ">
          Create, edit, and manage the media on your community
        </p>
      </div>
      <div className="mb-4 sm:mb-0">
        <Modal sortBy={sortBy} />
      </div>
    </div>
  )
}

export default Navbar
