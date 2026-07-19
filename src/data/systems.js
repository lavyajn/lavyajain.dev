export const systemsData = {
  sanrakshan: {
    id: 'sanrakshan',
    name: 'SANRAKSHAN',
    tagline: 'Concurrent Railway Traffic Control',
    status: 'OPERATIONAL',
    color: 'text-green-500',
    border: 'border-green-500',
    bg: 'bg-green-500',
    hoverBg: 'hover:bg-green-900/30',
    mediaPath: './assets/sanrakshan_demo.gif', // Put your GIF in public/assets/
    metrics: { 
      category: 'Concurrent Simulation', 
      languages: 'C++17, JS', 
      threads: 'Live (std::thread)', 
      networking: 'WebSockets' 
    },
    overview: 'A real-time railway traffic control simulator modeling an operational network where multiple trains execute concurrently as independent threads competing for shared tracks.',
    links: { github: 'https://github.com/yourusername/SANRAKSHAN' },
    engineering: [
      { 
        title: 'Thread Synchronization', 
        content: 'Track segments behave as shared OS resources protected by std::mutex and non-blocking try_lock() to ensure collision-free execution and prevent hold-and-wait deadlocks.' 
      },
      { 
        title: 'Dynamic Graph Routing', 
        content: 'Utilizes Dijkstra\'s algorithm to compute shortest paths and dynamically recalculates alternate routes in real-time during simulated track failures.' 
      },
      { 
        title: 'Event-Driven Engine', 
        content: 'A Crow C++ server manages routing, scheduling, and telemetry updates, broadcasting the live system state to a persistent WebSocket dashboard.' 
      }
    ]
  },
  vajra: {
    id: 'vajra',
    name: 'VAJRA',
    tagline: 'Cyber-Physical Grid Defense',
    status: 'OPERATIONAL',
    color: 'text-blue-500',
    border: 'border-blue-500',
    bg: 'bg-blue-500',
    hoverBg: 'hover:bg-blue-900/30',
    mediaPath: '/assets/vajra_demo.gif',
    metrics: { 
      category: 'Digital Twin', 
      languages: 'C++, React', 
      messaging: 'ZeroMQ', 
      visualization: 'R3F' 
    },
    overview: 'A real-time cyber-physical digital twin simulating a smart electrical grid capable of predicting, visualizing, and mitigating ICS attacks before physical infrastructure fails.',
    links: { github: 'https://github.com/yourusername/Vajra' },
    engineering: [
      { 
        title: 'Deterministic Physics Engine', 
        content: 'High-frequency C++ simulation modeling electrical load, packet flow, capacity thresholds, and cascading failures without JavaScript approximations.' 
      },
      { 
        title: 'Predictive Defense Pipeline', 
        content: 'Analyzes load derivative (dL/dt) combined with trust scoring and packet analysis to automatically isolate malicious activity before equipment failure occurs.' 
      },
      { 
        title: 'ZeroMQ Telemetry Bridge', 
        content: 'Custom Node.js bridge translating native C++ JSON telemetry to browser WebSockets, achieving sub-100ms communication latency to the 3D command center.' 
      }
    ]
  },
  verifind: {
    id: 'verifind',
    name: 'VERIFIND',
    tagline: 'Blockchain Asset Verification',
    status: 'OPERATIONAL',
    color: 'text-purple-500',
    border: 'border-purple-500',
    bg: 'bg-purple-500',
    hoverBg: 'hover:bg-purple-900/30',
    mediaPath: '/assets/verifind_demo.gif',
    metrics: { 
      category: 'Decentralized Ledger', 
      stack: 'React Native, Express', 
      contracts: 'Solidity (ERC-721)', 
      storage: 'IPFS, MongoDB' 
    },
    overview: 'A decentralized ownership verification platform creating an immutable history for electronic devices using blockchain infrastructure, QR verification, and IPFS storage.',
    links: { github: 'https://github.com/yourusername/verifind' },
    engineering: [
      { 
        title: 'Gasless Meta-Transactions', 
        content: 'Implemented a relayer allowing users to interact with blockchain assets and execute ownership transfers without holding cryptocurrency.' 
      },
      { 
        title: 'Hybrid State Architecture', 
        content: 'Ownership state is maintained by strict Solidity smart contracts while MongoDB serves as a high-speed cache for immediate application queries.' 
      },
      { 
        title: 'Cryptographic Validation', 
        content: 'Restricts sensitive actions, including transfers and BOLO (Be On Look Out) alerts, exclusively to the wallet cryptographically linked to the registered device.' 
      }
    ]
  },
  seismic: {
    id: 'seismic',
    name: 'SEISMIC.NET',
    tagline: 'Global Seismic Intelligence',
    status: 'OPERATIONAL',
    color: 'text-orange-500',
    border: 'border-orange-500',
    bg: 'bg-orange-500',
    hoverBg: 'hover:bg-orange-900/30',
    mediaPath: '/assets/seismic_demo.gif',
    metrics: { 
      category: 'Geospatial Intelligence', 
      stack: 'React, Node.js', 
      renderer: 'Three.js (WebGL)', 
      data: 'Live USGS Stream' 
    },
    overview: 'A tactical 3D earthquake visualization platform transforming raw USGS seismic feeds into an interactive global command center rendered on a WebGL globe.',
    links: { github: 'https://github.com/yourusername/seismic.net' },
    engineering: [
      { 
        title: 'Real-Time Data Pipeline', 
        content: 'Consumes live USGS earthquake feeds, processes thousands of seismic events, and pipes them via WebSockets directly to the rendering client.' 
      },
      { 
        title: '3D Coordinate Conversion', 
        content: 'Translates standard latitude and longitude data streams into 3D Cartesian coordinates for mathematically accurate plotting on a spherical mesh.' 
      },
      { 
        title: 'Tactical Rendering Engine', 
        content: 'Features magnitude-based color gradients, depth visualization, and temporal timeline playback executed through smooth WebGL camera orbit controls.' 
      }
    ]
  }
};