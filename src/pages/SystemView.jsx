import React from 'react';
import { systemsData } from '../data/systems';

const SystemView = ({ systemId }) => {
  const data = systemsData[systemId];
  if (!data) return <div className="text-red-500">ERR: SYSTEM_DATA_NOT_FOUND</div>;

  return (
    <div className="w-full max-w-7xl mx-auto font-mono pb-20 animate-in fade-in duration-500">
      
      {/* Header Block */}
      <div className="border border-gray-700 bg-[#0a0a0a] p-8 mb-8 shadow-sm relative">
        
        {/* GitHub Link positioned top right */}
        <a 
          href={data.links.github} 
          target="_blank" 
          rel="noreferrer"
          className={`absolute top-8 right-8 border border-gray-700 px-3 py-1 text-xs text-gray-400 transition-colors ${data.hoverBg} hover:${data.color}`}
        >
          [ GITHUB_REPOSITORY ]
        </a>

        <div className="flex justify-between items-start mb-6 border-b border-gray-700 pb-6 pr-40">
          <div>
            <h1 className="text-4xl font-bold tracking-widest mb-2 text-white">
              {data.name}
            </h1>
            <h2 className={`text-sm tracking-widest uppercase ${data.color}`}>
              {data.tagline}
            </h2>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm mb-6">
          {Object.entries(data.metrics).map(([key, value]) => (
            <div key={key}>
              <div className="text-gray-500 text-xs uppercase mb-1">{key}</div>
              <div className="text-gray-300">{value}</div>
            </div>
          ))}
        </div>

        {/* Status Tracker */}
        <div className="border-t border-gray-800 pt-4 flex items-center justify-between">
            <div className="text-xs text-gray-500">SYS_STATUS</div>
            <div className={`text-sm flex items-center gap-2 ${data.color}`}>
              <span className={`w-2 h-2 rounded-full animate-pulse ${data.bg}`}></span>
              {data.status}
            </div>
        </div>
      </div>

      {/* Media Viewer (GIFs) */}
      <div className={`w-full border ${data.border} bg-[#050505] mb-8 relative group overflow-hidden min-h-[400px] flex flex-col`}>
         <div className={`absolute inset-0 opacity-5 ${data.bg} pointer-events-none`}></div>
         
         <div className="flex-1 flex items-center justify-center bg-black">
           <img 
             src={data.mediaPath} 
             alt={`${data.name} interface`}
             className="w-full h-full object-contain"
             onError={(e) => { 
               e.target.onerror = null; // Prevent infinite loops
               e.target.style.display = 'none';
               e.target.parentNode.innerHTML = `<div class="text-red-500 text-xs tracking-widest">[ ASSET_NOT_FOUND: ${data.mediaPath} ]</div>`;
             }}
           />
         </div>
         
         <div className="p-2 text-xs text-gray-500 flex justify-between items-center bg-[#0a0a0a] border-t border-gray-800">
           <span>LIVE_FEED_SIMULATION</span>
           <span className={`${data.color}`}>SIGNAL_LOCK</span>
         </div>
      </div>

      {/* Engineering Text */}
      <div className="mb-12">
        <h3 className="text-lg text-white border-b border-gray-700 pb-2 mb-4 tracking-widest">
          // SYSTEM_OVERVIEW
        </h3>
        <p className="text-gray-200 leading-relaxed text-sm">
          {data.overview}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {data.engineering.map((item, idx) => (
          <div key={idx} className={`border-l-2 ${data.border} pl-6 bg-[#0a0a0a] p-4`}>
            <h4 className="text-white mb-2 text-sm uppercase tracking-wider">
              {item.title}
            </h4>
            <p className="text-gray-200 text-sm leading-relaxed">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemView;