import React from 'react';

const BtnComponent = ({ children }) => {
    return (
        <button className='btn btn-outline border border-emerald-500 text-emerald-500 hover:text-white text-xl uppercase hover:bg-emerald-500 hover:bg-gradient-to-r font-semibold hover:duration-1000'>
            {children}
        </button>
    );
};

export default BtnComponent;