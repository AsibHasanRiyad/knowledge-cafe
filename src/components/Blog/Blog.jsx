import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog, handelBookmark,handelMarkAsRead}) => {
    const{cover,title,reading_time,author_img,author_name,publish_date,hashtags} = blog
    return (
        <div>
            <div className="card  bg-base-100 mr-4 mb-8">
            <figure className=' h-full md:h-[400px] rounded-xl'><img src= {cover} alt="Shoes" /></figure>
            <div className=' flex justify-between items-center'>
                {/* avatar */}
                <div className='flex items-center my-6 gap-6'>
                    <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img src={author_img}/>
                    </div>
                    </div>
                    <div>
                        <h1> {author_name} </h1>
                        <p>{publish_date}</p>
                    </div>
                </div>
                {/*  */}
                <div className='flex items-center'>
                    <p>{reading_time}min read</p>  
                    <button onClick={()=>handelBookmark(blog)} className='text-2xl ml-2'> <FaBookmark>  </FaBookmark> </button>
                </div>
            </div>
             
                <h2 className="card-title text-4xl font-bold">
                {title}
                </h2>
                <p>
                {
                    hashtags.map((hash,idx) => <span key={idx}>#<a href="">{hash}</a>   </span>)
                }
                </p>
                <button 
                onClick={() => handelMarkAsRead(reading_time)}
                className=' underline text-blue-400 text-start'
                >Mark As Read</button>
            </div>

        </div>
    );
};
Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handelBookmark: PropTypes.func,
    handelMarkAsRead: PropTypes.func
}
export default Blog;