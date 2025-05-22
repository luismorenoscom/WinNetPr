// src/components/user/UserModal.tsx
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  initialData?: Partial<UserData>;
  onSubmit?: (data: UserData) => void;
  mode?: "create" | "edit";
}

interface UserData {
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

export default function UserModal({
  isOpen,
  onClose,
  initialData = {},
  onSubmit,
  mode = "create",
}: Props) {
  const [formData, setFormData] = useState<UserData>({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    rol: "Administrador Regular",
    activo: true,
    plan: "",
    ultimoPago: "",
    password: "",
  });

  const currentUser = JSON.parse(localStorage.getItem("current_user") || "null");
  const currentRole = currentUser?.rol;

  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({ ...prev, ...initialData }));
    }
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
    onClose();
  };

  const isEditing = mode === "edit";

  const availableRoles = () => {
    if (currentRole === "Super Administrador") {
      return ["Super Administrador", "Administrador", "Administrador Regular"];
    }
    if (currentRole === "Administrador") {
      return ["Administrador", "Administrador Regular"];
    }
    return [];
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md w-full rounded-lg shadow-xl bg-white">
        <DialogHeader className="text-left">
          <DialogTitle className="text-lg font-semibold">
            {isEditing ? "Editar Usuario" : "Crear Nuevo Usuario"}
          </DialogTitle>
        </DialogHeader>

        <form className="space-y-4 mt-2" onSubmit={handleSubmit}>
          <input
            name="nombre"
            placeholder="Nombre Completo"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
          />
          <input
            name="email"
            placeholder="Correo Electrónico"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            disabled={isEditing}
          />
          <input
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
          />
          <input
            name="empresa"
            placeholder="Empresa"
            value={formData.empresa}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password || ""}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
          />

          {availableRoles().length > 0 && (
            <select
              name="rol"
              value={formData.rol}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md"
            >
              {availableRoles().map((rol) => (
                <option key={rol} value={rol}>
                  {rol}
                </option>
              ))}
            </select>
          )}

          <div className="flex items-center space-x-2">
            <label className="text-sm">Estado del usuario</label>
            <input
              type="checkbox"
              checked={formData.activo}
              onChange={() =>
                setFormData((prev) => ({ ...prev, activo: !prev.activo }))
              }
            />
            <span className="text-sm">
              {formData.activo ? "Activo" : "Inactivo"}
            </span>
          </div>

          <select
            name="plan"
            value={formData.plan}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
          >
            <option value="">Seleccionar plan</option>
            <option value="mensual">Mensual</option>
            <option value="anual">Anual</option>
          </select>

          <input
            type="date"
            name="ultimoPago"
            value={formData.ultimoPago}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
          />

          <div className="flex justify-end space-x-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md border"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            >
              {isEditing ? "Guardar Cambios" : "Crear Usuario"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
