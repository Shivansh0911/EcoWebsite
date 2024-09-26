import React from 'react';
import HeroImage from '../components/hero-bits.jpg'; // Hero image
import BitsScene1 from '../components/bits-scenery-1.jpg'; // Scenery image 1
import BitsScene2 from '../components/bits-scenery-2.jpg'; // Scenery image 2

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${HeroImage})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to the Economics Department</h1>
          <p className="mt-4 text-lg md:text-xl">
            Discover the world of Economics at BITS Pilani, Hyderabad Campus
          </p>
        </div>
      </section>

      {/* About Economics Department */}
      <section className="py-12 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">About Our Department</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          The Economics Department at BITS Pilani Hyderabad is committed to providing an enriching academic experience. 
          Our programs blend theoretical economics with real-world applications, fostering critical thinking, analytical skills, and economic insight.
        </p>
      </section>

      {/* Campus Scenery */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Explore Our Campus</h2>
        <div className="flex justify-center space-x-4">
          <img src={BitsScene1} alt="BITS Hyderabad Campus" className="rounded-lg shadow-lg w-1/2" />
          <img src={BitsScene2} alt="BITS Hyderabad Campus" className="rounded-lg shadow-lg w-1/2" />
        </div>
        <p className="text-center text-lg mt-4 text-gray-700">
          Our campus is not only a place for academic excellence but also a haven of natural beauty.
        </p>
      </section>

      {/* Courses Section */}
      <section className="py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Our Programs</h2>
        <div className="flex justify-around">
          <div className="course-item text-center max-w-xs p-4">
            <h3 className="text-2xl font-bold mb-2">Bachelor's in Economics</h3>
            <p className="text-gray-700">
              Explore the foundational principles of economics with a focus on quantitative skills.
            </p>
          </div>
          <div className="course-item text-center max-w-xs p-4">
            <h3 className="text-2xl font-bold mb-2">Master's in Economics</h3>
            <p className="text-gray-700">
              Delve deeper into advanced economic theory, econometrics, and research methodologies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
