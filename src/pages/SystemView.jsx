import React from 'react';
import { systemsData } from '../data/systems';

const SystemView = ({ systemId }) => {
  const data = systemsData[systemId];
  if (!data) return <div className="text-red-500">ERR: SYSTEM_DATA_NOT_FOUND</div>;

  return (
    <div className="w-full max-w-7xl mx-auto font-mono pb-20 animate-in fade-in duration-500">
      
      {/* Header Block */}
      <div className="border border-gray-700 bg-[#0a0a0a] p-6 md:p-8 mb-8 shadow-sm">
        
        {/* Responsive Flex Container: Stacks vertically on mobile, horizontally on md screens */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-6 border-b border-gray-700 pb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-widest mb-2 text-white">
              {data.name}
            </h1>
            <h2 className={`text-sm tracking-widest uppercase ${data.color}`}>
              {data.tagline}
            </h2>
          </div>
          
          {data.links?.github && (
            <a 
              href={data.links.github} 
              target="_blank" 
              rel="noreferrer"
              className={`border border-gray-700 px-4 py-2 text-xs text-gray-400 transition-colors ${data.hoverBg} hover:${data.color} self-start whitespace-nowrap`}
            >
              [ GITHUB_REPOSITORY ]
            </a>
          )}
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

      {/* Media Rendering Container */}
      <div className={`w-full border border-gray-800 bg-black mb-8 flex justify-center items-center relative overflow-hidden group ${
        data.media?.orientation === 'portrait' ? 'py-8' : ''
      }`}>
        
        {/* Fallback pattern if no media is loaded yet */}
        {!data.media?.url && (
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        )}

        {data.media?.url ? (
          data.media.type === 'video' ? (
            <video 
              src={data.media.url}
              autoPlay
              loop
              muted
              playsInline
              className={`block ${data.media.orientation === 'portrait' ? 'h-[600px] w-auto border border-gray-800 rounded-xl' : 'w-full h-auto'}`}
            />
          ) : (
            <img 
              src={data.media.url} 
              alt={`${data.name} demonstration`}
              className={`block ${data.media.orientation === 'portrait' ? 'h-[600px] w-auto border border-gray-800 rounded-xl' : 'w-full h-auto'}`}
            />
          )
        ) : (
          <div className="h-[400px] text-gray-600 tracking-widest text-sm z-10 flex flex-col items-center justify-center">
            <span className="mb-2 opacity-50">[ MEDIA_FEED_OFFLINE ]</span>
            <span>AWAITING_VISUAL_TELEMETRY</span>
          </div>
        )}
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