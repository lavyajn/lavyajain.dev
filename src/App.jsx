import React, { useState, useEffect } from 'react';
import SystemLayout from './components/layout/SystemLayout';
import SystemView from './pages/SystemView';
import Home from './pages/Home';
import useAppStore from './store/useAppStore';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  const { activeSystem } = useAppStore();
  const [isInitializing, setIsInitializing] = useState(false);

  useEffect(() => {
    if (activeSystem && activeSystem !== 'resume') {
      setIsInitializing(true);
      const timer = setTimeout(() => setIsInitializing(false), 800);
      return () => clearTimeout(timer);
    }
  }, [activeSystem]);

  return (
    <SystemLayout>
      {!activeSystem ? (
        <Home />
      ) : activeSystem === 'resume' ? (
        // 2. Render Resume if state matches
        <Resume /> 
        ) : activeSystem === 'contact' ? (
        // 3. Render Contact if state matches
        <Contact />
      ) : isInitializing ? (
        <div className="flex flex-col items-center justify-center h-full font-mono">
          <div className="w-16 h-16 border-t-2 border-green-500 rounded-full animate-spin mb-4"></div>
          <h2 className="text-xl tracking-widest text-green-400 animate-pulse">
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