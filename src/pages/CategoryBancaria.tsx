import AppHeader from "@/components/AppHeader";
import AppSidebar from "@/components/AppSidebar";
import { Eye, Download, Printer, LayoutGrid, List, X } from "lucide-react";
import { useState } from "react";
import { Worker, Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { useSidebarContext } from "@/context/sidebar-context";
import { documentosBase } from "@/data/fakeDocuments";

interface Documento {
  nombre: string;
  fecha: string;
  tamaño: string;
  ruta: string;
}

const CategoryBancaria = () => {
  const [isGridView, setIsGridView] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<Documento | null>(null);
  const [sortedDocs, setSortedDocs] = useState<Documento[]>(documentosBase);
  const [sortBy, setSortBy] = useState<keyof Documento | null>(null);
  const [sortAsc, setSortAsc] = useState(true);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const { isSidebarOpen } = useSidebarContext();

  const openPreview = (doc: Documento) => setSelectedDoc(doc);
  const closePreview = () => setSelectedDoc(null);

  const printPDF = () => {
    const iframe = document.createElement("iframe");
    iframe.src = "/assets/pruebas.pdf";
    iframe.style.display = "none";
    iframe.onload = () => {
      setTimeout(() => iframe.contentWindow?.print(), 100);
    };
    document.body.appendChild(iframe);
  };

  const sortDocuments = (key: keyof Documento) => {
    const isAsc = sortBy === key ? !sortAsc : true;
    const sorted = [...sortedDocs].sort((a, b) =>
      isAsc ? a[key].localeCompare(b[key]) : b[key].localeCompare(a[key])
    );
    setSortedDocs(sorted);
    setSortBy(key);
    setSortAsc(isAsc);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <AppHeader />
      <div className="flex flex-1 overflow-hidden">
        <AppSidebar />
        <main className="flex-1 p-6 overflow-auto relative">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold">Bancaria</h1>
            <div className="flex space-x-2">
              <button
                className="p-2 border rounded-md hover:bg-gray-100"
                onClick={() => setIsGridView(false)}
              >
                <List className={`w-4 h-4 ${!isGridView ? "" : "text-gray-400"}`} />
              </button>
              <button
                className="p-2 border rounded-md hover:bg-gray-100"
                onClick={() => setIsGridView(true)}
              >
                <LayoutGrid className={`w-4 h-4 ${isGridView ? "" : "text-gray-400"}`} />
              </button>
            </div>
          </div>

          {/* Filtros */}
          <div className="bg-white rounded-lg p-4 shadow-sm border mb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Buscar</label>
                <input
                  type="text"
                  placeholder="Buscar documentos..."
                  className="border rounded-md px-4 py-2 w-full"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Fecha</label>
                <input type="date" className="border rounded-md px-4 py-2 w-full" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Tamaño</label>
                <input
                  type="text"
                  placeholder="Filtrar por tamaño..."
                  className="border rounded-md px-4 py-2 w-full"
                />
              </div>
              <div>
                <button className="bg-gray-100 border text-gray-800 px-4 py-2 rounded-md w-full hover:bg-gray-200 transition">
                  Restablecer
                </button>
              </div>
            </div>
          </div>

          {/* Tabla */}
          {!isGridView ? (
            <div className="bg-white rounded-lg shadow-sm border overflow-x-auto">
              <table className="min-w-full text-sm table-fixed">
                <thead className="bg-gray-200 border-b text-left">
                  <tr>
                    <th
                      onClick={() => sortDocuments("nombre")}
                      className="px-4 py-3 font-medium text-gray-700 cursor-pointer w-[35%]"
                    >
                      Nombre {sortBy === "nombre" ? (sortAsc ? "↑" : "↓") : ""}
                    </th>
                    <th
                      onClick={() => sortDocuments("fecha")}
                      className="px-4 py-3 font-medium text-gray-700 cursor-pointer w-[20%]"
                    >
                      Fecha {sortBy === "fecha" ? (sortAsc ? "↑" : "↓") : ""}
                    </th>
                    <th
                      onClick={() => sortDocuments("tamaño")}
                      className="px-4 py-3 font-medium text-gray-700 cursor-pointer w-[20%]"
                    >
                      Tamaño {sortBy === "tamaño" ? (sortAsc ? "↑" : "↓") : ""}
                    </th>
                    <th className="px-4 py-3 font-medium text-gray-700 text-center w-[25%]">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {sortedDocs.map((doc, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-medium w-[35%]">{doc.nombre}</td>
                      <td className="px-4 py-3 w-[20%]">{doc.fecha}</td>
                      <td className="px-4 py-3 w-[20%]">
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full whitespace-nowrap">
                          {doc.tamaño}
                        </span>
                      </td>
                      <td className="px-4 py-3 w-[25%]">
                        <div className="flex justify-center items-center gap-3">
                          <button onClick={() => openPreview(doc)} className="text-gray-600 hover:text-blue-600">
                            <Eye size={16} />
                          </button>
                          <a href={doc.ruta} download className="text-gray-600 hover:text-green-600">
                            <Download size={16} />
                          </a>
                          <button onClick={printPDF} className="text-gray-600 hover:text-gray-800">
                            <Printer size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center text-gray-400 text-sm mt-6">
              Modo grid desactivado temporalmente.
            </p>
          )}

          {/* Modal visor PDF */}
          {selectedDoc && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
              <div className="bg-white rounded-lg shadow-lg w-full max-w-5xl h-[90%] flex flex-col p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="font-semibold text-sm">{selectedDoc.nombre}</p>
                    <p className="text-xs text-gray-500">{selectedDoc.tamaño}</p>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <a
                      href={selectedDoc.ruta}
                      download
                      className="px-3 py-1 text-sm border rounded hover:bg-gray-100 flex items-center gap-1"
                    >
                      <Download size={14} /> Descargar
                    </a>
                    <button
                      onClick={printPDF}
                      className="px-3 py-1 text-sm border rounded hover:bg-gray-100 flex items-center gap-1"
                    >
                      <Printer size={14} /> Imprimir
                    </button>
                    <button onClick={closePreview} className="text-gray-400 hover:text-gray-600">
                      <X size={18} />
                    </button>
                  </div>
                </div>
                <div className="flex-1 overflow-hidden rounded border">
                  <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">

                    <Viewer
                      fileUrl={selectedDoc.ruta}
                      defaultScale={SpecialZoomLevel.PageFit}
                      plugins={[defaultLayoutPluginInstance]}
                    />
                  </Worker>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default CategoryBancaria;
