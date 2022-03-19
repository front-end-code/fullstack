import useFetch from './useFetch';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';

const EditBlog = () => {
    const {data: blogs} = useFetch('http://localhost:5000/blogs/');
    const {id} = useParams();
    const {data: blog} = useFetch('http://localhost:5000/blogs/' + id);
    const [title, setTitle] = useState(blog.title);
    const [body, setBody] = useState(blog.body);

    const updateBlog = () => {
        fetch('http://localhost:5000/blogs/' + id, {
            method: 'PUT'
        })
        .then(dontKnow => console.log(dontKnow))
    }

    return ( 
        <>
            <h2 style={{textAlign: 'center', margin: '20px'}}>Edit blog</h2>
            <div className="edit-blog-wrapper">
                <form style={{width: '100%'}} onSubmit={updateBlog}>
                    <label>Edit title</label>
                    <input 
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <label>Edit body</label>
                    <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}></textarea>

                    <button>Edit blog</button>
                </form>
                <div className='blogs-wrapper'>
                {blogs && blogs.map(blog => (
                    <div className="post" key={blog.id}>
                        <h3>{blog.title}</h3>
                    </div>
                ))}
                </div>
            </div>
        </>
     );
}
 
export default EditBlog;