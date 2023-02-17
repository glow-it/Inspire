import "./App.css";
import "tippy.js/dist/tippy.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home.js";
import PageNotFound from "./Pages/PageNotFound.js";
import Header from "./Components/Header.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Blogs from "./Pages/Blogs.js";
import $ from "jquery";
import BlogPage from "./Pages/BlogPage.js";
import Profile from "./Pages/Profile.js";

function App() {
  useEffect(() => {
    AOS.init();
    // Removing The Title Attribute For All Elements
    $("[title]").removeAttr("title");

  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/:author/:blog_id" element={<BlogPage />} />
        <Route path="/:profilename" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
