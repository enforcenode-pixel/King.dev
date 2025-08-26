import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Global Reach',
    text: 'Distribute your tracks to 200+ platforms worldwide with a single upload.',
    icon: '🌍',
  },
  {
    title: 'Real-Time Analytics',
    text: 'Track streams, downloads, and earnings with up-to-the-minute dashboards.',
    icon: '📈',
  },
  {
    title: 'Royalty Transparency',
    text: 'Know exactly when and how you get paid with clear royalty tracking.',
    icon: '💰',
  },
];

const Features = () => {
  return (
    <section className="bg-black" id="features">
      <div className="container py-24">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Why Fab Distro?</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: idx * 0.2 }}
              className="text-center"
            >
              <div className="text-5xl mb-4" aria-hidden="true">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
