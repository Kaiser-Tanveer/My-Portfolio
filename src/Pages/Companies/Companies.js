import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';

const Companies = () => {
    return (
        <div className='mb-32 w-5/6 mx-auto'>
             <h1 className='pb-10 text-white text-5xl text-center lg:text-left font-bold'>EXPERIENCES</h1>
             <div className="mx-auto mb-32 p-16 rounded-lg text-white border-2 border-emerald-500" style={{ boxShadow: '2px 3px 12px rgb(16, 185, 129)' }}>
                <p><span className='text-xl font-bold'>Software Engineer</span> - <a href="https://www.ctrlcampus.com/">CtrlCampus Pvt. Ltd</a> <br />
                <span className='flex items-center opacity-70'><HiLocationMarker className='mr-2'/><address>Ameenpur, Hyderabad, India</address></span> <br />
                <span className='font-semibold opacity-75'>May, 2023 - May, 2024</span></p>
             </div>
        </div>
    );
};

export default Companies;