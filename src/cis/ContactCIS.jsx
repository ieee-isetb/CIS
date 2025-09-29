import bg from '../assets/socials_board.png'
import discord from '../assets/socials/discord-color.svg'
import facebook from '../assets/socials/facebook-color.svg'
import instagram from '../assets/socials/instagram-color.svg'
import gmail from '../assets/socials/gmail-color.svg'
import "./ContactCIS.css";

const socials = {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/profile.php?id=61567684887441",
    discord: "https://discord.gg/6qZvfp8Rfy",
    gmail: "cisofficiel@gmail.com"
}; // these are the social media links of CIS ISET Bizerte SBC

function ContactCIS() {
    return (
        <div id="contact" className="bg-[#3EA2DC] sm:h-[620px] h-[950px] text-white overflow-y-hidden">
            <div className="text-center mt-3 pt-7 font-['Arima'] font-[600] text-5xl underline">
                Contact us</div>
            <p className="text-center font-['Arima'] font-[400] sm:text-4xl sm:px-0 px-2 text-2xl mt-5">
                If you want to ask us any question, or just give us a feedback,<br />
                all you have to do is fill the form below.
            </p>
            <div className="grid sm:grid-cols-2 grid-rows-2 gap-4 justify-items-center sm:mt-10 mt-5">
                <div className="justify-self-start pl-10">
                    <form className="flex flex-col gap-2 relative w-50 sm:w-[250px]">
                        <label className="label-feedback">Your Name</label>
                        <input type="text" placeholder="Your Name" className="p-2 rounded-md bg-white" />
                        <label className="label-feedback">Your Email</label>
                        <input type="email" placeholder="Your Email" className="p-2 rounded-md bg-white" />
                        <label className="label-feedback">Your Message</label>
                        <textarea placeholder="Your Message" className="p-2 rounded-md h-32 bg-white resize-none"></textarea>
                        <div className='grid grid-cols-2 gap-2 absolute bottom-[-18%] sm:w-[424px] w-85 font-["Inter"]'>
                            <button type="submit" className="bg-white border-2 border-transparent text-[#3EA2DC] p-2 rounded-md hover:bg-[#3EA2DC] hover:border-white hover:text-white transition-colors underline cursor-pointer">
                                Send Message
                            </button>
                            <button type="reset" className="bg-white border-2 border-transparent text-[#3EA2DC] p-2 rounded-md hover:bg-[#3EA2DC] hover:border-white hover:text-white transition-colors underline cursor-pointer">
                                Reset
                            </button>
                        </div>
                    </form>
                </div>
                <div id="socials" className="w-[600px] sm:justify-self-end mr-5 justify-self-center relative sm:bottom-0 bottom-50 scale-65 sm:scale-100 -left-[15%] sm:left-0">
                    <img src={bg} alt="Socials Background" className="object-cover relative" />
                    <p className="relative bottom-[308px] p-1 left-[46.5%] bg-white w-[23%] text-center text-[12px] text-[#2294FE] underline font-['Inter']">
                        Don't forget to follow us on our socials!
                    </p>
                    <div className='grid grid-cols-2 gap-y-2 gap-x-3 justify-items-center relative bottom-[300px] left-[22%] w-[110px] button-container'>
                        <a href={socials.instagram} target='_blank' rel="noopener noreferrer" className='bg-white p-2.5 rounded-3xl cursor-pointer'><img src={instagram} /></a>
                        <a href={socials.facebook} target='_blank' rel="noopener noreferrer" className='bg-white p-2.5 rounded-3xl cursor-pointer'><img src={facebook} /></a>
                        <a href={socials.discord} target='_blank' rel="noopener noreferrer" className='bg-white p-2.5 rounded-3xl cursor-pointer'><img src={discord} /></a>
                        <a href={`mailto:${socials.gmail}`} target='_blank' rel="noopener noreferrer" className='bg-white p-2.5 rounded-3xl cursor-pointer'><img src={gmail} className='w-[300px] h-[100%]' /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactCIS;