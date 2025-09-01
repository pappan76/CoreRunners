import React from "react";

interface CardProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="p-4 rounded shadow bg-white">
      {children}
    </div>
  );
};
