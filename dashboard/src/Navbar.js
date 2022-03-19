import { Link, useParams } from 'react-router-dom';

const Navbar = () => {
    const {id} = useParams();

    return ( 
        <header>
            <h3>Dashboard</h3>
            <nav>
                <Link to="/">Main</Link>
                <Link to="/deleteblog">Delete Blog</Link>
                <Link to="/createBlogs">Create Blog</Link>
                <Link to={`/editblog/${id}`}>Edit Blog</Link>
            </nav>
        </header>
     );
}
 
export default Navbar;