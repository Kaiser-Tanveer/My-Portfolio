import React, { useRef, useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import useTitle from '../../../MyHooks/useTitle';
import Zoom from 'react-reveal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import { ThreeDots } from 'react-loader-spinner';


const Contact = () => {
    useTitle('Contacts');
    const form = useRef();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handle form submission with EmailJS
    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const { user_name, user_email, subject, message } = form.current;

        // Validate form fields
        if (!user_name.value || !user_email.value || !subject.value || !message.value) {
            toast.warning('Please fill in all fields!');
            setIsSubmitting(false);
            return;
        }
        
        emailjs.sendForm(
            'service_gxeuxkf',
            'template_glhdtc9',
            form.current,
            'c-A-D1cLsB48aTkkF'
        )
        .then((result) => {
            toast.success('Message sent successfully!');
            setIsSubmitting(false);
            setIsSubmitted(true);
            e.target.reset();
        })
        .catch((error) => {
            toast.error('Failed to send message, please try again.');
            setIsSubmitting(false);
            console.error(error.text);
        });
    };

    return (
        <div className="w-5/6 mx-auto mb-24 grid max-w-screen-xl grid-cols-1 gap-6 px-8 py-10 md:py-16 rounded-lg md:grid-cols-2 md:px-20 text-white border-2 border-emerald-500"
             style={{ boxShadow: '2px 3px 12px rgb(16, 185, 129)' }}>
            <div className="flex flex-col justify-between pl-0 pr-0 md:pr-10">
                <Zoom>
                    <h2 className="text-4xl lg:text-5xl font-bold flex items-center justify-center md:justify-start">
                        {
                            isSubmitted ? 'Mail Sent' : <span>CONTACT
                                <span className="hidden md:inline ml-2"> ME</span></span>
                        }
                        {
                            isSubmitted ? <HiOutlineCheckCircle className="text-emerald-500 ml-4" /> : <FaPaperPlane className="text-emerald-500 rotate-45 ml-4" />
                        }
                    </h2>
                </Zoom>
                <p className="text-gray-100 pt-6 text-justify md:text-left">
                    {isSubmitted ? "Thank you for reaching out. I appreciate your message and will be responding to your email promptly.":  "Need to build or update a Web Application?"} <br /> {isSubmitted? "" : "Please, Contact me →"}
                </p>
                <img src={isSubmitted ? "https://i.ibb.co.com/ssMVMjL/Email-sent-successfully.gif" : "https://i.ibb.co.com/DrBv6HG/fd30cf2f7778b3401b7f2cd678777f22.gif"} alt="Contact Banner" className={isSubmitted ? "w-full mt-7 rounded-md border-2 border-emerald-500" : "w-auto h-full mt-7 border-b-2 border-emerald-500 rounded-t-md"} />
            </div>

            {/* Contact Form Section */}
            {!isSubmitted ? (
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    {[
                        { id: 'name', label: 'Full Name', type: 'text', name: 'user_name' },
                        { id: 'email', label: 'Email', type: 'email', name: 'user_email' },
                        { id: 'subject', label: 'Subject', type: 'text', name: 'subject' },
                        { id: 'message', label: 'Message', type: 'textarea', name: 'message', rows: 3 }
                    ].map(({ id, label, type, ...inputProps }) => (
                        <div key={id}>
                            <label htmlFor={id} className="text-sm">{label}</label>
                            {type === 'textarea' ? (
                                <textarea
                                    id={id}
                                    className="w-full p-3 rounded bg-gray-100 text-black font-semibold border-2 border-emerald-500"
                                    {...inputProps}
                                />
                            ) : (
                                <input
                                    id={id}
                                    type={type}
                                    className="w-full p-3 rounded bg-gray-100 text-black font-semibold border-2 border-emerald-500"
                                    {...inputProps}
                                />
                            )}
                        </div>
                    ))}
                    <button
                        type="submit"
                        className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded border border-emerald-500 hover:bg-emerald-500 text-emerald-500 hover:text-white hover:scale-110 duration-500"
                    >
                        {
                            isSubmitting ?
                            <div className='flex justify-center items-center w-full'>
                            <ThreeDots
                                height="20"
                                width="40"
                                radius="12"
                                color="rgb(16, 185, 129)"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
                            />
                            </div>
                            :
                            "Send Message"
                        }
                    </button>
                </form>
            ) : (
                <p className="text-center font-semibold text-emerald-500 mt-[30%] flex flex-col"><span className='text-5xl py-2'>Thank you!</span> <br />
                 <span className='text-xl'>Your message has been sent.</span></p>
            )}

            <ToastContainer />
        </div>
    );
};

export default Contact;
