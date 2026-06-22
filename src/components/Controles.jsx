export default function Controles() {
  const controles = [
    {
      vulnerabilidad: "XSS (DOM / innerHTML)",
      activo: "xss.jsx",
      medidas: [
        "Sanitizar entradas con DOMPurify",
        "Evitar dangerouslySetInnerHTML",
        "Escapar caracteres especiales",
      ],
    },
    {
      vulnerabilidad: "Inyección de datos (simulada SQL)",
      activo: "inyeccionSQL.jsx",
      medidas: [
        "Consultas parametrizadas",
        "Validación estricta de inputs",
        "Uso de ORM seguro",
      ],
    },
    {
      vulnerabilidad: "Ejecución simulada de comandos",
      activo: "comandos.jsx",
      medidas: [
        "Whitelist de comandos permitidos",
        "Evitar ejecución dinámica",
        "Separación de lógica UI/backend",
      ],
    },
    {
      vulnerabilidad: "Seguridad general",
      activo: "App.jsx",
      medidas: [
        "Modularización del sistema",
        "Validación global de entradas",
        "Manejo centralizado de errores",
      ],
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Controles de Seguridad (MatNat)</h2>

      {controles.map((c, index) => (
        <div
          key={index}
          style={{
            marginBottom: "20px",
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "8px",
          }}
        >
          <h3>{c.vulnerabilidad}</h3>
          <p><strong>Activo:</strong> {c.activo}</p>

          <ul>
            {c.medidas.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
