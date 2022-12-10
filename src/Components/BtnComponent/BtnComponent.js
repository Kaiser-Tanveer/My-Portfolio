import React from 'react';

const BtnComponent = ({ children }) => {
    return (
        <button className='btn btn-outline border border-emerald-500 text-emerald-500 hover:text-white px-20 text-xl uppercase mt-10 hover:bg-emerald-400 hover:bg-gradient-to-r font-semibold hover:duration-1000'>
            {children}
        </button>
    );
};

export default BtnComponent;