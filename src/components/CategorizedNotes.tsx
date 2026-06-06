import React from 'react';

const noteCategories = {
  "Basic Tools": [
    { title: "Basic Math", url: "https://theacademics.in/wp-content/uploads/2022/09/BAISC-MATH-FOR-PHYSICS.pdf" },
    { title: "Vectors", url: "https://theacademics.in/wp-content/uploads/2022/09/VECTOR.pdf" }
  ],
  "Mechanics": [
    { title: "Kinematics", url: "https://theacademics.in/wp-content/uploads/2022/09/kinematics.pdf" },
    { title: "NLM and Friction", url: "https://theacademics.in/wp-content/uploads/2022/09/nlm.pdf" },
    { title: "Work, Energy and Power", url: "https://theacademics.in/wp-content/uploads/2022/09/work-energy-and-power.pdf" },
    { title: "Centre of Mass & Momentum", url: "https://theacademics.in/wp-content/uploads/2022/09/collision-and-centre-of-mass.pdf" },
    { title: "Circular Motion", url: "https://theacademics.in/wp-content/uploads/2022/09/circular-motion.pdf" },
    { title: "Rotational Motion", url: "https://theacademics.in/wp-content/uploads/2022/09/rotational-motion.pdf" },
    { title: "Properties of Matter", url: "https://theacademics.in/wp-content/uploads/2022/09/properties-of-matter.pdf" },
    { title: "Simple Harmonic Motion", url: "https://theacademics.in/wp-content/uploads/2022/09/shm.pdf" }
  ],
  "Electromagnetism": [
    { title: "Electrostatics", url: "https://theacademics.in/wp-content/uploads/2022/11/electrostatics.pdf" },
    { title: "Current Electricity", url: "https://theacademics.in/wp-content/uploads/2023/03/CURRENT-ELECTRICITY.pdf" },
    { title: "Alternating Current (AC)", url: "https://theacademics.in/wp-content/uploads/2023/03/AC.pdf" }
  ],
  "Modern Physics & Electronics": [
    { title: "Modern Physics", url: "https://theacademics.in/wp-content/uploads/2023/03/Modern-phy-2.pdf" },
    { title: "Semiconductors", url: "https://theacademics.in/wp-content/uploads/2023/03/semiconductor.pdf" }
  ]
};

export default function CategorizedNotes() {
  return (<div>...</div>);
}
    <div className="w-full">
      {/* Header Section */}
      <div className="mb-16 flex justify-between items-end border-b border-black/[0.05] pb-8">
        <div>
          <p className="font-serif italic text-gray-400 text-xl mb-2 tracking-wide">Formula Keys</p>
          <h1 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-gray-900">SHORT NOTES DIRECTORY</h1>
        </div>
        <p className="text-[9px] font-mono tracking-widest text-gray-400 uppercase hidden sm:block">Live Database Linked</p>
      </div>

      {/* Categorized Grid */}
      {Object.entries(noteCategories).map(([categoryName, notes], catIndex) => (
        <div key={categoryName} className="mb-16">
          
          {/* Category Title */}
          <h2 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6 pl-3 border-l-2 border-gray-300">
            {categoryName}
          </h2>
          
          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {notes.map((note, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 flex flex-col justify-between min-h-[200px] shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-black/[0.03] hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  <span className="text-[9px] font-bold text-gray-300 tracking-widest uppercase mb-4 block">
                    MODULE_#{String(catIndex + 1)}{String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-sm font-bold text-gray-900 uppercase leading-snug tracking-tight">
                    {note.title}
                  </h3>
                </div>
                
                <a 
                  href={note.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full mt-8 py-3 bg-[#F8F9FA] group-hover:bg-gray-100 group-hover:text-black rounded-xl text-[9px] font-bold tracking-widest text-gray-500 uppercase flex justify-center items-center transition-colors"
                >
                  FETCH PDF &rarr;
                </a>
              </div>
            ))}
          </div>
          
        </div>
      ))}
    </div>
  );
}