interface Document {
    name: string;
    date: string;
    size: string;
}
interface FileContentDisplayProps {
    documents: Document[];
}
declare const FileContentDisplay: ({ documents }: FileContentDisplayProps) => import("react/jsx-runtime").JSX.Element;
export default FileContentDisplay;
