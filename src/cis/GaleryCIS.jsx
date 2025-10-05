import Stars from "../animations/StarsBG";
import FlowingGallery from "../animations/FlowingGallery";

function GalleryCIS() {
    const demoItems = [
        { link: '#', text: 'Mojave', image: 'https://picsum.photos/600/400?random=1' },
        { link: '#', text: 'Sonoma', image: 'https://picsum.photos/600/400?random=2' },
        { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
        { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
    ];

    return (
        <div className="w-[100%] h-[750px] relative bg-[#102c3c]">
            <Stars
                particleColors={['#ffffff', '#ffffff']}
                particleCount={300}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={false}
                alphaParticles={false}
                disableRotation={false}
            />
            <p className="text-center text-5xl underline z-[5] absolute top-[8%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%] text-white font-['Arima'] font-semibold">
                Our Gallery
            </p>
            <div className="absolute top-[57%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-[5] h-[600px] w-[100%] block">
                <FlowingGallery items={demoItems} />
            </div>
            
        </div>
    );
}
export default GalleryCIS;