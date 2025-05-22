type ViewToggleProps = {
    view: "grid" | "list";
    setView: (view: "grid" | "list") => void;
};
declare const ViewToggle: ({ view, setView }: ViewToggleProps) => import("react/jsx-runtime").JSX.Element;
export default ViewToggle;
