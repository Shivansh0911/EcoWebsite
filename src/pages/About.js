import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import BitsScene1 from '../components/bits-scenery-1.jpg'; // Some campus scenery
import DepartmentPhoto from '../components/department-photo.jpg'; // Economics department photo
import ValmikiBhawan from '../components/valmiki-bhawan.jpg'; // Valmiki Bhawan
import CBlock from '../components/c-block.jpg'; // C Block
import AcadWideAngle from '../components/acad-wide-angle.jpg'; // Acad Wide Angle
import RockGarden from '../components/rock-garden.jpg'; // Rock Garden
import NewAcads from '../components/new-acads.jpg'; // New Acads
import PathToAcads from '../components/path-to-acads.jpg'; // Path to Acads
import Bus from '../components/bus.jpg'; // Bus
import Archway from '../components/archway.jpg'; // Archway

const About = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Add all the images into the slides array
    const slides = [
        BitsScene1,
        DepartmentPhoto,
        ValmikiBhawan,
        CBlock,
        AcadWideAngle,
        RockGarden,
        NewAcads,
        PathToAcads,
        Bus,
        Archway
    ];

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000); // Adjusted timing for better viewing

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="about-container bg-white min-h-screen p-8">
            {/* About Us Section */}
            <section className="text-center py-12" data-aos="fade-right">
                <h2 className="text-4xl font-bold mb-6">About the Economics Department</h2>
                <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-10">
                    The Economics and Finance Department at BITS Pilani - Hyderabad Campus offers MSc (Hons) Economics as a first degree, three minor programs (Finance, Management, and Computational Economics), and a Ph.D. program. The diversity of specializations of the departmental faculty has promoted multi-faceted research at the Department and has brought a certain depth to the courses as well. The teaching methodology provides students with a strong conceptual foundation and real-life applications of Economics, Finance, and Management.
                </p>
            </section>

            {/* Economic Association Section */}
            <section className="text-center py-12" data-aos="fade-left" data-aos-delay="200">
                <h2 className="text-4xl font-bold mb-6">Economic Association</h2>
                <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                    The Economics Association is the official association for MSc Economics students at BITS Pilani Hyderabad Campus. It fosters interest in economics and finance through events like Courtroom, Arthashastra The Business Quiz, and finance workshops during ATMOS. The association also organizes guest talks, panel discussions, and a flagship financial conclave, Finnovate.
                </p>
            </section>

            {/* About the Campus Section */}
            <section className="text-center py-12" data-aos="fade-right" data-aos-delay="200">
                <h2 className="text-4xl font-bold mb-6">About the Campus</h2>
                <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                    BITS Pilani, Hyderabad Campus, established in 2008, spans 200 acres in Jawahar Nagar, Hyderabad. The campus is equipped with modern labs, lecture theatres, a student activity center, playground, and advanced ICT infrastructure. Around 3,200 students and 170 faculty members are housed on campus, with about 65 ongoing research projects funded by prominent Indian and international agencies.
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
                                    alt={`Slide ${index + 1}`}
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
