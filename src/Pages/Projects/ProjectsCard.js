import React from 'react';
import { FaGithub, FaGlobe, FaRegStickyNote } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ProjectsCard = ({ project }) => {
    const { img, title, client, live, _id } = project;
    return (
        <div className="rounded-md lg:relative border-2 border-emerald-500 duration-500 text-white group-hover:blur-sm hover:!blur-none group-hover:scale-90 hover:!scale-100" style={{ boxShadow: '2px 3px 12px rgb(16, 185, 129)' }}>
            <PhotoProvider>
                <PhotoView src={img}>
                    <img src={img} alt="projectImg" className="w-full rounded-t-lg h-72 p-6 border-2 border-b-emerald-500 border-t-0 border-x-0 group-hover:blur-sm" />
                </PhotoView>
            </PhotoProvider>
            <div className="lg:absolute lg:top-0 lg:left-[22%] lg:scale-0 group-hover:scale-100 duration-500 flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl lg:text-emerald-500 font-semibold tracking-wide">{title}</h2>
                </div>
                <div className='flex justify-between items-center'>
                    <a href={client} target='_blank'><p type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md border border-emerald-500 hover:bg-emerald-500 text-emerald-500 hover:text-white" style={{ boxShadow: '2px 3px 5px gray' }}><FaGithub className='text-3xl' /></p></a>
                    <a href={live} target="_blank"><p type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md border border-emerald-500 hover:bg-emerald-500 text-emerald-500 hover:text-white" style={{ boxShadow: '2px 3px 5px gray' }}><FaGlobe className='text-3xl hover:animate-spin hover:duration-75' />
                    </p></a>
                </div>
                <Link to={`/project/${_id}`} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md border border-emerald-500 hover:bg-emerald-500 text-emerald-500 uppercase hover:text-white" style={{ boxShadow: '2px 3px 5px gray' }}>details
                    <FaRegStickyNote className='ml-2' />
                </Link>
            </div>
        </div>
    );
};

export default ProjectsCard;