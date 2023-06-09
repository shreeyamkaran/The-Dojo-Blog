import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./CreateBlog.js";
import BlogDetails from "./BlogDetails.js";
import PageNotFound from "./PageNotFound";
import { Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <div className="app">
            <Navbar />
            <div className="content">
                <Routes>
                    <Route path='/' element={ <Home /> } />
                    <Route path='/create' element={ <Create /> } />
                    <Route path='/blogs/:id' element={ <BlogDetails /> } />
                    <Route path='*' element={ <PageNotFound /> } />
                </Routes>
            </div>
        </div>
    );
}