import React, { useState, useEffect } from 'react';
import SystemLayout from './components/layout/SystemLayout';
import SystemView from './pages/SystemView';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import useAppStore from './store/useAppStore';

const systemColors = {
  sanrakshan: { text: 'text-green-400', border: 'border-green-500' },
  vajra: { text: 'text-blue-400', border: 'border-blue-500' },
  verifind: { text: 'text-purple-400', border: 'border-purple-500' },
  seismic: { text: 'text-orange-400', border: 'border-orange-500' },
};

function App() {
  const { activeSystem } = useAppStore();
  const [isInitializing, setIsInitializing] = useState(false);

  useEffect(() => {
    if (activeSystem && activeSystem !== 'resume' && activeSystem !== 'contact') {
      setIsInitializing(true);
      const timer = setTimeout(() => setIsInitializing(false), 800);
      return () => clearTimeout(timer);
    }
  }, [activeSystem]);

  const colors = systemColors[activeSystem] || { text: 'text-green-400', border: 'border-green-500' };

  return (
    <SystemLayout>
      {!activeSystem ? (
        <Home />
      ) : activeSystem === 'resume' ? (
        <Resume /> 
      ) : activeSystem === 'contact' ? (
        <Contact />
      ) : isInitializing ? (
        <div className="flex flex-col items-center justify-center h-full font-mono">
          <div className={`w-16 h-16 border-t-2 ${colors.border} rounded-full animate-spin mb-4`}></div>
          <h2 className={`text-xl tracking-widest ${colors.text} animate-pulse`}>
            INITIALIZING {activeSystem.toUpperCase()} SUBSYSTEM...
          </h2>
        </div>
      ) : (
        <SystemView systemId={activeSystem} />
      )}
    </SystemLayout>
  );
}

export default App;