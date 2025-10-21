import { useState, useRef } from "react";
import "./SlideShow.css";

const FADE_DURATION = 300; // ms — keep in sync with CSS

function SlideShow({ eventTitle, images }) {
  const [current, setCurrent] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false); // <-- drives button disabled state
  const isTransitioningRef = useRef(false); // <-- internal guard to prevent rapid clicks
  const total = images.length;

  const doTransition = (computeNextIndex) => {
    if (isTransitioningRef.current) return;

    isTransitioningRef.current = true;
    setIsTransitioning(true); // update UI state
    setIsFading(true);        // start fade-out

    setTimeout(() => {
      setCurrent((prev) => computeNextIndex(prev, total));

      // next frame: fade back in
      requestAnimationFrame(() => {
        setIsFading(false);

        // release after fade-in ends
        setTimeout(() => {
          isTransitioningRef.current = false;
          setIsTransitioning(false); // re-enable arrows
        }, FADE_DURATION);
      });
    }, FADE_DURATION);
  };

  const prevImage = () => doTransition((idx, len) => (idx - 1 + len) % len);
  const nextImage = () => doTransition((idx, len) => (idx + 1) % len);

  const prevIndex = (current - 1 + total) % total;
  const nextIndex = (current + 1) % total;

  return (
    <div className="flex flex-col items-center">
      <span className="block text-center text-3xl underline text-white font-['Inter'] font-semibold mb-6 tracking-wide drop-shadow-lg">
        {eventTitle}
      </span>

      <div className="relative w-full max-w-4xl flex items-center justify-center">
        {/* Previous preview */}
        <div
          className="hidden md:block w-1/5 opacity-50 transform scale-90 hover:scale-95 transition"
        >
          <div className={`fade-container ${isFading ? "fading" : ""}`}>
            <img
              src={images[prevIndex]}
              alt="Previous"
              className="rounded-xl shadow-md object-cover w-full h-48"
            />
          </div>
        </div>

        {/* Main image */}
        <div className="mx-4 w-3/5">
          <div className={`fade-container ${isFading ? "fading" : ""}`}>
            <img
              src={images[current]}
              alt="Main"
              className="rounded-2xl shadow-lg object-cover w-full h-64 md:h-[350px] transition-all duration-500"
            />
          </div>
        </div>

        {/* Next preview */}
        <div
          className="hidden md:block w-1/5 opacity-50 transform scale-90 hover:scale-95 transition"
        >
          <div className={`fade-container ${isFading ? "fading" : ""}`}>
            <img
              src={images[nextIndex]}
              alt="Next"
              className="rounded-xl shadow-md object-cover w-full h-48"
            />
          </div>
        </div>

        {/* Left arrow */}
        <button
          onClick={prevImage}
          className="absolute left-4 md:left-[-7%] top-1/2 -translate-y-1/2 cursor-pointer bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition"
          disabled={isTransitioning}
          aria-disabled={isTransitioning}
        >
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
        </button>

        {/* Right arrow */}
        <button
          onClick={nextImage}
          className="absolute right-4 md:right-[-7%] top-1/2 -translate-y-1/2 cursor-pointer bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition"
          disabled={isTransitioning}
          aria-disabled={isTransitioning}
        >
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>

      <div className="flex justify-center mt-6">
        <span className="text-gray-200 font-['Inter'] text-lg">
          {`Image ${current + 1} of ${total}`}
        </span>
      </div>
    </div>
  );
}

export default SlideShow;