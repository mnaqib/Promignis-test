import { useEffect, useState } from 'react'

import './App.css'
import { useAppDispatch, useAppSelector } from './app/hooks'
import Filter from './components/Filter'
import ImageList from './components/ImageList'
import Navbar from './components/Navbar'
import { addAll, Image, selectImages } from './features/images/imageSlice'
import { sortByTitle } from './utils/sortBy'

function App() {
  const dispatch = useAppDispatch()
  const [isdeleteEnabled, setIsdeleteEnabled] = useState(false)
  const [listToDelete, setListToDelete] = useState<string[]>([])
  const [checkAll, setCheckAll] = useState(false)
  const data = useAppSelector(selectImages)
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('title')

  useEffect(() => {
    ;(async function () {
      const response = await fetch(
        'https://api.unsplash.com/photos/?client_id=-7u_QQ4JL8yujr4-xaQDCq3l7VL812xDzGElyerQ4w8&per_page=20'
      ).then((res) => res.json())
      let data: Image[] = response.map((result: any, index: number) => {
        return {
          id: result.id,
          title: `img-${index}.jpg`,
          url: result.urls.small,
          date: result.created_at,
          size: result.height * result.width,
          description: result.description ? result.description.split(' ') : '',
        }
      })
      data = sortByTitle(data)
      dispatch(addAll(data))
    })()
  }, [])

  useEffect(() => {
    listToDelete.length > 0
      ? setIsdeleteEnabled(true)
      : setIsdeleteEnabled(false)
    if (data.length > 0 && listToDelete.length === data.length) {
      setCheckAll(true)
    }
  }, [listToDelete])

  useEffect(() => {
    checkAll
      ? data.forEach((img) => {
          listToDelete.push(img.id)
        })
      : setListToDelete([])
  }, [checkAll])

  return (
    <div className="mx-6 my-10">
      <Navbar sortBy={sortBy} />
      <Filter
        isdeleteEnabled={isdeleteEnabled}
        listToDelete={listToDelete}
        setIsdeleteEnabled={setIsdeleteEnabled}
        setListToDelete={setListToDelete}
        setCheckAll={setCheckAll}
        checkAll={checkAll}
        search={search}
        setSearch={setSearch}
        setSortBy={setSortBy}
      />
      <ImageList
        setListToDelete={setListToDelete}
        listToDelete={listToDelete}
        checkAll={checkAll}
        search={search}
      />
    </div>
  )
}

export default App
