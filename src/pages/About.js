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
                <h2 className="text-4xl font-bold mb-6">About the Economics Department</h2>
                <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-10">
                    The Economics and Finance Department at BITS Pilani - Hyderabad Campus offers MSc (Hons) Economics as a first degree, three minor programs (Finance, Management and Computational Economics) and Ph.D. program. The diversity of specializations of the departmental faculty has promoted multi-faceted research at the Department and has brought a certain depth to the courses as well. Along with research, the Department recognizes the growing demand for trained manpower in education, industry, government and other sectors as well as nurturing future researchers and specialists in Economics, Finance and Management. The teaching methodology pursues to provide students with a strong conceptual foundation and to create a continuous interest and involvement with the real life applications of Economics, Finance and Management. For more details about our Department, we request you to go through the department website.  
                </p>
            </section>
            <section className="text-center py-12" data-aos="fade-left" data-aos-delay="400">
                <h2 className="text-4xl font-bold mb-6">Economic Association</h2>
                <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                    The Economics Association is the official association for MSc Economics students at BITS Pilani Hyderabad Campus. It aims to foster an interest in economics and finance among all students on campus through various events like Courtroom, Arthashastra The Business Quiz, and finance workshops during ATMOS. The association also organizes guest talks and panel discussions by eminent speakers, with a blog featuring articles written by students and guest contributors. It launched its flagship financial conclave, Finnovate, in 2017, which continues as an annual event featuring discussions on contemporary issues and exciting quizzes and competitions for students.
                </p>
            </section>

            {/* About the Campus */}
            <section className="text-center py-12" data-aos="fade-right" data-aos-delay="200">
                <h2 className="text-4xl font-bold mb-6">About the Campus</h2>
                <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                    BITS Pilani, Hyderabad Campus, established in 2008, is a branch of one of Indias top technical and science universities, BITS Pilani. The campus spans 200 acres of lush greenery in Jawahar Nagar, Hyderabad, and is equipped with modern laboratories, lecture theatres, a student activity center, auditorium, playground, and advanced ICT infrastructure. Located 70 km from Rajiv Gandhi International Airport and 27 km from Secunderabad railway station, the campus is easily accessible via public transport. Each year, 750 students are admitted to its undergraduate, postgraduate, and doctoral programs, with the campus accommodating over 3,200 students, 170 faculty members, and 160 staff. The curriculum follows the parent BITS Pilani campus, ensuring a comprehensive education. Currently, around 65 research projects are in progress, supported by prominent Indian and international funding agencies. With a vibrant campus life filled with extracurricular activities, students benefit from a holistic environment. Graduates from the campus have secured placements in multinational companies, government organizations, and research institutes globally.
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
