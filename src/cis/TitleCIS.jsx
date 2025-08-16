import Silk from "../animations/SilkBG";
import "./TitleCIS.css";
import { ReactTyped } from "react-typed";
import { useState } from "react";

function TitleCIS(){
    const [quoteType, setQuoteType] = useState(false);
    return (
        <div id="home" className="w-[100%] h-[500px] relative">
            <Silk
            speed={5}
            scale={1}
            color="#3EA2DC"
            noiseIntensity={1.5}
            rotation={0}
            />
        <p className="text-white font-['Times_New_Roman'] text-center text-4xl font-bold absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%]">
            <ReactTyped
             strings={["IEEE Computational Intelligence Society Chapter<br />ISET Bizerte STUDENT BRANCH Chapter"]}
             typeSpeed={40}
             cursorChar="_"
             showCursor={true}
             onComplete={(self) => {setQuoteType(true), self.cursor.remove()}}
             />
        </p>
        {quoteType && (
        <p className="cis-quote text-white font-['Times_New_Roman'] text-center text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%]">
            <ReactTyped
             strings={["Where Intelligence Meets Innovation"]}
             typeSpeed={40}
             cursorChar="_"
             showCursor={false}
             />
        </p> )}
        </div>
    );
}

export default TitleCIS;