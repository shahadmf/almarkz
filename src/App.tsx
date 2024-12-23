// eslint-disable-next-line
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Home from "./Pages/Home";
import ContactUs from "./components/ContactUs";
// import Blog from "./components/Blog";

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
