import React from 'react';
import { FaEnvelope, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="border-t border-[color:var(--line-soft)] py-8 text-[12px] text-[color:var(--text-faint)]">
            <div className="w-[92%] max-w-[1100px] mx-auto flex flex-wrap items-center justify-between gap-3">
                <div>&copy; 2026 Kaiser Tanveer — session end.</div>
                <div className="flex gap-3">
                    <a
                        href="mailto:kaisertanveer0@gmail.com"
                        aria-label="Email"
                        className="w-9 h-9 border border-[color:var(--line)] rounded flex items-center justify-center text-[color:var(--text-dim)] hover:text-[color:var(--green)] hover:border-[color:var(--green)] transition-colors"
                    >
                        <FaEnvelope />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/kaiser-tanveer/"
                        target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                        className="w-9 h-9 border border-[color:var(--line)] rounded flex items-center justify-center text-[color:var(--text-dim)] hover:text-[color:var(--green)] hover:border-[color:var(--green)] transition-colors"
                    >
                        <FaLinkedinIn />
                    </a>
                    <a
                        href="https://github.com/Kaiser-Tanveer"
                        target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                        className="w-9 h-9 border border-[color:var(--line)] rounded flex items-center justify-center text-[color:var(--text-dim)] hover:text-[color:var(--green)] hover:border-[color:var(--green)] transition-colors"
                    >
                        <FaGithub />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;