import sb_logo from '../assets/ieee_isetbz_black_logo.png';

function FooterCIS() {
    return (
        <div id="footer" className="h-[75px] grid grid-cols-2 bg-white p-1 overflow-y-hidden">
            <p className="font-['Inter'] text-2xl text-[rgba(0,0,0,0.5)] p-4.5 align-self-center">IEEE ISET BIZERTE SB 2025</p>
            <img src={sb_logo} alt="IEEE ISET BIZERTE Logo" className="h-[100px] justify-self-end content-end p-6 -mt-[19px]" />
        </div>
    );
}

export default FooterCIS;
