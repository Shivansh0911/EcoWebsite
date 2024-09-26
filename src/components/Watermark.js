// src/components/Watermark.js
import React from "react";

const Watermark = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-8xl font-bold text-gray-300 opacity-50 transform rotate-12 animate-fadeInOut">
               ACEF
            </span>
        </div>
    );
};

export default Watermark;
