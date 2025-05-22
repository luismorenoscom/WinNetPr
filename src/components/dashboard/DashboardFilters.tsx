import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button";

interface DashboardFiltersProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  dateFilter: string;
  setDateFilter: (value: string) => void;
  sizeFilter: string;
  setSizeFilter: (value: string) => void;
  resetFilters: () => void;
}

export const DashboardFilters = ({
  searchTerm,
  setSearchTerm,
  dateFilter,
  setDateFilter,
  sizeFilter,
  setSizeFilter,
  resetFilters,
}: DashboardFiltersProps) => {
  return (
    <div className="flex flex-wrap items-end gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-200">
      <div className="flex flex-col w-full md:w-1/3">
        <label className="text-sm text-gray-600 mb-1">Buscar</label>
        <Input
          type="text"
          placeholder="Buscar documentos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 rounded-lg border-gray-300"
        />
      </div>

      <div className="flex flex-col w-full md:w-1/4">
        <label className="text-sm text-gray-600 mb-1">Fecha</label>
        <Input
          type="date"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
          className="px-4 py-2 rounded-lg border-gray-300"
        />
      </div>

      <div className="flex flex-col w-full md:w-1/4">
        <label className="text-sm text-gray-600 mb-1">Tamaño</label>
        <Input
          type="text"
          placeholder="Filtrar por tamaño..."
          value={sizeFilter}
          onChange={(e) => setSizeFilter(e.target.value)}
          className="px-4 py-2 rounded-lg border-gray-300"
        />
      </div>

      <div className="flex items-center">
        <Button
          type="button"
          variant="outline"
          onClick={resetFilters}
          className="mt-6 px-5 py-2 rounded-lg border-gray-300 hover:bg-neutral-100"
        >
          Restablecer
        </Button>
      </div>
    </div>
  );
};

export default DashboardFilters;
