import sb_logo from '../assets/ieee_isetbz_sb.png';
import "./FooterCIS.css";

function FooterCIS() {
    return (
        <div id="footer">
            {/* Desktop Footer */}
            <div className="h-auto sm:flex flex-col bg-white p-4 overflow-hidden hidden">
                <div className="flex justify-between items-center border-t border-gray-200 pt-4">
                    <div className="flex flex-col">
                        <p className="font-['Inter'] text-2xl text-[rgba(0,0,0,0.7)]">
                            © IEEE ISET BIZERTE SB 2025
                        </p>
                        <p className="font-['Inter'] text-sm text-[rgba(0,0,0,0.5)] mt-2 max-w-2xl">
                            All rights reserved. IEEE and the IEEE logo are registered trademarks of The Institute of Electrical and Electronics Engineers, Inc.
                        </p>
                    </div>
                    <img 
                        src={sb_logo} 
                        alt="IEEE ISET BIZERTE Logo" 
                        className="h-16 object-contain"
                    />
                </div>
            </div>

            {/* Mobile Footer */}
            <div className="h-auto flex flex-col bg-white p-4 overflow-hidden sm:hidden">
                <div className="flex flex-col items-center space-y-4">
                    <img 
                        src={sb_logo} 
                        alt="IEEE ISET BIZERTE Logo" 
                        className="h-16 object-contain"
                    />
                    <div className="text-center">
                        <p className="font-['Inter'] text-xl text-[rgba(0,0,0,0.7)]">
                            © IEEE ISET BIZERTE SB 2025
                        </p>
                        <p className="font-['Inter'] text-xs text-[rgba(0,0,0,0.5)] mt-2 px-4">
                            All rights reserved. IEEE and the IEEE logo are registered trademarks of The Institute of Electrical and Electronics Engineers, Inc.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterCIS;
