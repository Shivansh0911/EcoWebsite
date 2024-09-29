import React from 'react';

const Submissions = () => {
  return (
    <div className="submissions-container bg-white min-h-screen p-8">
      <h1 className="text-5xl font-bold text-center mb-8">Submissions</h1>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-8">
        Submit your manuscripts for consideration in our departmental publications and conference proceedings.
      </p>

      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto mb-8">
        <h2 className="text-2xl font-bold mb-4">Submission Guidelines</h2>
        <ol className="list-decimal list-inside mb-4">
          <li>Each author can submit only one paper; however, they can be co-authors of multiple papers.</li>
          <li>Papers that can’t be accommodated in the technical sessions will be considered for the poster session. Authors need to indicate whether they would want their papers to be considered for the poster session at the time of submission.</li>
          <li>Submitted papers must be unpublished and original work.</li>
          <li>Please submit a PDF version of the paper only.</li>
          <li>Use the provided submission link to submit your paper. Papers submitted through other channels will not be considered.</li>
        </ol>

        <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Last date for Paper submission: December 15, 2024</li>
          <li>Communication of acceptance of paper: December 31, 2024</li>
          <li>Last date for registration: January 20, 2025</li>
          <li>Conference Dates: February 4-6, 2025</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Post Acceptance</h2>
        <p className="text-gray-700 mb-4">
            The selected candidates will have to register for the conference. The registration link will be updated after December 31, 2024.
        </p>
      </div>
    </div>
  );
};

export default Submissions;
