import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  return (
    <div  className='mx-8 md:mx-24 lg:mx-36 my-5'>
    <Header></Header>
    <div className='md:flex'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
    
    </div>
    </div>
  )
}

export default App
