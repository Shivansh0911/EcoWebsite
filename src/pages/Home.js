import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import HeroImage from '../components/hero-bits.jpg'; // Hero image
import ConferencePhoto1 from '../components/conference-photo-1.jpg'; 
import ConferencePhoto2 from '../components/conference-photo-2.jpg'; 
import ConferencePhoto3 from '../components/conference-photo-3.jpg'; 
import ConferencePhoto4 from '../components/conference-photo-4.jpg'; 
import ConferencePhoto5 from '../components/conference-photo-5.jpg'; 
import ConferencePhoto6 from '../components/conference-photo-6.jpg'; // Conference images

const Home = () => {
    const [selectedImage, setSelectedImage] = useState(null); // For lightbox

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    // Function to close the lightbox
    const closeLightbox = () => setSelectedImage(null);

    return (
        <div className="home-container text-center">
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

            {/* Conference Information */}
            <section className="py-12 px-4 sm:px-6 bg-white text-center" data-aos="fade-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">6th Annual Conference on Economics and Finance (ACEF 2025)</h2>
                <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto mb-6">
                    February 4-6, 2025 | BITS Pilani Hyderabad Campus <br />
                    The conference invites papers on both theoretical and empirical aspects of economics and finance.
                </p>
                <p className="text-lg font-semibold">Important Dates:</p>
                <ul className="list-disc list-inside text-left mx-auto max-w-lg text-gray-700">
                    <li>Last date for paper submission: December 15, 2024</li>
                    <li>Acceptance notification: December 31, 2024</li>
                    <li>Last date for registration: January 20, 2025</li>
                </ul>

                {/* Conference Photos */}
                <h2 className="text-2xl font-bold mt-10 mb-4">Conference Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Each image will open the lightbox on click */}
                    <img 
                        src={ConferencePhoto1} 
                        alt="Conference 1" 
                        className="rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
                        onClick={() => setSelectedImage(ConferencePhoto1)}
                    />
                    <img 
                        src={ConferencePhoto2} 
                        alt="Conference 2" 
                        className="rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
                        onClick={() => setSelectedImage(ConferencePhoto2)}
                    />
                    <img 
                        src={ConferencePhoto3} 
                        alt="Conference 3" 
                        className="rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
                        onClick={() => setSelectedImage(ConferencePhoto3)}
                    />
                    <img 
                        src={ConferencePhoto4} 
                        alt="Conference 4" 
                        className="rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
                        onClick={() => setSelectedImage(ConferencePhoto4)}
                    />
                    <img 
                        src={ConferencePhoto5} 
                        alt="Conference 5" 
                        className="rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
                        onClick={() => setSelectedImage(ConferencePhoto5)}
                    />
                    <img 
                        src={ConferencePhoto6} 
                        alt="Conference 6" 
                        className="rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
                        onClick={() => setSelectedImage(ConferencePhoto6)}
                    />
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <img src={selectedImage} alt="Selected" className="max-w-3xl max-h-90vh rounded-lg shadow-lg" />
                    <button 
                        className="absolute top-4 right-4 text-white text-4xl"
                        onClick={closeLightbox}
                    >
                        &times;
                    </button>
                </div>
            )}
        </div>
    );
};

export default Home;
