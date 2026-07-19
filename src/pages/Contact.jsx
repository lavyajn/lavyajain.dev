import React, { useState } from 'react';
import useAppStore from '../store/useAppStore';

const Contact = () => {
  const { setActiveSystem } = useAppStore();
  const [transmitStatus, setTransmitStatus] = useState('IDLE'); 

  const handleTransmit = async (e) => {
    e.preventDefault();
    setTransmitStatus('SENDING');
    
    // Package the form data
    const formData = new FormData(e.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      // Execute the POST request to the mail gateway
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (res.ok) {
        setTransmitStatus('SUCCESS');
        e.target.reset(); // Clear the form on success
      } else {
        console.error("Transmission rejected by gateway.");
        setTransmitStatus('IDLE');
      }
    } catch (error) {
      console.error("Uplink failure:", error);
      setTransmitStatus('IDLE');
    }

    // Reset UI state after 3 seconds
    setTimeout(() => setTransmitStatus('IDLE'), 3000);
  };

  return (
    <div className="w-full max-w-2xl font-mono pb-20 animate-in fade-in duration-500">
      
      {/* Header & Controls */}
      <div className="flex justify-between items-end border-b border-gray-800 pb-6 mb-12 mt-8">
        <div>
          <h1 className="text-4xl font-serif text-white mb-2 uppercase tracking-wide">SECURE_COMMS</h1>
          <div className="text-sm text-blue-500 tracking-widest uppercase">Communication Uplink</div>
        </div>
        <div>
          <button 
            onClick={() => setActiveSystem(null)}
            className="px-4 py-2 text-xs border border-gray-800 hover:border-gray-500 text-gray-400 hover:text-white transition-colors"
          >
            [ DISCONNECT ]
          </button>
        </div>
      </div>

      {/* The Transmission Form */}
      <div className="bg-[#050505] border border-gray-800 p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        
        <div className="flex justify-between items-center border-b border-gray-800 pb-4 mb-6">
          <span className="text-xs text-gray-500 tracking-widest">TRANSMISSION_PROTOCOL_ACTIVE</span>
          <span className="text-xs text-blue-500 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            UPLINK_SECURE
          </span>
        </div>

        <form onSubmit={handleTransmit} className="space-y-6">
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs text-gray-500 tracking-widest block">IDENTIFIER (NAME)</label>
              <input 
                type="text" 
                name="name" // REQUIRED for formData
                required
                className="w-full bg-black border border-gray-800 text-gray-200 px-4 py-2 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Enter designation..."
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs text-gray-500 tracking-widest block">RETURN_VECTOR (EMAIL)</label>
              <input 
                type="email" 
                name="email" // REQUIRED for formData
                required
                className="w-full bg-black border border-gray-800 text-gray-200 px-4 py-2 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Enter return address..."
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs text-gray-500 tracking-widest block">PAYLOAD (MESSAGE)</label>
            <textarea 
              name="message" // REQUIRED for formData
              required
              rows={6}
              className="w-full bg-black border border-gray-800 text-gray-200 px-4 py-2 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              placeholder="Enter transmission data..."
            ></textarea>
          </div>

          <button 
            type="submit"
            disabled={transmitStatus !== 'IDLE'}
            className={`w-full py-3 text-sm tracking-widest border transition-all ${
              transmitStatus === 'SUCCESS' 
                ? 'bg-green-900/20 border-green-500 text-green-500' 
                : transmitStatus === 'SENDING'
                ? 'bg-blue-900/20 border-blue-500 text-blue-500'
                : 'bg-black border-gray-700 hover:border-blue-500 hover:bg-blue-900/10 text-gray-200'
            }`}
          >
            {transmitStatus === 'IDLE' && 'AUTHORIZE_TRANSMISSION'}
            {transmitStatus === 'SENDING' && 'ENCRYPTING_AND_ROUTING...'}
            {transmitStatus === 'SUCCESS' && 'PAYLOAD_DELIVERED'}
          </button>
          
        </form>
      </div>

      {/* Alternative Comm Vectors */}
      <div className="mt-12 flex justify-between text-xs text-gray-500 border-t border-gray-800 pt-6">
        <div>DIRECT: lavyajain.dev@gmail.com</div>
        <div className="flex gap-6">
          <a href="https://github.com/lavyajn" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">[ GITHUB ]</a>
          <a href="https://www.linkedin.com/in/lavya-jain-62b376386/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">[ LINKEDIN ]</a>
        </div>
      </div>

    </div>
  );
};

export default Contact;