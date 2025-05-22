import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import Button from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Recuperación enviada a:", email);
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

          {/* Título y descripción */}
          <div className="text-center">
            <h1 className="text-2xl font-bold">¿Olvidaste tu contraseña?</h1>
            <p className="text-gray-600 mt-2">
              Ingresa el correo electrónico asociado a tu cuenta y te
              enviaremos un enlace para restablecer tu contraseña.
            </p>
          </div>

          {/* Formulario sin bordes */}
          <Card className="!border-none !shadow-none !rounded-none bg-transparent">
            <CardContent className="p-0 !rounded-none">
              <form onSubmit={handleSubmit} className="space-y-4">
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600"
                >
                  Continuar
                </Button>

                {/* Link a login */}
                <div className="text-center text-sm">
                  <span className="text-gray-600">¿Ya tienes una cuenta? </span>
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

export default ForgotPassword;
