import React from 'react';

const stats = [
    { num: '1+', label: 'years professional experience' },
    { num: '25+', label: 'projects shipped' },
    { num: '30%', label: 'engagement lift on a dashboard I led' },
];

const Experiences = () => {
    return (
        <div className="w-[92%] max-w-[1100px] mx-auto my-16">
            <div className="grid grid-cols-1 md:grid-cols-3 border border-[color:var(--line-soft)] rounded-lg overflow-hidden">
                {stats.map((s, i) => (
                    <div
                        key={s.label}
                        className={`bg-[color:var(--panel)] text-center py-8 px-5 ${
                            i !== 0 ? 'md:border-l border-t md:border-t-0 border-[color:var(--line-soft)]' : ''
                        }`}
                    >
                        <div className="text-[clamp(1.7rem,3.4vw,2.2rem)] font-bold text-[color:var(--green)]">{s.num}</div>
                        <div className="text-[12px] text-[color:var(--text-dim)] mt-1.5">{s.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experiences;