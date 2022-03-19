import Navbar from "./Navbar";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Home";
import Blogs from "./Blogs";
import Details from "./Details";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<Details />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
