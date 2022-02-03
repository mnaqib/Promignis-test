import React from 'react'
import Modal from './modal/Modal'

interface IProps {
  sortBy: string
}

const Navbar: React.FC<IProps> = ({ sortBy }) => {
  return (
    <div className="flex flex-wrap sm:justify-between">
      <div>
        <p className="text-2xl font-semibold">Media Library</p>
        <p className="text-gray-400 mt-2 mb-3 sm:mt-2 ">
          create, edit, and manage the media on your community
        </p>
      </div>
      <Modal sortBy={sortBy} />
    </div>
  )
}

export default Navbar
