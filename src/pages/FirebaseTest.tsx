// src/pages/FirebaseTest.tsx
import { useEffect } from "react";
import { db, storage } from "@/lib/firebase";

export default function FirebaseTest() {
  useEffect(() => {
    console.log("🔥 Firebase Storage:", storage);
    console.log("📘 Firebase Firestore:", db);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Prueba de Firebase</h1>
      <p>Revisa la consola para ver si Firebase está funcionando correctamente.</p>
    </div>
  );
}
