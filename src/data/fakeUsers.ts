// src/data/fakeUsers.ts

export interface Usuario {
  nombre: string;
  email: string;
  telefono: string;
  empresa: string;
  rol: string;
  activo: boolean;
  plan: string;
  ultimoPago: string;
  password?: string;
}

export const usuariosMock: Usuario[] = [
  {
    nombre: "Luis Moreno",
    email: "Lms@luismorenos.com",
    telefono: "1234567890",
    empresa: "Winnet",
    rol: "Super Administrador",
    activo: true,
    plan: "anual",
    ultimoPago: "2025-05-16",
    password: "Luis102030",
  }
];
