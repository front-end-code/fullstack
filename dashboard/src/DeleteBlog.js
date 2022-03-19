import useFetch from './useFetch';
import { useNavigate, Link } from 'react-router-dom';

const DeleteBlog = () => {
    const {data: blogs} = useFetch('http://localhost:5000/blogs');
    const navigate = useNavigate();

    const deleteBlog = (id) => {
        fetch('http://localhost:5000/blogs/' + id, {
            method: 'DELETE'
        })
        .then( () => {
            console.log('Post deleted');
            navigate("/");
        } )
    }

    return ( 
        <div>
            <h1>Delete Blog</h1>
            <div className='blogs-wrapper'>
                {blogs && blogs.map(blog => (
                    <div className="post" key={blog.id}>
                        <h3>{blog.title}</h3>
                        <p>{blog.body}</p>
                        <button onClick={() => deleteBlog(blog.id)}>Delete blog</button>
                        <Link to={`/editblog/${blog.id}`}>Edit blog</Link>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default DeleteBlog;