import React from 'react';
import BitsScene3 from '../components/bits-scenery-3.jpg'; // Scenery image

const About = () => {
  return (
    <div className="about-container">
      {/* About Us Section */}
      <section className="py-12 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">About the Economics Department</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          The Economics Department at BITS Pilani Hyderabad is at the forefront of modern economic education and research. 
          We offer programs designed to equip students with essential skills in economic analysis, econometrics, and quantitative methods.
        </p>
        <img src={BitsScene3} alt="Economics Department Building" className="rounded-lg shadow-lg w-full max-w-4xl mx-auto" />
      </section>

      {/* Research Focus Section */}
      <section className="py-12 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Research Focus</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Our department actively engages in cutting-edge research. We focus on a range of topics from policy-driven research, 
          development economics, to financial market studies. Students are encouraged to participate in research projects, gaining 
          valuable insights into real-world economic issues.
        </p>
      </section>
    </div>
  );
};

export default About;
