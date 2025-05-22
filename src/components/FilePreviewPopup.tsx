import { X, Download, Printer } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface FilePreviewPopupProps {
  isOpen: boolean;
  onClose: () => void;
  fileName: string;
  fileSize: string;
  fileUrl: string;
}

const FilePreviewPopup = ({
  isOpen,
  onClose,
  fileName,
  fileSize,
  fileUrl,
}: FilePreviewPopupProps) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  };

  const handlePrint = () => {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = fileUrl;
    document.body.appendChild(iframe);
    iframe.onload = () => {
      iframe.contentWindow?.print();
    };
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full h-[80vh] p-6">
        {/* Encabezado */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold">{fileName}</h2>
            <p className="text-sm text-muted-foreground">{fileSize}</p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={handleDownload}
              className="bg-blue-100 text-blue-800 text-sm px-4 py-2 rounded-md flex items-center gap-1"
            >
              <Download size={16} /> Descargar
            </button>
            <button
              onClick={handlePrint}
              className="bg-gray-100 text-gray-800 text-sm px-4 py-2 rounded-md flex items-center gap-1"
            >
              <Printer size={16} /> Imprimir
            </button>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-800 ml-2"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Vista previa del PDF */}
        <div className="h-full border rounded-md overflow-hidden">
          <iframe
            src={fileUrl}
            title="Vista previa PDF"
            className="w-full h-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FilePreviewPopup;
