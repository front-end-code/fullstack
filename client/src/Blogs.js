import {Link} from 'react-router-dom';
import useFetch from './useFetch';

const Blogs = () => {
    
    const {data: blogs} = useFetch('http://localhost:5000/blogs/');

    return ( 
        <>
            <h2>All artices</h2>
            <div className="blogs-wrapper">
                { blogs && blogs.map(blog => (
                    <Link to={`/blogs/${blog.id}`} className="post" key={blog.id}>
                        <h3>{blog.title}</h3>
                        <p>{blog.body.slice(0,150)}</p>
                    </Link>
                )) 
                }   
            </div>
        </>
     );
}
 
export default Blogs;