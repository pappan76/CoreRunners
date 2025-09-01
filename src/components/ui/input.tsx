import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      {...props}
      className={`border border-gray-300 p-2 rounded w-full ${props.className || ""}`}
    />
  );
};
