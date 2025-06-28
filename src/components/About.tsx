import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const skills = [
    {
      name: 'JavaScript',
      icon: 'js',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      name: 'React',
      icon: 'react',
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'GSAP',
      icon: 'gsap',
      color: 'from-green-400 to-green-600'
    },
    {
      name: 'HTML',
      icon: 'html',
      color: 'from-orange-400 to-orange-600'
    }
  ];

  const renderSkillIcon = (skill: { name: string; icon: string; color: string }) => {
    switch (skill.icon) {
      case 'js':
        return (
          <div className={`w-full h-full bg-gradient-to-br ${skill.color} rounded-lg flex items-center justify-center text-black font-bold text-lg`}>
            JS
          </div>
        );
      case 'react':
        return (
          <div className={`w-full h-full bg-gradient-to-br ${skill.color} rounded-lg flex items-center justify-center text-white`}>
            <div className="relative">
              <div className="w-6 h-6 border-2 border-white rounded-full"></div>
              <div className="absolute inset-0 border-2 border-white rounded-full animate-spin" style={{ borderRadius: '50%', transform: 'rotate(60deg)' }}></div>
              <div className="absolute inset-0 border-2 border-white rounded-full animate-spin" style={{ borderRadius: '50%', transform: 'rotate(-60deg)' }}></div>
            </div>
          </div>
        );
      case 'gsap':
        return (
          <div className={`w-full h-full bg-gradient-to-br ${skill.color} rounded-lg flex items-center justify-center text-white`}>
            <Zap size={24} />
          </div>
        );
      case 'html':
        return (
          <div className={`w-full h-full bg-gradient-to-br ${skill.color} rounded-lg flex items-center justify-center text-white`}>
            <Code size={24} />
          </div>
        );
      default:
        return (
          <div className={`w-full h-full bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold`}>
            {skill.name.charAt(0)}
          </div>
        );
    }
  };

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;
    if (!section || !image || !content) return;
    gsap.fromTo(image, {
      opacity: 0,
      x: -100,
      filter: 'blur(10px)'
    }, {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%'
      }
    });
    gsap.fromTo(content, {
      opacity: 0,
      x: 100
    }, {
      opacity: 1,
      x: 0,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%'
      }
    });

    // Stagger skills animation
    gsap.fromTo('.skill-icon', {
      opacity: 0,
      y: 30,
      scale: 0.8
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: 'back.out(1.7)',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.skills-grid',
        start: 'top 90%'
      }
    });

    // Image hover effect
    image.addEventListener('mouseenter', () => {
      gsap.to(image, {
        scale: 1.05,
        rotationY: 10,
        duration: 0.5,
        ease: 'power2.out'
      });
    });
    image.addEventListener('mouseleave', () => {
      gsap.to(image, {
        scale: 1,
        rotationY: 0,
        duration: 0.5,
        ease: 'power2.out'
      });
    });
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-reveal py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div ref={imageRef} className="relative">
            <div className="glass p-8 text-center">
              <div className="relative inline-block">
                <img
                  alt="Sequen Profile"
                  className="w-64 h-64 rounded-full mx-auto mb-6 neon-glow object-contain"
                  src="/lovable-uploads/7ee537bf-f832-4c74-a210-02f6804b334a.png"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/20 to-purple-600/20 pointer-events-none"></div>
              </div>
              <h3 className="text-2xl font-bold gradient-text mb-2">Sequen</h3>
              <p className="text-gray-400">Creative Developer</p>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                About Me
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Hai, Saya Sequen merancang pengalaman digital yang menginspirasi dan melibatkan melalui desain inovatif dan teknologi mutakhir. Saya berspesialisasi dalam menciptakan aplikasi web imersif yang mendorong batasan dari apa yang mungkin.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Saya Lulusan dari Teknik Lingkungan, membuat website hanya sekedar hobi saja karena ingin mengetahui tentang code dan mempelajari teknologi.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="skills-grid">
              <h3 className="text-2xl font-semibold text-white mb-6">Tech Stack</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="skill-icon glass p-4 text-center hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-12 h-12 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      {renderSkillIcon(skill)}
                    </div>
                    <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
