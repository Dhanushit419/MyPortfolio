import React, { useEffect, useState } from 'react'
import Header from '../components/navbar'
import SideBar from '../components/side-bar'

import Footer from '../components/footer'
import Person from '../images/person.png'
import Vs from '../images/icons/vs.png'

const textArray = [
    ' Welcome to my Portfolio',
    " I'm a FullStack Developer 👨‍💻",
    " I'm a App Developer 👨‍💻"
];

export default function Home() {
    const [currentText, setCurrentText] = useState('');
    const [showHelloWorld, setShowHelloWorld] = useState(false);
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const typeText = () => {
            if (charIndex < textArray[textIndex].length) {
                setCurrentText(prev => prev + textArray[textIndex][charIndex]);
                setCharIndex(prev => prev + 1);
            } else {
                setTimeout(() => {
                    setCurrentText('');
                    setCharIndex(0);
                    setTextIndex(prev => (prev + 1) % textArray.length);
                }, 1000);
            }
        };

        const typingInterval = setInterval(() => {
            typeText();
        }, 100);

        return () => clearInterval(typingInterval);
    }, [charIndex, textIndex]);

    useEffect(() => {
        if (textIndex === textArray.length) {
            const timer = setTimeout(() => {
                setShowHelloWorld(true);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [textIndex]);


    return (
        <div className='home'>
            <Header activePage="home" />
            <SideBar />
            <div className='main-container'>
                <div>
                    <img className='main-pic' src={Person} />
                </div>

                <div className="terminal-box">
                    <div className="terminal-header">
                        <div className="terminal-buttons">
                            <div className="terminal-button red"></div>
                            <div className="terminal-button yellow"></div>
                            <div className="terminal-button green"></div>
                        </div>
                        <span className="terminal-title">Terminal</span>
                    </div>
                    <div className="terminal-content">
                        {!showHelloWorld ? (
                            <div>
                                <div className="hello-world" >
                                    <span>HELLO</span>
                                    <span>WORLD</span>
                                </div>
                                <div><pre className='text-display'>{currentText}<span className="cursor">|</span></pre></div>
                            </div>
                        ) : (
                            <div className="hello-world">
                                <span>HELLO</span>
                                <span>WORLD</span>
                            </div>
                        )}
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
}