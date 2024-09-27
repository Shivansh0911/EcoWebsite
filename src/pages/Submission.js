import React from 'react';

const Submissions = () => {
  return (
    <div className="submissions-container bg-white min-h-screen p-8">
      <h1 className="text-5xl font-bold text-center mb-8">Submissions</h1>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-8">
        Submit your manuscripts for consideration in our departmental publications.
      </p>

      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Submission Guidelines</h2>
        <ol className="list-decimal list-inside">
          <li>Prepare your manuscript as per the guidelines.</li>
          <li>Email the PDF to the economics department with the subject line: “Submission: [Your Title]”.</li>
          <li>Wait for the editorial review and approval.</li>
        </ol>
      </div>
    </div>
  );
};

export default Submissions;
