import './App.css'
import Filter from './components/Filter'
import ImageList from './components/ImageList'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="mx-6 my-10">
      <Navbar />
      <Filter />
      <ImageList />
    </div>
  )
}

export default App
