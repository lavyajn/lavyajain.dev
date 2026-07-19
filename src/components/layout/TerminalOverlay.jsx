import React, { useState, useEffect, useRef } from 'react';
import useAppStore from '../../store/useAppStore';

const TerminalOverlay = () => {
  const { isTerminalOpen, toggleTerminal, setActiveSystem, toggleCrtMode } = useAppStore();
  const [input, setInput] = useState('');
  
  // Initial boot sequence text
  const [output, setOutput] = useState([
    'SYS_ADMIN_TERMINAL_v1.0',
    'AUTHORIZED ACCESS GRANTED.',
    'TYPE COMMAND AND PRESS ENTER.',
    'AVAILABLE: help, matrix, clear, exit, sanrakshan, vajra, verifind, seismic',
  ]);
  
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  // Auto-focus the input when the terminal opens
  useEffect(() => {
    if (isTerminalOpen) {
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [isTerminalOpen]);

  // Auto-scroll to the bottom when new output is added
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [output]);

  if (!isTerminalOpen) return null;

  const handleCommand = (e) => {
    // Close on Escape
    if (e.key === 'Escape') {
      toggleTerminal();
      return;
    }
    
    // Only process command when hitting Enter
    if (e.key !== 'Enter') return;

    const cmd = input.trim().toLowerCase();
    let newOutput = [...output, `> ${cmd}`];

    switch (cmd) {
      case 'help':
        newOutput.push('AVAILABLE: help, matrix, clear, exit, sanrakshan, vajra, verifind, seismic');
        break;
      case 'matrix':
        toggleCrtMode();
        newOutput.push('CRT_OVERRIDE_TOGGLED');
        break;
      case 'clear':
        newOutput = [];
        break;
      case 'exit':
        toggleTerminal();
        break;
      case 'sanrakshan':
      case 'vajra':
      case 'verifind':
      case 'seismic':
        setActiveSystem(cmd);
        toggleTerminal(); // Auto-close terminal to show the system
        break;
      case '':
        break;
      default:
        newOutput.push(`COMMAND_NOT_FOUND: ${cmd}`);
    }

    setOutput(newOutput);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-[#050505] border border-green-500/50 shadow-[0_0_30px_rgba(0,255,0,0.05)] font-mono text-green-500 p-6 flex flex-col h-[50vh]">
        
        {/* Terminal Header */}
        <div className="flex justify-between items-center border-b border-green-900/50 pb-2 mb-4 text-xs tracking-widest">
          <span>SYS_ADMIN_TERMINAL_v1.0</span>
          <span 
            className="text-gray-500 cursor-pointer hover:text-white transition-colors" 
            onClick={toggleTerminal}
          >
            [ ESC ] TO CLOSE
          </span>
        </div>
        
        {/* Terminal Output Body */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto flex flex-col gap-1 text-sm pb-4">
          {output.map((line, i) => (
            <div key={i} className={line.startsWith('>') ? 'text-green-300 mt-2' : 'text-green-500/80'}>
              {line}
            </div>
          ))}
          
          {/* Active Input Line */}
          <div className="flex items-center gap-3 mt-2">
            <span className="text-green-300">root@lavyajain.dev:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              className="flex-1 bg-transparent outline-none border-none text-green-500 placeholder-green-900 focus:ring-0"
              autoFocus
              autoComplete="off"
              spellCheck="false"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default TerminalOverlay;