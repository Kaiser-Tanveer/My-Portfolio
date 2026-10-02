import React from 'react';
import { FaEnvelope, FaFacebookF, FaGithub, FaLinkedinIn, FaPhone } from 'react-icons/fa';
import useTitle from '../../MyHooks/useTitle';

const socialLinks = [
    { href: 'mailto:kaisertanveer0@gmail.com', icon: FaEnvelope, label: 'Email' },
    { href: 'https://web.facebook.com/Kaiser2581', icon: FaFacebookF, target: '_blank', label: 'Facebook' },
    { href: 'https://www.linkedin.com/in/kaiser-tanveer/', icon: FaLinkedinIn, target: '_blank', label: 'LinkedIn' },
    { href: 'https://github.com/Kaiser-Tanveer', icon: FaGithub, target: '_blank', label: 'GitHub' },
    { href: 'tel:+8801851072581', icon: FaPhone, rotation: 'rotate-180', label: 'Phone' },
];

const About = () => {
    useTitle('About');

    return (
        <div className="w-[92%] lg:w-5/6 mx-auto py-24">
            <div className="text-xs text-hack-textFaint mb-3.5">
                <span className="text-hack-green">$</span> cat about.md
            </div>

            <div className="grid md:grid-cols-[0.9fr_1.3fr] gap-11 items-center max-w-3xl mx-auto md:max-w-none border border-hack-line rounded-lg bg-hack-panel overflow-hidden">
                <img
                    src="https://i.ibb.co.com/1ScX78Y/Profile-FBWithout-BG.png"
                    alt="Kaiser Tanveer"
                    className="w-full h-full object-cover md:aspect-square"
                />
                <div className="text-center md:text-left p-7 md:pr-10">
                    <h2 className="text-3xl font-bold text-hack-greenBright">Kaiser Tanveer</h2>
                    <p className="text-hack-textDim text-sm mt-4 text-justify">
                        As a skilled MERN Stack Developer, I specialize in building robust and scalable
                        web applications using MongoDB, Express.js, React, and Node.js. My deep passion
                        for coding fuels my commitment to delivering high-quality solutions and driving
                        innovation. I thrive in dynamic environments where I can explore new technologies
                        and contribute to a company's growth.
                    </p>
                    <div className="flex justify-center md:justify-start gap-3 mt-6">
                        {socialLinks.map(({ href, icon: Icon, target, rotation, label }) => (
                            <a
                                key={href}
                                href={href}
                                target={target}
                                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                                aria-label={label}
                                className="w-10 h-10 border border-hack-line rounded flex items-center justify-center text-hack-textDim hover:text-hack-green hover:border-hack-green transition-colors"
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