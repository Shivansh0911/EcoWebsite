import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-50 text-center py-6 mt-8">
            <div className="container mx-auto px-4">
                <p className="text-gray-700">&copy; 2024 Economics Department. All rights reserved.</p>

                <h4 className="text-lg font-semibold text-gray-800 mt-4">Quick Links :</h4>

                <ul className="list-disc list-inside flex flex-col md:flex-row justify-center md:space-x-6 space-y-2 md:space-y-0 mt-2">
                    <li><a href="/home" className="text-blue-600 hover:underline">Home</a></li>
                    <li><a href="/about" className="text-blue-600 hover:underline">About</a></li>
                    <li><a href="/leadership" className="text-blue-600 hover:underline">Leadership</a></li>
                    <li><a href="/speakers" className="text-blue-600 hover:underline">Speakers</a></li>
                    <li><a href="/submission" className="text-blue-600 hover:underline">Submission</a></li>
                     <li><a href="/preconference" className="text-blue-600 hover:underline">Pre-Conference Workshop</a></li>
                </ul>

                <p className="text-gray-700 mt-4">For any queries, contact us at</p>
                <a href="mailto:acef@hyderabad.bits-pilani.ac.in" className="text-blue-600 underline block">
                    acef@hyderabad.bits-pilani.ac.in
                </a>

                <p className="text-gray-700 mt-4">Location of BITS Pilani, Hyderabad Campus</p>
            </div>
        </footer>
    );
};

export default Footer;




