import { useState, useEffect } from "react";
import logoDark from '../assets/cis_white_logo.png'
import logoLight from '../assets/cis_black_logo.png';
import ScrollIntoView from 'react-scroll-into-view';
import "./NavbarCIS.css";

// Simple inline SVGs for sun/moon
const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" 
    viewBox="0 0 24 24" width="20" height="20">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
  </svg>
);

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun" viewBox="0 0 16 16"> 
    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>

  </svg>
);

function NavbarCIS() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const registrationFormURL = "https://forms.gle/8toQ46baTj2yQh9b9";

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
        document.body.classList.toggle('has-fixed-nav', isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('has-fixed-nav');
    };
  }, [scrolled]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", !darkMode);
  };

  return (
    <div className={`navbar-cis ${scrolled ? 'navbar-scrolled' : ''}`}>
      <img src={darkMode ? logoDark : logoLight} alt="Logo" className="nav-logo"/>
      <nav>
        <ul className="nav-links">
          <li><ScrollIntoView selector='#home'><button>Home</button></ScrollIntoView></li>
          <li><ScrollIntoView selector='#about'><button>About us</button></ScrollIntoView></li>
          <li><ScrollIntoView selector='#stats'><button>Statistics</button></ScrollIntoView></li>
          <li><ScrollIntoView selector='#team'><button>Team</button></ScrollIntoView></li>
          <li><ScrollIntoView selector='#contact'><button>Contact</button></ScrollIntoView></li>

          {/* Dark Mode Toggle Icon */}
          <li>
            <button className="dark-toggle-btn" onClick={toggleDarkMode}>
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </button>
          </li>
        </ul>

        {/* Join Us Button - Separate from main navigation */}
        <a href={registrationFormURL} 
           target="_blank" 
           rel="noopener noreferrer" 
           className="join-us-btn">
          Join Us
        </a>
      </nav>
    </div>
  );
}

export default NavbarCIS;
