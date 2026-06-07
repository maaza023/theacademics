'use client';
import CategorizedNotes from './CategorizedNotes';

const chaptersList = [
    "Newton's Laws of Motion (NLM) - Level 1 Assignment",
    "Motion in a Straight Line",
    "Basic Integration & Differentiation Framework",
    "Electrostatics, Flux & Field Mapping",
    "Atomic Structure Systems",
    "Motion in a Plane (Vector Space Mechanics)",
    "Nuclear Physics & Transmutation Logs",
    "Photoelectric Effect Theory Modules",
    "Matter Waves & Quantum Dualism",
    "Circular Motion Dynamics",
    "Mechanical Properties of Matter",
    "Calorimetry & Phase Change Analysis",
    "Kinetic Theory of Gases (KTG)",
    "Work, Energy & Power Theorems",
    "Thermodynamics & Thermal Cycles",
    "Heat Transfer & Conduction Parameters",
    "Reflection & Geometrical Ray Optics",
    "Rotational Motion & Axis Torque Dynamics",
    "Refraction Through Plane Surfaces",
    "Refraction Through Curved Lenses",
    "Wave Optics & Wavefront Interference",
    "Simple Harmonic Motion (SHM Waveforms)",
    "Capacitance & Polar Dielectrics",
    "Current Electricity & Network Mesh Arrays",
    "Magnetic Fields due to Steady Currents",
    "Wave Motion & Acoustic Waveforms",
    "Magnetism, Domains & External Matter",
    "Electromagnetic Induction (EMI Core)",
    "Sound Waves & Relativistic Doppler Shifts"
];

export default function ChapterGrid({ type }: { type: 'dpp' | 'short-notes' | 'notes' }) {if (type === 'short-notes') {
    return <CategorizedNotes />;
  }
    return (
        <div className="w-full">
            <div className="mb-12 border-b border-white/5 pb-6">
                <h2 className="text-2xl font-bold tracking-wider capitalize text-white">{type.replace('-', ' ')} Matrix</h2>
                <p className="text-neutral-400 text-xs tracking-widest uppercase font-medium mt-1 text-orange-400 font-sans">Verified Academic Material Assets</p>
            </div>

            {/* Luxury Diamond-Glass Grid Panels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {chaptersList.map((chapter, index) => (
                    <div key={index} className="relative overflow-hidden bg-white/[0.02] backdrop-blur-lg border border-white/5 rounded-xl p-6 flex flex-col justify-between hover:bg-white/[0.05] hover:border-white/15 transition-all duration-300 group shadow-lg">
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        <div className="mb-6">
                            <span className="text-[9px] font-mono text-neutral-500 block mb-1">UNIT_REF: #{String(index + 1).padStart(2, '0')}</span>
                            <h3 className="text-xs font-semibold tracking-wider text-neutral-300 group-hover:text-white transition-colors uppercase leading-relaxed">{chapter}</h3>
                        </div>

                        <button className="w-full py-2 bg-white/5 border border-white/10 text-neutral-300 group-hover:bg-white group-hover:text-black text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all duration-200">
                            {type === 'dpp' ? 'Fetch Assignment' : 'Download Document PDF'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}