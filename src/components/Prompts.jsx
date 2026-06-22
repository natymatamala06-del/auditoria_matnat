export default function Prompts() {
  const prompts = [
    {
      categoria: "Creación de componentes React",
      items: [
        "Crea un componente React que simule una vulnerabilidad XSS usando dangerouslySetInnerHTML",
        "Haz un componente que muestre una matriz de riesgos en una tabla",
        "Genera un panel visual de controles de seguridad en React",
        "Crea una simulación de terminal con comandos como npm run dev",
      ],
    },
    {
      categoria: "Seguridad y auditoría",
      items: [
        "Explica cómo funciona una inyección XSS en frontend",
        "Qué controles se pueden aplicar para mitigar XSS",
        "Cómo documentar una vulnerabilidad en un informe de auditoría",
        "Ejemplo de matriz de riesgos para un sistema web",
      ],
    },
    {
      categoria: "Documentación del proyecto",
      items: [
        "Crea un informe en Markdown de activos de un sistema",
        "Genera un plan de recuperación de sistema en formato auditoría",
        "Cómo estructurar un informe de seguridad en desarrollo web",
      ],
    },
    {
      categoria: "Soporte técnico",
      items: [
        "Cómo usar dangerouslySetInnerHTML en React",
        "Dónde guardar imágenes en un proyecto Vite + React",
        "Cómo hacer commits en Git correctamente",
      ],
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Registro de Prompts (MatNat)</h2>

      {prompts.map((grupo, index) => (
        <div
          key={index}
          style={{
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "15px",
          }}
        >
          <h3>{grupo.categoria}</h3>

          <ul>
            {grupo.items.map((prompt, i) => (
              <li key={i}>{prompt}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}