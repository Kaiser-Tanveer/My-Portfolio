import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Companies = () => {
    return (
        <div className='w-5/6 mx-auto mb-24'>
            <h1 className="text-5xl text-gray-100 font-bold tracking-wider uppercase pb-6">Career Highlights</h1>
            <div className="flex text-white p-10 rounded-lg border-2 border-emerald-500"
                style={{ boxShadow: '2px 3px 12px rgb(16, 185, 129)' }}
            >
                {/* Left Section */}
                <div className="w-2/3 pr-6">
                    <div>
                        <p className="mb-2">
                            <span className="text-xl font-bold">Software Engineer</span>
                            &mdash; 
                            <a 
                                href="https://www.ctrlcampus.com/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-emerald-400 hover:underline"
                            >
                                CtrlCampus Pvt. Ltd
                                <FaExternalLinkAlt className="inline-block ml-1 text-sm" />
                            </a>
                        </p>
                        <p className="flex items-center mb-2 opacity-70">
                            <HiLocationMarker className="mr-2" />
                            <address className="">Ameenpur, Hyderabad, India</address>
                        </p>
                        <p className="mb-6 font-semibold opacity-75">May 2023 - May 2024</p>

                        {/* Responsibilities */}
                        <h2 className="text-lg font-semibold text-emerald-300 mb-1">Responsibilities:</h2>
                        <ul className="list-disc ml-6 mb-6 opacity-90">
                            <li>Designed and implemented responsive UI components using React.js and TypeScript.</li>
                            <li>Collaborated with cross-functional teams to deliver efficient frontend solutions.</li>
                            <li>Integrated RESTful APIs for dynamic data rendering and real-time updates.</li>
                            <li>Developed reusable code and libraries to accelerate future development.</li>
                        </ul>

                        {/* Key Contributions */}
                        <h2 className="text-lg font-semibold text-emerald-300 mb-1">Key Contributions:</h2>
                        <ul className="list-disc ml-6 mb-6 opacity-90">
                            <li>Led the development of a user-friendly admin dashboard, enhancing user engagement by 30%.</li>
                            <li>Implemented complex state management using Redux and Context API.</li>
                        </ul>

                        {/* Skills */}
                        <h2 className="text-lg font-semibold text-emerald-300 mb-1">Skills Utilized:</h2>
                        <p className="opacity-90">
                            React.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, BootStrap, Redux, Git, RESTful APIs, Agile Methodology
                        </p>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-1/3 flex items-center justify-center">
                    <iframe
                        src="https://drive.google.com/file/d/1IZU_3L01LyGjuKbmm71j0HnO2G0rHVN6/preview"
                        title="Experience Letter"
                        width="100%"
                        height="500px"
                        className="border rounded-lg shadow-lg"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Companies;
