import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import useTitle from '../../MyHooks/useTitle';

const API_BASE = 'https://portfolio-server-bay-seven.vercel.app/api/projects';

const Projects = () => {
    useTitle('Projects');

    const { data: projects = [], isLoading, isError } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const res = await fetch(API_BASE);
            if (!res.ok) throw new Error('Failed to load projects');
            return res.json();
        },
    });

    return (
        <div className="w-[92%] max-w-[1100px] mx-auto pt-16 pb-24">
            <div className="text-[12px] text-[color:var(--text-faint)] mb-3">
                <span className="text-[color:var(--green)]">$</span> ls -la ./projects
            </div>
            <h2 className="text-[color:var(--green-bright)] font-semibold text-[clamp(1.5rem,3vw,2rem)] mb-9">
                Selected work
            </h2>

            <div className="win">
                <div className="win-bar"><i></i><i></i><i></i><div className="win-title">~/projects</div></div>

                <div className="hidden md:grid grid-cols-[70px_1fr_130px_90px] gap-3 px-5 py-3 text-[11px] text-[color:var(--text-faint)] border-b border-[color:var(--line)]">
                    <div>perms</div><div>name</div><div>desc</div><div>action</div>
                </div>

                {isLoading && (
                    <div className="p-6 text-[13px] text-[color:var(--text-dim)]">loading directory contents...</div>
                )}
                {isError && (
                    <div className="p-6 text-[13px] text-[color:var(--amber)]">could not reach ./projects — try again shortly.</div>
                )}

                {projects.map((project, i) => (
                    <div
                        key={project._id || i}
                        className={`grid md:grid-cols-[70px_1fr_130px_90px] gap-2 md:gap-3 px-5 py-4 items-center text-[13px] hover:bg-[rgba(60,255,154,0.04)] transition-colors ${
                            i !== projects.length - 1 ? 'border-b border-[color:var(--line-soft)]' : ''
                        }`}
                    >
                        <div className="hidden md:block text-[11px] text-[color:var(--text-faint)]">drwxr-x</div>
                        <div>
                            <div className="text-[color:var(--green-bright)] font-semibold mb-1">
                                {(project.name || project.title || 'project').toLowerCase().replace(/\s+/g, '-')}/
                            </div>
                            <div className="text-[12.5px] text-[color:var(--text-dim)]">
                                {project.description || project.details || 'No description provided.'}
                            </div>
                        </div>
                        <div className="hidden md:block text-[12px] text-[color:var(--text-faint)]">live</div>
                        <div className="flex md:justify-end gap-3 mt-2 md:mt-0">
                            {project.liveLink && (
                                <a
                                    href={project.liveLink}
                                    target="_blank" rel="noopener noreferrer"
                                    className="text-[12px] text-[color:var(--green)]"
                                >
                                    open &#8599;
                                </a>
                            )}
                            <Link to={`/api/project/${project._id}`} className="text-[12px] text-[color:var(--text-dim)] hover:text-[color:var(--green)]">
                                details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;