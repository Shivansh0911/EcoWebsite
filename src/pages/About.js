import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import BitsScene1 from '../components/bits-scenery-1.jpg';
import BitsScene2 from '../components/bits-scenery-2.jpg';
import BitsScene3 from '../components/bits-scenery-3.jpg';

const About = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [BitsScene1, BitsScene2, BitsScene3];

    // Initialize AOS for animations
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Set animation duration to 1000ms
    }, []);

    // Automatic slide change every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 2000); // 2000ms = 2 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [slides.length]);

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="about-container bg-white min-h-screen p-8">
            {/* About Us Section */}
            <section className="text-center py-12" data-aos="fade-right">
                <h2 className="text-5xl font-bold mb-6">About the Economics Department</h2>
                <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-10">
                    The Economics Department at BITS Pilani Hyderabad is dedicated to shaping the economic leaders of tomorrow through advanced education and pioneering research. We prepare students with the skills required for complex economic analysis and decision-making.
                </p>
            </section>

            {/* Research Focus Section */}
            <section className="py-12 text-center" data-aos="fade-left" data-aos-delay="200">
                <h2 className="text-4xl font-bold mb-6">Research Focus</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    Our research ranges from policy-oriented work to cutting-edge theoretical studies in development economics, financial markets, and international trade.
                </p>
            </section>

            {/* Carousel Section */}
            <section className="carousel-section py-12" data-aos="zoom-in" data-aos-delay="400">
                <h2 className="text-4xl font-bold text-center mb-8">Campus Scenery</h2>
                <div className="relative w-full max-w-4xl mx-auto">
                    <div className="relative overflow-hidden">
                        {/* Carousel with fade-in and slide effect */}
                        <div className="relative w-full h-96">
                            {slides.map((slide, index) => (
                                <img
                                    key={index}
                                    src={slide}
                                    alt="Campus"
                                    className={`absolute w-full h-full object-cover rounded-lg shadow-lg transition-opacity duration-1000 ease-in-out transform ${index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
                                />
                            ))}
                        </div>
                    </div>
                    {/* Carousel Controls */}
                    <button
                        onClick={handlePrev}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none">
                        &#8249;
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none">
                        &#8250;
                    </button>
                </div>
            </section>
        </div>
    );
};

export default About;

