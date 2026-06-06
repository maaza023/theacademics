'use client';
import CategorizedNotes from './CategorizedNotes';
import CategorizedDPP from './CategorizedDPP';
import BlogDirectory from './BlogDirectory';

// Your exact live database links mapped to chapter names
const dppData = [
    { title: "Sound Waves", url: "https://theacademics.in/wp-content/uploads/2022/08/Sound-Waves-Exercise.pdf" },
    { title: "Electromagnetic Induction (EMI)", url: "https://theacademics.in/wp-content/uploads/2024/02/Electro-Magnetic-Induction.pdf" },
    { title: "Magnetism", url: "https://theacademics.in/wp-content/uploads/2024/02/Magnetism-dpp.pdf" },
    { title: "Wave Motion (Strings)", url: "https://theacademics.in/wp-content/uploads/2022/08/2.-A-Wave-Motion-Mechanical-Wave-Through-Strings-Exercise.pdf" },
    { title: "Magnetic Effect of Current", url: "https://theacademics.in/wp-content/uploads/2024/01/2.-Magnetic-effect-of-current-dpp.pdf" },
    { title: "Current Electricity", url: "https://theacademics.in/wp-content/uploads/2023/09/Current-Electricity-dpp.pdf" },
    { title: "Capacitor", url: "https://theacademics.in/wp-content/uploads/2023/09/capacitor-dpp.pdf" },
    { title: "Simple Harmonic Motion (SHM)", url: "https://theacademics.in/wp-content/uploads/2022/08/3-S.H.M.-2Exercise.pdf" },
    { title: "Wave Optics", url: "https://theacademics.in/wp-content/uploads/2023/08/4-Wave-Optics-.pdf" },
    { title: "Refraction (Curved Surface)", url: "https://theacademics.in/wp-content/uploads/2023/07/2.-Refraction-at-curved-surface-Optical-Instrument-dpp.pdf" },
    { title: "Refraction (Plane & Prism)", url: "https://theacademics.in/wp-content/uploads/2023/07/1-.-Refraction-At-plane-surfaces-prism-dpp.pdf" },
    { title: "Rotational Motion", url: "https://theacademics.in/wp-content/uploads/2022/08/ROTATIONAL-MOTION.pdf" },
    { title: "Reflection", url: "https://theacademics.in/wp-content/uploads/2023/07/reflection-dpp.pdf" },
    { title: "Heat Transfer & Conduction", url: "https://theacademics.in/wp-content/uploads/2023/03/4-B-Heat-transfer-Conduction-Exercise-1.pdf" },
    { title: "Thermodynamics", url: "https://theacademics.in/wp-content/uploads/2023/03/2-Thermodynamics-Exercise.pdf" },
    { title: "Work, Power, Energy", url: "https://theacademics.in/wp-content/uploads/2022/08/6B-Work-power-energy-conservation-Exercise.pdf" },
    { title: "Kinetic Theory of Gases (KTG)", url: "https://theacademics.in/wp-content/uploads/2023/03/KTG.pdf" },
    { title: "Calorimetry", url: "https://theacademics.in/wp-content/uploads/2023/03/2.-Calorimetry-Exercise.pdf" },
    { title: "Properties of Matter", url: "https://theacademics.in/wp-content/uploads/2023/02/3-Properties-of-Matter-Elasticity-Surface-Tension-Exercise-1.pdf" },
    { title: "Circular Motion", url: "https://theacademics.in/wp-content/uploads/2022/08/CIRCULAR-MOTION.pdf" },
    { title: "Matter Waves", url: "https://theacademics.in/wp-content/uploads/2023/01/2-Matter-Waves-Exercise.pdf" },
    { title: "Photoelectric Effect", url: "https://theacademics.in/wp-content/uploads/2023/01/3-Photoelectric-Effect-Exercise.pdf" },
    { title: "Nuclear Physics", url: "https://theacademics.in/wp-content/uploads/2023/01/4-Nuclear-Physics-Radioactivity-Exercise.pdf" },
    { title: "Projectile Motion", url: "https://theacademics.in/wp-content/uploads/2022/08/4B-Projectile-Motion-Exercise.pdf" },
    { title: "Atomic Structure", url: "https://theacademics.in/wp-content/uploads/2023/01/1-Atomic-Structure-Exercise.pdf" },
    { title: "Electrostatics", url: "https://theacademics.in/wp-content/uploads/2022/09/Electrostatics-DPP.pdf" },
    { title: "Basic Integration Problems", url: "https://theacademics.in/wp-content/uploads/2022/08/Basic-Integration-Problems.pdf" },
    { title: "Motion in One Dimension", url: "https://theacademics.in/wp-content/uploads/2022/08/3B-Motion-in-One-Dimension-Exercise.pdf" },
    { title: "Laws of Motion & Friction", url: "https://theacademics.in/wp-content/uploads/2022/08/5B-Laws-of-motion-Friction-Exercise.pdf" }
];

export default function MinimalistGrid({ type }: { type: 'dpp' | 'short-notes' | 'notes' | 'blog' | 'home' }) {
    return <CategorizedNotes />;
  }if (type === 'dpp') {
    return <CategorizedDPP />;
  }if (type === 'blog') {
    return <BlogDirectory />;
  }if (type === 'tech') {
    return <BlogDirectory />;
  }
    return (
        <div className="w-full font-['Plus_Jakarta_Sans',sans-serif]">
            <div className="mb-14 border-b border-black/[0.05] pb-6 flex justify-between items-end">
                <div>
                    <span className="text-[32px] text-neutral-400 leading-none block mb-1" style={{ fontFamily: "'Alex Brush', cursive" }}>
                        {type === 'dpp' ? 'Daily Worksheets' : type === 'short-notes' ? 'Formula Keys' : 'Theory Sheets'}
                    </span>
                    <h2 className="text-3xl font-extrabold tracking-tight capitalize text-[#1D1D1F] uppercase">{type.replace('-', ' ')} Directory</h2>
                </div>
                <span className="text-[10px] font-mono text-neutral-400 tracking-widest uppercase mb-1">Live Database Linked</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {dppData.map((item, index) => (
                    <div key={index} className="bg-white border border-black/[0.04] rounded-xl p-6 flex flex-col justify-between min-h-[170px] shadow-sm hover:shadow-xl hover:border-black/[0.08] transition-all duration-300 group">
                        <div>
                            <span className="text-[9px] font-mono text-neutral-300 block mb-1">MODULE_#{String(index + 1).padStart(2, '0')}</span>
                            <h3 className="text-xs font-bold tracking-wide text-neutral-700 group-hover:text-black transition-colors uppercase leading-relaxed">{item.title}</h3>
                        </div>

                        {/* Live Link Button */}
                        <a href={type === 'dpp' ? item.url : '#'} target="_blank" rel="noopener noreferrer" className="w-full mt-4 py-2.5 bg-[#F4F4F6] text-[#1D1D1F] text-center text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-[#1D1D1F] hover:text-white transition-all duration-200">
                            {type === 'dpp' ? 'Fetch Worksheet →' : 'Directory Locked'}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}