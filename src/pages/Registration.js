import React from 'react';

const Registrations = () => {
  return (
    <div className="registrations-container bg-blue-100 min-h-screen p-8">
      <h1 className="text-5xl font-bold text-center mb-8">Registrations</h1>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-8">
        Register for our upcoming events to enrich your learning experience.
      </p>

      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Seminar on Global Economic Trends - Date: TBD</li>
          <li>Workshop on Quantitative Analysis - Date: TBD</li>
          <li>Guest Lecture on Development Economics - Date: TBD</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Registration Steps</h2>
        <ol className="list-decimal list-inside">
          <li>Choose the event you want to register for from the list above.</li>
          <li>Fill out the registration form provided on the event page.</li>
          <li>Submit your registration and wait for confirmation via email.</li>
        </ol>
      </div>
    </div>
  );
};

export default Registrations;
