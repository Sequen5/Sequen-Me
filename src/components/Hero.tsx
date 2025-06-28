import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const tl = gsap.timeline({
      delay: 3.5
    }); // After preloader

    tl.fromTo(headlineRef.current, {
      opacity: 0,
      y: 50,
      filter: 'blur(10px)'
    }, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 1.2,
      ease: 'power2.out'
    }).fromTo(subtitleRef.current, {
      opacity: 0,
      y: 30
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out'
    }, '-=0.6').fromTo(ctaRef.current, {
      opacity: 0,
      scale: 0.8
    }, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: 'back.out(1.7)'
    }, '-=0.4').fromTo(splineRef.current, {
      opacity: 0,
      x: 100
    }, {
      opacity: 1,
      x: 0,
      duration: 1.5,
      ease: 'power2.out'
    }, '-=1');

    // CTA hover animation
    const cta = ctaRef.current;
    if (cta) {
      cta.addEventListener('mouseenter', () => {
        gsap.to(cta, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      cta.addEventListener('mouseleave', () => {
        gsap.to(cta, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    }
  }, []);
  return <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D Background */}
      <div ref={splineRef} className="absolute inset-0 w-full h-full opacity-80">
        <iframe src='https://my.spline.design/cybersamuraiupdatedmaterial-joOO8lo0GG7JKVZs14ZViney/' frameBorder='0' width='100%' height='100%' className="pointer-events-none" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60 pointer-events-none"></div>

      {/* Content */}
      <div className="main-content relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 ref={headlineRef} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          Hi, I'm{' '}
          <span className="gradient-text neon-text">Sequen</span>
          <br />
          <span className="text-gray-300">Developer</span>
        </h1>
        
        <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">Menciptakan pengalamansebagai digital yang menginspirasi dan sebagai developer Discord Bot</p>
        
        <button ref={ctaRef} className="glass px-8 py-4 text-xl font-semibold text-cyan-400 border-2 border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300 neon-glow pulse-glow">
          View My Work
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-purple-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default Hero;