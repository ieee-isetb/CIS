
import { useState, useCallback } from "react";
import "./EventsCIS.css";

/* Changed: Events now have images array for gallery navigation */
const events = [
    {
        title: "Foundations of AI Workshop",
        date: "Feb 7, 2026",
        description: "Join us for an immersive workshop covering the fundamentals of Artificial Intelligence. Learn about machine learning, neural networks, and hands-on AI applications. Perfect for beginners and intermediate learners!",
        images: [
            "/events/Ai_Foundation_Workshop/AiFoundationWorkshop.png"
        ],
        category: "Workshop",
        hasQuiz: true
    },
    {
        title: "AI and the Art of Time Mastery",
        date: "2025",
        description: "A workshop exploring how AI can help optimize time management and productivity in daily life.",
        images: [
            "/events/AI_and_the_art_of_time_mastery/496299613_122148543872589496_7986176113008782413_n.jpg",
            "/events/AI_and_the_art_of_time_mastery/pic-3.jpg",
            "/events/AI_and_the_art_of_time_mastery/pic-5.jpg",
            "/events/AI_and_the_art_of_time_mastery/pic-12.jpg",
            "/events/AI_and_the_art_of_time_mastery/pic-41.jpg",
            "/events/AI_and_the_art_of_time_mastery/pic-48.jpg"
        ],
        category: "Workshop"
    },
    {
        title: "Code It Up 5.0",
        date: "2025",
        description: "An intensive coding competition bringing together talented developers to solve real-world challenges.",
        images: [
            "/events/code_it_up/494075051_675018355259051_7459268666068918352_n.jpg",
            "/events/code_it_up/codeitup (32 of 255).jpg",
            "/events/code_it_up/codeitup (179 of 255).jpg",
            "/events/code_it_up/codeitupp2 (29 of 188).jpg",
            "/events/code_it_up/codeitupp2 (126 of 188).jpg",
            "/events/code_it_up/codeitupp2 (180 of 188).jpg"
        ],
        category: "Competition"
    },
    {
        title: "AWS Bootcamp",
        date: "2025",
        description: "Hands-on bootcamp covering AWS cloud services, architecture, and deployment strategies.",
        images: [
            "/events/aws_bootcamp/480906381_122134381526589496_5140800072676475620_n.jpg",
            "/events/aws_bootcamp/481122158_122133290810589496_5138717774382568459_n.jpg"
        ],
        category: "Bootcamp"
    },
    {
        title: "ABC's of AI",
        date: "2024",
        description: "A beginner-friendly introduction to artificial intelligence fundamentals and applications.",
        images: [
            "/events/abc_ai/pic (11 of 67).png",
            "/events/abc_ai/pic (4 of 67).png",
            "/events/abc_ai/pic (44 of 67).png",
            "/events/abc_ai/pic (45 of 67).png",
            "/events/abc_ai/pic (64 of 67).png"
        ],
        category: "Workshop"
    },
    {
        title: "Our Booth",
        date: "2024",
        description: "Showcasing our chapter's achievements and engaging with the university community.",
        images: [
            "/events/Booth/467766352_122115546560589496_7980927003317713407_n.jpg",
            "/events/Booth/468048405_122115547028589496_1787068702099165062_n.jpg",
            "/events/Booth/468054482_122115547088589496_6741034518343147113_n.jpg",
            "/events/Booth/468097218_122115546524589496_4114004259634006134_n.jpg",
            "/events/Booth/468222470_122115546146589496_7810775395767742454_n.jpg"
        ],
        category: "Exhibition"
    },
    {
        title: "Online Workshops",
        date: "2025",
        description: "Virtual learning sessions covering various topics in AI and computational intelligence.",
        images: [
            "/events/online_workshops/524590388_122159761442589496_7121259663525695518_n.jpg",
            "/events/online_workshops/537811112_122163769280589496_7423765764293487574_n.jpg"
        ],
        category: "Workshop"
    }
];

/* New: Categories array for filter buttons */
const categories = ["All", "Workshop", "Bootcamp", "Competition", "Exhibition"];

