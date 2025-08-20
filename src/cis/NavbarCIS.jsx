import logo from '../assets/cis_black_logo.png';
import ScrollIntoView from 'react-scroll-into-view';
import "./NavbarCIS.css";

function NavbarCIS() {
  return (
    <div className="navbar-cis">
      <img className="" src={logo} alt="Logo" />
      <nav>
        <ul>
          <li><ScrollIntoView selector='#home'><button>Home</button></ScrollIntoView></li>
          <li><ScrollIntoView selector='#about'><button className='w-[100%]'>About us</button></ScrollIntoView></li>
          <li><ScrollIntoView selector='#stats'><button>Statistics</button></ScrollIntoView></li>
          <li><ScrollIntoView selector='#team'><button>Team</button></ScrollIntoView></li>
          <li><ScrollIntoView selector='#contact'><button>Contact</button></ScrollIntoView></li>
        </ul>
      </nav>
    </div>

  );
}

export default NavbarCIS;