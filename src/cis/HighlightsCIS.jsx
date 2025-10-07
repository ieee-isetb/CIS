import Stars from "../animations/StarsBG";
import FlowingGallery from "../animations/FlowingGallery";

function HighlightsCIS() {
    const demoItems = [
        { text: 'Mojave', images: 'https://picsum.photos/600/400?random=1', title: "Members" },
        { text: 'Sonoma', images: 'https://picsum.photos/600/400?random=2', title: "Workshops" },
        { text: 'Monterey', images: 'https://picsum.photos/600/400?random=3', title: "Bootcamps" },
        { text: 'Sequoia', images: 'https://picsum.photos/600/400?random=4', title: "Events" }
    ];
    
    return (
        <div className="w-[100%] h-[2000px] relative bg-[#102c3c]">
            <Stars
                particleColors={['#ffffff']}
                particleCount={300}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={150}
                moveParticlesOnHover={false}
                alphaParticles={false}
                disableRotation={false}
            />
            <p className="text-center text-5xl underline z-[5] absolute top-[4%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%] text-white font-['Arima'] font-semibold">
                Highlights
            </p>
            <div className="absolute top-[53%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-[5] h-[1800px] w-[100%] block">
                <FlowingGallery items={demoItems} />
            </div>
            
        </div>
    );
}
export default HighlightsCIS;