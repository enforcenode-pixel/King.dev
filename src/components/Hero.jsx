import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="container py-24" id="hero">
      <div className="grid md:grid-cols-2 items-center gap-8">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Distribute Music <span className="text-orange-400">Worldwide</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Fab Distro empowers artists with seamless global distribution, real-time analytics,
            and transparent royalty tracking.
          </p>
          <a href="#cta" className="bg-orange-500 text-black font-semibold px-6 py-3 rounded-md">
            Start Releasing
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="hidden md:block"
        >
          <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4" alt="DJ mixing music" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
