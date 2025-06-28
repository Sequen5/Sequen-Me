import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';
gsap.registerPlugin(ScrollTrigger);
const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const projects = [{
    id: 1,
    title: 'Sequen Music Bot',
    description: 'Bot musik Discord canggih dengan dukungan multi-platform termasuk YouTube, Spotify, dan SoundCloud',
    image: '/lovable-uploads/5023660d-abfc-46cb-904d-851aa37b171f.png',
    tech: ['Discord.js', 'Node.js', 'JavaScript'],
    demo: '#',
    github: '#'
  }, {
    id: 2,
    title: 'Sequen Versatile Bot',
    description: 'Bot Discord terlengkap dengan fitur moderasi, utilitas, musik, dan manajemen server',
    image: '/lovable-uploads/e669552d-be12-45a7-b00f-58284626f768.png',
    tech: ['Discord.js', 'Node.js', 'MongoDB'],
    demo: '#',
    github: '#'
  }, {
    id: 3,
    title: 'Minecraft Survival Server',
    description: 'Ayo Join di Server Minecraftku, Address: play.sequen.fun, port 2507',
    image: '/lovable-uploads/3191a11e-2239-49a9-930c-257b7c135898.png',
    tech: ['Java', 'Spigot', 'MySQL'],
    demo: '#',
    github: '#'
  }, {
    id: 4,
    title: 'Gaming UI Platform',
    description: 'Platform antarmuka gaming tingkat selanjutnya dengan komponen dinamis',
    image: '/lovable-uploads/e1f96594-7680-4054-ab95-02ca57152d12.png',
    tech: ['Vue.js', 'GSAP', 'WebGL'],
    demo: '#',
    github: '#'
  }, {
    id: 5,
    title: '3D Portfolio Showcase',
    description: 'Portfolio kreatif dengan elemen 3D dan animasi yang halus',
    image: '/lovable-uploads/7910d9f4-f5bb-417a-bc0c-36468809024a.png',
    tech: ['React', 'Spline', 'GSAP'],
    demo: '#',
    github: '#'
  }, {
    id: 6,
    title: 'Animation Tools Hub',
    description: 'Toolkit komprehensif untuk animasi web dan interaksi',
    image: '/lovable-uploads/0b375e85-666f-4229-83e6-aa7ba040aa44.png',
    tech: ['JavaScript', 'GSAP', 'CSS3'],
    demo: '#',
    github: '#'
  }];
  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    if (!section || !container) return;
    gsap.fromTo('.project-card', {
      opacity: 0,
      y: 80,
      scale: 0.9
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: container,
        start: 'top 80%'
      }
    });

    // Horizontal scroll for mobile
    if (window.innerWidth < 768) {
      gsap.registerPlugin(ScrollTrigger);
      let sections = gsap.utils.toArray('.project-card');
      let scrollWidth = sections.length * window.innerWidth;
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + scrollWidth
        }
      });
    }
  }, []);
  return <section id="projects" ref={sectionRef} className="section-reveal py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Kumpulan karya terbaru saya yang menampilkan projects discord dan desain kreatif.</p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => <div key={project.id} className="project-card glass p-6 group hover:bg-white/10 transition-all duration-500 cursor-pointer" onMouseEnter={e => {
          gsap.to(e.currentTarget, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
          });
        }} onMouseLeave={e => {
          gsap.to(e.currentTarget, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        }}>
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(tech => <span key={tech} className="px-3 py-1 text-xs bg-gradient-to-r from-cyan-400/20 to-purple-600/20 text-cyan-400 rounded-full border border-cyan-400/30">
                    {tech}
                  </span>)}
              </div>

              <div className="flex gap-4">
                <a href={project.demo} className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                  <ExternalLink size={16} />
                  <span className="text-sm">Live Demo</span>
                </a>
                <a href={project.github} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300">
                  <Github size={16} />
                  <span className="text-sm">Code</span>
                </a>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Projects;