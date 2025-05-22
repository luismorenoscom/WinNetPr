import { Navigate } from "react-router-dom";
import { JSX } from "react";


type RutaProtegidaProps = {
  children: JSX.Element;
};

export default function RutaProtegida({ children }: RutaProtegidaProps) {
  const token = localStorage.getItem("access_token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
