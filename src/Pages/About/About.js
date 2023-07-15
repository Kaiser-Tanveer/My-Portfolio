import React from 'react';
import { FaEnvelope, FaFacebookF, FaGithub, FaInbox, FaLinkedinIn, FaPhone } from 'react-icons/fa';
import pp from '../../Assets/PP/getle_PP.jpg';
import useTitle from '../../MyHooks/useTitle';

const About = () => {
    useTitle('About');
    return (
        <div className='w-full md:w-4/5 mx-auto'>
            <h1 className='text-5xl text-emerald-500 uppercase font-bold text-center'>About me</h1>
            <div className='py-32'>
                <div className="card max-w-lg mx-auto border-2 border-emerald-500 shadow-xl" style={{ boxShadow: '2px 3px 12px rgb(16, 185, 129)' }}><img src={pp} alt="profile" className='w-52 h-56 rounded-full border-2 border-emerald-500 -mt-20 mx-auto' />
                    <div className="card-body">
                        <h2 className="card-title text-white text-4xl font-bold justify-center">
                            Kaiser Tanveer
                        </h2>
                        <p className='text-white text-justify lg:w-3/5 mx-auto pt-5'>I am a MERN Stack Developer. I am comfortable to develop Web Applications. I am passionate about my code and to contribute a company where I get opportunity to explore. I will code hardly to grow up the company and myself.</p>
                        <div className="card-actions mx-auto mt-5 text-white">
                            <div className="flex mb-5 flex-grow lg:justify-start">
                                <a className='p-4 text-xl ml-5 rounded-full hover:bg-emerald-500' style={{ boxShadow: '2px 3px 12px gray' }} href='mailto:kaisertanveer0@gmail.com'><FaEnvelope /></a>
                                {/* <a className='p-4 text-xl ml-5 rounded-full hover:bg-emerald-500' style={{ boxShadow: '2px 3px 12px gray' }} href='https://web.facebook.com/Kaiser2581' target='_blank'><FaFacebookF /></a> */}
                                <a className='p-4 text-xl ml-5 rounded-full hover:bg-emerald-500' style={{ boxShadow: '2px 3px 12px gray' }} href='https://www.linkedin.com/in/kaiser-tanveer/' target='_blank'><FaLinkedinIn /></a>
                                <a className='p-4 text-xl ml-5 rounded-full hover:bg-emerald-500' style={{ boxShadow: '2px 3px 12px gray' }} href='https://github.com/Kaiser-Tanveer' target='_blank'><FaGithub /></a>
                                <a className='p-4 text-xl ml-5 rounded-full hover:bg-emerald-500' style={{ boxShadow: '2px 3px 12px gray' }} href='tel: +8801851072581'><FaPhone className='rotate-180' /></a>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    );
};

export default About;