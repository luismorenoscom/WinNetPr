// src/components/ui/sidebar.tsx
import React from "react";

interface SidebarProviderProps {
  children: React.ReactNode;
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  return <aside>{children}</aside>;
};
