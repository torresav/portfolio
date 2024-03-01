"use client";

import React, { useState, useEffect } from "react";

import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

import DownloadResumeButton from "../components/DownloadResumeButton";

export default function Resume() {
    const pdf = "/aaron_torres_resume.pdf";

    // State to track the width of the window
    const [width, setWidth] = useState(0);

    // useEffect to update the width state when the component mounts
    useEffect(() => {
        // Function to update the width state
        const updateWidth = () => {
            setWidth(window.innerWidth);
        };

        // Call the function to update width when the component mounts
        updateWidth();

        // Add event listener to update width when window is resized
        window.addEventListener("resize", updateWidth);

        // Cleanup function to remove event listener when component unmounts
        return () => {
            window.removeEventListener("resize", updateWidth);
        };
    }, []);

    return (
        <div className="max-w-6xl mx-auto py-28">
            {/* Render the DownloadResumeButton component */}
            <DownloadResumeButton filePath={pdf} />
            {/* Render the Document component from react-pdf */}
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mt-5 mb-5">
                <Document file={pdf}>
                    {/* Render the Page components for each page in the PDF */}
                    {Array.from(new Array(2), (item, index) => (
                        <Page
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            width={width} // Set the width to the width of the viewer
                            scale={0.82} // Adjust the scale factor as needed
                        />
                    ))}
                </Document>
            </div>
            {/* Render the DownloadResumeButton component again */}
            <DownloadResumeButton filePath={pdf} />
        </div>
    );
}
