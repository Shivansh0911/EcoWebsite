import React from 'react';

const Speakers = () => {
  return (
    <div className="speakers-container bg-blue-100 min-h-screen p-8">
      <h1 className="text-5xl font-bold text-center mb-8">Speakers</h1>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-8">
        We host a variety of speakers throughout the academic year to enhance the educational experience of our students.
        Our speakers come from diverse backgrounds and areas of expertise, providing valuable insights into the world of economics.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold mb-4">Dr. XYZ</h2>
          <p className="text-gray-700">Expert in Behavioral Economics with a focus on consumer behavior.</p>
          <p className="text-gray-500 mt-2">Upcoming Talk: "Understanding Consumer Choices in a Digital World"</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold mb-4">Prof. XYZ</h2>
          <p className="text-gray-700">Specializes in Development Economics and Policy Analysis.</p>
          <p className="text-gray-500 mt-2">Upcoming Talk: "Economic Policies for Sustainable Development"</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold mb-4">Dr. XYZ</h2>
          <p className="text-gray-700">Focuses on International Trade and Economic Diplomacy.</p>
          <p className="text-gray-500 mt-2">Upcoming Talk: "Navigating Global Trade Dynamics"</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold mb-4">Dr. XYZ</h2>
          <p className="text-gray-700">Researcher in Environmental Economics with numerous publications.</p>
          <p className="text-gray-500 mt-2">Upcoming Talk: "The Economics of Climate Change: Challenges and Opportunities"</p>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
