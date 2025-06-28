
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Preloader = () => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preloader = preloaderRef.current;
    const progress = progressRef.current;
    const logo = logoRef.current;

    if (!preloader || !progress || !logo) return;

    // Initial animation
    gsap.fromTo(logo, {
      opacity: 0,
      scale: 0.8,
      filter: 'blur(10px)'
    }, {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      duration: 1,
      ease: 'power2.out'
    });

    // Progress bar animation
    gsap.to(progress, {
      width: '100%',
      duration: 2.5,
      ease: 'power2.out',
      delay: 0.5,
      onComplete: () => {
        // Exit animation
        gsap.to(preloader, {
          opacity: 0,
          scale: 0.95,
          filter: 'blur(20px)',
          duration: 1,
          ease: 'power2.inOut',
          onComplete: () => {
            preloader.style.display = 'none';
            // Trigger main content animation
            gsap.fromTo('.main-content', {
              opacity: 0,
              y: 30
            }, {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: 'power2.out'
            });
          }
        });
      }
    });
  }, []);

  return (
    <div ref={preloaderRef} className="preloader">
      <div ref={logoRef} className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold gradient-text mb-4">
          Sequen
        </h1>
        <p className="text-xl text-gray-400 tracking-wider">
          Creative Developer
        </p>
      </div>
      
      <div className="progress-container">
        <div ref={progressRef} className="progress-bar"></div>
      </div>
      
      <div className="absolute bottom-10 text-gray-500 text-sm">
        Loading Experience...
      </div>
    </div>
  );
};

export default Preloader;