function EventsCIS() {
    /* New: State for category filtering - wasn't in original */
    const [activeCategory, setActiveCategory] = useState("All");
    
    /* New: State for selected event modal */
    const [selectedEvent, setSelectedEvent] = useState(null);
    
    /* New: State for current image index in gallery */
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    /* New: State for image loading */
    const [isImageLoading, setIsImageLoading] = useState(false);
    
    /* New: State for loaded images cache */
    const [loadedImages, setLoadedImages] = useState({});

    /* New: Filter events based on selected category */
    const filteredEvents = activeCategory === "All" 
        ? events 
        : events.filter(event => event.category === activeCategory);

    /* New: Preload images for an event */
    const preloadImages = useCallback((event) => {
        if (!event) return;
        
        event.images.forEach((src) => {
            if (!loadedImages[src]) {
                const img = new Image();
                img.onload = () => {
                    setLoadedImages(prev => ({ ...prev, [src]: true }));
                };
                img.src = src;
            }
        });
    }, [loadedImages]);

    /* New: Open event modal */
    const openEventModal = (event) => {
        setSelectedEvent(event);
        setCurrentImageIndex(0);
        setIsImageLoading(!loadedImages[event.images[0]]);
        document.body.style.overflow = 'hidden';
        // Preload all images for this event
        preloadImages(event);
    };

    /* New: Close event modal */
    const closeEventModal = () => {
        setSelectedEvent(null);
        setCurrentImageIndex(0);
        setIsImageLoading(false);
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    };

    /* New: Handle image load complete */
    const handleImageLoad = () => {
        setIsImageLoading(false);
        if (selectedEvent) {
            setLoadedImages(prev => ({ 
                ...prev, 
                [selectedEvent.images[currentImageIndex]]: true 
            }));
        }
    };

    /* New: Navigate to previous image */
    const prevImage = (e) => {
        e.stopPropagation();
        if (selectedEvent) {
            const newIndex = currentImageIndex === 0 
                ? selectedEvent.images.length - 1 
                : currentImageIndex - 1;
            const newImageSrc = selectedEvent.images[newIndex];
            setIsImageLoading(!loadedImages[newImageSrc]);
            setCurrentImageIndex(newIndex);
        }
    };

    /* New: Navigate to next image */
    const nextImage = (e) => {
        e.stopPropagation();
        if (selectedEvent) {
            const newIndex = currentImageIndex === selectedEvent.images.length - 1 
                ? 0 
                : currentImageIndex + 1;
            const newImageSrc = selectedEvent.images[newIndex];
            setIsImageLoading(!loadedImages[newImageSrc]);
            setCurrentImageIndex(newIndex);
        }
    };

    /* New: Go to specific image */
    const goToImage = (index) => {
        if (selectedEvent) {
            const newImageSrc = selectedEvent.images[index];
            setIsImageLoading(!loadedImages[newImageSrc]);
            setCurrentImageIndex(index);
        }
    };

    return (
        /* Changed: From <div> with StarsBG to <section> with CSS styling */
        <section id="events" className="events-section">
            <div className="container">
                {/* New: Section header with tag badge like reference site */}
                <div className="events-header">
                    <span className="section-tag">WHAT WE DO</span>
                    <h2 className="section-title">Events & Workshops</h2>
                    <p className="section-subtitle">
                        Explore our journey through various technical events and knowledge-sharing workshops
                    </p>
                </div>

                {/* New: Filter tabs - completely new feature, wasn't in original */}
                <div className="events-filters">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Changed: From SlideShow component to static grid of cards */}
                <div className="events-grid">
                    {filteredEvents.map((event, index) => (
                        /* New: Each event is now a card with image and content */
                        <div key={index} className={`event-card ${event.isUpcoming ? 'upcoming' : ''}`} onClick={() => openEventModal(event)}>
                            <div className="event-image">
                                <img 
                                    src={event.images[0]} 
                                    alt={event.title} 
                                    loading="lazy"
                                    decoding="async"
                                />
                                {/* New: Category badge overlay on image */}
                                <div className="event-overlay">
                                    <span className="event-category">{event.category}</span>
                                    {event.isUpcoming && <span className="upcoming-badge">Upcoming Event</span>}
                                </div>
                            </div>
                            <div className="event-content">
                                <span className={`event-date ${event.isUpcoming ? 'upcoming-date' : ''}`}>
                                    {event.isUpcoming ? `📅 ${event.date}` : event.date}
                                </span>
                                <h3 className="event-title">{event.title}</h3>
                                <p className="event-description">{event.description}</p>
                                {/* New: Learn More button with arrow icon */}
                                <button className="event-btn" onClick={(e) => { e.stopPropagation(); openEventModal(event); }}>
                                    Learn More
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* New: Event Modal - shows when an event is selected */}
            {selectedEvent && (
                <div className="event-modal-overlay" onClick={closeEventModal}>
                    <div className="event-modal" onClick={(e) => e.stopPropagation()}>
                        {/* Close button */}
                        <button className="modal-close-btn" onClick={closeEventModal}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        </button>
                        
                        {/* Modal image with gallery navigation */}
                        <div className="modal-image">
                            {/* Loading spinner */}
                            {isImageLoading && (
                                <div className="image-loading">
                                    <div className="loading-spinner"></div>
                                    <span className="loading-text">Loading image...</span>
                                </div>
                            )}
                            <img 
                                key={currentImageIndex}
                                src={selectedEvent.images[currentImageIndex]} 
                                alt={selectedEvent.title}
                                className={`modal-gallery-img ${isImageLoading ? 'loading' : 'loaded'}`}
                                onLoad={handleImageLoad}
                            />
                            <span className="modal-category">{selectedEvent.category}</span>
                            
                            {/* Navigation arrows - only show if more than 1 image */}
                            {selectedEvent.images.length > 1 && (
                                <>
                                    <button 
                                        className={`gallery-nav gallery-prev ${isImageLoading ? 'disabled' : ''}`} 
                                        onClick={prevImage}
                                        disabled={isImageLoading}
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M15 18l-6-6 6-6"/>
                                        </svg>
                                    </button>
                                    <button 
                                        className={`gallery-nav gallery-next ${isImageLoading ? 'disabled' : ''}`} 
                                        onClick={nextImage}
                                        disabled={isImageLoading}
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M9 18l6-6-6-6"/>
                                        </svg>
                                    </button>
                                    
                                    {/* Image counter */}
                                    <div className="image-counter">
                                        {currentImageIndex + 1} / {selectedEvent.images.length}
                                    </div>
                                </>
                            )}
                        </div>
                        
                        {/* Image dots indicator */}
                        {selectedEvent.images.length > 1 && (
                            <div className="gallery-dots">
                                {selectedEvent.images.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`gallery-dot ${index === currentImageIndex ? 'active' : ''} ${isImageLoading ? 'disabled' : ''}`}
                                        onClick={() => goToImage(index)}
                                        disabled={isImageLoading}
                                    />
                                ))}
                            </div>
                        )}
                        
                        <div className="modal-content">
                            <span className="modal-date">{selectedEvent.date}</span>
                            <h2 className="modal-title">{selectedEvent.title}</h2>
                            <p className="modal-description">{selectedEvent.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default EventsCIS;
