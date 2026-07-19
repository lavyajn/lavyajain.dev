import React, { useState, useEffect } from 'react';

const SanrakshanUI = () => {
  const [time, setTime] = useState('00:00');
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState([
    '[14:23:54] WebSocket connected.',
    '[14:41:34] INITIALIZING AUTOMATED YARD BUILD...',
    '[14:41:36] YARD BUILD COMPLETE.',
  ]);

  // Simulate clock and logs
  useEffect(() => {
    if (!isRunning) return;
    
    const interval = setInterval(() => {
      const d = new Date();
      setTime(`${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`);
      
      // Randomly inject telemetry logs to make it feel alive
      if (Math.random() > 0.8) {
        setLogs(prev => {
          const newLogs = [`[${time}:${d.getSeconds().toString().padStart(2, '0')}] SYNC: Track mutex unlocked.`, ...prev];
          return newLogs.slice(0, 8); // Keep last 8 logs
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning, time]);

  return (
    <div className="w-full h-full bg-[#030305] text-xs font-mono flex flex-col border border-blue-900/30 shadow-[inset_0_0_20px_rgba(0,0,255,0.05)]">
      
      {/* TOP HEADER */}
      <div className="flex justify-between items-center bg-[#05050a] border-b border-blue-900/50 px-4 py-2">
        <div className="flex items-center gap-3">
          <div className="text-blue-400 font-bold tracking-widest flex items-center gap-2">
            <span className="bg-blue-500/20 px-1 rounded">🚂</span> SANRAKSHAN - CTC INTERLOCKING PANEL
          </div>
          <div className="text-blue-700 hidden md:block">PREDICTIVE RAILWAY SIMULATION ENGINE</div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="border border-yellow-600/50 px-4 py-1 text-yellow-500 font-bold tracking-widest flex gap-4">
            <span>CLOCK: {time}</span>
            <span>({isRunning ? 'RUNNING' : 'PAUSED'})</span>
          </div>
          <div className="flex items-center gap-1 text-[10px]">
            <span className="text-green-500 animate-pulse">●</span> SYS.ONLINE
          </div>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* LEFT/CENTER: MAP AREA */}
        <div className="flex-1 relative bg-[#020202] p-4 flex flex-col justify-between">
          {/* Dot Grid Background */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
          
          {/* Abstract Track Graphic (CSS Mockup of your network) */}
          <div className="absolute inset-0 flex items-center justify-center opacity-80 pointer-events-none">
             <div className="relative w-3/4 h-1/2 border-t-2 border-l-2 border-blue-600/40 rounded-tl-3xl">
                <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-red-500 rounded-full ring-2 ring-black"></div>
                <div className="absolute top-[-20px] left-[-20px] text-red-500 font-bold">KASARA</div>
                
                <div className="absolute top-full left-1/4 w-1/2 h-full border-t-2 border-blue-600/40 transform -rotate-12"></div>
                <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-500 rounded-full ring-4 ring-blue-900/50 flex items-center justify-center shadow-[0_0_15px_rgba(0,100,255,0.6)]"></div>
                <div className="absolute top-1/2 left-[53%] text-blue-400 font-bold">KALYAN</div>
             </div>
          </div>

          <div className="relative z-10 flex flex-col gap-2 w-48 mt-auto">
            <div className="bg-[#05050a] border border-blue-900/50 p-2 flex gap-2">
              <div className="text-yellow-500 font-bold">{time}</div>
              <button className="flex-1 bg-blue-900/40 hover:bg-blue-800 text-blue-300 py-1 transition-colors">SET CLOCK</button>
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={() => setIsRunning(!isRunning)}
                className={`flex-1 py-2 font-bold ${isRunning ? 'bg-orange-900/60 text-orange-400 hover:bg-orange-800/80 border border-orange-700/50' : 'bg-green-900/60 text-green-400 hover:bg-green-800/80 border border-green-700/50'} transition-colors`}
              >
                {isRunning ? '|| PAUSE SIMULATION' : '▶ START SIMULATION'}
              </button>
            </div>
            
            <button className="w-full bg-[#1a0f00] hover:bg-[#2a1a00] text-orange-500 py-2 border border-orange-900/50 transition-colors">
              AUTO-BUILD YARD
            </button>
            
            <button className="w-full bg-[#3a0000] hover:bg-[#5a0000] text-red-500 py-2 border border-red-900/50 font-bold transition-colors">
              ⚠ EMERGENCY STOP
            </button>
          </div>
        </div>

        {/* RIGHT: TELEMETRY PANEL */}
        <div className="w-80 bg-[#05050a] border-l border-blue-900/50 flex flex-col">
          
          <div className="p-4 border-b border-blue-900/50">
            <h3 className="text-blue-500 mb-2">LIVE TELEMETRY</h3>
            <p className="text-blue-700/70">NO TRAIN SELECTED.<br/>Click an active train on the map to view live data.</p>
          </div>
          
          <div className="p-4 border-b border-blue-900/50 h-40">
            <h3 className="text-blue-500 mb-2">PENDING DEPARTURES</h3>
            {isRunning && (
               <div className="text-gray-400 py-1 border-b border-gray-800 flex justify-between">
                 <span>KP Express</span>
                 <span className="text-yellow-500">Queued</span>
               </div>
            )}
          </div>
          
          <div className="p-4 flex-1 flex flex-col overflow-hidden">
            <h3 className="text-blue-500 mb-2">EVENT LOG</h3>
            <div className="flex-1 overflow-y-auto space-y-1 pr-2">
              {logs.map((log, i) => (
                <div key={i} className={`${i === 0 ? 'text-gray-300' : 'text-blue-800/60'}`}>{log}</div>
              ))}
            </div>
          </div>
          
          <div className="flex border-t border-blue-900/50">
             <div className="flex-1 p-3 text-center border-r border-blue-900/50">
               <div className="text-blue-400 font-bold text-lg">{isRunning ? '4' : '0'}</div>
               <div className="text-blue-700">ACTIVE TRAINS</div>
             </div>
             <div className="flex-1 p-3 text-center">
               <div className="text-blue-400 font-bold text-lg">{isRunning ? '4' : '0'}</div>
               <div className="text-blue-700">LOCKED TRACKS</div>
             </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default SanrakshanUI;