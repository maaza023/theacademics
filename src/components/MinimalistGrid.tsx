import CategorizedNotes from './CategorizedNotes';
import CategorizedDPP from './CategorizedDPP';
import BlogDirectory from './BlogDirectory';

// Your physics data array
const dppData = [
  { title: "Work, Power, Energy", url: "https://theacademics.in/wp-content/uploads/2022/08/6B-Work-power-energy-conservation-Exercise.pdf" },
  { title: "Kinetic Theory of Gases (KTG)", url: "https://theacademics.in/wp-content/uploads/2023/03/KTG.pdf" },
  { title: "Calorimetry", url: "https://theacademics.in/wp-content/uploads/2023/03/2.-Calorimetry-Exercise.pdf" },
  { title: "Properties of Matter", url: "https://theacademics.in/wp-content/uploads/2023/02/3-Properties-of-Matter-Elasticity-Surface-Tension-Exercise-1.pdf" },
  { title: "Circular Motion", url: "https://theacademics.in/wp-content/uploads/2022/08/CIRCULAR-MOTION.pdf" },
  { title: "Matter Waves", url: "https://theacademics.in/wp-content/uploads/2023/01/2-Matter-Waves-Exercise.pdf" },
  { title: "Photoelectric Effect", url: "https://theacademics.in/wp-content/uploads/2023/01/3-Photoelectric-Effect-Exercise.pdf" }
];

type MinimalistGridProps = {
  type: 'dpp' | 'short-notes' | 'notes' | 'blog' | 'home';
};

export default function MinimalistGrid({ type }: MinimalistGridProps) {

  // 1. Clean conditional routing (NO syntax errors here)
  if (type === 'short-notes') return <CategorizedNotes />;
  if (type === 'dpp') return <CategorizedDPP />;
  if (type === 'blog') return <BlogDirectory />;
  if (type === 'home') return null;

  // 2. The main grid return
  return (
    <div className="w-full font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Header Section */}
      <div className="mb-14 border-b border-black/[0.05] pb-6 flex justify-between items-end">
        <div>
          <span className="text-[32px] text-neutral-400 leading-none block mb-1" style={{ fontFamily: '"Alex Brush", cursive' }}>
            {type === 'dpp' ? 'Daily Worksheets' : 'Directory'}
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight capitalize text-[#1D1D1F] uppercase">
            {type.replace('-', ' ')} Directory
          </h2>
        </div>
        <span className="text-[10px] font-mono text-neutral-400 tracking-widest uppercase mb-1">
          Live Database Linked
        </span>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dppData.map((item, index) => (
          <div key={index} className="bg-white border border-black/[0.04] rounded-xl p-6 flex flex-col justify-between min-h-[170px] shadow-sm hover:shadow-xl hover:border-black/[0.08] transition-all duration-300">
            <div>
              <span className="text-[9px] font-mono text-neutral-300 block mb-1">
                MODULE_#{String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-xs font-bold tracking-wide text-neutral-700 group-hover:text-black transition-colors uppercase leading-relaxed">
                {item.title}
              </h3>
            </div>

            {/* Live Link Button */}
            <a href={type === 'dpp' ? item.url : '#'} target="_blank" rel="noopener noreferrer" className="w-full mt-4 py-2.5 bg-[#F4F4F6] text-[#1D1D1F] text-center text-[10px] font-bold uppercase tracking-wider rounded">
              {type === 'dpp' ? 'Fetch Worksheet ↗' : 'Directory Locked'}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}