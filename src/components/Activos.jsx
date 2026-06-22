export default function Activos() {
  const activos = [
    {
      nombre: "Escrituras Públicas",
      tipo: "Información",
      descripcion:
        "Documentos legales que acreditan actos y contratos celebrados ante notario.",
    },
    {
      nombre: "Poderes Notariales",
      tipo: "Información",
      descripcion:
        "Documentos que otorgan representación legal a personas o empresas.",
    },
    {
      nombre: "Datos Personales de Clientes",
      tipo: "Información",
      descripcion:
        "Información sensible de clientes, incluyendo identificación y datos de contacto.",
    },
    {
      nombre: "Sistema de Gestión Notarial",
      tipo: "Software",
      descripcion:
        "Aplicación utilizada para administrar trámites y documentos notariales.",
    },
    {
      nombre: "Base de Datos",
      tipo: "Información",
      descripcion:
        "Repositorio que almacena clientes, escrituras, poderes y registros.",
    },
    {
      nombre: "Servidor Principal",
      tipo: "Infraestructura",
      descripcion:
        "Equipo que soporta la operación de los sistemas de la notaría.",
    },
    {
      nombre: "Certificados Digitales",
      tipo: "Seguridad",
      descripcion:
        "Credenciales utilizadas para validar documentos electrónicos.",
    },
    {
      nombre: "Firmas Electrónicas",
      tipo: "Seguridad",
      descripcion:
        "Mecanismos de autenticación y validación de documentos digitales.",
    },
    {
      nombre: "Respaldos de Información",
      tipo: "Seguridad",
      descripcion:
        "Copias de seguridad utilizadas para recuperación ante incidentes.",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Inventario de Activos de la Notaría</h1>

      <table>
        <thead>
          <tr>
            <th>Activo</th>
            <th>Tipo</th>
            <th>Descripción</th>
          </tr>
        </thead>

        <tbody>
          {activos.map((a, index) => (
            <tr key={index}>
              <td>{a.nombre}</td>
              <td>{a.tipo}</td>
              <td>{a.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}