
import React from 'react';
import { motion } from 'framer-motion';
import { Background3D } from '../components/Background3D';
import { CommunityCard } from '../components/CommunityCard';
import { COMMUNITIES } from '../constants';
import { ChevronDown } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="relative">
      <Background3D />
      
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center p-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10"
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-white">
            COMMUNITY <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              HUB 2024
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
            Connect with the brightest minds across campus. Join CSI, IEEE, and GDG to accelerate your professional journey.
          </p>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
        >
          <ChevronDown size={48} />
        </motion.div>
      </section>

      {/* Communities Section */}
      <div className="relative z-10">
        {COMMUNITIES.map((community, index) => (
          <CommunityCard key={community.id} community={community} index={index} />
        ))}
      </div>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 text-center text-slate-500 z-10 relative bg-slate-950/50 backdrop-blur-lg">
        <p>© 2024 Technical Communities Hub. Built for Excellence.</p>
      </footer>
    </div>
  );
};
