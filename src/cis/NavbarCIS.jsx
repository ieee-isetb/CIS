import logo from '../assets/cis_black_logo.png';
import "./NavbarCIS.css";

function NavbarCIS() {
  return (
    <div className="navbar-cis">
        <img className="" src={logo} alt="Logo" />
        <nav>
            <ul>
                <a href="#home"><li>Home</li></a>
                <a href="#about"><li>About us</li></a>
                <a href="#stats"><li>Statistics</li></a>
                <a href="#team"><li>Team</li></a>
                <a href="#contact"><li>Contact</li></a>
            </ul>
        </nav>
    </div>
    
  );
}

export default NavbarCIS;