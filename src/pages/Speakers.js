import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import SpeakerImage1 from '../components/prachi-mishra.jpg'; // Prof. Prachi Mishra's image
import SpeakerImage2 from '../components/srinivasan-rangan.jpg'; // Prof. Srinivasan Rangan's image

const Speakers = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="speakers-container bg-white min-h-screen p-8 mt-16"> {/* Added mt-16 to avoid navbar overlap */}
            <h1 className="text-5xl font-bold text-center mb-8" data-aos="fade-up">Conference Speakers</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-8" data-aos="fade-up" data-aos-delay="200">
                Our annual conference features eminent speakers who will share their insights and experiences in the field of economics.
            </p>

            {/* Speaker cards section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105" data-aos="fade-right" data-aos-delay="400">
                    <img src={SpeakerImage1} alt="Prof. Prachi Mishra" className="rounded-lg mb-4 w-full object-cover" /> {/* Adjusted for mobile */}
                    <h2 className="text-2xl font-bold mb-4 text-center">Prof. Prachi Mishra</h2>
                    <p className="text-gray-700 text-center">
                        Before joining Ashoka University, Prof. Prachi Mishra served as Chief of the Systemic Issues Division at the International Monetary Fund (IMF).
                        With a PhD from Columbia University, she specializes in macroeconomics and international finance.
                    </p>
                    <a href="https://www.ashoka.edu.in/profile/prachi-mishra/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline block text-center mt-4">
                        Click here for more info.
                    </a>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105" data-aos="fade-left" data-aos-delay="400">
                    <img src={SpeakerImage2} alt="Prof. Srinivasan Rangan" className="rounded-lg mb-4 w-full object-cover" /> {/* Adjusted for mobile */}
                    <h2 className="text-2xl font-bold mb-4 text-center">Prof. Srinivasan Rangan</h2>
                    <p className="text-gray-700 text-center">
                        Prof. Srinivasan Rangan is a faculty member at IIM Bangalore, specializing in financial analysis and valuation.
                        He has a PhD in Accounting from the Wharton School and extensive experience in the finance sector.
                    </p>
                    <a href="https://www.iimb.ac.in/user/129/srinivasan-rangan" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline block text-center mt-4">
                        Click here for more info.
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Speakers;

