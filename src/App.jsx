import React from "react";
import { Routes, Route } from "react-router-dom";
// Import Primary Web
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Footer from "./components/Footer";
import Servicespage from "./pages/Servicespage";
import Articlepage from "./pages/Articlepage";
import Contactpage from "./pages/Contactpage";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";

// Import Article Web
import LearnPlant from "./Article/LearnPlant";
import Article2 from "./Article/Article2";
import Article3 from "./Article/Article3";
import Article4 from "./Article/Article4";
import Article5 from "./Article/Article5";
import Article6 from "./Article/Article6";

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
        <Route path="/profile" element={<Profile />} />

        {/* Router Secondary */}
        <Route path="/learnplant" element={<LearnPlant />} />
        <Route path="/article2" element={<Article2 />} />
        <Route path="/article3" element={<Article3 />} />

        {/* Router Article Section */}
        <Route path="/article4" element={<Article4 />} />
        <Route path="/article5" element={<Article5 />} />
        <Route path="/article6" element={<Article6 />} />

        {/* Fallback Route */}
        <Route path="*" element={<h1>Page Not Found</h1>} /> {/* You can customize this page */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
