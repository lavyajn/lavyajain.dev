import { useEffect, useRef } from 'react';
import useAppStore from '../store/useAppStore';

const useTerminal = () => {
  const buffer = useRef('');
  
  const toggleTerminal = useAppStore((state) => state.toggleTerminal);
  const setActiveSystem = useAppStore((state) => state.setActiveSystem);
  const toggleCrtMode = useAppStore((state) => state.toggleCrtMode);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        e.ctrlKey || 
        e.metaKey || 
        e.altKey || 
        e.target.tagName === 'INPUT' || 
        e.target.tagName === 'TEXTAREA'
      ) return;

      const key = e.key.toLowerCase();

      if (key === 'escape') {
        useAppStore.setState({ isTerminalOpen: false });
        buffer.current = '';
        return;
      }

      if (key.length !== 1) return;

      buffer.current = (buffer.current + key).slice(-20);

      if (buffer.current.endsWith('help')) {
        e.preventDefault(); // Kills the 'p' from inserting into the input
        toggleTerminal();
        buffer.current = ''; 
      } else if (buffer.current.endsWith('sanrakshan')) {
        e.preventDefault();
        setActiveSystem('sanrakshan');
        buffer.current = '';
      } else if (buffer.current.endsWith('vajra')) {
        e.preventDefault();
        setActiveSystem('vajra');
        buffer.current = '';
      } else if (buffer.current.endsWith('matrix')) {
        e.preventDefault();
        toggleCrtMode();
        buffer.current = '';
      }
    };

    // Attach to document for wider focus capture
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [toggleTerminal, setActiveSystem, toggleCrtMode]);

  return null;
};

export default useTerminal;