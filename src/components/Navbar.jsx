import React from 'react';
import { motion } from 'framer-motion';

const links = [
  { href: '#features', label: 'Features' },
  { href: '#artists', label: 'Artists' },
  { href: '#pricing', label: 'Pricing' },
];

const Navbar = () => {
  return (
    <header>
      <nav className="container flex items-center justify-between py-4" aria-label="Main navigation">
        <a href="#" className="text-xl font-bold">Fab Distro</a>
        <ul className="flex gap-6" role="menubar">
          {links.map((link, index) => (
            <motion.li key={link.href} whileHover={{ y: -2 }}>
              <a href={link.href} className="hover:text-orange-400" role="menuitem">
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>
        <a
          href="#cta"
          className="bg-orange-500 text-black font-semibold px-4 py-2 rounded-md focus-visible:outline focus-visible:outline-black"
        >
          Get Started
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
