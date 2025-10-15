
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const sectionIds = ['hero', ...navLinks.map(link => link.href.substring(1))];
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
            if(entry.target.id === 'hero') {
                 setActiveSection('');
            } else {
                 setActiveSection(entry.target.id);
            }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-40% 0px -60% 0px',
      threshold: 0
    });

    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900/75 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between h-20 px-6 md:px-10 lg:px-20">
        <a href="#hero" onClick={(e) => handleNavLinkClick(e, '#hero')} className="text-xl font-bold text-slate-200 hover:text-cyan-400 transition-colors">
          Jane Doe
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavLinkClick(e, link.href)}
              className={`font-medium transition-colors ${
                activeSection === link.href.substring(1)
                  ? 'text-cyan-400'
                  : 'text-slate-400 hover:text-cyan-400'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu" className="text-slate-300 hover:text-cyan-400 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Nav */}
      {isMenuOpen && (
        <nav className="md:hidden bg-slate-900/95 absolute top-20 left-0 w-full shadow-lg">
            <div className="flex flex-col">
                {navLinks.map((link) => (
                    <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavLinkClick(e, link.href)}
                    className={`block py-4 text-lg transition-colors w-full text-center ${
                        activeSection === link.href.substring(1)
                        ? 'text-cyan-400 bg-slate-800'
                        : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800'
                    }`}
                    >
                    {link.name}
                    </a>
                ))}
            </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
