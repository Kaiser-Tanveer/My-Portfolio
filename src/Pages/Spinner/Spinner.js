import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import logo from '../../Assets/PP/mylogo.png';

const Spinner = () => {
    return (
        <div className='h-[100vh] w-[100vw]'>
            <img src={logo} alt="" className='w-40 mx-auto animate-pulse duration-0' />
            <div className='flex mx-auto justify-center'>
                <ThreeDots
                    height="80"
                    width="100"
                    radius="12"
                    color="rgb(16, 185, 129)"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
            </div>
        </div>
    );
};

export default Spinner;