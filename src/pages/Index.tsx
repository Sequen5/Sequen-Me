
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Preloader from '../components/Preloader';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingOrbs from '../components/FloatingOrbs';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize scroll animations after preloader
    const initScrollAnimations = () => {
      // Smooth scroll setup
      gsap.registerPlugin(ScrollTrigger);
      
      // Section reveal animations
      gsap.utils.toArray('.section-reveal').forEach((section: any) => {
        gsap.fromTo(section, {
          opacity: 0,
          y: 60,
          filter: 'blur(10px)'
        }, {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        });
      });
    };

    // Wait for preloader to finish
    setTimeout(initScrollAnimations, 3000);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={mainRef} className="relative min-h-screen">
      <Preloader />
      <FloatingOrbs />
      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
