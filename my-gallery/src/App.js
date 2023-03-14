import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import ImageGallery from "./pages/ImageGallery";
import ImageDetail from "./pages/ImageDetail";

function App() {
  return (
    <div className="bg-dark text-light">
      <Navbar />
      <div>
        <Routes>
          <Route path="/home" element={<ImageGallery />} />
          <Route path="images/:id/*" element={<ImageDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
