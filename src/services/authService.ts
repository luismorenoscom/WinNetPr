export const fakeLogin = async (email: string, password: string): Promise<boolean> => {
  const storedUsers = localStorage.getItem("usuarios");

  if (!storedUsers) return false;

  try {
    const users = JSON.parse(storedUsers);

    const user = users.find(
      (u: any) =>
        u.email === email &&
        u.password === password &&
        (u.activo === true || u.estado === "Activo")
    );

    if (user) {
      localStorage.setItem("access_token", "mocked_token");
      localStorage.setItem("current_user", JSON.stringify(user)); // Guardar user para validación de rol
      return true;
    }

    return false;
  } catch (err) {
    console.error("Error parsing users from localStorage:", err);
    return false;
  }
};
