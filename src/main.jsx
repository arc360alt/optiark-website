import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Home from "./Home.jsx";
import News from "./News.jsx";
import "./index.css"; // <- Make sure this line exists and points to your CSS


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />          {/* Home page */}
        <Route path="/adventure" element={<App />} />  {/* Adventure Edition */}
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
