import cis_logo from '../assets/cis_white_logo.png';
import "./FooterCIS.css";

/* New: Inline SVG icons - no external dependencies */
const InstagramIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
);

const FacebookIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
    </svg>
);

const LinkedInIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

function FooterCIS() {
    /* New: Quick links array for footer navigation */
    const quickLinks = [
        { label: 'About Us', href: '#about' },
        { label: 'Events', href: '#events' },
        { label: 'Team', href: '#team' },
        { label: 'Contact', href: '#contact' },
    ];

    /* New: Social links array with icon components */
    const socialLinks = [
        { icon: <InstagramIcon />, url: 'https://www.instagram.com/ieeecisisetbizerte/', label: 'Instagram' },
        { icon: <FacebookIcon />, url: 'https://www.facebook.com/profile.php?id=61567684887441', label: 'Facebook' },
        { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/company/ieee-cis-iset-bizerte-sb/about/', label: 'LinkedIn' },
    ];

    return (
        <footer id="footer" className="footer">
            <div className="container">
                {/* New: 3-column footer layout */}
                <div className="footer-content">
                    {/* New: Brand section with logo and description */}
                    <div className="footer-brand">
                        <img src={cis_logo} alt="IEEE CIS Logo" className="footer-logo" />
                        <p className="footer-description">
                            We are a student-led Chapter that belongs to the Institute of Electrical and 
                            Electronics Engineering (IEEE) Computational Intelligence Society—a world-leading 
                            organization dedicated to computational intelligence and technology.
                        </p>
                        {/* New: Social icons row */}
                        <div className="footer-socials">
                            {socialLinks.map((social, index) => (
                                <a 
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="social-icon"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* New: Quick links column */}
                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* New: Contact info column */}
                    <div className="footer-contact">
                        <h4>Get In Touch</h4>
                        <ul>
                            <li>
                                <span>📍</span>
                                <span>ISET Bizerte, Tunisia</span>
                            </li>
                            <li>
                                <span>✉️</span>
                                <a href="mailto:ieeecisisetbizerte@gmail.com">ieeecisisetbizerte@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* New: Bottom bar with copyright */}
                <div className="footer-bottom">
                    {/* New: Dynamic year using JavaScript Date */}
                    <p>© {new Date().getFullYear()} IEEE CIS ISET Bizerte SBC. All Rights Reserved.</p>
                    <p className="footer-credit">
                        Designed with ❤️ by IEEE CIS Team
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default FooterCIS;
