interface DashboardFiltersProps {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
    dateFilter: string;
    setDateFilter: (value: string) => void;
    sizeFilter: string;
    setSizeFilter: (value: string) => void;
    resetFilters: () => void;
}
export declare const DashboardFilters: ({ searchTerm, setSearchTerm, dateFilter, setDateFilter, sizeFilter, setSizeFilter, resetFilters, }: DashboardFiltersProps) => import("react/jsx-runtime").JSX.Element;
export default DashboardFilters;
