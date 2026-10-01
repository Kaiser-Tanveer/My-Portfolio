import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { FaExternalLinkAlt } from 'react-icons/fa';
import resume from '../../Assets/KaiserTanveerResume.pdf';

const Companies = () => {
    return (
        <div className="w-[92%] max-w-[1100px] mx-auto mb-20">
            <div className="text-[12px] text-[color:var(--text-faint)] mb-3">
                <span className="text-[color:var(--green)]">$</span> cat experience.log
            </div>
            <h2 className="text-[color:var(--green-bright)] font-semibold text-[clamp(1.5rem,3vw,2rem)] mb-9">
                Where I've worked
            </h2>

            <div className="win">
                <div className="win-bar"><i></i><i></i><i></i><div className="win-title">experience.log</div></div>
                <div className="p-6 md:p-8">
                    <div className="grid md:grid-cols-[130px_1fr] gap-7">
                        <div className="text-[12px] text-[color:var(--text-faint)] pt-1">2023.05 &rarr;<br />2024.05</div>
                        <div>
                            <h3 className="text-[color:var(--green-bright)] font-semibold text-lg">Software Engineer</h3>
                            <a
                                href="https://www.ctrlcampus.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[color:var(--green)] text-[13px] mt-1 inline-block"
                            >
                                CtrlCampus Pvt. Ltd <FaExternalLinkAlt className="inline-block ml-1 text-[10px]" />
                            </a>
                            <p className="flex items-center gap-1.5 text-[12px] text-[color:var(--text-faint)] my-2">
                                <HiLocationMarker /> Ameenpur, Hyderabad, India
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 my-5">
                                <div>
                                    <div className="text-[12px] text-[color:var(--amber)] mb-2">## what i did</div>
                                    <ul className="list-disc ml-4 text-[13px] text-[color:var(--text-dim)] space-y-1.5">
                                        <li>Built responsive UI components with React and TypeScript</li>
                                        <li>Integrated REST APIs for real-time data rendering</li>
                                        <li>Worked cross-functionally to ship on schedule</li>
                                    </ul>
                                </div>
                                <div>
                                    <div className="text-[12px] text-[color:var(--amber)] mb-2">## what it led to</div>
                                    <ul className="list-disc ml-4 text-[13px] text-[color:var(--text-dim)] space-y-1.5">
                                        <li>Led an admin dashboard, lifting engagement 30%</li>
                                        <li>Introduced Redux and Context API for complex state</li>
                                        <li>Wrote reusable components for faster future builds</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {['react.js', 'typescript', 'redux', 'tailwind', 'bootstrap', 'git', 'rest-api', 'agile'].map(c => (
                                    <span key={c} className="chip">{c}</span>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-3 mt-6">
                                <a
                                    href="https://drive.google.com/file/d/1IZU_3L01LyGjuKbmm71j0HnO2G0rHVN6/view?usp=sharing"
                                    target="_blank" rel="noopener noreferrer"
                                    className="text-[13px] border border-[color:var(--line)] text-[color:var(--green)] rounded-md px-5 py-2.5 hover:border-[color:var(--green)] transition-colors"
                                >
                                    view experience_letter.pdf &#8599;
                                </a>
                                <a
                                    href={resume}
                                    download
                                    className="text-[13px] border border-[color:var(--line)] text-[color:var(--green)] rounded-md px-5 py-2.5 hover:border-[color:var(--green)] transition-colors"
                                >
                                    download resume.pdf &darr;
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