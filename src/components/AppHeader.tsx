import { useState } from "react";
import { Menu, UserCircle2, X } from "lucide-react";

type AppHeaderProps = {
  onToggleSidebar: () => void;
};

const AppHeader = ({ onToggleSidebar }: AppHeaderProps) => {
  const [showProfileModal, setShowProfileModal] = useState(false);

  const handleToggleProfile = () => {
    setShowProfileModal(!showProfileModal);
  };

  const closeProfileModal = () => {
    setShowProfileModal(false);
  };

  return (
    <header className="bg-white border-b shadow-sm px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <button onClick={onToggleSidebar} className="md:hidden">
          <Menu size={24} />
        </button>
        <img
          src="/assets/images/logo-winnet.png"
          alt="WinNet Logo"
          className="h-10 w-auto"
        />
      </div>

      <button
        onClick={handleToggleProfile}
        className="flex items-center space-x-2 text-sm hover:text-blue-600 transition"
      >
        <UserCircle2 size={20} />
        <span>Mi cuenta</span>
      </button>

      {showProfileModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-semibold">Editar Perfil</h2>
              <button
                onClick={closeProfileModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nombre completo"
                className="w-full border px-4 py-2 rounded-md"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full border px-4 py-2 rounded-md"
              />
              <input
                type="password"
                placeholder="Nueva contraseña"
                className="w-full border px-4 py-2 rounded-md"
              />
              <input
                type="password"
                placeholder="Confirmar contraseña"
                className="w-full border px-4 py-2 rounded-md"
              />
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={closeProfileModal}
                  className="px-4 py-2 border rounded hover:bg-gray-100"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Guardar Cambios
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default AppHeader;
