import React from 'react';

const Registration = () => {
    return (
        <div className="registrations-container bg-white min-h-screen p-8" data-aos="fade-up">
            <h1 className="text-5xl font-bold text-center mb-8">Registration</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-8">
                Register for our upcoming events to enrich your learning experience.
            </p>

            <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto mb-8">
                <h2 className="text-2xl font-bold mb-4">Registration Fees</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>For Paper Presentation:</li>
                    <ul className="list-inside">
                        <li>Research Scholar/Student: ₹2000 + 18% GST</li>
                        <li className="mb-6">Faculty/Industry Professional/Others: ₹4000 + 18% GST</li>
                    </ul>
                    <li>For Pre-Conference Workshop:</li>
                    <ul className="list-inside">
                        <li>Research Scholar/Student: ₹1500 + 18% GST</li>
                        <li className="mb-6">Faculty/Industry Professional/Others: ₹1500 + 18% GST</li>
                    </ul>
                    <li>For Paper Presentation and Pre-Conference Workshop (combined):</li>
                    <ul className="list-inside">
                        <li>Research Scholar/Student: ₹3000 + 18% GST</li>
                        <li className="mb-6">Faculty/Industry Professional/Others: ₹5000 + 18% GST</li>
                    </ul>
                </ul>

                <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
                <p className="text-gray-700 mb-4">
                    Authors presenting papers at the conference need to register on or before <strong>January 15, 2025</strong>.
                </p>

                <h2 className="text-2xl font-bold mb-4">Registration Link</h2>
                <p className="text-gray-700 mb-4">
                    Use the following link to register for the conference: 
                    <a
                        href="https://pmny.in/trUqrjMfghb6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        https://pmny.in/trUqrjMfghb6
                    </a>
                </p>
                <p className="text-gray-700 mb-4">
                    Kindly enter the amount based on your affiliation and note down the transaction ID. After the payment is made, kindly fill out the registration form along with the transaction ID using the link given below:
                </p>
                <p className="text-gray-700 mb-4">
                    Registration Form Link: 
                    <a
                        href="https://forms.gle/QFRFbj7ZPEHrBtTf9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        https://forms.gle/QFRFbj7ZPEHrBtTf9
                    </a>
                </p>

                <h2 className="text-2xl font-bold mb-4">Payment Information</h2>
                <p className="text-gray-700 mb-4">
                    Kindly use the registration link above to complete the payment process. Please ensure you note down the transaction ID for completing the registration form.
                </p>

                <h2 className="text-2xl font-bold mb-4">Travel Reimbursement</h2>
                <p className="text-gray-700 mb-4">
                    There is limited provision for the reimbursement of travel expenses for select participants. 
                </p>
            </div>
        </div>
    );
};

export default Registration;
