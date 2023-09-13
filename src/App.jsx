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
  const handelMarkAsRead = (time, id) =>{
    // const newReadingTime = readingTime + time
    // setReadingTime(newReadingTime)
    setReadingTime(readingTime + time)
    // console.log('bookmark remove', id);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks)
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
