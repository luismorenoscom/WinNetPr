import { LayoutGrid, List } from "lucide-react"

type ViewToggleProps = {
  view: "grid" | "list"
  setView: (view: "grid" | "list") => void
}

const ViewToggle = ({ view, setView }: ViewToggleProps) => {
  return (
    <div className="inline-flex border rounded-md overflow-hidden shadow-sm">
      <button
        onClick={() => setView("grid")}
        className={`p-2 transition-all duration-200 ${
          view === "grid"
            ? "bg-[#0d6efd] text-white"
            : "bg-white hover:bg-gray-100 text-black"
        }`}
      >
        <LayoutGrid size={18} />
      </button>
      <button
        onClick={() => setView("list")}
        className={`p-2 transition-all duration-200 ${
          view === "list"
            ? "bg-[#0d6efd] text-white"
            : "bg-white hover:bg-gray-100 text-black"
        }`}
      >
        <List size={18} />
      </button>
    </div>
  )
}

export default ViewToggle
