import sb_logo from '../assets/ieee_isetbz_sb.png';
import "./FooterCIS.css";

function FooterCIS() {
    return (
        <div id="footer">
            <div className="h-[120px] sm:grid grid-cols-2 bg-white p-1 overflow-y-hidden hidden">
                <p className="font-['Inter'] sm:mt-0 mt-3 sm:text-4xl text-[15px] text-[rgba(0,0,0,0.5)] sm:p-8 py-2 pl-1 align-self-center">IEEE ISET BIZERTE SB 2025</p>
                <img src={sb_logo} alt="IEEE ISET BIZERTE Logo" className="sm:h-[40%] mt-3 sm:justify-self-end content-end sm:p-6 sm:-mt-[19px]" />
            </div>
            <div className="h-[150px] grid grid-rows-2 bg-white p-1 overflow-y-hidden sm:hidden">
                <img src={sb_logo} alt="IEEE ISET BIZERTE Logo" className="h-[100px] mt-1 justify-self-center align-self-center" />
                <p className="font-['Inter'] mt-9 text-xl text-center text-[rgba(0,0,0,0.5)]">IEEE ISET BIZERTE SB 2025</p>
            </div>
        </div>
    );
}

export default FooterCIS;
