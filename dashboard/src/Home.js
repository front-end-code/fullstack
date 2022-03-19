import useFetch from './useFetch';

const Home = () => {
    const {data: blogs} = useFetch('http://localhost:5000/blogs/');

    return ( 
        <div>
            <h1>Main page - All blog</h1>
            <div className='blogs-wrapper'>
            {blogs && blogs.map(blog => (
                    <div className="post" key={blog.id}>
                        <h3>{blog.title}</h3>
                        <p>{blog.body}</p>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Home;