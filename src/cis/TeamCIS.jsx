import PixelHoverCard from '../animations/PixelHoverCard'
import allani_mohamed from '../assets/team/allani_mohamed.png'
import facebook_icon from '../assets/socials/facebook-white.svg'
import instagram_icon from '../assets/socials/instagram-white.svg'
import linkedin_icon from '../assets/socials/linkedin-white.svg'
import gmail_icon from '../assets/socials/gmail-white.svg'
import './TeamCIS.css';

function TeamCis() {
    const iterator = Array.from({ length: 6 }, (_, i) => i + 1);
    return (
        <div id='team'>
            <div className="text-center mt-7 mb-9 font-['Arima'] font-[600] text-5xl underline text-[#3EA2DC]">
                Our Team</div>
            <div className="grid grid-cols-2 gap-4 justify-items-center">
                {iterator.map((item) => (
                    <PixelHoverCard key={item}
                    firstContent={
                        <img src={allani_mohamed} alt="General Secretary" className='w-[100%] h-[100%] object-cover' />
                    }
                    secondContent={
                        <div
                            style={{
                                width: "100%",
                                height: "100%",
                                display: "grid",
                                placeItems: "center",
                                backgroundColor: "#3EA2DC92"
                            }}
                        >
                            <p className='font-[600] text-4xl absolute top-5 font-["Arima"]'>Allani Mohamed</p>
                            <p className='font-[600] text-2xl absolute top-15 font-["Arima"]'>General Secretary</p>
                            <div className='absolute bottom-5 flex gap-6 right-1/5'>
                                <a className='pointer-events-auto' href='#'><img src={instagram_icon} alt="Instagram" className='w-8 h-8 relative top-[-3px]' /></a>
                                <a className='pointer-events-auto' href='#'><img src={facebook_icon} alt="Facebook" className='w-6 h-6' /></a>
                                <a className='pointer-events-auto' href='#'><img src={linkedin_icon} alt="LinkedIn" className='w-6 h-6' /></a>
                                <a className='pointer-events-auto' href='#'><img src={gmail_icon} alt="Gmail" className='w-7.5 h-7.5' /></a>
                            </div>
                        </div>
                    }
                    pixelColor='#102c3c'
                    gridSize={8}
                    animationStepDuration={0.5}
                    className='profile_card'
                /> ))}
            </div>
            <div className='p-3 w-full'></div>
        </div>
    )
}

export default TeamCis;