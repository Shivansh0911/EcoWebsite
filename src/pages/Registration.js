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
            <li>Faculty/Industry Professional/Others: ₹4000 + 18% GST</li>
          </ul>
          <li>For Pre-Conference Workshop:</li>
          <ul className="list-inside">
            <li>Research Scholar/Student: ₹1500 + 18% GST</li>
            <li>Faculty/Industry Professional/Others: ₹1500 + 18% GST</li>
          </ul>
          <li>For Paper Presentation and Pre-Conference Workshop (combined):</li>
          <ul className="list-inside">
            <li>Research Scholar/Student: ₹3000 + 18% GST</li>
            <li>Faculty/Industry Professional/Others: ₹5000 + 18% GST</li>
          </ul>
              </ul>
              <h2 className="text-2xl font-bold mb-4">Registration Link</h2>
              <p className="text-gray-700 mb-4">
                  The registration Link will be updated after December 31, 2024.
              </p>

        <h2 className="text-2xl font-bold mb-4">Payment Information</h2>
        <p className="text-gray-700 mb-4">
            Payment link will be updated after December 31, 2024. Please keep an eye on the official conference website for updates.
        </p>
      </div>
    </div>
  );
};

export default Registration;
