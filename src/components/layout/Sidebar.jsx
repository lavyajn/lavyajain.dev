import React from 'react';
import useAppStore from '../../store/useAppStore';

const systemsData = [
  { 
    id: 'sanrakshan', code: '001', name: 'SANRAKSHAN', desc: 'Concurrent Railway Control', status: 'OPERATIONAL',
    hoverColor: 'group-hover:border-green-500 group-hover:text-green-400',
    indicator: 'bg-green-500'
  },
  { 
    id: 'vajra', code: '002', name: 'VAJRA', desc: 'Critical Infrastructure Defense', status: 'OPERATIONAL',
    hoverColor: 'group-hover:border-blue-500 group-hover:text-blue-400',
    indicator: 'bg-blue-500'
  },
  { 
    id: 'verifind', code: '003', name: 'VERIFIND', desc: 'Blockchain Asset Verification', status: 'OPERATIONAL',
    hoverColor: 'group-hover:border-purple-500 group-hover:text-purple-400',
    indicator: 'bg-purple-500'
  },
  { 
    id: 'seismic', code: '004', name: 'SEISMIC.NET', desc: 'Global Seismic Intelligence', status: 'OPERATIONAL',
    hoverColor: 'group-hover:border-orange-500 group-hover:text-orange-400',
    indicator: 'bg-orange-500'
  },
];

const Sidebar = () => {
  const { activeSystem, setActiveSystem } = useAppStore();

  return (
    <aside className="w-80 h-screen border-r border-gray-800 bg-black text-gray-300 font-mono flex flex-col select-none relative z-20">
      
      {/* Root Directory Button (Home) */}
      <div 
        className="p-6 border-b border-gray-800 cursor-pointer hover:bg-[#0a0a0a] transition-colors group"
        onClick={() => setActiveSystem(null)}
      >
        <h1 className="text-xl font-bold tracking-widest text-white group-hover:text-gray-300 transition-colors">/SYSTEMS</h1>
        <div className="flex items-center justify-between mt-2">
          {/* BUMPED: text-gray-500 -> text-gray-400 */}
          <p className="text-xs text-gray-400">DIRECTORY_ACCESS_GRANTED</p>
          {!activeSystem && <span className="text-xs text-green-500 animate-pulse">ROOT</span>}
        </div>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 overflow-y-auto p-6 space-y-8">
        {systemsData.map((sys) => {
          const isActive = activeSystem === sys.id;
          
          return (
            <button
              key={sys.id}
              onClick={() => setActiveSystem(sys.id)}
              className="w-full text-left group block relative"
            >
              {/* Subtle hover bracket indicator */}
              <div className={`absolute -left-3 top-0 h-full w-1 border-l-2 opacity-0 transition-all duration-300 ${sys.hoverColor.split(' ')[0]} ${isActive ? 'opacity-100' : 'group-hover:opacity-100'}`}></div>

              {/* Title & Code */}
              <div className={`text-sm tracking-widest mb-1 flex items-center justify-between transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-400'} ${sys.hoverColor.split(' ')[1]}`}>
                <span>[{sys.code}] {sys.name}</span>
                {isActive && <span className="text-xs font-bold">&lt;</span>}
              </div>
              
              {/* Description */}
              {/* BUMPED: text-gray-500 -> text-gray-400, hover to gray-300 */}
              <div className="text-xs text-gray-400 mb-3 transition-colors duration-300 group-hover:text-gray-300">
                {sys.desc}
              </div>
              
              {/* Status Indicator */}
              <div className="text-xs flex items-center gap-3">
                {/* BUMPED: text-gray-600 -> text-gray-400 for better visibility */}
                <span className="text-gray-400">STATUS</span>
                <div className={`flex items-center gap-2 ${isActive ? 'text-white' : 'text-gray-400'}`}>
                  <span className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isActive ? `${sys.indicator} animate-pulse shadow-[0_0_8px_currentColor]` : 'bg-gray-600 group-hover:bg-gray-400'
                  }`}></span>
                  {sys.status}
                </div>
              </div>

              {/* Dashed Separator */}
              <div className="mt-5 border-b border-gray-800 border-dashed group-hover:border-gray-600 transition-colors"></div>
            </button>
          );
        })}
      </nav>

      {/* Footer Info */}
      <div className="p-4 border-t border-gray-800 text-xs flex flex-col gap-3 bg-[#050505]">
        <div className="flex justify-between items-center">
          {/* BUMPED: text-gray-500 -> text-gray-400 */}
          <span className="text-gray-400">USR: L.JAIN</span>
          {/* BUMPED: text-blue-500/70 -> text-blue-400 */}
          <span className="text-blue-400 tracking-widest">OP: SYS_ENG</span>
        </div>
        {/* BUMPED: text-gray-200/50 -> text-gray-400 */}
        <div className="text-[10px] text-gray-400 text-center border-t border-gray-800/50 pt-2 animate-pulse">
          [ TYPE 'HELP' ANYWHERE FOR TERMINAL ]
        </div>
      </div>
      
    </aside>
  );
};

export default Sidebar;