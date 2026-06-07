'use client';
import { useState, useEffect } from 'react';
import StudioHero from '../components/StudioHero';
import MinimalistGrid from '../components/MinimalistGrid';

export default function Home() {
const [currentView, setCurrentView] = useState<'home' | 'dpp' | 'short-notes' | 'notes' | 'blog'>('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = window.innerHeight * 0.4;
      setScrollProgress(Math.min(window.scrollY / totalHeight, 1));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative bg-[#F5F5F5] min-h-screen w-full overflow-x-hidden text-[#1D1D1F] font-sans antialiased">
      <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Plus+Jakarta+Sans:wght@300;400;500;700;800&display=swap" rel="stylesheet" />

      {/* Mockup Exact Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 px-10 py-8 flex justify-between items-start transition-all duration-300">
        <div className="text-xl font-medium tracking-wide text-[#1D1D1F] cursor-pointer" onClick={() => setCurrentView('home')}>
          THE ACADEMICS
        </div>

        <div className="flex items-start gap-8 text-sm font-medium text-[#1D1D1F]">
          <button onClick={() => setCurrentView('home')} className="hover:text-neutral-500 transition-colors">Home</button>

        {/* Study Materials Dropdown */}
        <div className="relative group" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
          <button className="hover:text-neutral-500 transition-colors flex items-center gap-1">
            Study Materials <span className="text-[10px]">▼</span>
          </button>
          
          {isDropdownOpen && (
            <div className="absolute top-full right-0 pt-2 w-40 z-50">
              <div className="bg-white/90 backdrop-blur-lg border border-black/5 shadow-xl rounded-xl py-2 flex flex-col">
                <button onClick={() => setCurrentView('dpp')} className="text-left px-4 py-2 text-xs hover:bg-neutral-100 transition-colors">DPP</button>
                <button onClick={() => setCurrentView('short-notes')} className="text-left px-4 py-2 text-xs hover:bg-neutral-100 transition-colors">Short Notes</button>
                <button onClick={() => setCurrentView('blog')} className="text-left px-4 py-2 text-xs hover:bg-neutral-100 transition-colors">Blog</button>
              </div>
            </div>
          )}
        </div>
        <button onClick={() => setCurrentView('short-notes')} className="hover:text-neutral-500 transition-colors">Features</button>
        <button onClick={() => setCurrentView('notes')} className="hover:text-neutral-500 transition-colors">Explore</button>
        </div>
      </nav>

      {currentView === 'home' ? (
        <>
          <StudioHero scrollProgress={scrollProgress} setView={setCurrentView} />

          <div className="relative z-30 max-w-6xl mx-auto px-6 pb-40 transition-all duration-300 ease-out" style={{ opacity: scrollProgress, transform: `translateY(${(1 - scrollProgress) * 60}px)` }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 01 - DPP */}
            <div className="bg-[#FAFAFA] border border-black/[0.03] rounded-3xl p-8 flex flex-col justify-between min-h-[300px] shadow-sm hover:shadow-xl transition-all cursor-pointer group" onClick={() => setCurrentView('dpp')}>
              <span className="text-3xl text-neutral-300 font-light block mb-6 group-hover:text-[#1D1D1F] transition-colors">01</span>
              <div>
                <h3 className="text-xl font-bold tracking-tight mb-2">DPP Framework</h3>
                <p className="text-xs text-neutral-500 leading-relaxed max-w-[200px]">Live synced database of competitive practice sheets.</p>
              </div>
            </div>

            {/* Card 02 - Short Notes */}
            <div className="bg-[#FAFAFA] border border-black/[0.03] rounded-3xl p-8 flex flex-col justify-between min-h-[300px] shadow-sm hover:shadow-xl transition-all cursor-pointer group" onClick={() => setCurrentView('short-notes')}>
              <span className="text-3xl text-neutral-300 font-light block mb-6 group-hover:text-[#1D1D1F] transition-colors">02</span>
              <div>
                <h3 className="text-xl font-bold tracking-tight mb-2">Short Notes</h3>
                <p className="text-xs text-neutral-500 leading-relaxed max-w-[200px]">High-yield formula directories engineered for rapid recall.</p>
              </div>
            </div>

            {/* Card 03 - Blog */}
            <div className="bg-[#FAFAFA] border border-black/[0.03] rounded-3xl p-8 flex flex-col justify-between min-h-[300px] shadow-sm hover:shadow-xl transition-all cursor-pointer group" onClick={() => setCurrentView('blog')}>
              <span className="text-3xl text-neutral-300 font-light block mb-6 group-hover:text-[#1D1D1F] transition-colors">03</span>
              <div>
                <h3 className="text-xl font-bold tracking-tight mb-2">Blog</h3>
                <p className="text-xs text-neutral-500 leading-relaxed max-w-[200px]">Mathematical proofs, theory derivations, and solved instances.</p>
              </div>
            </div>

          </div>
        </div>
        </>
      ) : (
        <div className="pt-36 px-8 max-w-6xl mx-auto pb-32">
          <button onClick={() => setCurrentView('home')} className="text-[10px] font-bold text-neutral-500 tracking-widest uppercase mb-10 flex items-center gap-2 hover:text-black transition-colors">
            ← Back to Canvas
          </button>
          <MinimalistGrid type={currentView} />
        </div>
      )}
    </main>
  );
}