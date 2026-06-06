'use client';
import React from 'react';

const dppCategories = {
  "Basic Tools": [
    { title: "Basic Integration", module: "00", url: "https://theacademics.in/wp-content/uploads/2022/08/Basic-Integration-Problems.pdf" }
  ],
  "Mechanics": [
    { title: "Motion in One Dimension", module: "25", url: "https://theacademics.in/wp-content/uploads/2022/08/3B-Motion-in-One-Dimension-Exercise.pdf" },
    { title: "Projectile Motion", module: "24", url: "https://theacademics.in/wp-content/uploads/2022/08/4B-Projectile-Motion-Exercise.pdf" },
    { title: "Laws of Motion & Friction", module: "26", url: "https://theacademics.in/wp-content/uploads/2022/08/5B-Laws-of-motion-Friction-Exercise.pdf" },
    { title: "Circular Motion", module: "20", url: "https://theacademics.in/wp-content/uploads/2022/08/CIRCULAR-MOTION.pdf" },
    { title: "Work, Power, Energy", module: "16", url: "https://theacademics.in/wp-content/uploads/2022/08/6B-Work-power-energy-conservation-Exercise.pdf" },
    { title: "Rotational Motion", module: "12", url: "https://theacademics.in/wp-content/uploads/2022/08/ROTATIONAL-MOTION.pdf" },
    { title: "Properties of Matter", module: "19", url: "https://theacademics.in/wp-content/uploads/2023/02/3-Properties-of-Matter-Elasticity-Surface-Tension-Exercise-1.pdf" },
    { title: "Simple Harmonic Motion (SHM)", module: "08", url: "https://theacademics.in/wp-content/uploads/2022/08/3-S.H.M.-2Exercise.pdf" }
  ],
  "Electromagnetism": [
    { title: "Electrostatics", module: "27", url: "https://theacademics.in/wp-content/uploads/2022/09/Electrostatics-DPP.pdf" },
    { title: "Current Electricity", module: "06", url: "https://theacademics.in/wp-content/uploads/2023/09/Current-Electricity-dpp.pdf" },
    { title: "Capacitor", module: "07", url: "https://theacademics.in/wp-content/uploads/2023/09/capacitor-dpp.pdf" },
    { title: "Magnetic Effect of Current", module: "05", url: "https://theacademics.in/wp-content/uploads/2024/01/2.-Magnetic-effect-of-current-dpp.pdf" },
    { title: "Magnetism", module: "03", url: "https://theacademics.in/wp-content/uploads/2024/02/Magnetism-dpp.pdf" },
    { title: "Electromagnetic Induction (EMI)", module: "02", url: "https://theacademics.in/wp-content/uploads/2024/02/Electro-Magnetic-Induction.pdf" }
  ],
  "Waves & Optics": [
    { title: "Sound Waves", module: "01", url: "https://theacademics.in/wp-content/uploads/2022/08/Sound-Waves-Exercise.pdf" },
    { title: "Wave Motion (Strings)", module: "04", url: "https://theacademics.in/wp-content/uploads/2022/08/2.-A-Wave-Motion-Mechanical-Wave-Through-Strings-Exercise.pdf" },
    { title: "Reflection", module: "13", url: "https://theacademics.in/wp-content/uploads/2023/07/reflection-dpp.pdf" },
    { title: "Refraction (Plane & Prism)", module: "11", url: "https://theacademics.in/wp-content/uploads/2023/07/1-.-Refraction-At-plane-surfaces-prism-dpp.pdf" },
    { title: "Refraction (Curved Surface)", module: "10", url: "https://theacademics.in/wp-content/uploads/2023/07/2.-Refraction-at-curved-surface-Optical-Instrument-dpp.pdf" },
    { title: "Wave Optics", module: "09", url: "https://theacademics.in/wp-content/uploads/2023/08/4-Wave-Optics-.pdf" }
  ],
  "Thermodynamics": [
    { title: "Calorimetry", module: "18", url: "https://theacademics.in/wp-content/uploads/2023/03/2.-Calorimetry-Exercise.pdf" },
    { title: "Heat Transfer & Conduction", module: "14", url: "https://theacademics.in/wp-content/uploads/2023/03/4-B-Heat-transfer-Conduction-Exercise-1.pdf" },
    { title: "Thermodynamics", module: "15", url: "https://theacademics.in/wp-content/uploads/2023/03/2-Thermodynamics-Exercise.pdf" },
    { title: "Kinetic Theory of Gases (KTG)", module: "17", url: "https://theacademics.in/wp-content/uploads/2023/03/KTG.pdf" }
  ],
  "Modern Physics": [
    { title: "Atomic Structure", module: "28", url: "https://theacademics.in/wp-content/uploads/2023/01/1-Atomic-Structure-Exercise.pdf" },
    { title: "Matter Waves", module: "21", url: "https://theacademics.in/wp-content/uploads/2023/01/2-Matter-Waves-Exercise.pdf" },
    { title: "Photoelectric Effect", module: "22", url: "https://theacademics.in/wp-content/uploads/2023/01/3-Photoelectric-Effect-Exercise.pdf" },
    { title: "Nuclear Physics", module: "23", url: "https://theacademics.in/wp-content/uploads/2023/01/4-Nuclear-Physics-Radioactivity-Exercise.pdf" }
  ]
};

export default function CategorizedDPP() {
  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="mb-16 flex justify-between items-end border-b border-black/[0.05] pb-8">
        <div>
          <p className="font-serif italic text-gray-400 text-xl mb-2 tracking-wide">Daily Worksheets</p>
          <h1 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-gray-900">DPP DIRECTORY</h1>
        </div>
        <p className="text-[9px] font-mono tracking-widest text-gray-400 uppercase hidden sm:block">Live Database Linked</p>
      </div>

      {/* Categorized Grid */}
      {Object.entries(dppCategories).map(([categoryName, dpps]) => (
        <div key={categoryName} className="mb-16">
          <h2 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6 pl-3 border-l-2 border-gray-300">
            {categoryName}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dpps.map((dpp, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 flex flex-col justify-between min-h-[200px] shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-black/[0.03] hover:shadow-xl transition-all duration-300 group">
                <div>
                  <span className="text-[9px] font-bold text-gray-300 tracking-widest uppercase mb-4 block">
                    MODULE_#{dpp.module}
                  </span>
                  <h3 className="text-sm font-bold text-gray-900 uppercase leading-snug tracking-tight">
                    {dpp.title}
                  </h3>
                </div>
                <a href={dpp.url} target="_blank" rel="noopener noreferrer" className="w-full mt-8 py-3 bg-[#F8F9FA] group-hover:bg-gray-100 group-hover:text-black rounded-xl text-[9px] font-bold tracking-widest text-gray-500 uppercase flex justify-center items-center transition-colors">
                  FETCH WORKSHEET &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}