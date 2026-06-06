'use client';
import React, { useState } from 'react';
import { blogPosts } from './blogData';

export default function BlogDirectory() {
  const [activePostId, setActivePostId] = useState(blogPosts[0].id);
  const activePost = blogPosts.find(post => post.id === activePostId) || blogPosts[0];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* --- LEFT COLUMN: MAIN CONTENT --- */}
        <div className="lg:col-span-2">
          
          {/* Post Header */}
          <div className="mb-12 border-b border-black/[0.05] pb-8">
            {/* Display active post main image */}
            <img 
              src={activePost.imageUrl} 
              alt={activePost.title} 
              className="w-full h-auto max-h-[400px] object-cover rounded-3xl mb-8 shadow-md border border-black/[0.03]"
            />
            
            <span className="text-[10px] font-bold tracking-widest uppercase text-orange-500 mb-4 block">
              In {activePost.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 mb-6 leading-tight">
              {activePost.title}
            </h1>
            <p className="text-xs font-medium text-gray-400 tracking-wider uppercase">
              By {activePost.author}
            </p>
          </div>

          {/* Post Body */}
          <div 
            className="prose prose-lg prose-neutral max-w-none text-gray-700 leading-relaxed mb-20"
            dangerouslySetInnerHTML={{ __html: activePost.content }}
          />

          {/* Comment Section */}
          <div className="border-t border-black/[0.05] pt-12">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-2">Leave a Comment</h3>
            <p className="text-xs font-medium text-gray-400 mb-8 tracking-wide">
              Your email address will not be published. Required fields are marked *
            </p>
            <form className="space-y-5">
              <textarea placeholder="Type here.." className="w-full h-32 p-4 bg-[#FAFAFA] border border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 focus:bg-white transition-colors resize-none text-sm"></textarea>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input type="text" placeholder="Name*" className="w-full p-4 bg-[#FAFAFA] border border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 focus:bg-white transition-colors text-sm" />
                <input type="email" placeholder="Email*" className="w-full p-4 bg-[#FAFAFA] border border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 focus:bg-white transition-colors text-sm" />
                <input type="text" placeholder="Website" className="w-full p-4 bg-[#FAFAFA] border border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 focus:bg-white transition-colors text-sm" />
              </div>
              <div className="flex items-start gap-3 pt-2">
                <input type="checkbox" id="save-info" className="mt-1 w-4 h-4 rounded border-gray-300 text-black focus:ring-black cursor-pointer" />
                <label htmlFor="save-info" className="text-xs text-gray-500 cursor-pointer select-none">Save my name, email, and website in this browser for the next time I comment.</label>
              </div>
              <button type="button" className="mt-6 bg-gray-900 hover:bg-black text-white text-xs font-bold tracking-widest uppercase py-4 px-8 rounded-xl transition-all shadow-md hover:shadow-lg">Post Comment</button>
            </form>
          </div>
        </div>

        {/* --- RIGHT COLUMN: SIDEBAR --- */}
        <div className="lg:col-span-1 border-t lg:border-t-0 lg:border-l border-black/[0.05] pt-12 lg:pt-0 lg:pl-12">
          <h3 className="text-sm font-black tracking-widest uppercase text-gray-900 mb-8">Latest Post</h3>
          <div className="flex flex-col space-y-6">
            {blogPosts.map((post) => (
              <button key={post.id} onClick={() => setActivePostId(post.id)} className={`group text-left flex gap-4 items-start pb-6 border-b border-black/[0.03] transition-opacity ${activePostId === post.id ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}>
                {/* Display sidebar thumbnails */}
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-16 h-16 object-cover rounded-lg overflow-hidden border border-black/5 flex-shrink-0"
                />
                <div>
                  <h4 className={`text-sm font-bold leading-tight mb-2 ${activePostId === post.id ? 'text-orange-500' : 'text-gray-700 group-hover:text-black'}`}>{post.title}</h4>
                  <span className="text-[9px] font-mono tracking-widest uppercase text-gray-400">In {post.category}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}