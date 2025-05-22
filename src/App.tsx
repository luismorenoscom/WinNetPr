import { Routes, Route } from "react-router-dom"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import ForgotPassword from "@/pages/ForgotPassword"
import Dashboard from "@/pages/Dashboard"
import CategoryBancaria from "@/pages/CategoryBancaria"
import CategoryEmpresa from "@/pages/CategoryEmpresa"
import CategoryHogar from "@/pages/CategoryHogar"
import CategoryFamilia from "@/pages/CategoryFamilia"
import EditProfile from "@/pages/EditProfile"
import UserManagement from "@/pages/UserManagement"
import NotFound from "@/pages/NotFound"
import RutaProtegida from "@/routes/RutaProtegida"

import FirebaseTest from "@/pages/FirebaseTest";
// ...
<Route path="/firebase-test" element={<FirebaseTest />} />


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* RUTAS PROTEGIDAS */}
      <Route
        path="/dashboard"
        element={
          <RutaProtegida>
            <Dashboard />
          </RutaProtegida>
        }
      />
      <Route
        path="/categoria-bancaria"
        element={
          <RutaProtegida>
            <CategoryBancaria />
          </RutaProtegida>
        }
      />
      <Route
        path="/categoria-empresa"
        element={
          <RutaProtegida>
            <CategoryEmpresa />
          </RutaProtegida>
        }
      />
      <Route
        path="/categoria-hogar"
        element={
          <RutaProtegida>
            <CategoryHogar />
          </RutaProtegida>
        }
      />
      <Route
        path="/categoria-familia"
        element={
          <RutaProtegida>
            <CategoryFamilia />
          </RutaProtegida>
        }
      />
      <Route
        path="/editar-perfil"
        element={
          <RutaProtegida>
            <EditProfile />
          </RutaProtegida>
        }
      />
      <Route
        path="/gestion-usuarios"
        element={
          <RutaProtegida>
            <UserManagement />
          </RutaProtegida>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
