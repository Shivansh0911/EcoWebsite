import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import BitsScene1 from '../components/bits-scenery-1.jpg'; // Some campus scenery
import DepartmentPhoto from '../components/department-photo.jpg'; // Economics department photo

const About = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [BitsScene1, DepartmentPhoto]; // Including department photo in carousel

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="about-container bg-white min-h-screen p-8">
            {/* About Us Section */}
            <section className="text-center py-12" data-aos="fade-right">
                <h2 className="text-5xl font-bold mb-6">About the Economics Department</h2>
                <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-10">
                    The Economics Department at BITS Pilani Hyderabad Campus offers diverse programs in Economics and Finance, fostering a deep understanding of the subject through research, industry engagement, and a vibrant learning environment.
                </p>
            </section>

            {/* Campus & Department Photos */}
            <section className="carousel-section py-12" data-aos="zoom-in" data-aos-delay="400">
                <h2 className="text-4xl font-bold text-center mb-8">Explore Our Campus</h2>
                <div className="relative w-full max-w-4xl mx-auto">
                    <div className="relative overflow-hidden">
                        <div className="relative w-full h-96">
                            {slides.map((slide, index) => (
                                <img
                                    key={index}
                                    src={slide}
                                    alt="Campus or Department"
                                    className={`absolute w-full h-full object-cover rounded-lg shadow-lg transition-opacity duration-1000 ease-in-out transform ${index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
                                />
                            ))}
                        </div>
                    </div>
                    {/* Carousel Controls */}
                    <button
                        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none">
                        &#8249;
                    </button>
                    <button
                        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none">
                        &#8250;
                    </button>
                </div>
            </section>
        </div>
    );
};

export default About;
