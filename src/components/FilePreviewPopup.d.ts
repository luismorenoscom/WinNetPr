interface FilePreviewPopupProps {
    isOpen: boolean;
    onClose: () => void;
    fileName: string;
    fileSize: string;
    fileUrl: string;
}
declare const FilePreviewPopup: ({ isOpen, onClose, fileName, fileSize, fileUrl, }: FilePreviewPopupProps) => import("react/jsx-runtime").JSX.Element;
export default FilePreviewPopup;
