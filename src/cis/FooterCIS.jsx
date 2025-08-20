import sb_logo from '../assets/ieee_isetbz_black_logo.png';

function FooterCIS() {
    return (
        <div id="footer" className="h-[12vh] grid grid-cols-2 bg-white p-1">
            <p className="font-['Inter'] text-3xl text-[rgba(0,0,0,0.5)] p-8 align-self-center">IEEE ISET BIZERTE SB 2025</p>
            <img src={sb_logo} alt="IEEE ISET BIZERTE Logo" className="h-[100px] justify-self-end p-2 mr-4" />
        </div>
    );
}

export default FooterCIS;
