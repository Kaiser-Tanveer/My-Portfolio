import React, { useEffect, useRef } from 'react';

// Subtle digital-rain canvas background. Respects prefers-reduced-motion
// (renders nothing for users who've asked for less motion).
const MatrixRain = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduceMotion) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationId;
        let cols, drops, w, h;

        const chars = 'アイウエオカキクケコサシスセソ01アクセス起動$#{}[]<>/'.split('');
        const fontSize = 15;

        const resize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            cols = Math.floor(w / fontSize);
            drops = new Array(cols).fill(0).map(() => Math.floor(Math.random() * -40));
        };
        resize();
        window.addEventListener('resize', resize);

        const draw = () => {
            ctx.fillStyle = 'rgba(5,8,6,0.13)';
            ctx.fillRect(0, 0, w, h);
            ctx.fillStyle = '#3CFF9A';
            ctx.font = `${fontSize}px monospace`;
            for (let i = 0; i < cols; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                if (drops[i] * fontSize > h && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            }
            animationId = requestAnimationFrame(draw);
        };
        animationId = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 opacity-[0.16] pointer-events-none"
            aria-hidden="true"
        />
    );
};

export default MatrixRain;