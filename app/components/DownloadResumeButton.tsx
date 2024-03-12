import React from "react";

const DownloadResumeButton = () => {
    return (
        <div className="flex items-center justify-center mb-4">
            <a href={process.env.resume} download className="flex items-center px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                <span className="ml-2">Resume/CV</span>
            </a>
        </div>
    );
};

export default DownloadResumeButton;
