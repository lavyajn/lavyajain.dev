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
   media: {
      type: 'image', 
      url: '/assets/sanrakshan_demo.gif',
      orientation: 'landscape' 
    },
    metrics: { 
      category: 'Concurrent Simulation', 
      languages: 'C++17, JS', 
      threads: 'Live (std::thread)', 
      networking: 'WebSockets' 
    },
    overview: 'A real-time railway traffic control simulator modeling an operational network where multiple trains execute concurrently as independent threads competing for shared tracks.',
    links: { github: 'https://github.com/lavyajn/Sanrakshan-Centralized-Traffic-Control' },
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
    ],
      decisions: [
    {
      question: "Why std::try_lock() instead of std::lock() for track allocation?",
      answer:
        "A blocking lock would stall the train thread whenever a track segment was occupied, preventing timely decision making. Using try_lock() allows trains to immediately detect contention, attempt alternate routes, or wait safely without freezing the simulation, closely modeling real-world dispatch behavior."
    },
    {
      question: "Why WebSockets instead of REST for the dispatcher dashboard?",
      answer:
        "The control panel continuously streams train positions, signal states, and telemetry. Polling through REST would introduce unnecessary latency and network overhead. WebSockets provide persistent bidirectional communication, allowing the UI to receive updates instantly as the simulation evolves."
    },
    {
      question: "Why represent the railway as a graph?",
      answer:
        "A graph naturally models stations as vertices and tracks as weighted edges, enabling efficient route computation using Dijkstra's algorithm while supporting dynamic rerouting during track failures, wildlife restrictions, or emergency situations."
    },
    {
      question: "Why include a deliberate deadlock demonstration?",
      answer:
        "Rather than only preventing deadlocks, I wanted to visualize how they occur. The demonstration recreates circular wait conditions inspired by the Dining Philosophers problem, making operating system synchronization concepts observable in a real-time simulation."
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
   media: {
      type: 'image', // 'image' for gifs/pngs, 'video' for mp4s
      url: '/assets/vajra_demo.gif',
      orientation: 'landscape' // 'landscape' or 'portrait'
    },
    metrics: { 
      category: 'Digital Twin', 
      languages: 'C++, React', 
      messaging: 'ZeroMQ', 
      visualization: 'R3F' 
    },
    overview: 'A real-time cyber-physical digital twin simulating a smart electrical grid capable of predicting, visualizing, and mitigating ICS attacks before physical infrastructure fails.',
    links: { github: 'https://github.com/lavyajn/Vajra' },
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
    ],
      decisions: [
    {
      question: "Why build the simulation engine in C++ instead of JavaScript?",
      answer:
        "The simulation performs high-frequency updates involving graph traversal, load redistribution, and anomaly detection. C++ provides deterministic performance, predictable memory management, and lower execution overhead than a browser-based implementation."
    },
    {
      question: "Why use ZeroMQ between the C++ engine and the frontend?",
      answer:
        "ZeroMQ decouples the native simulation engine from the visualization layer while providing lightweight publish-subscribe messaging. This architecture allows the simulation to remain independent of the UI and simplifies future scaling or replacement of individual components."
    },
    {
      question: "Why create a digital twin instead of visualizing static data?",
      answer:
        "A digital twin enables infrastructure behavior to be simulated before failures occur. Rather than displaying historical telemetry, the system predicts cascading failures, evaluates attack impact, and visualizes defensive responses in real time."
    },
    {
      question: "Why model attacks instead of only detecting anomalies?",
      answer:
        "Understanding infrastructure resilience requires observing system behavior under realistic threats. Simulating false data injection, DDoS, and packet spoofing allowed defensive algorithms to be validated against repeatable attack scenarios."
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
    media: {
      type: 'image',
      url: '/assets/verifind_demo.gif',
      orientation: 'portrait'
    },
    metrics: { 
      category: 'Decentralized Ledger', 
      stack: 'React Native, Express', 
      contracts: 'Solidity (ERC-721)', 
      storage: 'IPFS, MongoDB' 
    },
    overview: 'A decentralized ownership verification platform creating an immutable history for electronic devices using blockchain infrastructure, QR verification, and IPFS storage.',
    links: { github: 'https://github.com/lavyajn/VeriFind' },
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
    ],
      decisions: [
    {
      question: "Why combine blockchain with MongoDB instead of using only blockchain?",
      answer:
        "Blockchain guarantees immutable ownership records but is inefficient for frequent application queries. MongoDB acts as an indexed cache for fast lookups while the blockchain remains the single source of truth for ownership verification."
    },
    {
      question: "Why implement gasless meta-transactions?",
      answer:
        "Most users should not need cryptocurrency simply to register or verify ownership. A relayer submits transactions on behalf of users, improving accessibility while preserving cryptographic security."
    },
    {
      question: "Why use ERC-721 instead of a centralized ownership database?",
      answer:
        "ERC-721 provides publicly verifiable, tamper-resistant ownership records that cannot be modified by a central authority. This creates a permanent ownership chain for every registered device."
    },
    {
      question: "Why store metadata on IPFS?",
      answer:
        "Device images and metadata are significantly larger than blockchain storage is designed to handle. IPFS provides decentralized content-addressed storage while only immutable hashes are referenced on-chain."
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
    media: {
      type: 'image',
      url: '/assets/seismic_demo.gif',
      orientation: 'landscape'
    },
    metrics: { 
      category: 'Geospatial Intelligence', 
      stack: 'React, Node.js', 
      renderer: 'Three.js (WebGL)', 
      data: 'Live USGS Stream' 
    },
    overview: 'A tactical 3D earthquake visualization platform transforming raw USGS seismic feeds into an interactive global command center rendered on a WebGL globe.',
    links: { github: 'https://github.com/lavyajn/seismic-visualizer' },
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
    ],
      decisions: [
    {
      question: "Why build a 3D globe instead of using a traditional map?",
      answer:
        "Earthquakes occur globally, and a flat map hides geographic context such as tectonic plate boundaries and antipodal activity. A 3D globe provides a more intuitive understanding of worldwide seismic patterns."
    },
    {
      question: "Why consume live USGS feeds instead of static datasets?",
      answer:
        "Real-time seismic events transform the application from a visualization tool into a live monitoring platform. Streaming current earthquake data better demonstrates handling of continuously updating external sources."
    },
    {
      question: "Why use React Three Fiber for visualization?",
      answer:
        "React Three Fiber combines the flexibility of Three.js with React's component model, making it easier to build interactive 3D interfaces while keeping rendering logic modular and maintainable."
    },
    {
      question: "Why focus on visualization instead of prediction?",
      answer:
        "Reliable earthquake prediction remains an open scientific challenge. The project's goal is to improve situational awareness by transforming raw seismic feeds into clear, interactive visualizations that help users understand ongoing activity."
    }
  ]
  }
};