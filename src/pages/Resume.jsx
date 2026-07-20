import React from 'react';
import useAppStore from '../store/useAppStore';

const Resume = () => {
  const { setActiveSystem } = useAppStore();

  return (
    <div className="w-full max-w-4xl font-mono pb-20 animate-in fade-in duration-500">
      
      {/* Header & Controls */}
      <div className="flex justify-between items-end border-b border-gray-800 pb-6 mb-12 mt-8">
        <div>
          <h1 className="text-4xl font-serif text-white mb-2 uppercase tracking-wide">LAVYA JAIN</h1>
          <div className="text-sm text-green-500 tracking-widest uppercase">Systems Engineer</div>
        </div>
        <div className="flex gap-4">
          {/* Back Button */}
          <button 
            onClick={() => setActiveSystem(null)}
            className="px-4 py-2 text-xs border border-gray-800 hover:border-gray-500 text-gray-400 hover:text-white transition-colors"
          >
            [ RETURN ]
          </button>
          {/* Download PDF Action */}
          <a 
            href="./assets/Lavya_Resume_July_26_.pdf" 
            download
            className="px-4 py-2 text-xs border border-green-900 bg-green-900/20 hover:bg-green-900/40 text-green-500 transition-colors flex items-center gap-2"
          >
            DOWNLOAD_PDF <span className="animate-bounce">↓</span>
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-12 text-sm">
        
        {/* Left Column: Education & Skills */}
        <div className="md:col-span-1 space-y-12">
          
          <section>
            <h2 className="text-white tracking-widest mb-4 border-b border-gray-800 pb-2">// EDUCATION</h2>
            <div className="mb-6">
              <div className="text-gray-200 font-bold mb-1">Dr. D.Y. Patil Institute of Technology</div>
              <div className="text-gray-400 text-xs mb-2">B.E Information Technology (Aug 2023 - July 2027)</div>
              <div className="text-green-500 text-xs">CGPA: 8.14/10</div>
            </div>
          </section>

          <section>
            <h2 className="text-white tracking-widest mb-4 border-b border-gray-800 pb-2">// TECHNICAL_SKILLS</h2>
            <div className="space-y-4">
              <div>
                <div className="text-gray-500 text-xs mb-1">LANGUAGES</div>
                <div className="text-gray-200">C++, JavaScript, TypeScript, Java, SQL</div>
              </div>
              <div>
                <div className="text-gray-500 text-xs mb-1">FRAMEWORKS</div>
                <div className="text-gray-200">React, Node.js, Three.js, Crow, Solidity</div>
              </div>
              <div>
                <div className="text-gray-500 text-xs mb-1">CORE</div>
                <div className="text-gray-200">Data Structures & Algorithms, OS, Multithreading, Concurrent Programming</div>
              </div>
            </div>
          </section>

        </div>

        {/* Right Column: Experience / Projects */}
        <div className="md:col-span-2 space-y-12">
          
          <section>
            <h2 className="text-white tracking-widest mb-4 border-b border-gray-800 pb-2">// SYSTEM_ARCHITECTURES</h2>
            
            <div className="mb-8">
              <div className="flex justify-between items-start mb-2">
                <div className="text-gray-200 font-bold text-base">Sanrakshan CTC</div>
                <div className="text-green-500 text-xs">Jan 2026 - Mar 2026</div>
              </div>
              <div className="text-gray-500 text-xs mb-3">C++17, Crow, WebSockets, JavaScript</div>
              <ul className="list-none space-y-2 text-gray-400">
                <li><span className="text-green-500 mr-2">►</span>Engineered a multithreaded railway traffic simulator utilizing std::thread and mutex-protected shared tracks.</li>
                <li><span className="text-green-500 mr-2">►</span>Implemented collision avoidance using try_lock(), eliminating hold-and-wait deadlocks.</li>
              </ul>
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-start mb-2">
                <div className="text-gray-200 font-bold text-base">VAJRA</div>
                <div className="text-green-500 text-xs">Mar 2026 - Apr 2026</div>
              </div>
              <div className="text-gray-500 text-xs mb-3">C++, React, Three.js, ZeroMQ</div>
              <ul className="list-none space-y-2 text-gray-400">
                <li><span className="text-green-500 mr-2">►</span>Architected a cyber-physical grid simulator modeling electrical load propagation and cascading failures.</li>
                <li><span className="text-green-500 mr-2">►</span>Developed a ZeroMQ-to-WebSocket bridge for sub-second C++ backend to React frontend telemetry.</li>
              </ul>
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-start mb-2">
                <div className="text-gray-200 font-bold text-base">VeriFind</div>
                <div className="text-green-500 text-xs">Aug 2025 - Feb 2026</div>
              </div>
              <div className="text-gray-500 text-xs mb-3">React Native, Node.js, Solidity, IPFS</div>
              <ul className="list-none space-y-2 text-gray-400">
                <li><span className="text-green-500 mr-2">►</span>Designed a blockchain ownership verification platform using ERC-721 smart contracts.</li>
                <li><span className="text-green-500 mr-2">►</span>Implemented a gasless meta-transaction relayer for cryptographic asset verification without holding crypto.</li>
              </ul>
            </div>
            
          </section>

        </div>
      </div>
    </div>
  );
};

export default Resume;