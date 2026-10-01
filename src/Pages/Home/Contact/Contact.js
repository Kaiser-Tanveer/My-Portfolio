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

        emailjs.sendForm(
            'service_gxeuxkf',
            'template_glhdtc9',
            form.current,
            'c-A-D1cLsB48aTkkF'
        )
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

    const fields = [
        { id: 'name', label: 'name', type: 'text', name: 'user_name' },
        { id: 'email', label: 'email', type: 'email', name: 'user_email' },
        { id: 'subject', label: 'subject', type: 'text', name: 'subject' },
        { id: 'message', label: 'message', type: 'textarea', name: 'message', rows: 3 },
    ];

    return (
        <div className="w-[92%] max-w-[1100px] mx-auto mb-20">
            <div className="text-[12px] text-[color:var(--text-faint)] mb-3">
                <span className="text-[color:var(--green)]">$</span> ./contact --new-message
            </div>

            <div className="grid md:grid-cols-2 gap-11">
                <div>
                    <h2 className="text-[color:var(--green-bright)] font-semibold text-[clamp(1.5rem,3vw,2rem)]">
                        {isSubmitted ? 'Message sent' : 'Have a project in mind?'}
                    </h2>
                    <p className="text-[color:var(--text-dim)] text-[13px] mt-3">
                        {isSubmitted
                            ? "Thank you for reaching out. I'll get back to you shortly."
                            : "Send a message with what you're building, or reach me directly."}
                    </p>
                </div>

                <div className="win">
                    <div className="win-bar"><i></i><i></i><i></i><div className="win-title">new_message.sh</div></div>

                    {!isSubmitted ? (
                        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3.5 p-5">
                            <div className="grid md:grid-cols-2 gap-3.5">
                                {fields.slice(0, 2).map(({ id, label, type, ...inputProps }) => (
                                    <div key={id}>
                                        <label htmlFor={id} className="text-[11px] text-[color:var(--text-faint)] mb-1.5 block">
                                            <span className="text-[color:var(--green-dim)]">&gt; </span>{label}
                                        </label>
                                        <input
                                            id={id}
                                            type={type}
                                            className="w-full p-2.5 rounded-md bg-[#03100A] border border-[color:var(--line)] text-[color:var(--text)] text-[13px] focus:outline-none focus:border-[color:var(--green)]"
                                            {...inputProps}
                                        />
                                    </div>
                                ))}
                            </div>
                            {fields.slice(2).map(({ id, label, type, ...inputProps }) => (
                                <div key={id}>
                                    <label htmlFor={id} className="text-[11px] text-[color:var(--text-faint)] mb-1.5 block">
                                        <span className="text-[color:var(--green-dim)]">&gt; </span>{label}
                                    </label>
                                    {type === 'textarea' ? (
                                        <textarea
                                            id={id}
                                            className="w-full p-2.5 rounded-md bg-[#03100A] border border-[color:var(--line)] text-[color:var(--text)] text-[13px] min-h-[100px] resize-y focus:outline-none focus:border-[color:var(--green)]"
                                            {...inputProps}
                                        />
                                    ) : (
                                        <input
                                            id={id}
                                            type={type}
                                            className="w-full p-2.5 rounded-md bg-[#03100A] border border-[color:var(--line)] text-[color:var(--text)] text-[13px] focus:outline-none focus:border-[color:var(--green)]"
                                            {...inputProps}
                                        />
                                    )}
                                </div>
                            ))}
                            <button
                                type="submit"
                                className="w-full p-3 rounded-md bg-[color:var(--green)] text-[#031007] font-bold text-[13px] hover:-translate-y-0.5 transition-transform"
                            >
                                {isSubmitting ? (
                                    <div className="flex justify-center items-center w-full">
                                        <ThreeDots height="20" width="40" radius="12" color="#031007" ariaLabel="sending" visible={true} />
                                    </div>
                                ) : 'send_message()'}
                            </button>
                            <p className="text-[11px] text-[color:var(--text-faint)] -mt-1">// delivered straight to kaisertanveer0@gmail.com</p>
                        </form>
                    ) : (
                        <div className="p-10 text-center">
                            <p className="text-[color:var(--green)] text-3xl font-bold">Thank you!</p>
                            <p className="text-[color:var(--text-dim)] text-sm mt-2">Your message has been sent.</p>
                        </div>
                    )}
                </div>
            </div>

            <ToastContainer theme="dark" />
        </div>
    );
};

export default Contact;