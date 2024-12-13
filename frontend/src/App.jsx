import React from "react";
import { Routes, Route } from "react-router-dom"; // Tidak perlu BrowserRouter di sini
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
