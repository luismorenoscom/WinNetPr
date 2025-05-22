import React from "react";
import { X, Download, Printer, FileText } from "lucide-react";
import Button from "@/components/ui/button";

interface PDFViewerProps {
  file: {
    name: string;
    size: number;
  };
  onClose: () => void;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ file, onClose }) => {
  const handleDownload = () => {
    // lógica de descarga
  };

  const handlePrint = () => {
    // lógica de impresión
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
      <div className="relative w-full max-w-4xl h-[80vh] bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
        {/* Encabezado */}
        <div className="flex items-center justify-between px-6 py-4 border-b bg-gray-50">
          <h2 className="text-sm font-medium text-gray-700 truncate">{file.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Vista previa simulada */}
        <div className="flex-1 flex items-center justify-center p-6 bg-gray-100 text-center">
          <div>
            <FileText className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <p className="text-lg font-semibold">Vista previa del PDF</p>
            <p className="text-sm text-gray-500">
              {file.name} ({(file.size / 1024).toFixed(1)} KB)
            </p>
            <p className="text-xs text-gray-400 mt-6">
              Aquí irá el visor PDF integrado en el futuro.
            </p>

            {/* Botones */}
            <div className="mt-6 flex justify-center gap-3">
              <Button
                onClick={handleDownload}
                className="bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                <Download className="h-4 w-4 mr-1" />
                Descargar
              </Button>
              <Button
                onClick={handlePrint}
                className="bg-green-600 text-white hover:bg-green-700 transition"
              >
                <Printer className="h-4 w-4 mr-1" />
                Imprimir
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;
