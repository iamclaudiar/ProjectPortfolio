import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <div
      className="bg-body-tertiary text-white min-vh-100"
      style={{ overflow: "hidden" }}
      data-bs-theme="dark"
    >
      <Menu />
      <div className="flex-grow-1">
        <BrowserRouter basename="/ProjectPortfolio">
          <Routes>
            {/* <Route index element={<Home />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
