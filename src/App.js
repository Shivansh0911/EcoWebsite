// src/App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import MyNavbar from "./components/navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Leadership from "./pages/Leadership";
import PreConference from "./pages/preconference";
import Speakers from "./pages/Speakers";
import Submission from "./pages/Submission";
import Registration from "./pages/Registration";
import Watermark from "./components/Watermark";
import Footer from "./components/footer";
import Preconference from "./pages/preconference";

function App() {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a 1-second duration
    }, []);

    return (
        <Router>
            <div className="min-h-screen bg-white pt-16"> {/* Add padding-top to avoid overlap with fixed navbar */}
                <MyNavbar />
                <Watermark />
                <div className="container mx-auto px-4">
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/leadership" element={<Leadership />} />
                        <Route path="/preconference" element={<Preconference />} />
                        <Route path="/speakers" element={<Speakers />} />
                        <Route path="/submission" element={<Submission />} />
                        <Route path="/registration" element={<Registration />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
