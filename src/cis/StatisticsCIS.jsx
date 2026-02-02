/* 
 * REDESIGNED: Complete rewrite of StatisticsCIS
 * - Removed: LightRaysBG animated background component
 * - Removed: Old structure with h1 and simple stat boxes
 * - Added: Glass-morphism stat cards with emoji icons
 * - Added: Section header with tag badge
 * - Changed: Stats now have sublabels and animated counters
 */
import CountUp from "../animations/CountUp";
import "./StatisticsCIS.css";

/* Changed: Stats array now includes icon, sublabel fields - simpler than before */
const stats = [
    { value: 20, suffix: '+', label: 'Team Members', sublabel: 'Active professionals and students', icon: '👥' },
    { value: 5, suffix: '', label: 'Workshops', sublabel: 'Technical sessions delivered', icon: '🎓' },
    { value: 2, suffix: '', label: 'Bootcamps', sublabel: 'Intensive training programs', icon: '🏆' },
    { value: 1, suffix: '', label: 'Major Events', sublabel: 'Year of innovation', icon: '🎪' }
];

function StatisticsCIS() {
    return (
        /* Changed: From <div> to <section> with new class names */
        <section id="stats" className="stats-section">
            {/* New: CSS-only background - replaces LightRaysBG component */}
            <div className="stats-bg">
                <div className="stats-gradient"></div>
                <div className="stats-pattern"></div>
            </div>

            <div className="container">
                {/* New: Section header with tag badge like reference site */}
                <div className="stats-header">
                    <span className="section-tag">OUR IMPACT</span>
                    <h2 className="section-title">IEEE CIS Society Impact</h2>
                    <p className="section-subtitle">
                        Advancing computational intelligence research and applications
                    </p>
                </div>

                {/* Changed: From simple boxes to glass-card grid */}
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        /* New: Each stat is now a glass-morphism card */
                        <div key={index} className="stat-card">
                            <div className="stat-icon">{stat.icon}</div>
                            <div className="stat-value">
                                {/* CountUp animation was kept but integrated differently */}
                                <CountUp 
                                    from={0} 
                                    to={stat.value} 
                                    duration={2.5} 
                                    className="stat-number"
                                />
                                <span className="stat-suffix">{stat.suffix}</span>
                            </div>
                            <h3 className="stat-label">{stat.label}</h3>
                            {/* New: Sublabel under each stat - wasn't in original */}
                            <p className="stat-sublabel">{stat.sublabel}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default StatisticsCIS;