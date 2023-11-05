import "./App.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Live from "./pages/live.tsx";


function App() {
  return (
    
    <>
      <Router>
        <Routes>
          <Route path="/home" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/live" element={<Live />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
