'use client';

interface StudioHeroProps {
    scrollProgress?: number;
    setView?: (view: 'home' | 'dpp' | 'short-notes' | 'notes') => void;
}

export default function StudioHero({ scrollProgress, setView }: StudioHeroProps) {
    return (
        <div className="relative w-full h-screen bg-[#F5F5F5] flex justify-center items-center overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="h-[60vh] w-auto max-w-full object-contain"
                style={{
                    mixBlendMode: 'multiply',
                    filter: 'brightness(1.05) contrast(1.15)'
                }}
                src="/totem.mp4"
            />
        </div>
    );
}
