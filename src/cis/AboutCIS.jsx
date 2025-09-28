import cis from '../assets/cis_blue_logo.png';
import { useState } from 'react';
import './AboutCIS.css';

const emojis = ['🔬', '🤖', '✨', '🧠', '🚀', '💻', '🧪'];

function AboutCIS() {
    const [hovered, setHovered] = useState(false);

    // Calculate burst positions (angles and distances)
    const burstPositions = emojis.map((_, i) => {
        const angle = (i / emojis.length) * 2 * Math.PI;
        const distance = 170; // px, how far emojis fly out
        return {
            x: Math.cos(angle) * distance,
            y: Math.sin(angle) * distance,
        };
    });
    return (
        <div id="about" className='h-[370px]'>
            <div className="text-center mt-7 mb-9 font-['Arima'] font-[600] text-5xl underline text-[#3EA2DC]">
                About us</div>
            <div className='grid grid-cols-2 items-center'>
                <div className="cursor-pointer relative w-[50%] justify-self-center sm:block hidden"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    style={{ minHeight: '200px' }}
                >
                    <div className='absolute z-[5] bg-white left-[30%] top-[13%] px-[25%] py-[17%]'></div>
                    <img className="absolute z-10 w-[90%]" src={cis} alt="CIS Logo" />
                    {emojis.map((emoji, i) => (
                        <span
                            key={i}
                            className={`emoji-burst`}
                            style={{
                                left: '40%',
                                top: '30%', // start under image
                                transform: hovered
                                    ? `translate(${burstPositions[i].x}px, ${burstPositions[i].y}px)`
                                    : 'translate(0, 0)',
                                transition: hovered
                                    ? 'transform 0.4s cubic-bezier(.68,-0.55,.27,1.55)'
                                    : 'transform 0.3s',
                                opacity: hovered ? 1 : 0,
                                fontSize: '2rem',
                                position: 'absolute',
                                pointerEvents: 'none'
                            }}
                        >
                            {emoji}
                        </span>
                    ))}
                </div>
                <div className="font-['Arima'] sm:ml-3 description-container">
                    <p className='font-normal text-2xl mt-2 text-["Arya"]'>IEEE <b className='font-semibold text-[#3EA2DC]'>CIS</b> ISET Bizerte SBC</p>
                    <p className='text-justify w-[70%] mt-5 text-[#666]'>
                        The Computational Intelligence Society (CIS) chapter at ISET
                        Bizerte, affiliated with IEEE, is dedicated to advancing knowledge
                        and innovation in computational intelligence, artificial intelligence,
                        and related technologies. We provide students and professionals with opportunities to explore emerging trends, develop technical skills,
                        and engage in impactful projects.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutCIS;