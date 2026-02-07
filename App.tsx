
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import { Home } from './pages/Home';
import { CommunityDetail } from './pages/CommunityDetail';

const App: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-cyan-500 selection:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community/:id" element={<CommunityDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
