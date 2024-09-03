import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
// import Hero from "./components/Hero";
import Why from "./components/Why";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Home from "./Pages/Home";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why" element={<Why />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        </Router>
          <Footer />
    </div>
  );
}

export default App;
