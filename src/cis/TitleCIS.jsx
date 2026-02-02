/* 
 * REDESIGNED: Complete rewrite of TitleCIS (Hero Section)
 * - Removed: SilkBG animated background component
 * - Removed: Old structure with hero-overlay, hero-text-content
 * - Added: Pure CSS background with gradient, grid, and glow effects
 * - Added: Badge above title, stats preview, scroll indicator
 * - Changed: Title now uses typing animation with staged reveals
 */
import "./TitleCIS.css";
import { ReactTyped } from "react-typed";
import { useState } from "react";

function TitleCIS(){
    /* New: States for staged animation - subtitle shows after title, buttons after subtitle */
    const [showSubtitle, setShowSubtitle] = useState(false);
    const [showButtons, setShowButtons] = useState(false);
    const registrationFormURL = "https://forms.gle/8toQ46baTj2yQh9b9";
    
    return (
        /* Changed: From <div className="hero-section"> with SilkBG child to <section> with CSS backgrounds */
        <section id="home" className="hero-section">
            {/* New: CSS-only background - replaces SilkBG animation component */}
            <div className="hero-bg">
                <div className="hero-gradient"></div>
                <div className="hero-grid"></div>
                <div className="hero-glow"></div>
            </div>

            {/* Restructured: Simpler content container */}
            <div className="hero-content">
                {/* New: Badge element like reference site - wasn't in original */}
                <div className="hero-badge">
                    <span className="badge-dot"></span>
                    EMPOWERING FUTURE INNOVATORS IN AI AND MACHINE LEARNING
                </div>

                {/* Changed: Title now uses ReactTyped for typewriter effect */}
                <h1 className="hero-title">
                    <ReactTyped
                        strings={["IEEE Computational<br/>Intelligence Society"]}
                        typeSpeed={40}
                        cursorChar="|"
                        showCursor={true}
                        onComplete={(self) => {
                            setShowSubtitle(true);
                            self.cursor.remove();
                        }}
                    />
                </h1>

                {/* New: Subtitle appears after title finishes typing */}
                {showSubtitle && (
                    <p className="hero-subtitle">
                        <ReactTyped
                            strings={["ISET Bizerte Student Branch Chapter"]}
                            typeSpeed={30}
                            cursorChar="|"
                            showCursor={false}
                            onComplete={() => setShowButtons(true)}
                        />
                    </p>
                )}

                {/* Changed: Buttons now appear after subtitle, styled with gradient */}
                {showButtons && (
                    <div className="hero-buttons animate-fade-in">
                        <a 
                            href={registrationFormURL} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn-primary"
                        >
                            <span>Join Us</span>
                            {/* New: Arrow icon in button */}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </a>
                        <a href="#about" className="btn-secondary">
                            Learn More
                        </a>
                    </div>
                )}

                {/* New: Stats preview in hero - wasn't in original design */}
                <div className={`hero-stats ${showButtons ? 'animate-fade-in' : 'opacity-0'}`}>
                    <div className="stat-item">
                        <span className="stat-number">20+</span>
                        <span className="stat-label">Members</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-number">5+</span>
                        <span className="stat-label">Workshops</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-number">2025</span>
                        <span className="stat-label">Established</span>
                    </div>
                </div>
            </div>

            {/* New: Scroll indicator animation - wasn't in original */}
            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <span>Scroll Down</span>
            </div>
        </section>
    );
}

export default TitleCIS;
