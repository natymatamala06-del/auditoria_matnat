export default function Controles() {
  const controles = [
    {
      vulnerabilidad: "SQL Injection",
      activo: "Base de Datos de Clientes",
      politica:
        "Todas las consultas a bases de datos deben realizarse mediante mecanismos seguros que impidan la manipulación de instrucciones SQL.",
      medidas: [
        "Utilizar consultas parametrizadas",
        "Validar entradas de usuario",
        "Aplicar principio de mínimo privilegio",
        "Monitorear consultas sospechosas",
        "Realizar pruebas periódicas de seguridad",
      ],
    },
    {
      vulnerabilidad: "Cross-Site Scripting (XSS)",
      activo: "Portal Web de Clientes",
      politica:
        "Toda información ingresada por usuarios debe ser validada y sanitizada antes de ser procesada o mostrada.",
      medidas: [
        "Sanitizar entradas de usuario",
        "Escapar caracteres especiales",
        "Implementar Content Security Policy (CSP)",
        "Validar formularios en cliente y servidor",
        "Mantener actualizadas las librerías",
      ],
    },
    {
      vulnerabilidad: "Command Injection",
      activo: "Servidor Principal",
      politica:
        "Se prohíbe la ejecución directa de comandos del sistema utilizando entradas proporcionadas por usuarios.",
      medidas: [
        "Validar estrictamente los datos de entrada",
        "Utilizar listas blancas de caracteres permitidos",
        "Evitar funciones que ejecuten comandos del sistema",
        "Aplicar principio de mínimo privilegio",
        "Implementar monitoreo y registros de seguridad",
      ],
    },
    {
      vulnerabilidad: "Protección de Información Sensible",
      activo: "Escrituras, Poderes y Datos Personales",
      politica:
        "La información crítica debe mantenerse protegida contra accesos no autorizados, pérdida o alteración.",
      medidas: [
        "Cifrar información sensible",
        "Mantener respaldos periódicos",
        "Proteger certificados digitales",
        "Controlar accesos según roles",
        "Aplicar autenticación multifactor",
      ],
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Políticas de Prevención y Controles de Mitigación</h1>

      {controles.map((c, index) => (
        <div
          key={index}
          style={{
            marginBottom: "25px",
            padding: "20px",
            borderRadius: "12px",
            border: "1px solid #475569",
          }}
        >
          <h2>{c.vulnerabilidad}</h2>

          <p>
            <strong>Activo afectado:</strong> {c.activo}
          </p>

          <p>
            <strong>Política de prevención:</strong> {c.politica}
          </p>

          <h3>Controles de mitigación</h3>

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
