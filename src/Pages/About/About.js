import React from 'react';
import { FaEnvelope, FaFacebookF, FaGithub, FaLinkedinIn, FaPhone } from 'react-icons/fa';
import useTitle from '../../MyHooks/useTitle';

const About = () => {
    useTitle('About');

    const socialLinks = [
        { href: 'mailto:kaisertanveer0@gmail.com', icon: FaEnvelope, label: 'Email' },
        { href: 'https://web.facebook.com/Kaiser2581', icon: FaFacebookF, target: '_blank', label: 'Facebook' },
        { href: 'https://www.linkedin.com/in/kaiser-tanveer/', icon: FaLinkedinIn, target: '_blank', label: 'LinkedIn' },
        { href: 'https://github.com/Kaiser-Tanveer', icon: FaGithub, target: '_blank', label: 'GitHub' },
        { href: 'tel:+8801851072581', icon: FaPhone, rotation: 'rotate-180', label: 'Phone' },
    ];

    return (
        <div className="w-[92%] max-w-[1100px] mx-auto pt-16 pb-24">
            <div className="text-[12px] text-[color:var(--text-faint)] mb-3">
                <span className="text-[color:var(--green)]">$</span> cat about.md
            </div>

            <div className="win">
                <div className="win-bar"><i></i><i></i><i></i><div className="win-title">about.md</div></div>
                <div className="p-8 md:p-10">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-md border border-[color:var(--line)] bg-[color:var(--panel-2)] flex items-center justify-center text-[color:var(--green)] font-bold text-xl">
                            KT
                        </div>
                        <div>
                            <h1 className="text-[color:var(--green-bright)] font-semibold text-2xl">Kaiser Tanveer</h1>
                            <p className="text-[12px] text-[color:var(--text-faint)] m-0">MERN Stack Developer</p>
                        </div>
                    </div>

                    <p className="text-[color:var(--text-dim)] text-[14px] leading-relaxed max-w-[62ch]">
                        As a skilled MERN Stack Developer, I specialize in building robust and scalable web
                        applications using MongoDB, Express.js, React, and Node.js. My deep passion for coding
                        fuels my commitment to delivering high-quality solutions and driving innovation. I thrive
                        in dynamic environments where I can explore new technologies and contribute to a
                        company's growth. With a relentless drive to excel, I am dedicated to advancing both the
                        success of the company and my own professional development. Let's create impactful
                        digital experiences together!
                    </p>

                    <div className="flex gap-3 mt-7">
                        {socialLinks.map(({ href, icon: Icon, target, rotation, label }, idx) => (
                            <a
                                key={idx}
                                href={href}
                                target={target}
                                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                                aria-label={label}
                                className="w-10 h-10 border border-[color:var(--line)] rounded-md flex items-center justify-center text-[color:var(--text-dim)] hover:text-[color:var(--green)] hover:border-[color:var(--green)] transition-colors"
                            >
                                <Icon className={rotation} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;