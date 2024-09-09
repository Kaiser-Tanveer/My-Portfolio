import React from 'react';
import { HiOutlinePaperAirplane } from 'react-icons/hi';
import useTitle from '../../../MyHooks/useTitle';
import contact from '../../../Assets/Banners/contactUs.png';
import Zoom from 'react-reveal';

const Contact = () => {
    useTitle('Contacts');
    return (
        <div className="w-5/6 mx-auto mb-32 grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-10 md:py-16 rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 text-white border-2 border-emerald-500" style={{ boxShadow: '2px 3px 12px rgb(16, 185, 129)' }}>
            <div className="flex flex-col justify-between md:pl-4 md:pr-16">
                <div className="">
                    <Zoom>
                        <h2 className="text-4xl lg:text-left font-bold lg:text-5xl flex items-center justify-center md:justify-start">CONTACT <span className='hidden lg:inline-block ml-4'> ME</span>
                            <HiOutlinePaperAirplane className='rotate-45 ml-4' /></h2>
                    </Zoom>
                    <div className="text-gray-100 pt-6 text-center md:text-left">Need to build or update a Web Application?? <br /> Please, Contact me →</div>
                </div>
                <img src={contact} alt="" className="w-auto h-full mt-7" />
            </div>
            <form action="https://formsubmit.co/4d0f0b5d684d0f9ac4ae76f0e90be61e" method="POST" noValidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div>
                    <label for="name" className="text-sm">Full name</label>
                    <input id="name" name='name' type="text" placeholder="" className="w-full p-3 rounded bg-gray-100 text-black font-semibold border-2 border-emerald-500" />
                </div>
                <div>
                    <label for="email" className="text-sm">Email</label>
                    <input id="email" type="email" name='email' className="w-full p-3 rounded bg-gray-100 text-black font-semibold border-2 border-emerald-500" />
                </div>
                <div>
                    <label for="subject" className="text-sm ">Subject</label>
                    <input id="subject" type="text" name='subject' className="w-full p-3 rounded bg-gray-100 text-black font-semibold border-2 border-emerald-500" />
                </div>
                <div>
                    <label for="message" className="text-sm">Message</label>
                    <textarea id="message" rows="3" name='message' className="w-full p-3 rounded bg-gray-100 text-black font-semibold border-2 border-emerald-500"></textarea>
                </div>
                <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded border border-emerald-500 hover:bg-emerald-500 text-emerald-500 hover:text-white hover:scale-110 duration-500">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;