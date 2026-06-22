export default function Prompts() {
  const prompts = [
    {
      categoria: "Definición de la Empresa y Activos",
      items: [
        "Crea una empresa ficticia para una auditoría de seguridad informática",
        "Genera activos críticos para una notaría digital",
        "Identifica información sensible administrada por una notaría",
        "Ejemplos de activos de información para una organización legal",
      ],
    },
    {
      categoria: "Análisis de Vulnerabilidades",
      items: [
        "Explica cómo funciona una vulnerabilidad SQL Injection",
        "Explica una vulnerabilidad XSS Reflected",
        "Cómo funciona una vulnerabilidad Command Injection",
        "Qué impacto tendría una vulnerabilidad SQL Injection en una base de datos de clientes",
        "Cómo documentar una vulnerabilidad según una auditoría de seguridad",
      ],
    },
    {
      categoria: "Gestión de Riesgos",
      items: [
        "Cómo construir una matriz de riesgos de probabilidad e impacto",
        "Ejemplo de mapa de calor para una auditoría de seguridad",
        "Cómo clasificar riesgos en niveles Bajo, Medio, Alto y Crítico",
        "Ejemplos de riesgos para una notaría digital",
      ],
    },
    {
      categoria: "Políticas y Controles de Seguridad",
      items: [
        "Qué controles mitigan SQL Injection",
        "Qué controles mitigan XSS",
        "Qué controles mitigan Command Injection",
        "Ejemplos de políticas de prevención para una organización",
        "Cómo redactar controles de mitigación para una auditoría",
      ],
    },
    {
      categoria: "Recuperación y Continuidad Operacional",
      items: [
        "Cómo elaborar un Plan de Recuperación ante Desastres (DR)",
        "Ejemplos de mejora tecnológica para fortalecer la seguridad",
        "Qué debe incluir un plan de continuidad operacional",
        "Cómo proteger información crítica en una notaría",
      ],
    },
    {
      categoria: "Desarrollo de la Aplicación React",
      items: [
        "Crear un componente React para mostrar una matriz de riesgos",
        "Generar un componente para mostrar activos de información",
        "Crear una vista de controles y mitigaciones",
        "Mejorar el diseño CSS de una aplicación React",
        "Cómo estructurar una aplicación React para una auditoría",
      ],
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Bitácora de Uso de Inteligencia Artificial</h1>

      {prompts.map((grupo, index) => (
        <div
          key={index}
          style={{
            marginBottom: "20px",
            border: "1px solid #475569",
            borderRadius: "12px",
            padding: "20px",
          }}
        >
          <h2>{grupo.categoria}</h2>

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