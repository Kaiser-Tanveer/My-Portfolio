import React from 'react';

const stats = [
    { num: '1+', label: 'years professional experience' },
    { num: '25+', label: 'projects shipped' },
    { num: '30%', label: 'engagement lift on a dashboard I led' },
];

const Experiences = () => {
    return (
        <div className="w-[92%] lg:w-5/6 mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 border border-hack-lineSoft rounded-lg overflow-hidden">
                {stats.map(({ num, label }, i) => (
                    <div
                        key={label}
                        className={`bg-hack-panel text-center py-8 px-5 ${
                            i > 0 ? 'md:border-l border-t md:border-t-0 border-hack-lineSoft' : ''
                        }`}
                    >
                        <h2 className="text-2xl md:text-4xl font-bold text-hack-green">{num}</h2>
                        <p className="text-hack-textDim text-xs mt-1.5">{label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experiences;