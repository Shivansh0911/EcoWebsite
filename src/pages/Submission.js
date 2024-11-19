import React from 'react';

const Submissions = () => {
    return (
        <div className="submissions-container bg-white min-h-screen p-8" data-aos="fade-up">
            <h1 className="text-5xl font-bold text-center mb-8">Submission</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-8">
                Submit your manuscripts for consideration at the 6th Annual Conference in Economics and Finance.
            </p>

            <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto mb-8">
                <h2 className="text-2xl font-bold mb-4">Submission Guidelines</h2>
                <ol className="list-disc list-inside mb-4">
                    <li>Each author can submit only one paper; however, they can be co-authors of multiple papers.</li>
                    <li>Papers that can’t be accommodated in the technical sessions will be considered for the poster session. Authors need to indicate whether they would want their papers to be considered for the poster session at the time of submission.</li>
                    <li>Submitted papers must be unpublished and original work.</li>
                    <li>Please submit a PDF version of the paper only.</li>
                    <li>Use the provided submission link to submit your paper. Papers submitted through other channels will not be considered.</li>
                </ol>

                <h2 className="text-2xl font-bold mb-4">Submission of Full Paper</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>The corresponding author shall be the sole correspondent with the conference office on all matters related to this submission. In the event of acceptance of the full paper, no substantial changes to the content and order of authorship will be allowed.</li>
                    <li>It is mandatory to mention the name of all persons who have contributed or have substantively edited the submitted work.</li>
                    <li>Authors are requested to mention all possible conflicts of interest, whether or not directly related to the subject of the paper, in the appropriate section of the manuscript.</li>
                    <li>Before submission, all authors are requested to ensure that there is no plagiarism, fabrication, duplication of data, or scientific misconduct in the submitted document.</li>
                    <li>
                        <strong>Selected papers will have the opportunity to be published in the South Asian Journal of Macroeconomics and Public Finance.</strong>
                    </li>
                </ul>

                <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>Pre-Conference Workshop: February 4, 2025</li>
                    <li>Conference Dates: February 5-6, 2025</li>
                    <li>Last date for Paper submission: December 15, 2024</li>
                    <li>Communication of acceptance of paper: December 31, 2024</li>
                    <li>Last date for registration: January 20, 2025</li>
                </ul>
                <h2 className="text-2xl font-bold mb-4">Submission Link</h2>
                <p className="text-lg text-gray-700 mb-8">
                    Use the following link to submit your paper:
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeQzc5BsPjpwPpDt6J3qNXBSWYHcZNb3Su4DbgMAlqhvuIcXA/viewform" className="text-blue-600 underline ml-2">
                        ACEF 2025 Submission Link
                    </a>.
                </p>

                <h2 className="text-2xl font-bold mb-4">Post Acceptance</h2>
                <p className="text-lg text-gray-700 mb-8">
                    The selected candidates will have to register for the conference. The registration link will be updated after December 31, 2024.
                </p>
                <h2 className="text-2xl font-bold mb-4">Travel and Accommodation</h2>
                <p className="text-lg text-gray-700 mb-8">
                    Presenting authors without sufficient funding opportunities may apply for travel grants. We offer support for roundtrip 3rd AC train fare by the shortest route for the presenting author, with a maximum reimbursement of ₹5000. The conference organizers will take care of the accommodation and food for the presenting author during the three days of the conference.
                </p>
                <h2 className="text-2xl font-bold mb-4">Mode of Conference</h2>
                <p className="text-lg text-gray-700 mb-8">
                    Conference will be held in-person at the Department of Economics and Finance, BITS Pilani, Hyderabad Campus.
                </p>
            </div>
        </div>
    );
};

export default Submissions;
