import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Home from "./Home.jsx";
import News from "./News.jsx";
import Converter from "./Converter.jsx";
import "./index.css"; // CSS file

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/adventure" element={<App />} />
      <Route path="/converter" element={<Converter />} />
    </Routes>
  </HashRouter>
);