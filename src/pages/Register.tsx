import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import Button from "@/components/ui/button";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Lado izquierdo - Imagen */}
      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/images/login-preview.png')`,
        }}
      ></div>

      {/* Lado derecho - Formulario */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-4 py-8 sm:px-8">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="text-center">
            <img
              src="/assets/images/logo-winnet.png"
              alt="WINNET logo"
              className="h-16 sm:h-20 mx-auto mb-2"
            />
          </div>

          {/* Título */}
          <div className="text-center">
            <h1 className="text-2xl font-bold">Regístrate en tu cuenta</h1>
            <p className="text-gray-600 mt-2">
              ¡Bienvenido! Ingresa tus datos para continuar.
            </p>
          </div>

          {/* Formulario sin bordes */}
          <Card className="!border-none !shadow-none !rounded-none bg-transparent">
            <CardContent className="p-0 !rounded-none">
              <form className="space-y-4">
                {/* Nombre de usuario */}
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre de usuario</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <User className="h-4 w-4 text-gray-400" />
                    </div>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Nombre de usuario"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                {/* Correo electrónico */}
                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Mail className="h-4 w-4 text-gray-400" />
                    </div>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Correo electrónico"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                {/* Contraseña */}
                <div className="space-y-2">
                  <Label htmlFor="password">Contraseña</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Lock className="h-4 w-4 text-gray-400" />
                    </div>
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="********"
                      className="pl-10"
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center pr-3"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Indicador contraseña */}
                <p className="text-xs text-gray-500">
                  La contraseña debe tener al menos 8 caracteres.
                </p>

                {/* Términos y condiciones */}
                <div className="flex items-start">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded mt-1"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                  />
                  <label
                    htmlFor="terms"
                    className="ml-2 text-sm text-gray-600 leading-tight"
                  >
                    Al crear una cuenta aceptas los{" "}
                    <span className="text-primary font-medium cursor-pointer">
                      Términos y condiciones
                    </span>{" "}
                    y nuestra{" "}
                    <span className="text-primary font-medium cursor-pointer">
                      Política de privacidad.
                    </span>
                  </label>
                </div>

                {/* Botón de registro */}
                <Button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600"
                  disabled={!agreeTerms}
                >
                  Registrarse
                </Button>

                {/* Link a login */}
                <div className="text-center text-sm">
                  <span className="text-gray-600">
                    ¿Ya tienes una cuenta?{" "}
                  </span>
                  <Link
                    to="/login"
                    className="text-primary hover:underline font-medium"
                  >
                    Inicia sesión
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Register;
