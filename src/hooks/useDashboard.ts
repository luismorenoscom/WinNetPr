// src/hooks/useDashboard.ts
import { useState } from "react";

// Interfaz de archivo
interface File {
  id: string;
  name: string;
  size: string;
  date: string;
  url: string;
}

// Lógica para manejar el estado de los filtros y archivos
export const useDashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [sizeFilter, setSizeFilter] = useState("");
  const [filteredFiles, setFilteredFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const resetFilters = () => {
    setSearchTerm("");
    setDateFilter("");
    setSizeFilter("");
  };

  const handleViewFile = (file: File) => {
    console.log("Viewing file", file);
  };

  const handleDownloadFile = (file: File) => {
    console.log("Downloading file", file);
  };

  const handlePrintFile = (file: File) => {
    console.log("Printing file", file);
  };

  // Aquí podrías agregar la lógica para cargar los archivos según los filtros
  // Por ahora estamos dejando mock de archivos
  const mockFiles: File[] = [
    {
      id: "1",
      name: "Documento 1",
      size: "2MB",
      date: "2023-04-01",
      url: "/assets/documents/doc1.pdf",
    },
    {
      id: "2",
      name: "Documento 2",
      size: "1MB",
      date: "2023-04-02",
      url: "/assets/documents/doc2.pdf",
    },
    // Agregar más archivos según lo necesario
  ];

  return {
    selectedCategory,
    setSelectedCategory,
    viewMode,
    setViewMode,
    searchTerm,
    setSearchTerm,
    dateFilter,
    setDateFilter,
    sizeFilter,
    setSizeFilter,
    filteredFiles: mockFiles, // Aquí deberíamos aplicar filtros reales
    resetFilters,
    handleViewFile,
    handleDownloadFile,
    handlePrintFile,
    isLoading,
    error,
  };
};
