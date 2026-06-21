import { Database } from "lucide-react";

function InyeccionSQL() {
  return (
    <section className="bg-white rounded-lg shadow p-6 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Database className="text-red-600" />
        <h2 className="text-2xl font-bold">
          Inyección SQL (SQL Injection)
        </h2>
      </div>

      <div className="space-y-6">

        <div>
          <h3 className="text-lg font-semibold mb-2">
            Evidencia del Ataque
          </h3>

          <p className="mb-2">
            Payload utilizado:
          </p>

          <code className="block bg-gray-100 p-3 rounded">
            ' OR '1'='1
          </code>

          <img
            src="/img/sqli_matnat.png"
            alt="Evidencia SQL Injection"
            className="mt-4 rounded border shadow w-full"
          />

          <p className="mt-3">
            La aplicación devolvió registros almacenados en la base de datos,
            demostrando la existencia de una vulnerabilidad de Inyección SQL.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">
            Explicación Técnica
          </h3>

          <p>
            La vulnerabilidad ocurre cuando la aplicación incorpora datos
            proporcionados por el usuario directamente dentro de consultas SQL
            sin validación adecuada ni consultas parametrizadas.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">
            Impacto en Notaría Central Digital
          </h3>

          <ul className="list-disc ml-6">
            <li>Exposición de escrituras públicas.</li>
            <li>Acceso a poderes notariales.</li>
            <li>Divulgación de datos personales.</li>
            <li>Compromiso de registros legales.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">
            Evaluación CVSS 3.1
          </h3>

          <div className="bg-red-50 border border-red-200 rounded p-4">
            <p><strong>Puntaje:</strong> 9.8</p>
            <p><strong>Severidad:</strong> Crítica</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">
            Medidas de Seguridad
          </h3>

          <ul className="list-disc ml-6">
            <li>Uso de consultas parametrizadas.</li>
            <li>Validación de entradas.</li>
            <li>Principio de mínimo privilegio.</li>
            <li>Monitoreo de accesos sospechosos.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default InyeccionSQL;
