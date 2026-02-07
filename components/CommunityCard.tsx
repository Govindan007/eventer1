
import React from 'react';
import { motion } from 'framer-motion';
import { Community } from '../types';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CommunityCardProps {
  community: Community;
  index: number;
}

export const CommunityCard: React.FC<CommunityCardProps> = ({ community, index }) => {
  const navigate = useNavigate();
  const isEven = index % 2 === 0;

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center p-6 md:p-12 relative overflow-hidden"
    >
      <div className={`max-w-7xl w-full flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
        {/* Animated Card Body */}
        <motion.div 
          initial={{ x: isEven ? -100 : 100, opacity: 0, rotateY: isEven ? 20 : -20 }}
          whileInView={{ x: 0, opacity: 1, rotateY: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          onClick={() => navigate(`/community/${community.id}`)}
          className="group relative w-full md:w-1/2 aspect-[4/3] md:aspect-square cursor-pointer"
        >
          {/* Glass Card Effect */}
          <div 
            className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 group-hover:scale-[1.02] group-hover:border-white/20"
            style={{ 
              boxShadow: `0 0 40px ${community.color}15`,
            }}
          >
            {/* Visual content inside card */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <motion.h2 
                className="text-7xl md:text-9xl font-bold tracking-tighter text-white opacity-20"
                style={{ color: community.color }}
              >
                {community.shortName}
              </motion.h2>
              <div className="absolute bottom-8 left-8 right-8 text-left">
                 <p className="text-white/40 uppercase tracking-[0.3em] text-xs mb-2">Community</p>
                 <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:translate-x-2 transition-transform duration-300">
                    {community.name}
                 </h3>
              </div>
            </div>

            {/* Neon Glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0" style={{ background: `radial-gradient(circle at center, ${community.color}10, transparent 70%)` }}></div>
            </div>
          </div>
        </motion.div>

        {/* Description Side */}
        <motion.div 
          initial={{ x: isEven ? 100 : -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full md:w-1/2 space-y-6"
        >
          <div className="space-y-2">
            <motion.span 
              className="text-sm uppercase tracking-widest font-semibold"
              style={{ color: community.color }}
            >
              Discover {community.shortName}
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Pushing the boundaries of <span className="text-white/50">Tech Innovation.</span>
            </h2>
          </div>
          
          <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
            {community.details}
          </p>

          <button 
            onClick={() => navigate(`/community/${community.id}`)}
            className="group flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300 text-white"
          >
            Explore Events
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" style={{ color: community.color }} />
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};
