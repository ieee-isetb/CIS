import StarsBG from "../animations/StarsBG";
import SlideShow from "../animations/SlideShow"
import { useEffect, useState } from "react";
import returnSVG from "../assets/return.svg"

const events = [
    {
        title: "Our Booth",
        folder: "Booth",
        images: [
            "/CIS/events/Booth/467766352_122115546560589496_7980927003317713407_n.jpg",
            "/CIS/events/Booth/468048405_122115547028589496_1787068702099165062_n.jpg",
            "/CIS/events/Booth/468054482_122115547088589496_6741034518343147113_n.jpg",
            "/CIS/events/Booth/468097218_122115546524589496_4114004259634006134_n.jpg",
            "/CIS/events/Booth/468222470_122115546146589496_7810775395767742454_n.jpg"
        ]
    },
    {
        title: "Code It Up 5.0",
        folder: "code_it_up",
        images: [
            "/CIS/events/code_it_up/494075051_675018355259051_7459268666068918352_n.jpg",
            "/CIS/events/code_it_up/codeitup (179 of 255).jpg",
            "/CIS/events/code_it_up/codeitup (32 of 255).jpg",
            "/CIS/events/code_it_up/codeitupp2 (126 of 188).jpg",
            "/CIS/events/code_it_up/codeitupp2 (180 of 188).jpg",
            "/CIS/events/code_it_up/codeitupp2 (29 of 188).jpg"
        ]
    },
    {
        title: "AWS Bootcamp",
        folder: "aws_bootcamp",
        images: [
            "/CIS/events/aws_bootcamp/480906381_122134381526589496_5140800072676475620_n.jpg",
            "/CIS/events/aws_bootcamp/481122158_122133290810589496_5138717774382568459_n.jpg"
        ]
    },
    {
        title: "ABC's of AI",
        folder: "abc_ai",
        images: [
            "/CIS/events/abc_ai/pic (11 of 67).png",
            "/CIS/events/abc_ai/pic (4 of 67).png",
            "/CIS/events/abc_ai/pic (44 of 67).png",
            "/CIS/events/abc_ai/pic (45 of 67).png",
            "/CIS/events/abc_ai/pic (64 of 67).png"
        ]
    },
    {
        title: "AI and the Art of Time Mastery",
        folder: "AI_and_the_art_of_time_mastery",
        images: [
            "/CIS/events/AI_and_the_art_of_time_mastery/496299613_122148543872589496_7986176113008782413_n.jpg",
            "/CIS/events/AI_and_the_art_of_time_mastery/pic-12.jpg",
            "/CIS/events/AI_and_the_art_of_time_mastery/pic-3.jpg",
            "/CIS/events/AI_and_the_art_of_time_mastery/pic-41.jpg",
            "/CIS/events/AI_and_the_art_of_time_mastery/pic-48.jpg",
            "/CIS/events/AI_and_the_art_of_time_mastery/pic-5.jpg"
        ]
    },
    {
        title: "Online Workshops",
        folder: "online_workshops",
        images: [
            "/CIS/events/online_workshops/524590388_122159761442589496_7121259663525695518_n.jpg",
            "/CIS/events/online_workshops/537811112_122163769280589496_7423765764293487574_n.jpg"
        ]
    }
];

function EventsCIS() {
    const [h_events, setHeightEvents] = useState(600)
    const [topBackBtn, setTopBackBtn] = useState(3.5)
    const [topEvents, setTopEvents] = useState(50)
    const [showOneEvent, setShowOneEvent] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    useEffect(() => {
        setHeightEvents(600 + Math.max(0, events.length - 4) * 150);
        setTopEvents(50 - Math.max(0, events.length - 4) * 5)
        setTopBackBtn(3.5 + Math.max(0, events.length - 4))
    }, [])
    return (
        <div id="events" className="w-[100%] relative bg-[#0E2A3A]"
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
                    className="z-[5] bg-white/10 backdrop-blur-md text-white absolute rounded-4xl sm:left-[40%] left-[20%] p-1 cursor-pointer">
                    <img src={returnSVG} className="w-[40px]" />
                </button>)}
            {showOneEvent && selectedEvent && (
                <div className="absolute top-[47%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-[5] w-[100%] h-[400px] block">
                    <SlideShow 
                        eventTitle={selectedEvent.title}
                        images={selectedEvent.images}
                    />
                </div>
            )}
            {!showOneEvent && (
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-[5] w-[100%] h-[400px] block"
                    style={{ top: `${topEvents}%` }}
                >
                    {events.map((event, index) => (
                        <p key={index}
                            onClick={() => {
                                setSelectedEvent(event);
                                setShowOneEvent(true);
                            }}
                            className="w-full h-[25%] py-6 hover:bg-[rgba(0,0,0,0.7)] transition-all cursor-pointer border-t-2 border-b-2 md:text-5xl text-3xl text-white text-center"
                        >
                            {event.title}
                        </p>
                    ))}
                </div>
            )}
        </div>
    )
}
export default EventsCIS;