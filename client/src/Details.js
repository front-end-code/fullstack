import { useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";

const Details = () => {
    const {id} = useParams();
    const {data: blog} = useFetch('http://localhost:5000/blogs/' + id);
    const {data: blogs} = useFetch('http://localhost:5000/blogs/');

    return ( 
        <div className="details">
        { blog && (
            <div>
                <h1>{blog.title}</h1>
                <p>{blog.body}</p>
            </div> 
            )
        }
        <div>
            { blogs && blogs.map(blog => (
                <Link to={`/blogs/${blog.id}`} className="sidebar-post"  key={blog.id}>
                    <h3>{blog.title}</h3>
                </Link>
            ))
            }
        </div>
        </div>
     );
}
 
export default Details;