import React from 'react';
import { motion } from 'framer-motion';

const artists = [
  {
    name: 'Nova Beats',
    img: 'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a',
    quote: 'Fab Distro took my music global overnight.',
  },
  {
    name: 'Echo Lane',
    img: 'https://images.unsplash.com/photo-1485579149621-3123dd979885',
    quote: 'The analytics dashboard keeps me in control of my career.',
  },
  {
    name: 'Rhythmix',
    img: 'https://images.unsplash.com/photo-1497032205916-ac775f0649ae',
    quote: 'Transparent royalties mean I never miss a payment.',
  },
];

const ArtistSlider = () => {
  return (
    <section id="artists" className="py-24">
      <div className="container">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Artist Success Stories</h2>
        <motion.div
          className="flex gap-6 overflow-x-auto pb-4"
          whileTap={{ cursor: 'grabbing' }}
        >
          {artists.map((artist) => (
            <motion.article
              key={artist.name}
              className="min-w-[280px] bg-gray-800 rounded-lg p-6 flex-shrink-0"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={artist.img}
                alt={artist.name}
                className="h-40 w-full object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{artist.name}</h3>
              <p className="text-gray-300 text-sm">“{artist.quote}”</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ArtistSlider;
