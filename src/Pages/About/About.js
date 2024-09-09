import React from 'react';
import { FaEnvelope, FaFacebookF, FaGithub, FaLinkedinIn, FaPhone } from 'react-icons/fa';
import pp from '../../Assets/PP/getle_PP.jpg';
import useTitle from '../../MyHooks/useTitle';

const About = () => {
    useTitle('About');
    return (
        <div className='w-[98%] md:w-4/5 mx-auto'>
            <h1 className='text-5xl text-emerald-500 uppercase font-bold text-center'>About me</h1>
            <div className='py-32'>
                <div className="card max-w-lg mx-auto border-2 border-emerald-500 shadow-xl" style={{ boxShadow: '2px 3px 12px rgb(16, 185, 129)' }}><img src={pp} alt="profile" className='w-52 h-[212px] rounded-full border-2 border-emerald-500 -mt-20 mx-auto' />
                    <div className="card-body">
                        <h2 className="card-title text-white text-4xl font-bold justify-center">
                            Kaiser Tanveer
                        </h2>
                        <p className='text-white text-justify mx-auto pt-5 opacity-75 hover:opacity-100 duration-500'>As a skilled MERN Stack Developer, I specialize in building robust and scalable web applications using MongoDB, Express.js, React, and Node.js. My deep passion for coding fuels my commitment to delivering high-quality solutions and driving innovation. I thrive in dynamic environments where I can explore new technologies and contribute to a company’s growth. With a relentless drive to excel, I am dedicated to advancing both the success of the company and my own professional development. Let's create impactful digital experiences together!</p>
                        <div className="mx-auto my-5 text-white">
                            <div className="flex justify-between items-center gap-4">
                                <a className='p-4 text-xl rounded-full hover:bg-emerald-500' style={{ boxShadow: '2px 3px 12px gray' }} href='mailto:kaisertanveer0@gmail.com'><FaEnvelope /></a>
                                <a className='p-4 text-xl rounded-full hover:bg-emerald-500' style={{ boxShadow: '2px 3px 12px gray' }} href='https://web.facebook.com/Kaiser2581' target='_blank'><FaFacebookF /></a>
                                <a className='p-4 text-xl rounded-full hover:bg-emerald-500' style={{ boxShadow: '2px 3px 12px gray' }} href='https://www.linkedin.com/in/kaiser-tanveer/' target='_blank'><FaLinkedinIn /></a>
                                <a className='p-4 text-xl rounded-full hover:bg-emerald-500' style={{ boxShadow: '2px 3px 12px gray' }} href='https://github.com/Kaiser-Tanveer' target='_blank'><FaGithub /></a>
                                <a className='p-4 text-xl rounded-full hover:bg-emerald-500' style={{ boxShadow: '2px 3px 12px gray' }} href='tel: +8801851072581'><FaPhone className='rotate-180' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;