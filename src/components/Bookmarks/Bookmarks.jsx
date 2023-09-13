import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className=" w-full md:w-1/3 h-full"  >
            <div className='bg-gray-100 mb-4 p-3 rounded-md border-2 border-violet-800 '>
            <h1 className=' text-violet-800 text-2xl '>Spent time on read: {readingTime}min </h1>
            </div>
           <div className=' bg-gray-100  p-3 rounded-md '>
           <h1 className=' text-3xl mb-3'>Bookmarked Blog: {bookmarks.length} </h1>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark} ></Bookmark>)
            }
           </div>
        </div>
    ); 
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;