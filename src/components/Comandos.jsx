import { useState } from "react";

export default function Comandos() {
  const [logs, setLogs] = useState([]);

  const ejecutarComando = (comando) => {
    let resultado = "";

    switch (comando) {
      case "npm install":
        resultado = "📦 Dependencias instaladas correctamente.";
        break;

      case "npm run dev":
        resultado = "🚀 Servidor de desarrollo iniciado en http://localhost:5173";
        break;

      case "npm run build":
        resultado = "🏗️ Build generado exitosamente.";
        break;

      case "npm run lint":
        resultado = "🧹 Análisis completado. Sin errores críticos.";
        break;

      default:
        resultado = "⚠️ Comando no reconocido.";
    }

    setLogs([...logs, { comando, resultado }]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Terminal de Comandos (MatNat)</h2>

      <div style={{ marginBottom: "15px" }}>
        <button onClick={() => ejecutarComando("npm install")}>
          npm install
        </button>

        <button onClick={() => ejecutarComando("npm run dev")}>
          npm run dev
        </button>

        <button onClick={() => ejecutarComando("npm run build")}>
          npm run build
        </button>

        <button onClick={() => ejecutarComando("npm run lint")}>
          npm run lint
        </button>
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
          <div key={index}>
            <div>$ {log.comando}</div>
            <div>{log.resultado}</div>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
