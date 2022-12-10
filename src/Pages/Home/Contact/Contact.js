import React from 'react';
import { HiOutlineMailOpen } from 'react-icons/hi';

const Contact = () => {
    return (
        <div className="w-4/5 mx-auto my-32 grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-100 text-gray-800">
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <button className="text-4xl lg:text-left font-bold lg:text-5xl flex">CONTACT ME</button>
                    <div className="text-gray-600">At first give your Name, Email and then Give the subject of you message. And at last type the message you want to sent.</div>
                </div>
                <img src="https://hkbyte.com/doodles/Contact%20Doodle.svg" alt="" className="w-full h-full" />
            </div>
            <form action="https://formsubmit.co/4d0f0b5d684d0f9ac4ae76f0e90be61e" method="POST" novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div>
                    <label for="name" className="text-sm">Full name</label>
                    <input id="name" name='name' type="text" placeholder="" className="w-full p-3 rounded bg-gray-100 border-2 border-emerald-500" />
                </div>
                <div>
                    <label for="email" className="text-sm">Email</label>
                    <input id="email" type="email" name='email' className="w-full p-3 rounded bg-gray-100 border-2 border-emerald-500" />
                </div>
                <div>
                    <label for="subject" className="text-sm ">Subject</label>
                    <input id="subject" type="text" name='subject' className="w-full p-3 rounded bg-gray-100 border-2 border-emerald-500" />
                </div>
                <div>
                    <label for="message" className="text-sm">Message</label>
                    <textarea id="message" rows="3" name='message' className="w-full p-3 rounded bg-gray-100 border-2 border-emerald-500"></textarea>
                </div>
                <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-emerald-500 text-gray-50">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;