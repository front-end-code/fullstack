import Navbar from "./Navbar";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CreateBlogs from "./CreateBlog";
import EditBlog from "./EditBlog";
import DeleteBlog from './DeleteBlog';
import Home from './Home';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deleteblog" element={<DeleteBlog />} />
          <Route path="/createBlogs" element={<CreateBlogs />} />
          <Route path="/editblog/:id" element={<EditBlog />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
