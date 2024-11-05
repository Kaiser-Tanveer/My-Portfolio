import React from 'react';
import bg from '../../Assets/PP/bannerBg.jpg';
import BtnComponent from '../../Components/BtnComponent/BtnComponent';
import { HiOutlineDownload } from 'react-icons/hi';
import { Typewriter } from 'react-simple-typewriter';
import resume from '../../Assets/KaiserTanveerResume.pdf';
import useTitle from '../../MyHooks/useTitle';
import { Zoom } from 'react-reveal';
import {
    FaEnvelope,
    FaFacebookF,
    FaGithub,
    FaLinkedinIn,
    FaPhone,
} from 'react-icons/fa';

const socialLinks = [
    { href: 'mailto:kaisertanveer0@gmail.com', icon: <FaEnvelope /> },
    { href: 'https://web.facebook.com/Kaiser2581', icon: <FaFacebookF /> },
    { href: 'https://www.linkedin.com/in/kaiser-tanveer/', icon: <FaLinkedinIn /> },
    { href: 'https://github.com/Kaiser-Tanveer', icon: <FaGithub /> },
    { href: 'tel:+8801851072581', icon: <FaPhone className="rotate-180" /> },
];

const Banner = () => {
    useTitle('Home');

    return (
        <div
            className="w-full md:w-5/6 mb-24 mx-auto rounded-lg"
            style={{ boxShadow: '2px 3px 12px rgb(16, 185, 129)' }}
        >
            <div
                className="hero h-full rounded-lg"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.52), #000000), url(${bg})`,
                }}
            >
                <div className="hero-overlay opacity-70 rounded-lg"></div>
                <div className="hero-content text-center text-white grid items-center justify-center lg:grid-cols-2 rounded-lg">
                    <img
                        src="https://i.ibb.co/zJFvfJ4/My-PP.jpg"
                        alt="myProfile"
                        className="lg:w-3/5 lg:-ml-0 rounded-t-lg mx-auto shadow-lg"
                        style={{ boxShadow: 'inset 2px 3px 12px rgb(16, 185, 129)' }}
                    />
                    <article className="text-center lg:text-left lg:-ml-[170px] lg:w-[60vw] pr-5">
                        <Zoom>
                            <h1 className="mb-5 text-5xl font-bold mt-6 text-emerald-500">
                                Hi! <span className="text-white">I'm Kaiser Tanveer</span>
                            </h1>
                        </Zoom>
                        <h1 className="mb-5 text-5xl font-bold">
                            I'm a{' '}
                            <span className="text-emerald-500">
                                <Typewriter
                                    words={[
                                        'Web Developer',
                                        'Front-End Developer',
                                        'MERN Stack Developer',
                                        'React Developer',
                                    ]}
                                    loop={5}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h1>
                        <div className="w-full lg:w-[38em]">
                            <p className="ml-4 md:ml-0 mb-5 opacity-75 hover:opacity-100 cursor-text text-justify">
                                I am a dedicated Web Application Developer with a deep passion for
                                crafting high-quality code. My enthusiasm for coding drives me to
                                contribute effectively to a company where I can explore new
                                opportunities and grow both professionally and personally. I am
                                committed to working diligently to advance the company’s success
                                and my own skills. Let’s build something amazing together!
                            </p>
                        </div>
                        <div className="flex mb-5 ml-3 md:ml-0 justify-center lg:justify-start">
                            {socialLinks.map(({ href, icon }, index) => (
                                <a
                                    key={index}
                                    className="p-4 text-xl ml-5 first:ml-0 rounded-full hover:bg-emerald-500 duration-500"
                                    style={{ boxShadow: '2px 3px 12px gray' }}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                        <div className="mx-auto w-full ml-2 md:ml-0 lg:mr-auto my-4">
                            <a href={resume} download>
                                <BtnComponent>
                                    Download Resume <HiOutlineDownload className="ml-3" />
                                </BtnComponent>
                            </a>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default Banner;
