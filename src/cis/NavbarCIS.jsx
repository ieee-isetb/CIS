import logo from '../assets/cis_black_logo.png';
import "./NavbarCIS.css";

function NavbarCIS() {
  return (
    <div className="navbar-cis">
        <img className="" src={logo} alt="Logo" />
        <nav>
            <ul>
                <a href="#"><li>Home</li></a>
                <a href="#"><li>About us</li></a>
                <a href="#"><li>Statistics</li></a>
                <a href="#"><li>Team</li></a>
                <a href="#"><li>Contact</li></a>
            </ul>
        </nav>
    </div>
    
  );
}

export default NavbarCIS;