import React from 'react';

const ProjectsCard = ({ project }) => {
    const { img, title, client, live } = project;
    return (
        <div className="max-w-xs rounded-md shadow-md bg-gray-50 text-gray-800">
            <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
                </div>
                <div className='flex justify-between items-center'>
                    <a href={client} target='_blank'><button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-emerald-500 text-gray-50">Clint Link</button></a>
                    <a href={live} target="_blank"><button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-emerald-500 text-gray-50">Live Link</button></a>
                </div>
            </div>
        </div>
    );
};

export default ProjectsCard;