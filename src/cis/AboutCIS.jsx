import cis_logo from '../assets/cis_white_logo.png';
import './AboutCIS.css';

function AboutCIS() {
    // Feature cards data - replaces the old emoji burst animation with static cards
    const features = [
        {
            icon: '🔬',
            title: 'Research',
            description: 'Driving innovative research in AI, machine learning, and intelligent systems.'
        },
        {
            icon: '🤝',
            title: 'Community',
            description: 'Creating a supportive network of like-minded tech enthusiasts and researchers.'
        },
        {
            icon: '💡',
            title: 'Innovation',
            description: 'Transforming theoretical knowledge into practical, impactful solutions.'
        }
    ];

    return (
        // Changed from <div> to <section> for better semantics
        <section id="about" className="about-section">
            <div className="container">
                {/* New: Added a tag badge above the title like the reference site */}
                <div className="about-header">
                    <span className="section-tag">WHO WE ARE</span>
                    <h2 className="section-title">About IEEE CIS Society</h2>
                    <p className="section-subtitle">
                        Your Gateway to Computational Intelligence Excellence
                    </p>
                </div>

                {/* Restructured: Now uses a 2-column grid instead of the old layout */}
                <div className="about-content">
                    <div className="about-text">
                        <p className="about-lead">
                            We are a student-led chapter of the Institute of Electrical and Electronics 
                            Engineers (IEEE) Computational Intelligence Society—a world-leading organization 
                            dedicated to advancing computational intelligence and technology.
                        </p>
                        <p className="about-description">
                            Based at ISET Bizerte, the Computational Intelligence Society (CIS) chapter 
                            is dedicated to advancing knowledge and innovation in computational intelligence, 
                            artificial intelligence, and related technologies. We provide students and 
                            professionals with opportunities to explore emerging trends, develop technical 
                            skills, and engage in impactful projects.
                        </p>
                    </div>
                    {/* New: Logo now has a glowing background effect */}
                    <div className="about-logo-container">
                        <div className="logo-glow"></div>
                        <img src={cis_logo} alt="IEEE CIS Logo" className="about-logo" />
                    </div>
                </div>

                {/* New: Added feature cards grid - wasn't in the original */}
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card glass-card">
                            <span className="feature-icon">{feature.icon}</span>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* New: Added Mission & Vision section - wasn't in the original */}
                <div className="mission-vision">
                    <div className="mv-card">
                        <div className="mv-icon">🎯</div>
                        <h3>Our Mission</h3>
                        <h4>Empowering AI Excellence</h4>
                        <p>
                            To empower students to explore the full spectrum of intelligence, human and 
                            artificial. Through learning, collaboration, and hands on innovation, we 
                            cultivate leaders who design technology with empathy, creativity, and purpose.
                        </p>
                    </div>
                    <div className="mv-card">
                        <div className="mv-icon">🔭</div>
                        <h3>Our Vision</h3>
                        <h4>Shaping Tomorrow's Intelligence</h4>
                        <p>
                            To be recognized as the space where intelligence comes alive, where human 
                            curiosity meets computational power, and together they shape the future of 
                            Artificial Intelligence.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutCIS;