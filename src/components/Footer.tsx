import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;
    gsap.fromTo(footer, {
      opacity: 0,
      y: 60
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: footer,
        start: 'top 90%'
      }
    });
  }, []);
  return <footer ref={footerRef} className="py-12 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">Sequen</h3>
            <p className="text-gray-400">Creative Developer</p>
          </div>

          <div className="flex items-center gap-8">
            <nav className="flex gap-6">
              <a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Home
              </a>
              <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                About
              </a>
              <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Projects
              </a>
              <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Contact
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">© 2025 Sequen</p>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => <div key={i} className={`orb float`} style={{
        width: Math.random() * 4 + 2 + 'px',
        height: Math.random() * 4 + 2 + 'px',
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        animationDelay: Math.random() * 6 + 's'
      }} />)}
      </div>
    </footer>;
};
export default Footer;