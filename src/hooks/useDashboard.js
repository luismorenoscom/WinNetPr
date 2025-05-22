"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDashboard = void 0;
// src/hooks/useDashboard.ts
var react_1 = require("react");
// Lógica para manejar el estado de los filtros y archivos
var useDashboard = function () {
    var _a = (0, react_1.useState)(1), selectedCategory = _a[0], setSelectedCategory = _a[1];
    var _b = (0, react_1.useState)("list"), viewMode = _b[0], setViewMode = _b[1];
    var _c = (0, react_1.useState)(""), searchTerm = _c[0], setSearchTerm = _c[1];
    var _d = (0, react_1.useState)(""), dateFilter = _d[0], setDateFilter = _d[1];
    var _e = (0, react_1.useState)(""), sizeFilter = _e[0], setSizeFilter = _e[1];
    var _f = (0, react_1.useState)([]), filteredFiles = _f[0], setFilteredFiles = _f[1];
    var _g = (0, react_1.useState)(false), isLoading = _g[0], setIsLoading = _g[1];
    var _h = (0, react_1.useState)(null), error = _h[0], setError = _h[1];
    var resetFilters = function () {
        setSearchTerm("");
        setDateFilter("");
        setSizeFilter("");
    };
    var handleViewFile = function (file) {
        console.log("Viewing file", file);
    };
    var handleDownloadFile = function (file) {
        console.log("Downloading file", file);
    };
    var handlePrintFile = function (file) {
        console.log("Printing file", file);
    };
    // Aquí podrías agregar la lógica para cargar los archivos según los filtros
    // Por ahora estamos dejando mock de archivos
    var mockFiles = [
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
        selectedCategory: selectedCategory,
        setSelectedCategory: setSelectedCategory,
        viewMode: viewMode,
        setViewMode: setViewMode,
        searchTerm: searchTerm,
        setSearchTerm: setSearchTerm,
        dateFilter: dateFilter,
        setDateFilter: setDateFilter,
        sizeFilter: sizeFilter,
        setSizeFilter: setSizeFilter,
        filteredFiles: mockFiles, // Aquí deberíamos aplicar filtros reales
        resetFilters: resetFilters,
        handleViewFile: handleViewFile,
        handleDownloadFile: handleDownloadFile,
        handlePrintFile: handlePrintFile,
        isLoading: isLoading,
        error: error,
    };
};
exports.useDashboard = useDashboard;
