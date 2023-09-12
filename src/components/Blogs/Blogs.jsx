import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handelBookmark, handelMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-full md:w-2/3" >
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                    handelBookmark={handelBookmark}
                    handelMarkAsRead={handelMarkAsRead}
                    ></Blog> )
            }
        </div>
    );
};

Blogs.propTypes = {
    handelBookmark: PropTypes.func,
    handelMarkAsRead: PropTypes.func
}

export default Blogs;