import { Route, Routes } from "react-router-dom";

import Cursor from "./components/Cursor";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import About from "./pages/about";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import useScrollToTop from './hooks/useScrollToTop';

export default function App() {
  useScrollToTop();
  return (
    <>
      <Cursor />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}
