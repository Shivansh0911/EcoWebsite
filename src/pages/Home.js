import React from 'react';
import HeroImage from '../components/hero-bits.jpg';

const Home = () => {
  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${HeroImage})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
          <h1 className="text-5xl md:text-7xl font-bold drop-shadow-lg">Welcome to the Economics Department</h1>
          <p className="mt-4 text-lg md:text-xl drop-shadow-md">
            Discover the world of Economics at BITS Pilani, Hyderabad Campus
          </p>
          <button className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition transform hover:scale-105">
            Explore More
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-4">About Our Department</h2>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto">
          The Economics Department at BITS Pilani Hyderabad is committed to providing an enriching academic experience. 
          Our programs blend theoretical economics with real-world applications, fostering critical thinking, analytical skills, and economic insight.
        </p>
        <button className="mt-6 bg-green-600 text-white py-3 px-6 rounded-full hover:bg-green-700 transition transform hover:scale-105">
          Learn More
        </button>
      </section>

      {/* Featured Courses Section */}
      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-8">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-2">Econometrics</h3>
            <p className="text-gray-700">Learn the application of statistical methods in economic data.</p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-2">Macroeconomics</h3>
            <p className="text-gray-700">Understand the larger-scale economic factors that affect entire economies.</p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-2">Development Economics</h3>
            <p className="text-gray-700">Focus on economic development and progress, especially in emerging economies.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
