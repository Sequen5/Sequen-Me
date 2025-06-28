
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="glass max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">
            Sequen
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <button className="glass px-6 py-2 text-cyan-400 border border-cyan-400/30 hover:bg-cyan-400/10 transition-all duration-300 neon-glow">
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-black/90 backdrop-blur-lg">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => setIsOpen(false)}
              className="glass px-8 py-3 text-cyan-400 border border-cyan-400/30 hover:bg-cyan-400/10 transition-all duration-300"
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
