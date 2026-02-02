/* 
 * REDESIGNED: Complete rewrite of NavbarCIS
 * - Removed: Dark mode toggle functionality (was toggling between light/dark themes)
 * - Added: Fixed header that changes style on scroll
 * - Added: Mobile hamburger menu for responsive design
 * - Changed: From complex nav structure to simpler fixed header layout
 * - Added: Games tab that opens a separate widget (for hackathon events)
 */
import { useState, useEffect } from "react";
import logoDark from '../assets/cis_white_logo.png'
import ScrollIntoView from 'react-scroll-into-view';
import "./NavbarCIS.css";

/* Added: onOpenGames prop to trigger the Games widget from App.jsx */
function NavbarCIS({ onOpenGames }) {
  /* Changed: Removed darkMode state, added mobileMenuOpen state instead */
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const registrationFormURL = "https://forms.gle/8toQ46baTj2yQh9b9";

  /* New: Scroll detection to add background blur effect when scrolled */
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  /* Changed: Simplified nav links array - removed icon properties */
  const navLinks = [
    { label: 'Home', selector: '#home' },
    { label: 'About', selector: '#about' },
    { label: 'Statistics', selector: '#stats' },
    { label: 'Events', selector: '#events' },
    { label: 'Team', selector: '#team' },
    { label: 'Contact', selector: '#contact' },
  ];

  /* New: Handler to open Games widget and close mobile menu */
  const handleGamesClick = () => {
    setMobileMenuOpen(false);
    if (onOpenGames) {
      onOpenGames();
    }
  };

  return (
    /* Changed: From <nav> to <header>, added scrolled class toggle */
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Simplified: Removed dark/light logo toggle, using only dark logo */}
        <div className="navbar-logo">
          <img src={logoDark} alt="IEEE CIS Logo" />
        </div>
        
        {/* New: Mobile menu toggle class for responsive design */}
        <nav className={`navbar-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.selector}>
                <ScrollIntoView selector={link.selector}>
                  {/* Changed: Closes mobile menu on click */}
                  <button onClick={() => setMobileMenuOpen(false)}>
                    {link.label}
                  </button>
                </ScrollIntoView>
              </li>
            ))}
            {/* New: Games tab - opens separately as a widget */}
            <li>
              <button onClick={handleGamesClick} className="games-nav-btn">
                🎮 Games
              </button>
            </li>
          </ul>
          {/* Changed: "Join Us" button now styled as gradient button like reference */}
          <a 
            href={registrationFormURL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="join-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            Join Us
          </a>
        </nav>

        {/* New: Hamburger menu button for mobile - wasn't in original */}
        <button 
          className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default NavbarCIS;
