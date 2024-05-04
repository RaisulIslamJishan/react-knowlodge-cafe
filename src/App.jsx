
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Boomarks from './components/Bookmarks/Boomarks'
import Header from './components/Header/Header'
Header

function App() {

  return (
    <>
     
      <Header></Header>
      <div className='md:flex'>
      <Blogs></Blogs>
      <Boomarks></Boomarks>

      </div>
    </>
  )
}

export default App
