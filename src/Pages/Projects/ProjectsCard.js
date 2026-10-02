import React from 'react';
import { Link } from 'react-router-dom';
import { FaSatelliteDish, FaExternalLinkAlt } from 'react-icons/fa';

// Scoped styles for the breach-card scan/reveal effect.
// No tailwind.config changes needed — kept local to this file.
const BreachStyles = () => (
    <style>{`
        .bc-media { position: relative; overflow: hidden; }
        .bc-media img {
            filter: grayscale(0.55) brightness(0.5) contrast(1.15) sepia(0.3) hue-rotate(65deg) saturate(2.4);
            transition: filter 0.4s ease;
        }
        .bc-card:hover .bc-media img,
        .bc-card:focus-within .bc-media img {
            filter: none;
        }
        .bc-scan {
            position: absolute;
            left: 0; right: 0; height: 2px;
            background: linear-gradient(90deg, transparent, #3CFF9A, transparent);
            box-shadow: 0 0 10px 2px rgba(60,255,154,0.6);
            animation: bc-sweep 3.2s linear infinite;
            opacity: 0.85;
        }
        @keyframes bc-sweep {
            0%   { top: -5%; }
            100% { top: 105%; }
        }
        .bc-grid-overlay {
            position: absolute; inset: 0; pointer-events: none;
            background-image:
                linear-gradient(rgba(60,255,154,0.06) 1px, transparent 1px),
                linear-gradient(90deg, rgba(60,255,154,0.06) 1px, transparent 1px);
            background-size: 22px 22px;
            opacity: 0.5;
        }
        .bc-tag {
            opacity: 0;
            transform: translateY(-4px);
            transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .bc-card:hover .bc-tag,
        .bc-card:focus-within .bc-tag {
            opacity: 1;
            transform: translateY(0);
            animation: bc-flicker 0.6s steps(6) 1;
        }
        @keyframes bc-flicker {
            0% { opacity: 0; } 20% { opacity: 1; } 35% { opacity: 0.3; }
            50% { opacity: 1; } 70% { opacity: 0.5; } 100% { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
            .bc-scan { animation: none; display: none; }
            .bc-media img { filter: none; }
            .bc-tag { animation: none; }
        }
    `}</style>
);

// Builds a decorative, deterministic fake IP from the Mongo _id — flavor
// text only, not a real address, consistent per project so it doesn't
// reshuffle on every render.
const fakeIp = (id = '') => {
    const s = String(id);
    const seg = (start, len) => {
        let n = 0;
        for (let i = start; i < start + len && i < s.length; i++) n += s.charCodeAt(i);
        return n % 255;
    };
    return `10.0.${seg(0, 4)}.${seg(4, 4)}`;
};

const truncate = (text = '', max = 90) =>
    text.length > max ? `${text.slice(0, max)}…` : text;

// Your DB documents don't consistently use one field name for the live URL
// yet — this checks the common ones so the button works as soon as any of
// them is set, without needing another round of edits.
const resolveLiveLink = (project) =>
    project.liveLink || project.live || project.link || project.url || project.website || null;

const ProjectCard = ({ project, index = 0 }) => {
    const { _id, title, img, details } = project;
    const liveLink = resolveLiveLink(project);

    return (
        <div className="bc-card group border border-hack-line rounded-lg bg-hack-panel overflow-hidden">
            <BreachStyles />
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-hack-line bg-hack-panel2 text-[11px] text-hack-textFaint">
                <span>
                    target_{String(index + 1).padStart(2, '0')} // {fakeIp(_id)}
                </span>
                <span className="flex items-center gap-1.5 text-hack-green">
                    <FaSatelliteDish /> status: deployed
                </span>
            </div>

            <div className="bc-media aspect-video">
                <img
                    src={img}
                    alt={`${title} preview`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                />
                <div className="bc-grid-overlay" />
                <div className="bc-scan" />
                <span className="bc-tag absolute top-3 right-3 text-[11px] font-bold text-hack-green bg-black/70 px-2 py-1 rounded border border-hack-green/50">
                    ACCESS_GRANTED
                </span>
            </div>

            <div className="p-5">
                <h3 className="text-lg font-semibold text-hack-greenBright">{title}</h3>
                <p className="text-sm text-hack-textDim mt-1.5">{truncate(details)}</p>

                <div className="mt-5 flex flex-wrap gap-3">
                    {liveLink ? (
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-bold bg-hack-green text-[#031007] rounded px-4 py-2.5"
                        >
                            visit_live() <FaExternalLinkAlt className="text-[10px]" />
                        </a>
                    ) : (
                        <span className="inline-flex items-center gap-2 text-xs text-hack-textFaint border border-hack-line rounded px-4 py-2.5">
                            live_link_not_set
                        </span>
                    )}
                    <Link
                        to={`/api/project/${_id}`}
                        className="inline-flex items-center gap-2 text-xs font-semibold border border-hack-line text-hack-green rounded px-4 py-2.5"
                    >
                        decrypt_file()
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;