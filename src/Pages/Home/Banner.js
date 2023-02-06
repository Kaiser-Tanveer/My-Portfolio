import React from 'react';
import bg from '../../Assets/PP/bannerBg.jpg';
import mainPP from '../../Assets/PP/My_PP.png';
import BtnComponent from '../../Components/BtnComponent/BtnComponent';
import { HiOutlineDownload } from 'react-icons/hi';
import { Typewriter } from 'react-simple-typewriter';
import resume from '../../Assets/KaiserTanveerResume.pdf';
import useTitle from '../../MyHooks/useTitle';
import { Zoom } from 'react-reveal';

const Banner = () => {
    useTitle('Home')
    return (
        <div className='w-4/5 mb-24 mx-auto rounded-lg' style={{ boxShadow: '2px 3px 12px rgb(16, 185, 129)' }}>
            <div className="hero h-full rounded-lg" style={{
                backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 
    0.52), #000000), url(${bg})`
            }}>
                <div className="hero-overlay opacity-70 rounded-lg"></div>
                <div className="hero-content text-center text-white grid items-center justify-center lg:grid-cols-2 rounded-lg">
                    <img src={mainPP} alt="myProfile" className='lg:w-3/5 lg:-ml-0 rounded-t-lg mx-auto shadow-lg' style={{ boxShadow: 'inset 2px 3px 12px rgb(16, 185, 129)' }} />
                    <article className='lg:text-left lg:-ml-[170px] lg:w-[60vw] pr-5'>
                        <Zoom>
                            <h1 className="mb-5 text-5xl font-bold mt-10 text-emerald-500">Hi! <span className='text-white'>I'm Kaiser Tanveer</span></h1>
                        </Zoom>
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
                        <div className='lg:w-[38em]'>
                            <p className="mb-5">I am comfortable to develop Web Applications. I am passionate about my code and to contribute a company where I get opportunity to explore. I will code hardly to grow up the company and myself.</p>
                        </div>
                        <div className='mx-auto w-full lg:mr-auto mb-10 lg:mb-0'>
                            <a href={resume} download={resume}>
                                <BtnComponent>Download Resume <HiOutlineDownload className='ml-3' /></BtnComponent>
                            </a>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default Banner;