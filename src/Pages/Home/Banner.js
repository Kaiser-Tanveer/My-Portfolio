import React from 'react';
import widePP from '../../Assets/PP/fullPP.png';
import mainPP from '../../Assets/PP/My_PP.png';
import BtnComponent from '../../Components/BtnComponent/BtnComponent';
import { HiOutlineDownload, HiPhoneMissedCall } from 'react-icons/hi';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import resume from '../../Assets/KaiserTanveerResume.pdf';

const Banner = () => {
    return (
        <div className='pb-80 lg:pb-0 w-4/5 mx-auto'>
            <div className="hero h-[80vh]" style={{ backgroundImage: `url(${widePP})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div className="hero-overlay bg-opacity-90"></div>
                <div className="hero-content text-center text-white grid grid-cols-1 lg:grid-cols-2">
                    <article className='mx-auto lg:pl-5 lg:mb-60 text-left lg:w-[60vw]'>
                        <h1 className="mb-5 text-5xl font-bold mt-10 text-emerald-500">Hi! <span className='text-white'>I'm Kaiser Tanveer</span></h1>
                        <h1 className="mb-5 text-5xl font-bold">I'm a <span className='text-emerald-500'>
                            <Typewriter
                                words={['Web Developer', 'Front-End Developer', 'MERN Stack Developer', 'React Developer']}
                                loop={5}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span></h1>
                        <p className="mb-5 lg:w-3/4">I am comfortable to develop Web Applications. I am passionate about my code and to contribute a company where I get opportunity to explore. I will code hardly to grow up the company and myself.</p>
                        <div className="flex mb-20 ">
                            <a className='text-xl ml-5'><FaFacebookF /></a>
                            <a className='text-xl ml-5'><FaLinkedinIn /></a>
                            <a className='text-xl ml-5'><FaGithub /></a>
                        </div>
                        <div className='flex justify-between md:w-1/2 mb-20 lg:mb-0'>
                            <a href={resume} download={resume}>
                                <BtnComponent>Resume <HiOutlineDownload className='ml-3' /></BtnComponent>
                            </a>
                        </div>
                    </article>
                    <img src={mainPP} alt="myProfile" className='w-56 mx-auto lg:mt-[170px] border-2 border-emerald-500 rounded-t-lg p-2 shadow-lg' />
                </div>
            </div>
        </div>
    );
};

export default Banner; <div className="hero h-[80vh]" style={{ backgroundImage: `url(${widePP})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
    <div className="hero-overlay bg-opacity-90"></div>
    <div className="hero-content text-center text-white grid grid-cols-1 lg:grid-cols-2">
        <article className='mx-auto lg:pl-5 lg:mb-60 text-left lg:w-[60vw]'>
            <h1 className="mb-5 text-5xl font-bold text-emerald-500">Hi! <span className='text-white'>I'm Kaiser Tanveer</span></h1>
            <h1 className="mb-5 text-5xl font-bold">I'm a <span className='text-emerald-500'>
                <Typewriter
                    words={['Web Developer', 'Front-End Developer', 'MERN Stack Developer', 'React Developer']}
                    loop={5}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </span></h1>
            <p className="mb-20 lg:w-3/4">I am comfortable to develop Web Applications. I am passionate about my code and to contribute a company where I get opportunity to explore. I will code hardly to grow up the company and myself.</p>
            <div className='flex justify-between md:w-1/2 mb-20 lg:mb-0'>
                <a href="https://drive.google.com/file/d/1vD1kBtLfLtw4xAQDK2X0AgEpZORYgw0S/view?usp=sharing" target='_blank'>
                    <BtnComponent>Resume <HiOutlineDownload className='ml-3' /></BtnComponent>
                </a>
                <a href="mailto:kaisertanveer0@gmail.com" target='_blank'><BtnComponent>Contact Me<HiPhoneMissedCall className='ml-3' /></BtnComponent></a>
            </div>
        </article>
        <img src={mainPP} alt="myProfile" className='w-56 mx-auto lg:mt-[170px] border-2 border-emerald-500 rounded-t-lg p-2 shadow-lg' />
    </div>
</div>