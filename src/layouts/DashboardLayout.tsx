import { ReactNode, useState } from "react";
import AppHeader from "@/components/AppHeader";
import AppSidebar from "@/components/AppSidebar";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header con botón hamburguesa */}
      <AppHeader onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />

      <div className="flex flex-1 relative">
        {/* Sidebar responsive */}
        <AppSidebar
          isOpen={isSidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Contenido principal */}
        <main className="flex-1 p-4 sm:p-6 md:p-8">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
