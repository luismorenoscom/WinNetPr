import { useState } from "react";
import AppHeader from "@/components/AppHeader";
import AppSidebar from "@/components/AppSidebar";
import DashboardFilters from "@/components/dashboard/DashboardFilters";
import ViewToggle from "@/components/dashboard/ViewToggle";
import FileContentDisplay from "@/components/dashboard/FileContentDisplay";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [sizeFilter, setSizeFilter] = useState("");
  const [view, setView] = useState<"grid" | "list">("list");

  const archivos = [
    { nombre: "Informe Mensual.pdf", tamaño: "2.0 KB", fecha: "2024-03-01" },
    { nombre: "Contrato Empresa.pdf", tamaño: "1.0 KB", fecha: "2024-03-10" },
    { nombre: "Presupuesto.xlsx", tamaño: "0.5 KB", fecha: "2024-04-01" },
    { nombre: "Reporte Financiero.docx", tamaño: "1.8 KB", fecha: "2024-02-20" },
  ];

  const resetFilters = () => {
    setSearchTerm("");
    setDateFilter("");
    setSizeFilter("");
  };

  const filteredArchivos = archivos.filter((archivo) => {
    return (
      archivo.nombre.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!dateFilter || archivo.fecha === dateFilter) &&
      (!sizeFilter || archivo.tamaño === sizeFilter)
    );
  });

  const handlePreview = (archivo: any) => console.log("Ver", archivo);
  const handleDownload = (archivo: any) => console.log("Descargar", archivo);
  const handlePrint = (archivo: any) => console.log("Imprimir", archivo);

  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />

      <div className="flex flex-1 relative">
        <AppSidebar
          isOpen={isSidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="flex-1 p-4 sm:p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-semibold">Gestor de Documentos</h1>
            <ViewToggle view={view} setView={setView} />
          </div>

          <DashboardFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            dateFilter={dateFilter}
            setDateFilter={setDateFilter}
            sizeFilter={sizeFilter}
            setSizeFilter={setSizeFilter}
            resetFilters={resetFilters}
          />

          <div className="mt-6">
            <FileContentDisplay
              documents={filteredArchivos.map((archivo) => ({
                name: archivo.nombre,
                size: archivo.tamaño,
                date: archivo.fecha,
              }))}
              view={view}
              onPreview={handlePreview}
              onDownload={handleDownload}
              onPrint={handlePrint}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
