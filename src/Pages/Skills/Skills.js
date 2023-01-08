import React from 'react';
import useTitle from '../../MyHooks/useTitle';
import './Skills.css';
import Zoom from 'react-reveal';

const Skills = () => {
    useTitle('Skills');
    return (
        <div className="container">
            <Zoom>
                <h1 className="title-text">Skills</h1>
            </Zoom>
            <div className="skill-box">
                <span className="title">HTML</span>
                <div className="skill-bar">
                    <span className="skill-per html">
                        <span className="tooltip">95%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">CSS</span>
                <div className="skill-bar">
                    <span className="skill-per css">
                        <span className="tooltip">80%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">BootStrap</span>
                <div className="skill-bar">
                    <span className="skill-per bs">
                        <span className="tooltip">90%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">Tailwind</span>
                <div className="skill-bar">
                    <span className="skill-per tw">
                        <span className="tooltip">90%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">JavaScript</span>
                <div className="skill-bar">
                    <span className="skill-per javascript">
                        <span className="tooltip">60%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">NodeJS</span>
                <div className="skill-bar">
                    <span className="skill-per nodejs">
                        <span className="tooltip">70%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">ReactJS</span>
                <div className="skill-bar">
                    <span className="skill-per reactjs">
                        <span className="tooltip">80%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">ExpressJS</span>
                <div className="skill-bar">
                    <span className="skill-per expressjs">
                        <span className="tooltip">75%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">MongoDB</span>
                <div className="skill-bar">
                    <span className="skill-per mongo">
                        <span className="tooltip">75%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">GitHub</span>
                <div className="skill-bar">
                    <span className="skill-per git">
                        <span className="tooltip">75%</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Skills;