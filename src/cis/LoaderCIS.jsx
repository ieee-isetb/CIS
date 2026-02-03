/*
 * LoaderCIS Component - Preloader for IEEE CIS ISET Bizerte
 * 
 * A futuristic loading screen that displays until all images are loaded.
 * Features:
 * - Animated orbital rings around the CIS logo
 * - Dynamic progress bar with percentage
 * - Particle effects and neural network lines
 * - Smooth fade-out transition when loading completes
 */
import { useState, useEffect } from 'react';
import './LoaderCIS.css';
import cisLogo from '../assets/cis_white_logo.png';

const LoaderCIS = ({ onLoadComplete }) => {
    const [progress, setProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [statusText, setStatusText] = useState('Initializing');

    useEffect(() => {
        // Collect all images from the document
        const loadImages = () => {
            const images = document.querySelectorAll('img');
            const totalImages = images.length;
            let loadedCount = 0;

            // Status messages that rotate during loading
            const statusMessages = [
                'Connecting to IEEE CIS Network',
                'Loading Neural Interfaces',
                'Initializing AI Modules',
                'Preparing Computational Intelligence',
                'Syncing with Global Community',
                'Almost there...'
            ];

            // Update status text periodically
            let statusIndex = 0;
            const statusInterval = setInterval(() => {
                statusIndex = (statusIndex + 1) % statusMessages.length;
                setStatusText(statusMessages[statusIndex]);
            }, 1500);

            if (totalImages === 0) {
                // No images to load, complete after a short delay for effect
                setTimeout(() => {
                    setProgress(100);
                    clearInterval(statusInterval);
                    setTimeout(() => {
                        setIsLoaded(true);
                        onLoadComplete && onLoadComplete();
                    }, 500);
                }, 1500);
                return;
            }

            const updateProgress = () => {
                loadedCount++;
                const newProgress = Math.round((loadedCount / totalImages) * 100);
                setProgress(newProgress);

                if (loadedCount === totalImages) {
                    clearInterval(statusInterval);
                    setStatusText('Ready!');
                    setTimeout(() => {
                        setIsLoaded(true);
                        onLoadComplete && onLoadComplete();
                    }, 500);
                }
            };

            // Preload all images
            images.forEach((img) => {
                if (img.complete) {
                    updateProgress();
                } else {
                    img.addEventListener('load', updateProgress);
                    img.addEventListener('error', updateProgress);
                }
            });

            // Also preload background images from CSS
            const bgImages = [];
            document.querySelectorAll('*').forEach(el => {
                const style = window.getComputedStyle(el);
                const bg = style.backgroundImage;
                if (bg && bg !== 'none' && bg.includes('url')) {
                    const url = bg.match(/url\(["']?([^"')]+)["']?\)/);
                    if (url && url[1]) {
                        bgImages.push(url[1]);
                    }
                }
            });

            // Fallback: ensure loading completes even if some images fail
            const fallbackTimeout = setTimeout(() => {
                if (!isLoaded) {
                    setProgress(100);
                    clearInterval(statusInterval);
                    setStatusText('Ready!');
                    setTimeout(() => {
                        setIsLoaded(true);
                        onLoadComplete && onLoadComplete();
                    }, 500);
                }
            }, 8000); // Max 8 seconds loading time

            return () => {
                clearTimeout(fallbackTimeout);
                clearInterval(statusInterval);
            };
        };

        // Start loading after a brief delay to ensure DOM is ready
        const timer = setTimeout(loadImages, 100);
        return () => clearTimeout(timer);
    }, [onLoadComplete]);

    return (
        <div className={`loader-overlay ${isLoaded ? 'loaded' : ''}`}>
            {/* Background Effects */}
            <div className="loader-bg">
                <div className="loader-grid"></div>
                <div className="loader-glow-1"></div>
                <div className="loader-glow-2"></div>
            </div>

            {/* Neural Network Lines */}
            <div className="loader-neural">
                <div className="neural-line"></div>
                <div className="neural-line"></div>
                <div className="neural-line"></div>
            </div>

            {/* Data Streams */}
            <div className="loader-particles">
                <div className="data-stream"></div>
                <div className="data-stream"></div>
                <div className="data-stream"></div>
                <div className="data-stream"></div>
                <div className="data-stream"></div>
                <div className="data-stream"></div>
            </div>

            {/* Floating Particles */}
            <div className="loader-particles">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
            </div>

            {/* Main Content */}
            <div className="loader-content">
                {/* Logo with Orbital Rings */}
                <div className="loader-logo-container">
                    <div className="loader-orbit loader-orbit-1">
                        <div className="orbit-dot"></div>
                    </div>
                    <div className="loader-orbit loader-orbit-2">
                        <div className="orbit-dot"></div>
                    </div>
                    <div className="loader-orbit loader-orbit-3">
                        <div className="orbit-dot"></div>
                    </div>
                    <img 
                        src={cisLogo} 
                        alt="IEEE CIS Logo" 
                        className="loader-logo"
                    />
                </div>

                {/* Text */}
                <div className="loader-text">
                    <h2 className="loader-title">
                        IEEE <span>CIS</span> ISET Bizerte
                    </h2>
                    <p className="loader-subtitle">Computational Intelligence Society</p>
                </div>

                {/* Progress Section */}
                <div className="loader-progress-section">
                    <div className="loader-percentage">{progress}%</div>
                    
                    <div className="loader-progress-container">
                        <div 
                            className="loader-progress-bar" 
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>

                    <div className="loader-status">
                        <span className="loader-status-dot"></span>
                        <span>{statusText}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoaderCIS;
