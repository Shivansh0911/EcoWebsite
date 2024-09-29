import React from 'react';

const Preconference = () => {
    return (
        <div className="preconference-container bg-white min-h-screen p-8" data-aos="fade-up">
            <h1 className="text-5xl font-bold text-center mb-8">Pre-Conference Workshops</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-8">
                Join us for a series of pre-conference workshops designed to deepen your understanding of key economic concepts and methodologies. 
                The workshops will cover advanced topics in Economics and Finance, providing valuable insights and practical skills.
            </p>

            <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto mb-8">
                <h2 className="text-2xl font-bold mb-4">Workshop Schedule</h2>
                <ol className="list-decimal list-inside mb-4">
                    <li>
                        <strong>AI/ML in Economics and Finance</strong>
                        <p>This session will explore the applications of Artificial Intelligence and Machine Learning in the economics and finance sectors, covering a range of topics. It will begin with an introduction to machine learning in finance, followed by discussions on supervised learning applications. The session will also cover unsupervised learning techniques, including clustering in finance, and delve into reinforcement learning and its use in automated trading. Additionally, the role of machine learning in risk management will be discussed, providing participants with a comprehensive understanding of AI/ML applications in these fields.</p>
                    </li>
                    <li>
                        <strong>Time Series Econometrics: Practical Applications in Macroeconomics and Finance</strong>
                        <p>This workshop will concentrate on Time Series Econometrics as it applies to macroeconomics and finance, emphasizing practical applications. Participants will gain insights into the fundamental properties of time series data and explore various modeling techniques. The session will also include hands-on demonstrations using R, allowing participants to implement time series models with real-world examples from macroeconomic and financial data.</p>
                    </li>
                    <li>
                        <strong>Causal Inference Techniques: Propensity Score Matching and Applications</strong>
                        <p>This session will introduce the fundamental concepts of Causal Inference and focus on practical techniques for identifying causal relationships in observational data. Key topics include defining causal effects using potential outcomes and understanding treatment effects in both experimental and non-experimental settings. The session will cover Propensity Score Matching (PSM), including an introduction to propensity scores and their role in balancing covariates in observational studies. Various matching techniques such as nearest neighbor, kernel, and caliper matching will be discussed along with practical challenges like selection bias and confounding factors.</p>
                    </li>
                </ol>
                <h2 className="text-2xl font-bold mb-4">Registration for Workshops</h2>
                <p className="text-gray-700 mb-4">
                    To register for the workshops, please visit the registration page on our website and fill out the necessary details. Seats are limited, so early registration is encouraged.
                </p>
                <h2 className="text-lg font-bold mt-4">Registration Fees:</h2>
                <ul className="list-disc list-inside">
                    <li>Research Scholar/Student: ₹1500 + 18% GST</li>
                    <li>Faculty/Industry Professional/Others: ₹1500 + 18% GST</li>
                </ul>
            </div>
        </div>
    );
};

export default Preconference;
