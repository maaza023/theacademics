'use client';
import { useState } from 'react';

const chaptersData = [
    { id: 1, title: 'Simple Harmonic Motion & Oscillations', dpps: ['DPP 01: Kinematics of SHM', 'DPP 02: Energy in SHM', 'DPP 03: Spring-Mass Systems'] },
    { id: 2, title: 'Rotational Mechanics (Rigid Body Dynamics)', dpps: ['DPP 01: Moment of Inertia', 'DPP 02: Torque & Equilibrium', 'DPP 03: Angular Momentum Conservation'] },
    { id: 3, title: 'Laws of Motion & Friction', dpps: ['DPP 01: Newton\'s Laws Framework', 'DPP 02: Advanced Friction Blocks', 'DPP 03: Pseudo Forces & Wedges'] }
];

export default function PortalDashboard() {
    const [activeTab, setActiveTab] = useState('dpp');
    const [expandedChapter, setExpandedChapter] = useState<number | null>(null);

    return (
        <div className="w-full min-h-screen bg-neutral-950 py-24 px-4 border-t border-neutral-900">
            <div className="max-w-5xl mx-auto">

                {/* Resource Selector Menu */}
                <div className="flex justify-center items-center gap-2 mb-12 bg-neutral-900/60 p-1.5 rounded-full border border-neutral-800 max-w-md mx-auto">
                    {['dpp', 'notes', 'test series'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => { setActiveTab(tab); setExpandedChapter(null); }}
                            className={`flex-1 py-2 px-4 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${activeTab === tab ? 'bg-gradient-to-r from-[#C5A880] to-[#D4AF37] text-neutral-950 shadow-lg' : 'text-neutral-400 hover:text-white'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Panel View Switcher */}
                {activeTab === 'dpp' && (
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold text-[#D4AF37] mb-2">Daily Practice Problems (DPP)</h2>
                        {chaptersData.map((chapter) => (
                            <div key={chapter.id} className="bg-neutral-900/40 border border-neutral-800/80 rounded-xl overflow-hidden">
                                <button
                                    onClick={() => setExpandedChapter(expandedChapter === chapter.id ? null : chapter.id)}
                                    className="w-full py-5 px-6 flex justify-between items-center text-left hover:bg-neutral-900/80 transition-colors"
                                >
                                    <span className="font-medium text-neutral-200 md:text-lg">{chapter.title}</span>
                                    <span className="text-[#D4AF37] text-xl font-light">{expandedChapter === chapter.id ? '−' : '+'}</span>
                                </button>

                                {expandedChapter === chapter.id && (
                                    <div className="px-6 pb-5 pt-2 bg-neutral-950/40 border-t border-neutral-900/60 flex flex-col gap-3">
                                        {chapter.dpps.map((dpp, idx) => (
                                            <div key={idx} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 rounded-lg bg-neutral-900/20 border border-neutral-800/40 gap-3">
                                                <span className="text-sm text-neutral-300 font-light">{dpp}</span>
                                                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                                                    <button className="text-xs font-bold text-[#D4AF37] border border-[#D4AF37]/30 px-3 py-1.5 rounded hover:bg-[#D4AF37]/10 transition-all">
                                                        View Questions
                                                    </button>
                                                    <button className="text-xs font-bold bg-[#D4AF37] text-neutral-950 px-3 py-1.5 rounded">
                                                        Download PDF
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* Placeholders for remaining modules */}
                {activeTab === 'notes' && <div className="text-center py-20 bg-neutral-900/20 border border-dashed border-neutral-800 rounded-2xl text-neutral-400">Class study keys compiling...</div>}
                {activeTab === 'test series' && <div className="text-center py-20 bg-neutral-900/20 border border-dashed border-neutral-800 rounded-2xl text-neutral-400">Test schedules releasing soon...</div>}
            </div>
        </div>
    );
}
