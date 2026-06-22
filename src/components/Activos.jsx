export default function Activos() {
  const activos = [
    {
      nombre: "App.jsx",
      tipo: "Componente",
      descripcion: "Componente raíz de la aplicación",
    },
    {
      nombre: "xss.jsx",
      tipo: "Componente",
      descripcion: "Demo de vulnerabilidad XSS mediante HTML dinámico",
    },
    {
      nombre: "inyeccionSQL.jsx",
      tipo: "Componente",
      descripcion: "Simulación de entrada vulnerable a inyección SQL",
    },
    {
      nombre: "comandos.jsx",
      tipo: "Componente",
      descripcion: "Terminal simulada de comandos del sistema",
    },
    {
      nombre: "public/xss.png",
      tipo: "Recurso",
      descripcion: "Imagen utilizada en la demostración de XSS",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Inventario de Activos (MatNat)</h2>

      <table border="1" cellPadding="10" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Nombre</th>
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