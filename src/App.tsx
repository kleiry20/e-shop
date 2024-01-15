import "./App.css";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import ProductListing from "./components/ProductListing/ProductListing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProductListing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
