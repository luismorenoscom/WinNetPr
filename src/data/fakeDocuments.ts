export interface Documento {
  nombre: string;
  fecha: string;
  tamaño: string;
  ruta: string;
}

export const documentosBase: Documento[] = [
  {
    nombre: "Resumen Bancario Mensual.pdf",
    fecha: "2024-03-02",
    tamaño: "310 KB",
    ruta: "/assets/pruebas.pdf",
  },
  {
    nombre: "Comprobante de Pago de Crédito.pdf",
    fecha: "2024-03-15",
    tamaño: "225 KB",
    ruta: "/assets/pruebas.pdf",
  },
  {
    nombre: "Recibo de Transferencia SWIFT.pdf",
    fecha: "2024-04-03",
    tamaño: "210 KB",
    ruta: "/assets/pruebas.pdf",
  },
  {
    nombre: "Extracto de Cuenta Corriente.pdf",
    fecha: "2024-04-04",
    tamaño: "260 KB",
    ruta: "/assets/pruebas.pdf",
  },
];
