import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// Import leadership images based on name
import VRamgopalRao from '../components/v-ramgopal-rao.jpg';
import SoumyoMukherji from '../components/soumyo-mukherji.jpg';
import PYogeshwari from '../components/p-yogeshwari.jpg';

const Leadership = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="leadership-container bg-white min-h-screen p-8">
            <h1 className="text-5xl font-bold text-center mb-8" data-aos="fade-up">Leadership Team</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-8" data-aos="fade-up" data-aos-delay="200">
                The Economics Department at BITS Pilani, Hyderabad is led by a team of highly experienced professionals who drive the vision of academic excellence and research.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* V Ramgopal Rao - Group Vice-Chancellor */}
                <div className="bg-white shadow-lg rounded-lg p-6 text-center" data-aos="fade-up" data-aos-delay="400">
                    <img src={VRamgopalRao} alt="V Ramgopal Rao" className="w-40 h-40 rounded-full mx-auto mb-4 shadow-md" />
                    <h2 className="text-2xl font-bold mb-4">Prof. V Ramgopal Rao</h2>
                    <p className="text-gray-700">Group Vice-Chancellor, BITS Pilani. Former Director at IIT Delhi with vast experience in nanoelectronics and semiconductor technology.</p>
                </div>

                {/* Soumyo Mukherji - Director */}
                <div className="bg-white shadow-lg rounded-lg p-6 text-center" data-aos="fade-up" data-aos-delay="600">
                    <img src={SoumyoMukherji} alt="Soumyo Mukherji" className="w-40 h-40 rounded-full mx-auto mb-4 shadow-md" />
                    <h2 className="text-2xl font-bold mb-4">Prof. Soumyo Mukherji</h2>
                    <p className="text-gray-700">Director, BITS Pilani Hyderabad Campus. Specialist in biomedical instrumentation and bioengineering.</p>
                </div>

                {/* P Yogeshwari - Dean */}
                <div className="bg-white shadow-lg rounded-lg p-6 text-center" data-aos="fade-up" data-aos-delay="800">
                    <img src={PYogeshwari} alt="P Yogeshwari" className="w-40 h-40 rounded-full mx-auto mb-4 shadow-md" />
                    <h2 className="text-2xl font-bold mb-4">Prof. P. Yogeshwari</h2>
                    <p className="text-gray-700">Dean of Administration, with a strong background in life sciences and active participation in interdisciplinary research.</p>
                </div>
            </div>

            {/* Additional Leadership Members (if available from the doc) */}
            {/* Example for adding additional leadership member with a photo */}
            {/* 
            <div className="bg-white shadow-lg rounded-lg p-6 text-center" data-aos="fade-up" data-aos-delay="1000">
                <img src={AnotherPersonImage} alt="Another Person" className="w-40 h-40 rounded-full mx-auto mb-4 shadow-md" />
                <h2 className="text-2xl font-bold mb-4">Prof. Another Name</h2>
                <p className="text-gray-700">Role and brief description of the person's expertise and contributions.</p>
            </div> 
            */}
        </div>
    );
};

export default Leadership;
