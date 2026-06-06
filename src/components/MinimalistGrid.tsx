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

import { CategorizedNotes } from './CategorizedNotes'; // Ensure these are imported
import { CategorizedDPP } from './CategorizedDPP';
import { BlogDirectory } from './BlogDirectory';

export default function MinimalistGrid({ type }: { type: 'dpp' | 'short-notes' | 'notes' | 'blog' | 'home' }) {
  
  // Conditional returns MUST be inside the function
  if (type === 'short-notes') return <CategorizedNotes />;
  if (type === 'dpp') return <CategorizedDPP />;
  if (type === 'blog') return <BlogDirectory />;
  if (type === 'home') return null;

  // This return renders the main grid
  return (
    <div className="w-full font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="mb-14 border-b border-black/[0.05] pb-6 flex justify-between items-end">
        {/* Your JSX content here */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dppData.map((item, index) => (
          <div key={index} className="bg-white border border-black/[0.04] rounded-xl p-6">
            {/* item details */}
          </div>
        ))}
      </div>
    </div>
  );
}