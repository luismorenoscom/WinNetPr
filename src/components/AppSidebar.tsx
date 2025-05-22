import { Link, useLocation, useNavigate } from "react-router-dom";
import { Home, Building, Users, LogOut, X, Settings } from "lucide-react";

interface AppSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppSidebar = ({ isOpen, onClose }: AppSidebarProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("current_user") || "null");
  const rol = currentUser?.rol;

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("current_user");
    navigate("/login");
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed z-50 top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 md:relative md:translate-x-0 md:z-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b md:hidden">
          <h2 className="text-lg font-semibold">Menú</h2>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <nav className="p-4">
          <div className="mb-4">
            <p className="text-xs font-semibold text-gray-500 uppercase mb-2">
              Categorías
            </p>
            <ul className="space-y-1">
              {[
                { path: "/categoria-bancaria", label: "Bancaria", icon: Home },
                { path: "/categoria-empresa", label: "Empresa", icon: Building },
                { path: "/categoria-hogar", label: "Hogar", icon: Home },
                { path: "/categoria-familia", label: "Familia", icon: Users },
              ].map(({ path, label, icon: Icon }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium ${
                      isActive(path)
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon size={16} />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase mb-2">
              Administración
            </p>
            <ul className="space-y-1">
              {rol !== "Administrador Regular" && (
                <li>
                  <Link
                    to="/gestion-usuarios"
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium ${
                      isActive("/gestion-usuarios")
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Users size={16} />
                    Gestión de Usuarios
                  </Link>
                </li>
              )}
              <li>
                <Link
                  to="/editar-perfil"
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium ${
                    isActive("/editar-perfil")
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Settings size={16} />
                  Editar Perfil
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  <LogOut size={16} />
                  Cerrar sesión
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default AppSidebar;
