import React, { useEffect, useState, useRef } from 'react'; // Import useRef to reference the section
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import HeroImage from '../components/hero-bits.jpg'; // Hero image
import ConferencePhoto1 from '../components/conference-photo-1.jpg';
import ConferencePhoto2 from '../components/conference-photo-2.jpg';
import ConferencePhoto3 from '../components/conference-photo-3.jpg';
import ConferencePhoto4 from '../components/conference-photo-4.jpg';
import ConferencePhoto5 from '../components/conference-photo-5.jpg';
import ConferencePhoto6 from '../components/conference-photo-6.jpg'; // Conference images
import ConferencePhoto7 from '../components/conference-photo-7.jpg';
import ConferencePhoto8 from '../components/conference-photo-8.jpg';
import ConferencePhoto9 from '../components/conference-photo-9.jpg';
import ConferencePhoto10 from '../components/conference-photo-10.jpg';
import ConferencePhoto11 from '../components/conference-photo-11.jpg';
import ConferencePhoto12 from '../components/conference-photo-12.jpg';
const Home = () => {
    const [selectedImage, setSelectedImage] = useState(null); // For lightbox
    const conferenceSectionRef = useRef(null); // Create a ref for the conference section

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    // Function to close the lightbox
    const closeLightbox = () => setSelectedImage(null);

    // Function to scroll to the conference section
    const scrollToConferenceSection = () => {
        conferenceSectionRef.current.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
    };

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
                        Welcome to the 6th Annual Conference on Economics and Finance (ACEF 2025)
                    </h1>
                    <p className="mt-4 text-lg md:text-xl drop-shadow-md" data-aos="fade-up" data-aos-delay="200">
                        Department of Economics and Finance, BITS Pilani, Hyderabad Campus.
                    </p>
                    <button
                        className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition transform hover:scale-105"
                        data-aos="fade-up" data-aos-delay="400"
                        onClick={scrollToConferenceSection} // Scroll down on click
                    >
                        Explore More
                    </button>
                </div>
            </section>

            {/* Conference Information */}
            <section ref={conferenceSectionRef} className="py-12 px-4 sm:px-6 bg-white text-center" data-aos="fade-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">6th Annual Conference on Economics and Finance (ACEF 2025)</h2>
                <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto mb-6">
                    February 4-6, 2025 | BITS Pilani Hyderabad Campus <br />
                    The conference invites papers on both theoretical and empirical aspects of economics and finance.
                </p>
                <h2 className="text-2xl font-bold mt-10 mb-4" data-aos="fade-up">ABOUT THE CONFERENCE</h2>
                <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto mb-6">
                    The Department of Economics and Finance is organizing its 6th Annual Conference on Economics and Finance from February 4-6, 2025. The conference provides a forum for disseminating research in all areas of economics and finance, inviting papers on both theoretical and empirical aspects. In conjunction with this, the conference will host a pre-conference workshop featuring three sessions: AI/ML in Economics and Finance, Time Series Econometrics, and Causal Inference.
                    Prof. Prachi Mishra (Ashoka University) and Prof. Srinivasan Rangan (Indian Institute of Management Bangalore) are the keynote speakers for the conference, which also features awards for the best paper in both technical and poster sessions specifically for PhD students.

                </p>
                <h2 className="text-2xl font-bold mt-10 mb-4" data-aos="fade-up">OBJECTIVES OF THE CONFERENCE</h2>
                <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto mb-6">
                    The conference aims to bring together academicians, young researchers, policy analysts, and industry experts
                    to share their experiences and research findings on the problems, issues, prospects, and challenges within
                    the diverse field of Economics and Finance, particularly focusing on the developments that have emerged over
                    the last two decades. Furthermore, the workshop seeks to equip and update participants on recent trends in
                    economic analysis, helping them stay abreast of the latest techniques, methods, and tools in the field.
                </p>
                <h2 className="text-lg font-bold" data-aos="fade-up">IMPORTANT DATES:</h2>
                <ul className="mx-auto max-w-lg text-left text-gray-700" data-aos="fade-up">
                    <li className="grid grid-cols-[250px_auto] py-1">
                        <span>Pre-Conference Workshop:</span>
                        <span className="tabular-nums">February 4, 2025</span>
                    </li>
                    <li className="grid grid-cols-[250px_auto] py-1">
                        <span>Conference Dates:</span>
                        <span className="tabular-nums">February 5-6, 2025</span>
                    </li>
                    <li className="grid grid-cols-[250px_auto] py-1">
                        <span>Last date for paper submission:</span>
                        <span className="tabular-nums">December 15, 2024</span>
                    </li>
                    <li className="grid grid-cols-[250px_auto] py-1">
                        <span>Acceptance notification:</span>
                        <span className="tabular-nums">December 31, 2024</span>
                    </li>
                    <li className="grid grid-cols-[250px_auto] py-1">
                        <span>Last date for registration:</span>
                        <span className="tabular-nums">January 20, 2025</span>
                    </li>
                </ul>


                <h2 className="text-2xl font-bold mt-10 mb-4" data-aos="fade-up">ORGANIZING COMMITTEE</h2>
                <ul className="list-disc list-inside text-left mx-auto max-w-lg text-gray-700" data-aos="fade-up">
                    <li>Prof. Rishi Kumar (Head of the Department)</li>
                    <li>Prof. Archana Srivastava (Convener)</li>
                    <li>Prof. Sudatta Banerjee</li>
                    <li>Prof. Dushyant Kumar</li>
                    <li>Prof. Shreya Biswas</li>
                    <li>Prof. Sravani Bharandev</li>
                    <li>Prof. ACV Subrahmanyam</li>
                </ul>
                <h2 className="text-2xl font-bold mt-10 mb-4" data-aos="fade-up">Previous Year Conferences</h2>
                <ul className="list-disc list-inside text-left mx-auto max-w-lg text-blue-600" data-aos="fade-up">
                    <li>
                        <a 
                            href="https://web.bits-pilani.ac.in/uploads/1st%20Annual%20Conference%20Poster.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:underline"
                        >
                            1st Annual Conference in Economics and Finance
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://web.bits-pilani.ac.in/uploads/2nd%20Annual%20Conference-Poster.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:underline"
                        >
                            2nd Annual Conference in Economics and Finance
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://web.bits-pilani.ac.in/uploads/3rd%20annual%20conference%20poster.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:underline"
                        >
                            3rd Annual Conference in Economics and Finance
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://web.bits-pilani.ac.in/uploads/updated%20conf23%20poster.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:underline"
                        >
                            4th Annual Conference in Economics and Finance
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://acef2024.vercel.app/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:underline"
                        >
                            5th Annual Conference in Economics and Finance
                        </a>
                    </li>
                </ul>
                {/* Conference Photos */}
                <h2 className="text-2xl font-bold mt-10 mb-4" data-aos="fade-up">Previous Conference Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" data-aos="fade-up">
                    {[ConferencePhoto1, ConferencePhoto2, ConferencePhoto3, ConferencePhoto4, ConferencePhoto5, ConferencePhoto6, ConferencePhoto7, ConferencePhoto8,ConferencePhoto9,ConferencePhoto10,ConferencePhoto11,ConferencePhoto12].map((photo, index) => (
                        <img
                            key={index}
                            src={photo}
                            alt={`Conference ${index + 1}`}
                            className="rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
                            onClick={() => setSelectedImage(photo)}
                        />
                    ))}
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
