import { useState } from "react";

export default function Recuperacion() {
  const [estado, setEstado] = useState("Sistema estable");
  const [logs, setLogs] = useState([]);

  const restaurarApp = () => {
    setEstado("Restaurando App.jsx...");
    setLogs((prev) => [...prev, "🔄 App.jsx restaurada a versión estable"]);
  };

  const restaurarXss = () => {
    setEstado("Corrigiendo XSS...");
    setLogs((prev) => [
      ...prev,
      "🛡️ xss.jsx reemplazado por versión sanitizada",
    ]);
  };

  const restaurarSQL = () => {
    setEstado("Corrigiendo inyección...");
    setLogs((prev) => [
      ...prev,
      "🔧 inyeccionSQL.jsx validado y corregido",
    ]);
  };

  const resetSistema = () => {
    setEstado("Sistema estable");
    setLogs((prev) => [...prev, "♻️ Sistema restaurado completamente"]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Recuperación del Sistema (MatNat)</h2>

      <p><strong>Estado:</strong> {estado}</p>

      <div style={{ marginBottom: "15px" }}>
        <button onClick={restaurarApp}>Restaurar App</button>
        <button onClick={restaurarXss}>Corregir XSS</button>
        <button onClick={restaurarSQL}>Corregir SQL</button>
        <button onClick={resetSistema}>Reset completo</button>
      </div>

      <div
        style={{
          backgroundColor: "#111",
          color: "#0f0",
          padding: "15px",
          minHeight: "200px",
          fontFamily: "monospace",
        }}
      >
        {logs.map((log, index) => (
          <div key={index}>{log}</div>
        ))}
      </div>
    </div>
  );
}