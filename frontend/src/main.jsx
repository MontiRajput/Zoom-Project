import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter, Routes, and Route
import "./index.css";
import Navbar from "./landingpage/navbar";
import Home from "./landingpage/home";
import Footer from "./landingpage/footer";
import Plans from "./landingpage/plans_pricing"; // Import your plans component

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        {/* Define your routes */}
        <Route path="/" element={<Home />} />
        <Route path="/plans_pricing" element={<Plans />} />
        {/* Add more routes if needed */}
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);
