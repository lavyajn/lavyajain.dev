import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TerminalOverlay from './TerminalOverlay';
import useAppStore from '../../store/useAppStore';
import useTerminal from '../../hooks/useTerminal';

const SystemLayout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { crtMode } = useAppStore();

  // Activates the hidden global keystroke listener
  useTerminal();

  return (
    <div className="flex h-screen w-full bg-black text-white overflow-hidden selection:bg-green-900 selection:text-green-400">
      
      {/* 
        CRT OVERRIDE EFFECT 
        Active when user types 'matrix' in the terminal
      */}
      {crtMode && (
        <div className="pointer-events-none fixed inset-0 z-[100] mix-blend-overlay opacity-70">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.3)_50%)] bg-[size:100%_4px]"></div>
          <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,1)]"></div>
          <div className="absolute inset-0 bg-green-900/5 mix-blend-color-burn"></div>
        </div>
      )}

      {/* The Global Terminal Overlay */}
      <TerminalOverlay />

      {/* Mobile Header (Only visible on small screens) */}
      <div className="md:hidden absolute top-0 left-0 w-full h-14 bg-[#050505] border-b border-gray-800 z-50 flex items-center justify-between px-4">
        <span className="text-sm tracking-widest text-white font-serif">L.JAIN</span>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-green-500 text-xs border border-gray-800 px-3 py-1"
        >
          {isMobileMenuOpen ? '[ CLOSE ]' : '[ MENU ]'}
        </button>
      </div>

      {/* Left Navigation (Sidebar) */}
      <div className={`
        fixed md:static inset-y-0 left-0 z-40 transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-[115%] md:translate-x-0'}
        w-[280px] md:w-auto h-full bg-black md:bg-transparent border-r border-gray-800 md:border-none pt-14 md:pt-0
      `}>
        <Sidebar />
      </div>

      {/* Overlay to close sidebar on mobile when clicking outside */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden" 
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
      
      {/* Right Content Area */}
      <main className="flex-1 relative overflow-y-auto bg-[#050505] pt-14 md:pt-0">
        
        {/* Subtle engineering grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
        
        {/* Content Container with conditional CRT blur */}
        <div className={`relative z-10 w-full h-full p-6 md:p-8 flex flex-col ${crtMode ? 'blur-[0.5px] contrast-125' : ''}`}>
          {children}
        </div>
        
      </main>
    </div>
  );
};

export default SystemLayout;