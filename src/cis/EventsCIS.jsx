import StarsBG from "../animations/StarsBG";
import SlideShow from "../animations/SlideShow"
import { useEffect, useState } from "react";
import returnSVG from "../assets/return.svg"

const eventNames = [
   "Our Booth", "Code It Up 5.0", "AWS Bootcamp", "ABC'S OF AI", "Introduction to Image Generation"
]

function EventsCIS() {
    const [h_events, setHeightEvents] = useState(600)
    const [topBackBtn, setTopBackBtn] = useState(3.5)
    const [topEvents, setTopEvents] = useState(50)
    const [showOneEvent, setShowOneEvent] = useState(false);
    useEffect(() => {
        setHeightEvents(600 + Math.max(0, eventNames.length - 4) * 150);
        setTopEvents(50 - Math.max(0, eventNames.length - 4) * 5)
        setTopBackBtn(3.5 + Math.max(0, eventNames.length - 4))
    }, [])
    return (
        <div id="events" className="w-[100%] relative bg-[#102c3c]"
        style={{ height: `${h_events}px` }}>
            <StarsBG
                particleColors={['#ffffff']}
                particleCount={300}
                particleSpread={5}
                speed={0.1}
                particleBaseSize={150}
                moveParticlesOnHover={false}
                alphaParticles={false}
                disableRotation={false}
            />
            <p className="text-center text-5xl underline z-[5] absolute top-[8%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%] text-white font-['Arima'] font-semibold">
                Events
            </p>
            {showOneEvent && (
                <button
                    style={{ top: `${topBackBtn}%` }}
                    onClick={() => {setShowOneEvent(false)}}
                    className="z-[5] bg-white/10 backdrop-blur-md text-white absolute rounded-4xl left-[40%] p-1 cursor-pointer">
                    <img src={returnSVG} className="w-[40px]" />
                </button>)}
            {showOneEvent && (<div className="absolute top-[47%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-[5] w-[100%] h-[400px] block">
                <SlideShow />
            </div>)}
            {!showOneEvent && (
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-[5] w-[100%] h-[400px] block"
                    style={{ top: `${topEvents}%` }}
                >
                    {eventNames.map((eventName, index) => (
                        <p key={index}
                            onClick={() => {setShowOneEvent(true)}}
                            className="w-full h-[25%] py-6 hover:bg-[rgba(0,0,0,0.7)] transition-all cursor-pointer border-t-2 border-b-2 md:text-5xl text-3xl text-white text-center">{eventName}</p>
                    ))}
                </div>
            )}
        </div>
    )
}
export default EventsCIS;