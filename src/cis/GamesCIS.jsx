/* 
 * GamesCIS Component
 * - Opens as a separate overlay/widget (not part of the main single-page sections)
 * - Displays games related to events, hackathons, and workshops
 * - Shows professional message when no games are available
 * - Each game launches independently
 */
import { useState, useEffect } from "react";
import "./GamesCIS.css";


const games = [
    // Add games here during events
    // Games will appear automatically when added to this array
    {
        id: "ai-foundations-quiz",
        title: "AI Foundations",
        description: "Test your knowledge on AI basics!",
        thumbnail: "/events/Ai_Foundation_Workshop/AiFoundationWorkshop.png",
        url: "/games/ai-foundations-quiz/index.html",
        category: "Workshop",
        isActive: true
    }
];

function GamesCIS({ isOpen, onClose }) {
    const [activeGames, setActiveGames] = useState([]);
    
    useEffect(() => {
        // Filter only active games
        const available = games.filter(game => game.isActive);
        setActiveGames(available);
    }, []);

    // Handle escape key to close
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
        
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, onClose]);

    // Launch a game in a new window/tab
    const launchGame = (game) => {
        window.open(game.url, '_blank', 'noopener,noreferrer');
    };

    if (!isOpen) return null;

    return (
        <div className="games-overlay" onClick={onClose}>
            <div className="games-widget" onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                <div className="games-header">
                    <div className="games-header-content">
                        <div className="games-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="6" width="20" height="12" rx="2"/>
                                <circle cx="8" cy="12" r="2"/>
                                <path d="M15 9v6M12 12h6"/>
                            </svg>
                        </div>
                        <div>
                            <h2>Games Hub</h2>
                            <p>Interactive games for events & workshops</p>
                        </div>
                    </div>
                    <button className="games-close-btn" onClick={onClose}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12"/>
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div className="games-content">
                    {activeGames.length === 0 ? (
                        /* No games available state */
                        <div className="games-empty">
                            <div className="empty-icon">
                                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="2" y="6" width="20" height="12" rx="2"/>
                                    <circle cx="8" cy="12" r="2"/>
                                    <path d="M15 9v6M12 12h6"/>
                                </svg>
                            </div>
                            <h3>No Active Games Available</h3>
                            <p>
                                Games are typically available during our events, hackathons, and workshops. 
                                Check back during our next event for exciting interactive experiences!
                            </p>
                            <div className="empty-info">
                                <div className="info-item">
                                    <span className="info-icon">🎯</span>
                                    <span>Quizzes & Challenges</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-icon">🏆</span>
                                    <span>Competition Games</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-icon">🧠</span>
                                    <span>AI & Tech Puzzles</span>
                                </div>
                            </div>
                            <p className="empty-cta">
                                Follow us on social media to stay updated about upcoming events!
                            </p>
                        </div>
                    ) : (
                        /* Games grid when games are available */
                        <div className="games-grid">
                            {activeGames.map((game) => (
                                <div key={game.id} className="game-card">
                                    <div className="game-thumbnail">
                                        <img src={game.thumbnail} alt={game.title} />
                                        <div className="game-category">{game.category}</div>
                                    </div>
                                    <div className="game-info">
                                        <h4>{game.title}</h4>
                                        <p>{game.description}</p>
                                        <button 
                                            className="game-play-btn"
                                            onClick={() => launchGame(game)}
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                <polygon points="5,3 19,12 5,21"/>
                                            </svg>
                                            Play Now
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="games-footer">
                    <p>🎮 Powered by IEEE CIS ISET Bizerte</p>
                </div>
            </div>
        </div>
    );
}

export default GamesCIS;
