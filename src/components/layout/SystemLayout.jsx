import React from 'react';
import Sidebar from './Sidebar';
import TerminalOverlay from './TerminalOverlay';
import useAppStore from '../../store/useAppStore';
import useTerminal from '../../hooks/useTerminal'; // 1. Import the listener

const SystemLayout = ({ children }) => {
  const { crtMode } = useAppStore();
  
  useTerminal(); // 2. Execute the listener so it actually hears you

  return (
    <div className={`flex h-screen w-full bg-black text-white overflow-hidden selection:bg-green-900 selection:text-green-400`}>
      
      {/* CRT OVERRIDE EFFECT */}
      {crtMode && (
        <div className="pointer-events-none fixed inset-0 z-[100] mix-blend-overlay opacity-70">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.3)_50%)] bg-[size:100%_4px]"></div>
          <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,1)]"></div>
          <div className="absolute inset-0 bg-green-900/5 mix-blend-color-burn"></div>
        </div>
      )}

      {/* Global Terminal Overlay */}
      <TerminalOverlay />

      {/* Left Navigation */}
      <Sidebar />
      
      {/* Right Content Area */}
      <main className="flex-1 relative overflow-y-auto bg-[#050505]">
        
        {/* Subtle engineering grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
        
        <div className={`relative z-10 w-full h-full p-8 flex flex-col ${crtMode ? 'blur-[0.5px] contrast-125' : ''}`}>
          {children}
        </div>
        
      </main>
    </div>
  );
};

export default SystemLayout;