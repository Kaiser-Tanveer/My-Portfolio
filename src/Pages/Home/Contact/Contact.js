import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import useTitle from '../../../MyHooks/useTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThreeDots } from 'react-loader-spinner';

const Contact = () => {
    useTitle('Contacts');
    const form = useRef();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e) => {
        setIsSubmitting(true);
        e.preventDefault();
        const { user_name, user_email, subject, message } = form.current;

        if (!user_name.value || !user_email.value || !subject.value || !message.value) {
            toast.warning('Please fill in all fields!');
            setIsSubmitting(false);
            return;
        }

        emailjs
            .sendForm('service_gxeuxkf', 'template_glhdtc9', form.current, 'c-A-D1cLsB48aTkkF')
            .then(() => {
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
        <div className="w-[92%] lg:w-5/6 mx-auto mb-16">
            <div className="text-xs text-hack-textFaint mb-3.5">
                <span className="text-hack-green">$</span> ./contact --new-message
            </div>

            <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-11">
                <div>
                    <h2 className="text-2xl md:text-3xl text-hack-greenBright font-semibold">
                        {isSubmitted ? 'Mail Sent' : 'Have a project in mind?'}
                    </h2>
                    <p className="text-hack-textDim text-sm mt-3">
                        {isSubmitted
                            ? 'Thank you for reaching out. I appreciate your message and will respond promptly.'
                            : 'Send a message with what you\'re building, or reach me directly.'}
                    </p>
                    <ul className="mt-5 space-y-3">
                        {[
                            ['email:', 'mailto:kaisertanveer0@gmail.com', 'kaisertanveer0@gmail.com'],
                            ['phone:', 'tel:+8801851072581', '+880 1851 072581'],
                            ['linkedin:', 'https://www.linkedin.com/in/kaiser-tanveer/', '/in/kaiser-tanveer'],
                            ['github:', 'https://github.com/Kaiser-Tanveer', '/Kaiser-Tanveer'],
                        ].map(([label, href, text]) => (
                            <li key={href} className="flex gap-2.5 text-sm pb-3 border-b border-dashed border-hack-lineSoft">
                                <span className="text-hack-textFaint">{label}</span>
                                <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-hack-green">
                                    {text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="border border-hack-line rounded-lg overflow-hidden bg-hack-panel">
                    <div className="flex items-center gap-1.5 px-3.5 py-2.5 border-b border-hack-line bg-hack-panel2">
                        <i className="w-2.5 h-2.5 rounded-full bg-[#2A3B32] inline-block" />
                        <i className="w-2.5 h-2.5 rounded-full bg-[#2A3B32] inline-block" />
                        <i className="w-2.5 h-2.5 rounded-full bg-[#2A3B32] inline-block" />
                        <span className="ml-2 text-xs text-hack-textFaint">new_message.sh</span>
                    </div>

                    {!isSubmitted ? (
                        <form ref={form} onSubmit={sendEmail} className="p-5 flex flex-col gap-3.5">
                            <div className="grid grid-cols-2 gap-3.5">
                                <div>
                                    <label className="text-[11px] text-hack-textFaint mb-1.5 block">
                                        <span className="text-hack-greenDim">&gt; </span>name
                                    </label>
                                    <input
                                        name="user_name"
                                        type="text"
                                        className="w-full bg-[#03100A] border border-hack-line text-hack-text px-3 py-2.5 rounded text-sm focus:outline-none focus:border-hack-green"
                                    />
                                </div>
                                <div>
                                    <label className="text-[11px] text-hack-textFaint mb-1.5 block">
                                        <span className="text-hack-greenDim">&gt; </span>email
                                    </label>
                                    <input
                                        name="user_email"
                                        type="email"
                                        className="w-full bg-[#03100A] border border-hack-line text-hack-text px-3 py-2.5 rounded text-sm focus:outline-none focus:border-hack-green"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-[11px] text-hack-textFaint mb-1.5 block">
                                    <span className="text-hack-greenDim">&gt; </span>subject
                                </label>
                                <input
                                    name="subject"
                                    type="text"
                                    className="w-full bg-[#03100A] border border-hack-line text-hack-text px-3 py-2.5 rounded text-sm focus:outline-none focus:border-hack-green"
                                />
                            </div>
                            <div>
                                <label className="text-[11px] text-hack-textFaint mb-1.5 block">
                                    <span className="text-hack-greenDim">&gt; </span>message
                                </label>
                                <textarea
                                    name="message"
                                    rows={3}
                                    className="w-full bg-[#03100A] border border-hack-line text-hack-text px-3 py-2.5 rounded text-sm focus:outline-none focus:border-hack-green resize-y"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-hack-green text-[#031007] font-bold text-sm py-3 rounded"
                            >
                                {isSubmitting ? (
                                    <div className="flex justify-center">
                                        <ThreeDots height="20" width="40" radius="12" color="#031007" visible={true} />
                                    </div>
                                ) : (
                                    'send_message()'
                                )}
                            </button>
                            <p className="text-[11px] text-hack-textFaint -mt-1">
                                // sent securely via EmailJS to kaisertanveer0@gmail.com
                            </p>
                        </form>
                    ) : (
                        <p className="text-center text-hack-green font-semibold py-16 px-6">
                            <span className="text-3xl block mb-2">Thank you!</span>
                            <span className="text-sm text-hack-textDim">Your message has been sent.</span>
                        </p>
                    )}
                </div>
            </div>

            <ToastContainer theme="dark" />
        </div>
    );
};

export default Contact;