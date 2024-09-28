import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import HeroImage from '../components/hero-bits.jpg';

const Home = () => {
    // Initialize AOS when the component is mounted
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Animation duration set to 1000ms
    }, []);

    return (
        <div className="home-container text-center"> {/* Ensures all content is centered */}

            {/* Hero Section */}
            <section
                className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center"
                style={{ backgroundImage: `url(${HeroImage})` }}
                data-aos="fade-in"
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex flex-col justify-center items-center text-white text-center p-6">
                    <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg" data-aos="fade-up">
                        Welcome to the Economics Department
                    </h1>
                    <p className="mt-4 text-lg md:text-xl drop-shadow-md" data-aos="fade-up" data-aos-delay="200">
                        Discover the world of Economics at BITS Pilani, Hyderabad Campus
                    </p>
                    <button
                        className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition transform hover:scale-105"
                        data-aos="fade-up" data-aos-delay="400"
                    >
                        Explore More
                    </button>
                </div>
            </section>

            {/* About Section */}
            <section className="py-12 px-4 sm:px-6 bg-white text-center" data-aos="fade-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">About Our Department</h2>
                <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                    The Economics Department at BITS Pilani Hyderabad is committed to providing an enriching academic experience.
                    Our programs blend theoretical economics with real-world applications, fostering critical thinking, analytical skills, and economic insight.
                </p>
                <button
                    className="mt-6 bg-green-600 text-white py-3 px-6 rounded-full hover:bg-green-700 transition transform hover:scale-105"
                    data-aos="fade-up" data-aos-delay="400"
                >
                    Learn More
                </button>
            </section>

            {/* Featured Courses Section */}
            <section className="py-12 px-4 sm:px-6 bg-white text-center" data-aos="fade-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Featured Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div
                        className="bg-gray-200 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
                        data-aos="fade-right"
                    >
                        <h3 className="text-2xl font-bold mb-2">Econometrics</h3>
                        <p className="text-gray-700">Learn the application of statistical methods in economic data.</p>
                    </div>
                    <div
                        className="bg-gray-200 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
                        data-aos="zoom-in" data-aos-delay="200"
                    >
                        <h3 className="text-2xl font-bold mb-2">Macroeconomics</h3>
                        <p className="text-gray-700">Understand the larger-scale economic factors that affect entire economies.</p>
                    </div>
                    <div
                        className="bg-gray-200 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
                        data-aos="fade-left" data-aos-delay="400"
                    >
                        <h3 className="text-2xl font-bold mb-2">Development Economics</h3>
                        <p className="text-gray-700">Focus on economic development and progress, especially in emerging economies.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;


