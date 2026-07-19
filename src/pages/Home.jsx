import React from 'react';
import useAppStore from '../store/useAppStore';

const Home = () => {
    const { setActiveSystem } = useAppStore();
    
  return (
    <div className="w-full max-w-4xl font-mono pb-20 animate-in fade-in duration-500">
      
      {/* Hero Section */}
      <div className="mb-16 mt-8">
        {/* Restored the serif font and size from your old layout */}
        <h1 className="text-6xl font-serif text-white mb-2 tracking-wide uppercase">LAVYA JAIN</h1>
        <h2 className="text-lg text-gray-400 tracking-widest uppercase border-b border-gray-800 pb-6 mb-8 w-max pr-12">
          Systems Engineer
        </h2>
        
        <p className="text-gray-200 leading-relaxed max-w-2xl text-base">
          Building concurrent software, distributed systems and infrastructure simulations.
        </p>
      </div>

      {/* Engineering Philosophy */}
      <div className="mb-16">
        <h3 className="text-lg text-white border-b border-gray-800 pb-2 mb-6 tracking-widest">
          // ENGINEERING_PHILOSOPHY
        </h3>
        <div className="bg-[#0a0a0a] border border-gray-700 p-6 text-sm text-gray-200 leading-relaxed">
          <p className="mb-4 text-white">I enjoy building software where correctness matters.</p>
          <ul className="space-y-2 list-none">
            <li><span className="text-green-500 mr-2">►</span>Concurrent systems.</li>
            <li><span className="text-green-500 mr-2">►</span>Infrastructure.</li>
            <li><span className="text-green-500 mr-2">►</span>Simulation.</li>
            <li><span className="text-green-500 mr-2">►</span>Distributed communication.</li>
          </ul>
          <p className="mt-4 text-gray-500">Not just interfaces.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Current Focus */}
        <div>
          <h3 className="text-lg text-white border-b border-gray-800 pb-2 mb-6 tracking-widest">
            // CURRENT_FOCUS
          </h3>
          <div className="flex flex-wrap gap-3">
            {['Operating Systems', 'Distributed Systems', 'DSA', 'Linux', 'Kernel Development'].map((item) => (
              <span key={item} className="px-3 py-1 border border-gray-700 text-xs text-gray-300 bg-black hover:border-green-500 hover:text-green-400 transition-colors">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Action Center (Resume / Contact) */}
        <div>
          <h3 className="text-lg text-white border-b border-gray-800 pb-2 mb-6 tracking-widest">
            // DIRECTIVES
          </h3>
          <div className="space-y-4">
            
            {/* Update this button with the onClick handler */}
            <button 
              onClick={() => setActiveSystem('resume')}
              className="w-full flex justify-between items-center px-4 py-3 border border-gray-700 bg-[#050505] hover:bg-green-900/20 hover:border-green-500 transition-all text-sm text-gray-200 group"
            >
              <span>VIEW_OPERATOR_PROFILE</span>
              <span className="text-gray-500 group-hover:text-green-500">→</span>
            </button>

            <button 
              onClick={() => setActiveSystem('contact')}
              className="w-full flex justify-between items-center px-4 py-3 border border-gray-700 bg-[#050505] hover:bg-blue-900/20 hover:border-blue-500 transition-all text-sm text-gray-200 group"
            >
              <span>INITIATE_CONTACT</span>
              <span className="text-gray-500 group-hover:text-blue-500">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div>
        <h3 className="text-lg text-white border-b border-gray-800 pb-2 mb-6 tracking-widest">
          // SYSTEM_TIMELINE
        </h3>
        <div className="space-y-6 text-sm">
          {[
            { year: '2026', focus: 'Concurrent Systems & Distributed Infrastructure' },
            { year: '2025', focus: 'Blockchain & Decentralized Ledgers' },
            { year: '2023', focus: 'Initiated Information Technology Architecture' }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="text-green-500 w-12">{item.year}</div>
              <div className="text-gray-500">_</div>
              <div className="text-gray-200">{item.focus}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;