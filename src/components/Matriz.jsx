export default function Matriz() {
  const riesgos = [
    {
      activo: "Base de Datos de Clientes",
      vulnerabilidad: "SQL Injection",
      impacto: "Alto",
      probabilidad: "Alta",
      riesgo: "Crítico",
    },
    {
      activo: "Portal Web de Clientes",
      vulnerabilidad: "XSS Reflected",
      impacto: "Medio",
      probabilidad: "Alta",
      riesgo: "Alto",
    },
    {
      activo: "Servidor Principal",
      vulnerabilidad: "Command Injection",
      impacto: "Alto",
      probabilidad: "Alta",
      riesgo: "Crítico",
    },
    {
      activo: "Escrituras Públicas",
      vulnerabilidad: "Acceso no autorizado",
      impacto: "Alto",
      probabilidad: "Media",
      riesgo: "Alto",
    },
    {
      activo: "Datos Personales de Clientes",
      vulnerabilidad: "Fuga de información",
      impacto: "Alto",
      probabilidad: "Alta",
      riesgo: "Crítico",
    },
    {
      activo: "Certificados Digitales",
      vulnerabilidad: "Robo de credenciales",
      impacto: "Alto",
      probabilidad: "Media",
      riesgo: "Alto",
    },
    {
      activo: "Sistema de Gestión Notarial",
      vulnerabilidad: "Manipulación de registros",
      impacto: "Alto",
      probabilidad: "Media",
      riesgo: "Alto",
    },
  ];

  const getRiskClass = (riesgo) => {
    switch (riesgo) {
      case "Crítico":
        return "riesgo-critico";
      case "Alto":
        return "riesgo-alto";
      case "Medio":
        return "riesgo-medio";
      default:
        return "riesgo-bajo";
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Matriz de Riesgos</h1>

      <table>
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
              <td className={getRiskClass(r.riesgo)}>
                {r.riesgo}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{ marginTop: "30px" }}>
        Mapa de Calor (Probabilidad × Impacto)
      </h2>

      <table>
        <thead>
          <tr>
            <th>Impacto / Probabilidad</th>
            <th>Baja</th>
            <th>Media</th>
            <th>Alta</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td><strong>Alto</strong></td>
            <td className="riesgo-medio">Medio</td>
            <td className="riesgo-alto">Alto</td>
            <td className="riesgo-critico">Crítico</td>
          </tr>

          <tr>
            <td><strong>Medio</strong></td>
            <td className="riesgo-bajo">Bajo</td>
            <td className="riesgo-medio">Medio</td>
            <td className="riesgo-alto">Alto</td>
          </tr>

          <tr>
            <td><strong>Bajo</strong></td>
            <td className="riesgo-bajo">Bajo</td>
            <td className="riesgo-bajo">Bajo</td>
            <td className="riesgo-medio">Medio</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
