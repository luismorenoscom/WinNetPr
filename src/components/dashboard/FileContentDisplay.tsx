// src/components/dashboard/FileContentDisplay.tsx
import { Eye, Download, Printer } from "lucide-react";

interface Document {
  name: string;
  date: string;
  size: string;
}

interface FileContentDisplayProps {
  documents: Document[];
  view: "grid" | "list"; // 👈 agrega esta línea
  onPreview: (archivo: Document) => void;
  onDownload: (archivo: Document) => void;
  onPrint: (archivo: Document) => void;
}


const FileContentDisplay = ({ documents }: FileContentDisplayProps) => {
  return (
    <div className="bg-white shadow-sm border rounded-lg overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-200 border-b text-left text-gray-700">
          <tr>
            <th className="px-4 py-3 font-medium">Nombre</th>
            <th className="px-4 py-3 font-medium">Fecha</th>
            <th className="px-4 py-3 font-medium">Tamaño</th>
            <th className="px-4 py-3 font-medium text-center">Acciones</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {documents.map((doc, index) => (
            <tr key={index} className="hover:bg-muted/30 transition-colors">
              <td className="px-4 py-3 font-medium">{doc.name}</td>
              <td className="px-4 py-3">{doc.date}</td>
              <td className="px-4 py-3">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                  {doc.size}
                </span>
              </td>
              <td className="px-4 py-3 text-center space-x-2">
                <button className="text-gray-600 hover:text-blue-600">
                  <Eye size={16} />
                </button>
                <button className="text-gray-600 hover:text-green-600">
                  <Download size={16} />
                </button>
                <button className="text-gray-600 hover:text-gray-800">
                  <Printer size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FileContentDisplay;
