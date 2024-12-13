import React from "react";
import { Routes, Route } from "react-router-dom"; // Tidak perlu BrowserRouter di sini
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Footer from "./components/Footer";
import Servicespage from "./pages/Servicespage";
import Articlepage from "./pages/Articlepage";
import Contactpage from "./pages/Contactpage";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Router Primary */}
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/services" element={<Servicespage />} />
        <Route path="/article" element={<Articlepage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Router Secondary */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
