import React from "react";
import { toast } from "sonner";

export const Toaster: React.FC = () => {
  return <div id="toaster" />;
};

// Optional helper function
export const showToast = (message: string) => {
  toast(message);
};
