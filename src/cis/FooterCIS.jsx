import sb_logo from '../assets/ieee_isetbz_black_logo.png';

function FooterCIS() {
    return (
        <div id="footer" className="h-[75px] grid grid-cols-2 bg-white p-1 overflow-y-hidden">
            <p className="font-['Inter'] sm:mt-0 mt-3 sm:text-2xl text-[15px] text-[rgba(0,0,0,0.5)] sm:p-4.5 py-2 pl-1 align-self-center">IEEE ISET BIZERTE SB 2025</p>
            <img src={sb_logo} alt="IEEE ISET BIZERTE Logo" className="sm:h-[100px] mt-3 sm:justify-self-end content-end sm:p-6 sm:-mt-[19px]" />
        </div>
    );
}

export default FooterCIS;
