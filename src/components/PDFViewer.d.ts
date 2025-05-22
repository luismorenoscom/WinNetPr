import React from "react";
interface PDFViewerProps {
    file: {
        name: string;
        size: number;
    };
    onClose: () => void;
}
declare const PDFViewer: React.FC<PDFViewerProps>;
export default PDFViewer;
