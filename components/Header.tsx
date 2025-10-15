
import React from 'react';

const Header: React.FC = () => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/75 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between h-20 px-6 md:px-10 lg:px-20">
        <a href="#hero" className="text-xl font-bold text-slate-200 hover:text-cyan-400 transition-colors">
          Jane Doe
        </a>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-400 hover:text-cyan-400 transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
