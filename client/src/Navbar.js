import { Link } from 'react-router-dom';


const Navbar = () => {
    return ( 
        <header>
            <h3>Blog</h3>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/blogs">Blogs</Link>
            </nav>
        </header>
     );
}
 
export default Navbar;