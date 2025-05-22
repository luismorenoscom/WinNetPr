interface File {
    id: string;
    name: string;
    size: string;
    date: string;
    url: string;
}
export declare const useDashboard: () => {
    selectedCategory: number;
    setSelectedCategory: import("react").Dispatch<import("react").SetStateAction<number>>;
    viewMode: "list" | "grid";
    setViewMode: import("react").Dispatch<import("react").SetStateAction<"list" | "grid">>;
    searchTerm: string;
    setSearchTerm: import("react").Dispatch<import("react").SetStateAction<string>>;
    dateFilter: string;
    setDateFilter: import("react").Dispatch<import("react").SetStateAction<string>>;
    sizeFilter: string;
    setSizeFilter: import("react").Dispatch<import("react").SetStateAction<string>>;
    filteredFiles: File[];
    resetFilters: () => void;
    handleViewFile: (file: File) => void;
    handleDownloadFile: (file: File) => void;
    handlePrintFile: (file: File) => void;
    isLoading: boolean;
    error: string | null;
};
export {};
