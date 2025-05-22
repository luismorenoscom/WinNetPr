import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button";
import { fakeLogin } from "@/services/authService";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const success = await fakeLogin(email, password);
    if (success) {
      navigate("/categoria-bancaria");
    } else {
      setErrorMsg("Credenciales inválidas. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Imagen - lado izquierdo */}
      <div className="w-1/2 hidden lg:block">
        <img
          src="/assets/images/login-preview.png"
          alt="Login Background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Formulario */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6">
        <div className="max-w-md w-full space-y-6">
          <img
            src="/assets/images/logo-winnet.png"
            alt="Logo"
            className="h-20 mx-auto"
          />

          <div className="text-center">
            <h2 className="text-2xl font-bold">Iniciar sesión en tu cuenta</h2>
            <p className="text-sm text-gray-500">
              ¡Bienvenido de nuevo! Ingresa tus datos.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {errorMsg && (
              <p className="text-sm text-red-500 text-center">{errorMsg}</p>
            )}

            <Button type="submit" className="w-full bg-blue-600 text-white">
              Iniciar sesión
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
