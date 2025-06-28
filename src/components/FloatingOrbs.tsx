
import { useEffect } from 'react';
import { gsap } from 'gsap';

const FloatingOrbs = () => {
  useEffect(() => {
    // Create floating animation for orbs
    gsap.utils.toArray('.floating-orb').forEach((orb: any, index) => {
      gsap.to(orb, {
        y: -30,
        x: Math.random() * 50 - 25,
        duration: 4 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: index * 0.5
      });

      gsap.to(orb, {
        rotation: 360,
        duration: 10 + Math.random() * 5,
        repeat: -1,
        ease: 'none'
      });
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large background orbs */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="floating-orb absolute rounded-full opacity-20"
          style={{
            width: Math.random() * 200 + 100 + 'px',
            height: Math.random() * 200 + 100 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            background: `radial-gradient(circle, ${
              i % 2 === 0 
                ? 'rgba(0, 188, 212, 0.3)' 
                : 'rgba(156, 39, 176, 0.3)'
            } 0%, transparent 70%)`,
            filter: 'blur(40px)'
          }}
        />
      ))}

      {/* Small floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`small-${i}`}
          className="floating-orb absolute rounded-full opacity-40"
          style={{
            width: Math.random() * 6 + 2 + 'px',
            height: Math.random() * 6 + 2 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            background: i % 2 === 0 
              ? 'linear-gradient(45deg, #00bcd4, #9c27b0)' 
              : 'linear-gradient(45deg, #9c27b0, #e91e63)',
            filter: 'blur(1px)'
          }}
        />
      ))}
    </div>
  );
};

export default FloatingOrbs;
