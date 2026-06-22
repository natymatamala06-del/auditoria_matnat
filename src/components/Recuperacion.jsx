export default function Recuperacion() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Plan de Recuperación ante Desastres</h1>

      <h2>Objetivo</h2>
      <p>
        Garantizar la continuidad operativa de la organización frente a
        incidentes de seguridad que afecten la disponibilidad, integridad o
        confidencialidad de la información.
      </p>

      <h2>Acciones Inmediatas</h2>
      <ul>
        <li>Aislar los sistemas comprometidos.</li>
        <li>Identificar el origen del incidente.</li>
        <li>Bloquear accesos no autorizados.</li>
        <li>Notificar al equipo responsable.</li>
      </ul>

      <h2>Recuperación de Datos</h2>
      <ul>
        <li>Restaurar respaldos recientes.</li>
        <li>Verificar la integridad de las bases de datos.</li>
        <li>Eliminar cualquier código malicioso detectado.</li>
        <li>Validar el funcionamiento de los sistemas.</li>
      </ul>

      <h2>Mejora Tecnológica</h2>
      <ul>
        <li>Implementar firewall de aplicaciones web (WAF).</li>
        <li>Actualizar sistemas y dependencias.</li>
        <li>Aplicar autenticación multifactor.</li>
        <li>Fortalecer el monitoreo de seguridad.</li>
      </ul>

      <h2>Continuidad Operacional</h2>
      <ul>
        <li>Mantener copias de seguridad automáticas.</li>
        <li>Realizar pruebas periódicas de recuperación.</li>
        <li>Capacitar al personal.</li>
        <li>Documentar procedimientos de respuesta a incidentes.</li>
      </ul>

      <h2>Conclusión</h2>
      <p>
        Estas medidas permiten minimizar el impacto de incidentes de seguridad y
        asegurar la continuidad de las operaciones de la organización.
      </p>
    </div>
  );
}