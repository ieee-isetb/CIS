import Silk from "../animations/SilkBG";
import "./TitleCIS.css";
import { ReactTyped } from "react-typed";
import { useState } from "react";

function TitleCIS(){
    const [quoteType, setQuoteType] = useState(false);
    const [joinUs, setJoinUs] = useState(false);
    const registrationFormURL = "https://forms.gle/8toQ46baTj2yQh9b9"; // Replace with your actual registration form URL
    return (
        <div id="home" className="w-[100%] h-[500px] relative">
            <Silk
            speed={5}
            scale={1}
            color="#3EA2DC"
            noiseIntensity={1.5}
            rotation={0}
            />
        <p className="text-white font-['Times_New_Roman'] text-center text-4xl font-bold absolute sm:top-1/4 top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%]">
            <ReactTyped
             strings={["IEEE Computational Intelligence Society Chapter<br />ISET Bizerte STUDENT BRANCH Chapter"]}
             typeSpeed={40}
             cursorChar="_"
             showCursor={true}
             onComplete={(self) => {setQuoteType(true), self.cursor.remove()}}
             />
        </p>
        {quoteType && (
        <p className="cis-quote text-white font-['Times_New_Roman'] text-center text-2xl absolute sm:top-1/2 top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%]">
            <ReactTyped
             strings={["Where Intelligence Meets Innovation"]}
             typeSpeed={40}
             cursorChar="_"
             showCursor={false}
             onComplete={() => {setJoinUs(true)}}
             />
        </p> )}
        {joinUs && (
            <a href={registrationFormURL} target="_blank" rel="noopener noreferrer" className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:bg-transparent text-white font-['Arima'] font-bold text-xl px-5 py-2 rounded-full bg-[#3ea2dcb8] hover:bg-[#3ea2dcb8] border-white border-2 transition-colors cursor-pointer">
                Join Us
            </a>
        )}
        </div>
    );
}

export default TitleCIS;