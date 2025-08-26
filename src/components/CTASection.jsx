import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section id="cta" className="py-24 bg-gradient-to-r from-orange-500 to-pink-500 text-black">
      <div className="container text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          Ready to Amplify Your Music?
        </motion.h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto">
          Join Fab Distro today and start distributing your music to every corner of the globe.
        </p>
        <a
          href="#"
          className="bg-black text-white font-semibold px-8 py-4 rounded-md inline-block"
        >
          Sign Up Free
        </a>
      </div>
    </section>
  );
};

export default CTASection;
