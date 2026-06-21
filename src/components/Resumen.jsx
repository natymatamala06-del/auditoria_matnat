import { FileText } from "lucide-react";

function Resumen() {
  return (
    <section className="bg-white rounded-lg shadow p-6 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <FileText />
        <h2 className="text-2xl font-bold">
          Resumen Ejecutivo
        </h2>
      </div>

      <h3 className="text-lg font-semibold mt-4">
        Empresa Auditada
      </h3>

      <p>
        La Notaría Central Digital es una organización ficticia
        dedicada a la prestación de servicios legales mediante
        una plataforma web orientada a la gestión de trámites
        notariales y atención de clientes.
      </p>

      <h3 className="text-lg font-semibold mt-4">
        Información Protegida
      </h3>

      <ul className="list-disc ml-6">
        <li>Escrituras públicas y poderes notariales.</li>
        <li>Datos personales de clientes.</li>
        <li>Registros asociados a trámites legales.</li>
      </ul>

      <h3 className="text-lg font-semibold mt-4">
        Objetivo de la Auditoría
      </h3>

      <p>
        Identificar vulnerabilidades de seguridad, evaluar
        riesgos y proponer medidas de mitigación para proteger
        la información de la organización.
      </p>
    </section>
  );
}

export default Resumen;
