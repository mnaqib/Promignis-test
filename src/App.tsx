import { useEffect, useState } from 'react'

import './App.css'
import { useAppDispatch, useAppSelector } from './app/hooks'
import Filter from './components/Filter'
import ImageList from './components/ImageList'
import Navbar from './components/Navbar'
import { addAll, Image, selectImages } from './features/images/imageSlice'
import { sortByTitle } from './utils/sortBy'

export interface Id {
  id: string
  checked: boolean
}

function App() {
  const dispatch = useAppDispatch()
  const [isdeleteEnabled, setIsdeleteEnabled] = useState(false)
  const [listToDelete, setListToDelete] = useState<string[]>([])
  const [checkAll, setCheckAll] = useState(false)
  const data = useAppSelector(selectImages)
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('title')
  const [ids, setIds] = useState<Id[]>(
    data.map((item) => {
      return {
        id: item.id,
        checked: false,
      }
    })
  )

  useEffect(() => {
    setIds(
      data.map((item) => {
        return {
          id: item.id,
          checked: false,
        }
      })
    )
  }, [data])

  useEffect(() => {
    ;(async function () {
      const response = await fetch(
        'https://api.unsplash.com/photos/?client_id=-7u_QQ4JL8yujr4-xaQDCq3l7VL812xDzGElyerQ4w8&per_page=20'
      ).then((res) => res.json())
      let data: Image[] = response.map((result: any, index: number) => {
        return {
          id: result.id,
          title: `img${index}.jpg`,
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
    } else {
      setCheckAll(false)
    }
  }, [listToDelete])

  return (
    <div className="mx-6 font-SFProText">
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
        ids={ids}
        setIds={setIds}
      />
      {data.length > 0 ? (
        <ImageList
          setListToDelete={setListToDelete}
          listToDelete={listToDelete}
          setCheckAll={setCheckAll}
          search={search}
          checkAll={checkAll}
          ids={ids}
          setIds={setIds}
        />
      ) : (
        <div className="flex mt-[15%] justify-center items-center text-xl font-bold text-grayCustom/50">
          No Media in List
        </div>
      )}
    </div>
  )
}

export default App
