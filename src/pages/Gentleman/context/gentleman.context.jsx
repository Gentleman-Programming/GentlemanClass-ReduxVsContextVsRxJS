import { createContext, useContext, useState } from 'react';

export const GentlemanContext = createContext();

export const GentlemanProvider = ({ children }) => {
  const [gentlemanContextValue, setGentlemanContextValue] = useState('');
  return <GentlemanContext.Provider value={{ gentlemanContextValue, setGentlemanContextValue }}>{children}</GentlemanContext.Provider>;
};

export const useGentlemanContext = () => {
  const context = useContext(GentlemanContext);
  if (context === undefined) {
    throw new Error('GentlemanContext must be used within a GentlemanProvider');
  }
  return context;
};
