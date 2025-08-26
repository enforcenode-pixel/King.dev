import React from 'react';

const Footer = () => (
  <footer className="bg-black py-12 text-center" id="footer">
    <div className="container">
      <p className="text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Fab Distro. All rights reserved.
      </p>
      <nav aria-label="Footer navigation" className="mt-4">
        <a href="#features" className="mx-2 hover:text-orange-400">
          Features
        </a>
        <a href="#artists" className="mx-2 hover:text-orange-400">
          Artists
        </a>
        <a href="#pricing" className="mx-2 hover:text-orange-400">
          Pricing
        </a>
      </nav>
    </div>
  </footer>
);

export default Footer;
