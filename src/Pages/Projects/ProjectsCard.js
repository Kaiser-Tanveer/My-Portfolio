import React from 'react';
import { FaGithub, FaGlobe, FaRegStickyNote } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ProjectsCard = ({ project }) => {
    const { img, title, client, live, _id } = project;

    const buttonLinks = [
        { href: client, icon: <FaGithub className="text-3xl" />, key: 'client' },
        { href: live, icon: <FaGlobe className="text-3xl hover:animate-spin hover:duration-75" />, key: 'live' }
    ];

    return (
        <div
            className="rounded-md lg:relative border-2 border-emerald-500 duration-500 text-white group hover:scale-110"
            style={{ boxShadow: '2px 3px 12px rgb(16, 185, 129)' }}
        >
            <PhotoProvider>
                <PhotoView src={img}>
                    <img
                        src={img}
                        alt="projectImg"
                        className="w-full rounded-t-lg h-72 p-6 border-2 border-b-emerald-500 border-t-0 border-x-0 lg:group-hover:blur-sm"
                    />
                </PhotoView>
            </PhotoProvider>

            <div className="lg:-mt-72 ease-in-out lg:top-0 mx-auto justify-center lg:scale-0 group-hover:scale-90 lg:py-6 duration-1000 flex flex-col p-6 lg:p-10 lg:bg-gray-900 lg:bg-opacity-50 rounded-lg space-y-6 gap-6">
                <h2
                    className="text-4xl text-center text-emerald-500 font-extrabold tracking-wide"
                    style={{ textShadow: '2px 2px white' }}
                >
                    {title}
                </h2>

                <div className="flex justify-between items-center">
                    {buttonLinks.map(({ href, icon, key }) => (
                        <a
                            key={key}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-200 rounded-md shadow-lg"
                        >
                            <p
                                className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md border border-emerald-500 hover:bg-emerald-500 text-emerald-500 hover:text-white hover:scale-110 ease-in-out duration-500"
                                style={{ boxShadow: '2px 3px 5px gray' }}
                            >
                                {icon}
                            </p>
                        </a>
                    ))}
                </div>

                <Link
                    to={`/api/project/${_id}`}
                    className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md border border-emerald-500 lg:bg-gray-200 hover:bg-emerald-500 text-emerald-500 uppercase hover:text-white hover:scale-110 ease-in-out duration-500"
                    style={{ boxShadow: '2px 3px 5px gray' }}
                >
                    Details
                    <FaRegStickyNote className="ml-2" />
                </Link>
            </div>
        </div>
    );
};

export default ProjectsCard;
