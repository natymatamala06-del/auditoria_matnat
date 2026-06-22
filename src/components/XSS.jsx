import { useState } from "react";

export default function Xss() {
  const [input, setInput] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [vulnerable, setVulnerable] = useState(false);

  const enviar = () => {
    setMensaje(input);

    // Detecta posibles patrones de XSS (modo demo académico)
    const sospechoso =
      input.includes("<script") ||
      input.includes("onerror") ||
      input.includes("onload") ||
      input.includes("javascript:");

    setVulnerable(sospechoso);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Demo XSS</h2>

      <img
        src="/xss.png"
        alt="Ejemplo de XSS"
        style={{ width: "300px", marginBottom: "15px" }}
      />

      <input
        type="text"
        placeholder="Escribe algo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={enviar}>Enviar</button>

      {/* 🚨 ALERTA VISUAL */}
      {vulnerable && (
        <div
          style={{
            marginTop: "15px",
            padding: "10px",
            backgroundColor: "red",
            color: "white",
            fontWeight: "bold",
            borderRadius: "5px",
          }}
        >
          ⚠️ VULNERABLE A XSS DETECTADO
        </div>
      )}

      <div
        style={{
          marginTop: "20px",
          border: "1px solid black",
          padding: "10px",
        }}
        dangerouslySetInnerHTML={{ __html: mensaje }}
      />
    </div>
  );
}
