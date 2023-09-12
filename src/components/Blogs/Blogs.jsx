import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className=" text-4xl w-2/3" >
            <h1>Blogs</h1>
        </div>
    );
};

export default Blogs;