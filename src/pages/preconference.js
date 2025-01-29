import React from 'react';

const Preconference = () => {
    return (
        <div className="preconference-container bg-white min-h-screen p-8" data-aos="fade-up">
            <h1 className="text-5xl font-bold text-center mb-8">Pre-Conference Workshop</h1>
            <h2 className="text-2xl font-semibold text-center mb-4">Date: February 4, 2025</h2>
            <h3 className="text-xl text-center mb-8">Venue: BITS Pilani, Hyderabad Campus</h3>
            
            <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-8">
                Join us for pre-conference workshops designed to deepen your understanding of key economic concepts and methodologies. 
                The workshops will feature three sessions covering advanced topics in Economics and Finance, offering valuable insights and practical skills.
            </p>

            <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto mb-8">
                <h2 className="text-2xl font-bold mb-4">Workshop Sessions</h2>
                <ol className="list-decimal list-inside mb-4">
                    <li className="mb-6"> 
                        <strong>AI/ML in Economics and Finance</strong> <br/>
                        <span className="font-semibold">Time: 9:30 AM – 1:00 PM</span>
                        <p>This session will explore the applications of Artificial Intelligence and Machine Learning in economics and finance.</p>
                        <p className="font-semibold">Resource Persons:</p>
                        <ul className="list-disc list-inside">
                            <li>Prof. ACV Subramaniam</li>
                            <li>Prof. SK Aziz Ali</li>
                            <li>Prof. Thota Nagaraju</li>
                        </ul>
                        <p className="font-semibold">Topics Covered:</p>
                        <ul className="list-disc list-inside">
                            <li>Latest developments in AI & ML</li>
                            <li>Data pre-processing, Exploratory Data Analysis, and Model Testing</li>
                            <li>Hands-on implementation of AI-ML algorithms</li>
                            <li>Data visualization and the Grammar of Graphics</li>
                        </ul>
                        <p className="font-semibold">Software Used: Python</p>
                    </li>

                    <li className="mb-6"> 
                        <strong>Time Series Econometrics: Practical Applications in Macroeconomics and Finance</strong> <br/>
                        <span className="font-semibold">Time: 2:00 PM – 5:30 PM</span>
                        <p>This session will focus on Time Series Econometrics with practical applications in macroeconomics and finance.</p>
                        <p className="font-semibold">Resource Persons:</p>
                        <ul className="list-disc list-inside">
                            <li>Prof. Sunny Kumar Singh</li>
                            <li>Prof. Nivedita Sinha</li>
                        </ul>
                        <p className="font-semibold">Topics Covered:</p>
                        <ul className="list-disc list-inside">
                            <li>Time Series data characteristics (Trend, Cycle, Seasonality, Error)</li>
                            <li>Stationarity, Unit Root Tests</li>
                            <li>Univariate Models (AR, MA, ARMA, ARIMA)</li>
                            <li>Volatility Modeling (ARCH, GARCH)</li>
                            <li>Multivariate Models (VAR, Co-integration, Error Correction Model)</li>
                        </ul>
                        <p className="font-semibold">Software Used: Python</p>
                    </li>

                    <li className="mb-6">
                        <strong>Causal Inference Techniques: Propensity Score Matching and Applications</strong> <br/>
                        <span className="font-semibold">Time: 2:00 PM – 5:30 PM</span>
                        <p>This session will introduce practical techniques for identifying causal relationships in observational data.</p>
                        <p className="font-semibold">Resource Person:</p>
                        <ul className="list-disc list-inside">
                            <li>Prof. Rishi Kumar</li>
                        </ul>
                        <p className="font-semibold">Topics Covered:</p>
                        <ul className="list-disc list-inside">
                            <li>Introduction to Causal Inference</li>
                            <li>Key Assumptions in Causal Inference</li>
                            <li>Matching Techniques for Causal Estimation</li>
                            <li>Propensity Score Matching (PSM)</li>
                            <li>Application of PSM in Policy Evaluation</li>
                        </ul>
                        <p className="font-semibold">Software Used: STATA</p>
                    </li>
                </ol>

                <p className="text-gray-700 mb-4">
                    <strong>Please Note:</strong> Participants are required to bring their laptops. 
                    <br/>
                    <strong>Schedule:</strong> AI/ML in Economics and Finance (Morning), Parallel Sessions in the Afternoon.
                </p>

                <h2 className="text-2xl font-bold mb-4">Registration Fees (Only for Pre-Conference Workshop)</h2>
                <p className="text-gray-700 mb-4">
                    Research Scholar/Student: ₹1500 + 18% GST <br/>
                    Faculty/Industry Professional/Others: ₹1500 + 18% GST
                </p>

                <h2 className="text-2xl font-bold mb-4">Workshop Registration</h2>
                <p className="text-gray-700 mb-4">
                    To register, visit the <a href="https://forms.gle/uoMCEYs3jdEdRSYM6" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">registration page</a> and fill out the necessary details. Seats are limited, so early registration is encouraged.
                </p>
            </div>
        </div>
    );
};

export default Preconference;
