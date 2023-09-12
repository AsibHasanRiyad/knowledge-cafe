import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)
  const handelBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }
  const handelMarkAsRead = time =>{
    // const newReadingTime = readingTime + time
    // setReadingTime(newReadingTime)
    setReadingTime(readingTime + time)
  }

  return (
    <div  className='mx-8 md:mx-24 lg:mx-36 my-5'>
    <Header></Header>
    <div className='md:flex'>
        <Blogs 
        handelBookmark={handelBookmark}
        handelMarkAsRead={handelMarkAsRead}
        ></Blogs>
        <Bookmarks 
        bookmarks={bookmarks}
        readingTime={readingTime}
        ></Bookmarks>
    
    </div>
    </div>
  )
}

export default App
