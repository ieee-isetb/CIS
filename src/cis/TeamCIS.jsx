import PixelHoverCard from '../animations/PixelHoverCard'
import facebook_icon from '../assets/socials/facebook-white.svg'
import instagram_icon from '../assets/socials/instagram-white.svg'
import linkedin_icon from '../assets/socials/linkedin-white.svg'
import gmail_icon from '../assets/socials/gmail-white.svg'
import './TeamCIS.css';

function TeamCis() {
    const teamMembers = [
        {
            "role": "Chair & Founder",
            "name": "Yassine Zorgui",
            "instagram": "",
            "facebook": "https://www.facebook.com/mohamedyassine.zorgui",
            "linkedin": "https://www.linkedin.com/in/mohamed-yassine-zorgui-849211294/",
            "ieee_email": "Zorguimohamedyassine@ieee.org",
            "photo": "/CIS/team/yassine_zorgui.jpeg"
        },
        {
            "role": "General Secretary",
            "name": "Allani Mohamed",
            "instagram": "https://www.instagram.com/all4n1_/",
            "facebook": "https://www.facebook.com/all4n1",
            "linkedin": "https://www.linkedin.com/in/allani-mohamed-570952366/",
            "ieee_email": "allani_mohamed@ieee.org",
            "photo": "/CIS/team/allani_mohamed.png"
        },
        {
            "role": "HR Manager",
            "name": "Tasnim Belhassen",
            "instagram": "https://www.instagram.com/tasnim.bbelhassen/",
            "facebook": "https://www.facebook.com/tasnim.benbelhassen.2025",
            "linkedin": "https://www.linkedin.com/in/tasnim-benbelhassen-25b459353/",
            "ieee_email": "tasnim.bbelhassen@ieee.org",
            "photo": "/CIS/team/tasnim_belhassen.jpeg"
        },
        {
            "role": "Treasurer",
            "name": "Louay Mhouachi",
            "instagram": "https://www.instagram.com/louay.mhouachy/",
            "facebook": "https://www.instagram.com/louay.mhouachi/",
            "linkedin": "",
            "ieee_email": "louay.mhouachi@ieee.org",
            "photo": "/CIS/team/louay_mhouachi.png"
        }
    ]
    // this is the team members data of CIS ISET Bizerte SBC
    // images must be placed in the public/team folder and the path must be like this : /CIS/team/your_image.png

    return (
        <div id='team'>
            <div className="text-center mt-7 mb-9 font-['Arima'] font-semibold text-5xl underline text-[#3EA2DC]">
                Our Team</div>
            <div className="flex flex-wrap justify-center gap-5 sm:p-0 p-2">
                {teamMembers.map((item) => (
                    <PixelHoverCard key={item.name}
                        firstContent={
                            <img src={item.photo} alt={item.role} className='w-[100%] h-[100%] object-cover' />
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
                                <p className='sm:text-3xl text-xl absolute top-5 font-["Arima"] font-semibold text-center'>{item.name}</p>
                                <p className='sm:text-2xl text-xl absolute top-15 font-["Arima"] font-semibold text-center'>{item.role}</p>
                                <div className='self-end flex flex-wrap justify-center sm:gap-6 gap-2 right-1/5 mb-5'>
                                    {item.instagram && item.instagram !== '' && <a className='pointer-events-auto' target="_blank" rel="noopener noreferrer" href={item.instagram}><img src={instagram_icon} alt="Instagram" className='w-8 h-8 relative top-[-3px]' /></a>}
                                    {item.facebook && item.facebook !== '' && <a className='pointer-events-auto' target="_blank" rel="noopener noreferrer" href={item.facebook}><img src={facebook_icon} alt="Facebook" className='w-6 h-6' /></a>}
                                    {item.linkedin && item.linkedin !== '' && <a className='pointer-events-auto' target="_blank" rel="noopener noreferrer" href={item.linkedin}><img src={linkedin_icon} alt="LinkedIn" className='w-6 h-6' /></a>}
                                    {item.ieee_email && item.ieee_email !== '' && <a className='pointer-events-auto' target="_blank" rel="noopener noreferrer" href={`mailto:${item.ieee_email}`}><img src={gmail_icon} alt="Gmail" className='w-7.5 h-7.5' /></a>}
                                </div>
                            </div>
                        }
                        pixelColor='#102c3c'
                        gridSize={8}
                        animationStepDuration={0.5}
                        className='profile_card'
                    />))}
            </div>
            <div className='p-3 w-full'></div>
        </div>
    )
}

export default TeamCis;
