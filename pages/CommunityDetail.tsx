
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { COMMUNITIES } from '../constants';
import { Background3D } from '../components/Background3D';
import { ArrowLeft, Calendar, Info, MapPin } from 'lucide-react';
// Import the Event type to fix strict typing issues
import { Event } from '../types';

interface EventCardProps {
  event: Event;
  communityColor: string;
}

// Fix: Moved EventCard outside to resolve TypeScript 'key' prop error and avoid component re-mounting on every parent render
const EventCard: React.FC<EventCardProps> = ({ event, communityColor }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
    style={{
      boxShadow: `0 0 20px ${communityColor}05`
    }}
  >
    {/* Neon Backlight on hover */}
    <div 
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{
        boxShadow: `inset 0 0 50px ${communityColor}30`
      }}
    />
    
    <div className="relative aspect-video overflow-hidden">
      <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
      <div className="absolute bottom-4 left-4">
        <span 
          className="px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest text-black"
          style={{ backgroundColor: communityColor }}
        >
          {event.type === 'current' ? 'Ongoing' : 'Upcoming'}
        </span>
      </div>
    </div>

    <div className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
        {event.title}
      </h3>
      <p className="text-sm text-slate-400">
        {event.description}
      </p>
      <div className="flex items-center gap-4 text-xs text-slate-500">
        <div className="flex items-center gap-1">
          <Calendar size={14} className="text-cyan-400" />
          {event.date}
        </div>
        <div className="flex items-center gap-1">
          <MapPin size={14} className="text-cyan-400" />
          Main Auditorium
        </div>
      </div>
      <button 
        className="w-full py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold transition-all"
      >
        Register Now
      </button>
    </div>
  </motion.div>
);

export const CommunityDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const community = COMMUNITIES.find(c => c.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!community) {
    return <div className="h-screen flex items-center justify-center text-white">Community not found</div>;
  }

  const currentEvents = community.events.filter(e => e.type === 'current');
  const upcomingEvents = community.events.filter(e => e.type === 'upcoming');

  return (
    <div className="min-h-screen relative pb-20">
      <Background3D />
      
      {/* Header Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 md:px-12 flex items-center justify-between backdrop-blur-md border-b border-white/5 bg-slate-950/20">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Hub
        </button>
        <span 
          className="font-bold tracking-widest uppercase text-sm"
          style={{ color: community.color }}
        >
          {community.name}
        </span>
      </nav>

      <main className="pt-32 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-black mb-6" style={{ color: community.color }}>
            {community.shortName}
          </h1>
          <p className="text-2xl text-slate-300 max-w-3xl font-light">
            {community.description}
          </p>
        </motion.div>

        {/* Current Events */}
        {currentEvents.length > 0 && (
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-white/10"></div>
              <h2 className="text-xl uppercase tracking-[0.4em] font-bold text-white/40">Current Activities</h2>
              <div className="h-px flex-1 bg-white/10"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentEvents.map(event => (
                <EventCard key={event.id} event={event} communityColor={community.color} />
              ))}
            </div>
          </section>
        )}

        {/* Upcoming Events */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-white/10"></div>
            <h2 className="text-xl uppercase tracking-[0.4em] font-bold text-white/40">The Roadmap</h2>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map(event => (
              <EventCard key={event.id} event={event} communityColor={community.color} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
