/* 
 * REDESIGNED: Complete rewrite of TeamCIS
 * - Removed: PixelHoverCard animation component
 * - Removed: External react-icons package dependency
 * - Added: Inline SVG icons for social links
 * - Added: CSS hover overlay with social links
 * - Changed: From animated 3D pixel cards to standard image cards with overlays
 */
import './TeamCIS.css';

/* New: Inline SVG icons - replaced react-icons imports */
const LinkedInIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

const EmailIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
    </svg>
);

const FacebookIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
    </svg>
);

const InstagramIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
);

function TeamCIS() {
    /* Founders data - the people who started the chapter */
    const founders = [
        {
            name: "Yassine Zorgui",
            photo: "/team/yassine_zorgui.jpeg"
        },
        {
            name: "Hadil Drissi",
            photo: "/team/hadil.jpg"
        },
        {
            name: "Karim Chatti",
            photo: "/team/karim.jpg"
        },
        {
            name: "Allani Mohamed",
            photo: "/team/allani_mohamed.png"
        },
        {
            name: "Louay Mhouachi",
            photo: "/team/louay_mhouachi.png"
        }
        
        
    ];

    /* Same team data as before - just cleaned up structure */
    const teamMembers = [
        {
            role: "Chair",
            name: "Karim Chatti",
            description: "CO-Founder of The IEEE ISETB SB CIS chapter. Leading the chapter with vision and dedication to advance computational intelligence.",
            instagram: "",
            facebook: "https://www.facebook.com/kareemchatti",
            linkedin: "https://www.linkedin.com/in/abdelkarim-chatti-7623a625a/",
            email: "karimchatti@ieee.org",
            photo: "/team/karim.jpg"
        },
        {
            role: "Secretary",
            name: "May Jaballah",
            description: "Managing communications and organizational activities for the chapter.",
            instagram: "",
            facebook: "https://www.facebook.com/may.jaballah.56",
            linkedin: "https://www.linkedin.com/in/may-jaballah/",
            email: "mayjaballah@gmail.com",
            photo: "/team/may.jpg"
        },
        {
            role: "Webmaster",
            name: "Mouhamed Rayen Brahmi",
            description: "Building and maintaining the digital presence of our chapter.",
            instagram: "",
            facebook: "https://www.facebook.com/mouhamed.rayen.brahmi.2025",
            linkedin: "https://www.linkedin.com/in/mouhamed-rayen-brahmi",
            email: "brahmi.mouhamedrayen@hotmail.com",
            photo: "/team/rayen.jpg"
        }
    ];

    return (
        /* Changed: From <div> to <section> for better semantics */
        <section id="team" className="team-section">
            <div className="container">
                {/* Founders Section */}
                <div className="founders-section">
                    <div className="founders-header">
                        <span className="section-tag">THE VISIONARIES</span>
                        <h2 className="section-title">Our Founders</h2>
                        <p className="section-subtitle">
                            Special thanks to the pioneers who established IEEE CIS ISETB and laid the foundation for our community
                        </p>
                    </div>

                    <div className="founders-grid">
                        {founders.map((founder, index) => (
                            <div key={index} className="founder-card">
                                <div className="founder-image">
                                    <img src={founder.photo} alt={founder.name} />
                                    <div className="founder-glow"></div>
                                </div>
                                <div className="founder-info">
                                    <h3 className="founder-name">{founder.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* New: Section header with tag badge like reference site */}
                <div className="team-header">
                    <span className="section-tag">OUR PEOPLE</span>
                    <h2 className="section-title">Meet Our Team</h2>
                    <p className="section-subtitle">
                        The dedicated individuals driving innovation and excellence at IEEE CIS
                    </p>
                </div>

                {/* Changed: From PixelHoverCard to standard grid with CSS hover effects */}
                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        /* New: Team card structure with image overlay */
                        <div key={index} className="team-card">
                            <div className="card-image">
                                <img src={member.photo} alt={member.name} />
                                {/* New: Overlay with social links appears on hover */}
                                <div className="card-overlay">
                                    <div className="social-links">
                                        {member.linkedin && (
                                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                                <LinkedInIcon />
                                            </a>
                                        )}
                                        {member.email && (
                                            <a href={`mailto:${member.email}`} aria-label="Email">
                                                <EmailIcon />
                                            </a>
                                        )}
                                        {member.facebook && (
                                            <a href={member.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                                <FacebookIcon />
                                            </a>
                                        )}
                                        {member.instagram && (
                                            <a href={member.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                                <InstagramIcon />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                            {/* New: Card content section below image */}
                            <div className="card-content">
                                <span className="member-role">{member.role}</span>
                                <h3 className="member-name">{member.name}</h3>
                                <p className="member-description">{member.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TeamCIS;
