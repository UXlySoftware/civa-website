import "./App.css";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import Second from "./components/Second.tsx";
import ThirdSection from "./components/Third.tsx";
import Fourth from "./components/Fourth.tsx";
import HowItWorks from "./components/HowItWorks";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
