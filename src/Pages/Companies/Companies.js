import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Companies = () => {
    return (
        <div className="w-[92%] lg:w-5/6 mx-auto mb-16">
            <div className="text-xs text-hack-textFaint mb-3.5">
                <span className="text-hack-green">$</span> cat experience.log
            </div>
            <h2 className="text-2xl md:text-3xl text-hack-greenBright font-semibold mb-9">
                Where I've worked
            </h2>

            <div className="border border-hack-line rounded-lg overflow-hidden bg-hack-panel">
                <div className="flex items-center gap-1.5 px-3.5 py-2.5 border-b border-hack-line bg-hack-panel2">
                    <i className="w-2.5 h-2.5 rounded-full bg-[#2A3B32] inline-block" />
                    <i className="w-2.5 h-2.5 rounded-full bg-[#2A3B32] inline-block" />
                    <i className="w-2.5 h-2.5 rounded-full bg-[#2A3B32] inline-block" />
                    <span className="ml-2 text-xs text-hack-textFaint">experience.log</span>
                </div>

                <div className="p-5 md:p-8">
                    <div className="grid md:grid-cols-[110px_1fr] gap-7">
                        <div className="text-xs text-hack-textFaint pt-1">2023.05 →<br />2024.05</div>
                        <div>
                            <h3 className="text-lg text-hack-greenBright font-semibold">Software Engineer</h3>
                            <a
                                href="https://www.ctrlcampus.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-hack-green text-sm mt-1 inline-flex items-center gap-1.5"
                            >
                                CtrlCampus Pvt. Ltd <FaExternalLinkAlt className="text-[10px]" />
                            </a>
                            <p className="text-xs text-hack-textFaint my-2">Ameenpur, Hyderabad, India</p>

                            <div className="grid md:grid-cols-2 gap-6 my-5">
                                <div>
                                    <div className="text-xs text-hack-amber mb-2">## what i did</div>
                                    <ul className="list-disc ml-4 text-hack-textDim text-sm space-y-1.5 marker:text-hack-greenDim">
                                        <li>Built responsive UI components with React and TypeScript</li>
                                        <li>Integrated REST APIs for real-time data rendering</li>
                                        <li>Worked cross-functionally to ship on schedule</li>
                                    </ul>
                                </div>
                                <div>
                                    <div className="text-xs text-hack-amber mb-2">## what it led to</div>
                                    <ul className="list-disc ml-4 text-hack-textDim text-sm space-y-1.5 marker:text-hack-greenDim">
                                        <li>Led an admin dashboard, lifting engagement 30%</li>
                                        <li>Introduced Redux and Context API for complex state</li>
                                        <li>Wrote reusable components for faster future builds</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-1.5">
                                {['react.js', 'typescript', 'redux', 'tailwind', 'bootstrap', 'git', 'rest-api', 'agile'].map(s => (
                                    <span key={s} className="text-[11px] px-2.5 py-1 border border-hack-line rounded text-hack-textDim">
                                        {s}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-3 mt-5 flex-wrap">
                                <a
                                    href="https://drive.google.com/file/d/1IZU_3L01LyGjuKbmm71j0HnO2G0rHVN6/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border border-hack-line text-hack-green text-xs px-4 py-2.5 rounded"
                                >
                                    view experience_letter.pdf ↗
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Companies;