import { useState } from "react";
import "./ContactCIS.css";

/* New: Inline SVG icons - no external package dependencies */
const InstagramIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
);

const FacebookIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
    </svg>
);

const LinkedInIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

const LinkTreeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.953 15.066c-.08.163-.08.324-.08.486 0 .162.08.324.08.486l1.05 1.62-1.05 1.134-1.05-1.134-.93.648.93 1.38-.93 1.458-1.05-1.458-1.05 1.458-1.05-1.458 1.05-1.38-.93-.648-1.05 1.134-1.05-1.134 1.05-1.62c.08-.162.08-.324.08-.486 0-.162-.08-.324-.08-.486l-1.05-1.62 1.05-1.134 1.05 1.134.93-.648-.93-1.38.93-1.458 1.05 1.458 1.05-1.458 1.05 1.458-1.05 1.38.93.648 1.05-1.134 1.05 1.134-1.05 1.62zm8.047-7.066h-8v4h8v-4zm0-4h-8v2h8v-2z"/>
    </svg>
);

const linktree_link = "https://linktr.ee/CIS_ISETBizerte";

/* New: Social links array with icon components */
const socialLinks = [
    { name: 'Instagram', icon: <InstagramIcon />, url: 'https://www.instagram.com/ieeecisisetbizerte/' },
    { name: 'Facebook', icon: <FacebookIcon />, url: 'https://www.facebook.com/profile.php?id=61567684887441' },
    { name: 'LinkedIn', icon: <LinkedInIcon />, url: 'https://www.linkedin.com/company/ieee-cis-iset-bizerte-sb/about/' },
    { name: 'LinkTree', icon: <LinkTreeIcon />, url: linktree_link },
];

function ContactCIS() {
    /* New: Form state management with controlled inputs */
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    /* New: Handle input changes */
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    /* New: Handle form submission */
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    return (
        /* Changed: From <div> to <section> for better semantics */
        <section id="contact" className="contact-section">
            <div className="container">
                {/* New: Section header with tag badge like reference site */}
                <div className="contact-header">
                    <span className="section-tag">GET IN TOUCH</span>
                    <h2 className="section-title">Contact Us</h2>
                    <p className="section-subtitle">
                        Have a question or want to collaborate? We'd love to hear from you.
                    </p>
                </div>

                {/* New: 2-column layout for form and info */}
                <div className="contact-content">
                    {/* New: Contact form with modern styling */}
                    <div className="contact-form-container">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Foulen Fouleni"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="foulen@email.com"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us what you're thinking..."
                                    rows="5"
                                    required
                                ></textarea>
                            </div>
                            {/* New: Submit button with send icon */}
                            <button type="submit" className="btn-primary submit-btn">
                                Send Message
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                                </svg>
                            </button>
                        </form>
                    </div>

                    {/* New: Info cards sidebar with glass-morphism */}
                    <div className="contact-info">
                        {/* New: Social links card */}
                        <div className="info-card glass-card">
                            <h3>Connect With Us</h3>
                            <p>Follow us on social media to stay updated with our latest events and activities.</p>
                            
                            {/* New: Social grid layout */}
                            <div className="social-grid">
                                {socialLinks.map((social, index) => (
                                    <a 
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link"
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                        <span>{social.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* New: Location info card */}
                        <div className="info-card glass-card">
                            <h3>Location</h3>
                            <p>ISET Bizerte<br />7021 Menzel Abderrahmane, Bizerte, Tunisia</p>
                        </div>

                        {/* New: Email info card */}
                        <div className="info-card glass-card">
                            <h3>Email</h3>
                            <a href="mailto:ieeecisisetbizerte@gmail.com">ieeecisisetbizerte@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactCIS;