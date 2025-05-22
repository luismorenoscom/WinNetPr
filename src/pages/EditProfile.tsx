import { useEffect, useState } from "react";
import AppHeader from "@/components/AppHeader";
import AppSidebar from "@/components/AppSidebar";

interface PerfilData {
  nombre: string;
  apellido: string;
  email: string;
  telefono?: string;
  rol: string;
}

const EditProfile = () => {
  const [formData, setFormData] = useState<PerfilData>({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    rol: "",
  });

  const [isSaving, setIsSaving] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("current_user") || "null");
    if (currentUser) {
      setFormData({
        nombre: currentUser.nombre || "",
        apellido: currentUser.apellido || "",
        email: currentUser.email || "",
        telefono: currentUser.telefono || "",
        rol: currentUser.rol || "",
      });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    const allUsers = JSON.parse(localStorage.getItem("usuarios") || "[]");
    const updatedUsers = allUsers.map((u: any) =>
      u.email === formData.email ? { ...u, ...formData } : u
    );

    localStorage.setItem("usuarios", JSON.stringify(updatedUsers));
    localStorage.setItem("current_user", JSON.stringify(formData));

    setTimeout(() => {
      alert("Perfil actualizado correctamente.");
      setIsSaving(false);
    }, 500);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <AppHeader onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
      <div className="flex flex-1 overflow-hidden">
        <AppSidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="flex-1 p-6 overflow-auto bg-white">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow border">
            <h1 className="text-2xl font-bold text-center mb-4">Configuración de Perfil</h1>

            <div className="text-center mb-6">
              <h2 className="text-lg font-semibold">Información Personal</h2>
              <p className="text-sm text-gray-500">
                Actualiza tu información de perfil y configuración de cuenta.
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Apellidos</label>
                  <input
                    type="text"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Correo Electrónico</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  disabled
                  className="w-full px-3 py-2 border rounded-md bg-gray-100"
                />
              </div>

              {formData.rol !== "Super Administrador" && (
                <div>
                  <label className="block text-sm font-medium mb-1">Teléfono</label>
                  <input
                    type="text"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-1">Rol de Usuario</label>
                <div className="bg-gray-100 p-4 rounded-md text-center">
                  <p className="font-medium">{formData.rol}</p>
                  <p className="text-xs text-gray-500">
                    Este rol determina tus permisos en el sistema y no puede ser modificado.
                  </p>
                </div>
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  disabled={isSaving}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  {isSaving ? "Guardando..." : "Guardar Cambios"}
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EditProfile;
