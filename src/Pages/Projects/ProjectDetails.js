import React, { useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData, useNavigation, Link } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import Zoom from 'react-reveal';
import { FaExternalLinkAlt } from 'react-icons/fa';

const resolveLiveLink = (info) =>
    info.liveLink || info.live || info.link || info.url || info.website || null;

const ProjectDetails = () => {
    const info = useLoaderData();
    const navigation = useNavigation();

    const { title, detail2, detail3, img, img2, img3, details } = info;
    const liveLink = resolveLiveLink(info);

    const images = [
        { id: 1, value: img },
        { id: 2, value: img2 },
        { id: 3, value: img3 },
    ];
    const [sliderImg, setSliderImg] = useState(images[0]);

    const imgHandler = (index) => {
        setSliderImg(images[index]);
    };

    if (navigation.state === 'loading') {
        return <Spinner />;
    }

    return (
        <div className="w-[92%] md:w-4/5 mx-auto mb-32 pt-10">
            <Link
                to="/api/projects"
                className="inline-block text-xs text-hack-textFaint hover:text-hack-green mb-5"
            >
                ← back to ./projects
            </Link>

            <div className="text-xs text-hack-textFaint mb-3">
                <span className="text-hack-green">$</span> cat ./projects/{title?.toLowerCase().replace(/\s+/g, '_')}.log
            </div>

            <Zoom>
                <h2 className="text-center lg:text-left text-3xl md:text-4xl uppercase text-hack-greenBright font-semibold pb-8">
                    {title}
                </h2>
            </Zoom>

            <section className="grid lg:grid-cols-2 gap-10 p-5 md:p-8 rounded-lg border border-hack-line bg-hack-panel items-start">
                <div>
                    <div className="border border-hack-line rounded-lg overflow-hidden">
                        <div className="flex items-center gap-1.5 px-3.5 py-2.5 border-b border-hack-line bg-hack-panel2">
                            <i className="w-2.5 h-2.5 rounded-full bg-[#2A3B32] inline-block" />
                            <i className="w-2.5 h-2.5 rounded-full bg-[#2A3B32] inline-block" />
                            <i className="w-2.5 h-2.5 rounded-full bg-[#2A3B32] inline-block" />
                            <span className="ml-2 text-xs text-hack-textFaint">preview.jpg</span>
                        </div>
                        <PhotoProvider>
                            <PhotoView src={sliderImg.value}>
                                <img
                                    alt={title}
                                    src={sliderImg.value}
                                    className="w-full h-96 object-cover cursor-zoom-in"
                                />
                            </PhotoView>
                        </PhotoProvider>
                    </div>

                    <div className="flex flex-row justify-center gap-4 mt-5 border border-hack-lineSoft rounded-lg py-4">
                        {images.map((singleImg, i) => (
                            <button
                                key={singleImg.id}
                                onClick={() => imgHandler(i)}
                                className={`rounded-md overflow-hidden border-2 transition-colors ${
                                    sliderImg.id === singleImg.id ? 'border-hack-green' : 'border-hack-line'
                                }`}
                            >
                                <img
                                    src={singleImg.value}
                                    alt=""
                                    className="max-h-16 max-w-28 object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="text-hack-text">
                    <div className="text-xs text-hack-amber mb-3">## project_details</div>

                    {liveLink ? (
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-bold bg-hack-green text-[#031007] rounded px-4 py-2.5 mb-6"
                        >
                            visit_live() <FaExternalLinkAlt className="text-[10px]" />
                        </a>
                    ) : (
                        <span className="inline-flex items-center gap-2 text-xs text-hack-textFaint border border-hack-line rounded px-4 py-2.5 mb-6">
                            live_link_not_set
                        </span>
                    )}

                    <h3 className="text-xl font-semibold text-hack-greenBright mb-5">
                        Breakdown
                    </h3>
                    <ul className="space-y-3.5">
                        {[details, detail2, detail3].filter(Boolean).map((line, i) => (
                            <li
                                key={i}
                                className="flex gap-3 text-sm text-hack-textDim border-b border-dashed border-hack-lineSoft pb-3.5"
                            >
                                <span className="text-hack-green">{'>'}</span>
                                {line}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetails;