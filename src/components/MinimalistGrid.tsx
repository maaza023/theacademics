iimport CategorizedNotes from './CategorizedNotes';
import CategorizedDPP from './CategorizedDPP';
import BlogDirectory from './BlogDirectory';

export default function MinimalistGrid({ type }: { type: 'dpp' | 'short-notes' | 'notes' | 'blog' | 'home' }) 
  if (type === 'short-notes') return <CategorizedNotes />;
  if (type === 'dpp') return <CategorizedDPP />;
  if (type === 'blog') return <BlogDirectory />;
  if (type === 'home') return null;

  return (
    <div className="w-full font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="mb-14 border-b border-black/[0.05] pb-6 flex justify-between items-end">
        <h2 className="text-3xl font-extrabold tracking-tight capitalize text-[#1D1D1F]">
           {type.replace('-', ' ')} Directory
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* If this remains empty, it will build correctly */}
      </div>
    </div>
  );
