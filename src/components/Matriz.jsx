export default function Matriz() {
  const riesgos = [
    {
      activo: "xss.jsx",
      vulnerabilidad: "XSS (DOM / innerHTML)",
      impacto: "Alto",
      probabilidad: "Alta",
      riesgo: "Alto",
    },
    {
      activo: "inyeccionSQL.jsx",
      vulnerabilidad: "Inyección de datos (simulada)",
      impacto: "Alto",
      probabilidad: "Media",
      riesgo: "Alto",
    },
    {
      activo: "comandos.jsx",
      vulnerabilidad: "Simulación de ejecución de comandos",
      impacto: "Medio",
      probabilidad: "Baja",
      riesgo: "Bajo",
    },
    {
      activo: "App.jsx",
      vulnerabilidad: "Integración general",
      impacto: "Medio",
      probabilidad: "Baja",
      riesgo: "Bajo",
    },
    {
      activo: "public/xss.png",
      vulnerabilidad: "Recurso estático",
      impacto: "Bajo",
      probabilidad: "Baja",
      riesgo: "Bajo",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Matriz de Riesgos (MatNat)</h2>

      <table border="1" cellPadding="10" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Activo</th>
            <th>Vulnerabilidad</th>
            <th>Impacto</th>
            <th>Probabilidad</th>
            <th>Riesgo</th>
          </tr>
        </thead>

        <tbody>
          {riesgos.map((r, index) => (
            <tr key={index}>
              <td>{r.activo}</td>
              <td>{r.vulnerabilidad}</td>
              <td>{r.impacto}</td>
              <td>{r.probabilidad}</td>
              <td>{r.riesgo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
