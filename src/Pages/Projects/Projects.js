import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useTitle from '../../MyHooks/useTitle';
import Spinner from '../Spinner/Spinner';
import ProjectCard from './ProjectsCard';

const Projects = () => {
    useTitle('Projects');

    const { data: projects = [], isLoading, isError } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const res = await fetch('https://portfolio-server-bay-seven.vercel.app/api/projects');
            if (!res.ok) throw new Error('Failed to load projects');
            return res.json();
        },
    });

    return (
        <div id="projects" className="w-[92%] lg:w-5/6 mx-auto mb-16 pt-10">
            <div className="text-xs text-hack-textFaint mb-3.5">
                <span className="text-hack-green">$</span> nmap --scan ./projects
            </div>
            <h2 className="text-2xl md:text-3xl text-hack-greenBright font-semibold mb-2">
                Selected work
            </h2>
            <p className="text-sm text-hack-textDim mb-9">
                {isLoading
                    ? 'scanning network…'
                    : isError
                    ? 'scan failed — target unreachable'
                    : `${projects.length} target${projects.length === 1 ? '' : 's'} found`}
            </p>

            {isLoading && (
                <div className="py-16">
                    <Spinner />
                </div>
            )}

            {isError && (
                <div className="border border-hack-line rounded-lg bg-hack-panel p-8 text-center text-sm text-hack-textDim">
                    Couldn't reach the project server. Try again in a moment.
                </div>
            )}

            {!isLoading && !isError && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={project._id} project={project} index={index} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Projects;