import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const CreateBlogs = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const navigate = useNavigate();

    const newBlog = {
        title,
        body
    }

    const handleSubmit = e => {
        e.preventDefault();

        fetch('http://localhost:5000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(newBlog)
        })
        .then(() => {
            navigate('/');
        })
    }

    return ( 
        <div>
            <h2>Create Blog</h2>
            <form onSubmit={handleSubmit}>
              <label>Blog title</label>
              <input 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)} 
                />

              <label>Blog body</label>
              <textarea 
                value={body}
                onChange={e => setBody(e.target.value)}
                ></textarea>

              <button>Add blog</button>
            </form>
        </div>
     );
}
 
export default CreateBlogs;