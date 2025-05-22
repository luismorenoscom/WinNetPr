import AppHeader from "@/components/AppHeader";
import AppSidebar from "@/components/AppSidebar";
import { Pencil, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import UserModal from "@/components/user/UserModal";
import { usuariosMock, Usuario } from "@/data/fakeUsers";

const UserManagement = () => {
  const [users, setUsers] = useState<Usuario[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<Usuario | null>(null);

  const currentUser = JSON.parse(localStorage.getItem("current_user") || "null");
  const currentRole = currentUser?.rol;

  // Cargar usuarios desde localStorage y filtrar según el rol
  useEffect(() => {
    const storedUsers = localStorage.getItem("usuarios");

    if (!storedUsers) {
      localStorage.setItem("usuarios", JSON.stringify(usuariosMock));
      setUsers(usuariosMock);
      return;
    }

    const allUsers = JSON.parse(storedUsers);

    let visibleUsers: Usuario[] = [];

    if (currentRole === "Super Administrador") {
      visibleUsers = allUsers;
    } else if (currentRole === "Administrador") {
      visibleUsers = allUsers.filter(
        (u: Usuario) =>
          u.rol !== "Super Administrador" || u.email === currentUser.email
      );
    } else if (currentRole === "Administrador Regular") {
      visibleUsers = allUsers.filter(
        (u: Usuario) => u.email === currentUser.email
      );
    }

    setUsers(visibleUsers);
  }, []);

  const saveToLocalStorage = (updated: Usuario[]) => {
    localStorage.setItem("usuarios", JSON.stringify(updated));
  };

  const openCreateModal = () => {
    setSelectedUser(null);
    setModalOpen(true);
  };

  const openEditModal = (user: Usuario) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  const handleSaveUser = (data: Usuario) => {
    const allUsers = JSON.parse(localStorage.getItem("usuarios") || "[]");

    let updatedUsers: Usuario[] = [];

    if (selectedUser) {
      // Editar usuario
      updatedUsers = allUsers.map((u: Usuario) =>
        u.email === selectedUser.email ? { ...u, ...data } : u
      );
    } else {
      // Validar máximo 3 super admin
      if (data.rol === "Super Administrador") {
        const superAdmins = allUsers.filter((u: Usuario) => u.rol === "Super Administrador");
        if (superAdmins.length >= 3) {
          alert("Solo se permiten 3 Super Administradores.");
          return;
        }
      }

      updatedUsers = [...allUsers, data];
    }

    saveToLocalStorage(updatedUsers);

    const filtered = updatedUsers.filter((u: Usuario) =>
      currentRole === "Super Administrador"
        ? true
        : currentRole === "Administrador"
        ? u.rol !== "Super Administrador" || u.email === currentUser.email
        : u.email === currentUser.email
    );

    setUsers(filtered);
    setModalOpen(false);
  };

  const handleDelete = (email: string) => {
    const allUsers = JSON.parse(localStorage.getItem("usuarios") || "[]");
    const userToDelete = allUsers.find((u: Usuario) => u.email === email);

    if (!userToDelete) return;

    if (userToDelete.rol === "Super Administrador") {
      alert("No puedes eliminar a un Super Administrador.");
      return;
    }

    const confirmDelete = confirm("¿Estás seguro de eliminar este usuario?");
    if (!confirmDelete) return;

    const updated = allUsers.filter((u: Usuario) => u.email !== email);
    saveToLocalStorage(updated);

    const filtered = updated.filter((u: Usuario) =>
      currentRole === "Super Administrador"
        ? true
        : currentRole === "Administrador"
        ? u.rol !== "Super Administrador" || u.email === currentUser.email
        : u.email === currentUser.email
    );

    setUsers(filtered);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <AppHeader />
      <div className="flex flex-1 overflow-hidden">
        <AppSidebar />
        <main className="flex-1 p-6 overflow-auto bg-white">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold">Gestión de Usuarios</h1>
            {currentRole !== "Administrador Regular" && (
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                onClick={openCreateModal}
              >
                + Crear Usuario
              </button>
            )}
          </div>

          <div className="overflow-x-auto rounded-lg border">
            <table className="min-w-full text-sm table-auto">
              <thead className="bg-gray-100 border-b text-left">
                <tr>
                  <th className="px-4 py-3">Nombre</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Rol</th>
                  <th className="px-4 py-3">Estado</th>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Último Pago</th>
                  <th className="px-4 py-3">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3">{user.nombre}</td>
                    <td className="px-4 py-3">{user.email}</td>
                    <td className="px-4 py-3">{user.rol}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          user.activo
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        {user.activo ? "Activo" : "Inactivo"}
                      </span>
                    </td>
                    <td className="px-4 py-3">{user.plan}</td>
                    <td className="px-4 py-3">{user.ultimoPago}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-3 text-gray-600">
                        <button onClick={() => openEditModal(user)}>
                          <Pencil size={16} />
                        </button>
                        {user.rol !== "Super Administrador" && (
                          <button onClick={() => handleDelete(user.email)}>
                            <Trash2 size={16} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>

      <UserModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialData={selectedUser || {}}
        onSubmit={handleSaveUser}
      />
    </div>
  );
};

export default UserManagement;
