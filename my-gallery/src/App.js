import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import ImageGallery from "./pages/ImageGallery";
import ImageDetail from "./pages/ImageDetail";
import AboutMe from "./pages/AboutMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-dark text-light">
      <Navbar />
      <div>
        <Routes>
          <Route path="home/:tag/*" element={<ImageGallery />} />
          <Route path="/home" element={<ImageGallery />} />
          <Route path="images/:id/*" element={<ImageDetail />} />
          <Route path="home/about" element={<AboutMe />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
