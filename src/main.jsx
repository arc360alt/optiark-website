import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Use HashRouter for Vercel
import App from "./App.jsx";
import Home from "./Home.jsx";
import News from "./News.jsx";
import Adventure from "./Adventure.jsx"; // Make sure this exists
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/adventure" element={<Adventure />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
