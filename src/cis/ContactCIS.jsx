import SocialsCIS from "./SocialsCIS";
import "./ContactCIS.css";

function ContactCIS(){
    return (
        <div id="contact" className="bg-[#3EA2DC] h-[620px] text-white overflow-y-hidden">
            <div className="text-center mt-3 pt-7 font-['Arima'] font-[600] text-5xl underline">
                Contact us</div>
            <p className="text-center font-['Arima'] font-[400] text-4xl mt-5">
                If you want to ask us any question, or just give us a feedback,<br/>
                all you have to do is fill the form below.
            </p>
            <div className="grid grid-cols-2 gap-4 justify-items-center mt-10">
                <div className="justify-self-start pl-10">
                    <form className="flex flex-col gap-2">
                        <label className="label-feedback">Your Name</label>
                        <input type="text" placeholder="Your Name" className="p-2 rounded-md bg-white" />
                        <label className="label-feedback">Your Email</label>
                        <input type="email" placeholder="Your Email" className="p-2 rounded-md bg-white" />
                        <label className="label-feedback">Your Message</label>
                        <textarea placeholder="Your Message" className="p-2 rounded-md h-32 bg-white"></textarea>
                        <button type="submit" className="bg-white text-[#3EA2DC] p-2 rounded-md hover:bg-[#3EA2DC] hover:text-white transition-colors">
                            Send Message
                        </button>
                    </form>
                </div>
                <SocialsCIS />
            </div>
        </div>
    );
}

export default ContactCIS;