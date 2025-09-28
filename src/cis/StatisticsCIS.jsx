import LightRays from "../animations/LightRaysBG";
import CountUp from "../animations/CountUp";
import "./StatisticsCIS.css";

const stats = {
    members: 20,
    workshops: 5,
    bootcamps: 2,
    foundation: 2024
}

function StatisticsCIS() {
    return (
        <div id="stats" className="w-[100%] h-[400px] relative bg-[#102c3c] overflow-hidden z-10">
            <LightRays
                raysOrigin="top-center"
                raysColor="#3EA2DC"
                raysSpeed={1.3}
                lightSpread={1.8}
                rayLength={3}
                followMouse={false}
                saturation={1}
                mouseInfluence={0.1}
                noiseAmount={0.1}
                distortion={0.05}
                className="brightness-[150%]"
            />
            <p className="text-center text-5xl font-[600] underline z-[5] absolute top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%] text-white font-['Arima']">
                Statistics
            </p>
            <div className="absolute top-[75%] w-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-[5] sm:block hidden">
                <div className="grid grid-cols-4 gap-10 text-center -ml-5">
                    <div className="grid grid-rows-2 gap-3 stats_div">
                        <CountUp from={0} to={stats.members} duration={2} className="text-5xl font-[600] stats_value" />
                        <span className="stats_title ml-1.5">Members</span>
                    </div>
                    <div className="grid grid-rows-2 gap-3 stats_div">
                        <CountUp from={0} to={stats.workshops} duration={2} className="text-5xl font-[600] stats_value" />
                        <span className="stats_title">Workshops</span>
                    </div>
                    <div className="grid grid-rows-2 gap-3 stats_div">
                        <CountUp from={0} to={stats.bootcamps} duration={2} className="text-5xl font-[600] stats_value" />
                        <span className="stats_title">Bootcamps</span>
                    </div>
                    <div className="grid grid-rows-2 gap-3 stats_div">
                        <CountUp from={2019} to={stats.foundation} duration={2} className="text-5xl font-[600] stats_value" />
                        <span className="stats_title ml-10">Foundation</span>
                    </div>
                </div>
            </div>
            <div className="absolute top-[60%] w-[100%] transform -translate-y-1/2 text-white z-[5] sm:hidden block">
                <div className="text-3xl grid-cols-2 gap-2 grid w-[100vw] px-7">
                    <div className="grid grid-rows-4 gap-2">
                        <span className="">Members&nbsp;&nbsp;&nbsp;</span>
                        <span className="">Workshops</span>
                        <span className="">Bootcamps</span>
                        <span className="">Foundation</span>
                    </div>
                    <div className="grid grid-rows-4 justify-start gap-2" dir="rtl">
                        <CountUp from={0} to={stats.members} duration={2} className="font-[600]" />
                        <CountUp from={0} to={stats.workshops} duration={2} className="font-[600]" />
                        <CountUp from={0} to={stats.bootcamps} duration={2} className="font-[600]" />
                        <CountUp from={2019} to={stats.foundation} duration={2} className="font-[600]" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StatisticsCIS;