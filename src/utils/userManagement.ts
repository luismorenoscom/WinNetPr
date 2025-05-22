export const getUserByEmail = (email: string) => {
    const users = [
      { email: "admin@example.com", name: "Admin", role: "admin", active: true },
      { email: "user@example.com", name: "User", role: "user", active: true },
    ];
    return users.find(user => user.email === email);
  };
  