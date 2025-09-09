import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import StaysPage from "./components/StaysPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import BlogsPage from "./components/BlogsPage";

const App = () => {
  return (
    <Router>
      <div className="bg-white font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stays" element={<StaysPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
