import bg from '../assets/socials_board.png'
import discord from '../assets/socials/discord-color.svg'
import facebook from '../assets/socials/facebook-color.svg'
import instagram from '../assets/socials/instagram-color.svg'
import gmail from '../assets/socials/gmail-color.svg'
import './SocialsCIS.css';

function SocialsCIS() {
    return (
        <div id="socials" className="w-[600px] justify-self-end mr-5">
            <img src={bg} alt="Socials Background" className="object-cover relative" />
            <p className="relative bottom-[308px] p-1 left-[46.5%] bg-white w-[23%] text-center text-[12px] text-[#2294FE] underline font-['Inter']">
                Don't forget to follow us on our socials!
            </p>
            <div className='grid grid-cols-2 gap-y-2 gap-x-3 justify-items-center relative bottom-[300px] left-[22%] w-[110px] button-container'>
                <button className='bg-white p-2.5 rounded-3xl cursor-pointer'><img src={instagram} /></button>
                <button className='bg-white p-2.5 rounded-3xl cursor-pointer'><img src={facebook} /></button>
                <button className='bg-white p-2.5 rounded-3xl cursor-pointer'><img src={discord} /></button>
                <button className='bg-white p-2.5 rounded-3xl cursor-pointer'><img src={gmail} className='w-[300px] h-[100%]' /></button>
            </div>
        </div>
    );
}

export default SocialsCIS;