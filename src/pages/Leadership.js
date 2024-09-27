import React from 'react';

const Leadership = () => {
  return (
    <div className="leadership-container bg-blue-50 min-h-screen p-8">
      <h1 className="text-5xl font-bold text-center mb-8">Leadership Team</h1>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-8">
        The Economics Department at BITS Pilani, Hyderabad is led by a team of dedicated professionals who drive the vision of academic excellence and research.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Department Head</h2>
          <p className="text-gray-700">Oversees academic programs, faculty development, and student success.</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Research Coordinator</h2>
          <p className="text-gray-700">Promotes research activities and collaboration with global institutions.</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Academic Coordinator</h2>
          <p className="text-gray-700">Responsible for curriculum design, assessment methods, and student engagement.</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Finance Officer</h2>
          <p className="text-gray-700">Manages departmental finances, budgeting, and funding for research projects.</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Student Affairs Coordinator</h2>
          <p className="text-gray-700">Ensures student well-being, organizes events, and facilitates academic counseling.</p>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
