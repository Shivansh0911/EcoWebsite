import React from "react";

const BestPaperAwards = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          Best Paper Awards & Publication Opportunities
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 border-b-2 pb-2 mb-4">
            Best Paper Awards for PhD Students
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The conference will feature the Best Paper Awards, recognizing
            exceptional research that stands out in originality, relevance, and
            impact. The awards will be based on the significance of the research
            and its contribution to the field.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 border-b-2 pb-2 mb-4">
            Publication Opportunities
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Selected papers will be eligible for publication in the following
            journals, subject to their standard review process:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Foreign Trade Review (Scopus)</li>
            <li>South Asian Journal of Macroeconomics and Public Finance (Scopus)</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default BestPaperAwards;
