import { create } from 'zustand';

const useAppStore = create((set) => ({
  // Navigation State
  activeSystem: null, // 'sanrakshan', 'vajra', 'verifind', 'seismic'
  
  // Easter Egg State
  crtMode: false,
  theme: 'scada', // defaults to scada, can switch to 'railway' or 'default'
  isTerminalOpen: false,

  // Actions
  setActiveSystem: (systemId) => set({ activeSystem: systemId }),
  toggleCrtMode: () => set((state) => ({ crtMode: !state.crtMode })),
  setTheme: (newTheme) => set({ theme: newTheme }),
  toggleTerminal: () => set((state) => ({ isTerminalOpen: !state.isTerminalOpen })),
}));

export default useAppStore;