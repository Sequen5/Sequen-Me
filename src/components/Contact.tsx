import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, Github, MessageCircle } from 'lucide-react';
gsap.registerPlugin(ScrollTrigger);
const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  useEffect(() => {
    const section = sectionRef.current;
    const form = formRef.current;
    if (!section || !form) return;
    gsap.fromTo('.contact-input', {
      opacity: 0,
      x: -50
    }, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: form,
        start: 'top 80%'
      }
    });
    gsap.fromTo('.social-icon', {
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
        trigger: '.social-links',
        start: 'top 90%'
      }
    });
  }, []);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Submit button animation
    const submitBtn = e.target as HTMLFormElement;
    const button = submitBtn.querySelector('button[type="submit"]');
    if (button) {
      gsap.to(button, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: 'power2.inOut'
      });
    }

    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contact" ref={sectionRef} className="section-reveal py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Hubungi Saya</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Punya proyek dalam pikiran atau hanya ingin mengucapkan halo? Kirimkan saya pesan dan mari kita buat sesuatu yang luar biasa bersama.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="contact-input">
              <label className="block text-gray-300 mb-2 font-medium">Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full glass px-4 py-3 bg-transparent border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-white" placeholder="Your name" required />
            </div>

            <div className="contact-input">
              <label className="block text-gray-300 mb-2 font-medium">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full glass px-4 py-3 bg-transparent border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-white" placeholder="your.email@example.com" required />
            </div>

            <div className="contact-input">
              <label className="block text-gray-300 mb-2 font-medium">Message</label>
              <textarea name="message" value={formData.message} onChange={handleInputChange} rows={6} className="w-full glass px-4 py-3 bg-transparent border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-white resize-none" placeholder="Tell me about your project..." required></textarea>
            </div>

            <button type="submit" className="w-full glass px-8 py-4 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 border border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 neon-glow">
              <Send size={20} />
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Mari Terhubung</h3>
              <p className="text-gray-400 leading-relaxed mb-8">Saya selalu senang untuk mengerjakan proyek baru dan berkolaborasi dengan orang-orang kreatif. Baik Anda memiliki proyek tertentu dalam pikiran atau hanya ingin berbicara tentang teknologi, jangan ragu untuk menghubungi.</p>

              <div className="social-links flex gap-6">
                <a href="#" className="social-icon w-12 h-12 glass flex items-center justify-center rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 group">
                  <Github size={24} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="#" className="social-icon w-12 h-12 glass flex items-center justify-center rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 group">
                  <MessageCircle size={24} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>

            <div className="glass p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Tanggapan Cepat</h4>
              <p className="text-gray-400 text-sm">Saya biasanya membalas pesan dalam waktu 24 jam. Untuk proyek yang mendesak, harap sebutkan dalam pesan Anda.</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;