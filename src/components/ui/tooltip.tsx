// src/components/ui/tooltip.tsx
import React, { createContext, ReactNode, useContext } from "react";

interface TooltipProviderProps {
  children: ReactNode;
}

const TooltipContext = createContext({});

export const useTooltip = () => useContext(TooltipContext);

export const TooltipProvider: React.FC<TooltipProviderProps> = ({ children }) => {
  // Placeholder: You can expand with actual tooltip logic later
  return <TooltipContext.Provider value={{}}>{children}</TooltipContext.Provider>;
};
