import xssImg from "../../docs_matnat/img_matnat/xss_matnat.png";

export default function Xss() {
  return (
    <section className="bg-white rounded-lg shadow p-6 mb-6">

    <div style={{ padding: "20px" }}>
      <h1>XSS Reflejado (Cross-Site Scripting)</h1>

      <h2>Descripción</h2>
      <p>
        La vulnerabilidad XSS permite que un atacante inyecte código JavaScript
        malicioso que será ejecutado en el navegador de otros usuarios.
      </p>

      <h3>Contenido utilizado</h3>

      <pre
        style={{
          background: "#f4f4f4",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        {"<script>alert('XSS')</script>"}
      </pre>

      <h3 className="text-lg font-semibold mb-2">
            Evidencia del Ataque
          </h3>

      <img
        src={xssImg}
        alt="Ataque XSS"
        style={{
          maxWidth: "100%",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      />

      <p>
        La aplicación no valida ni filtra correctamente los datos ingresados por
        el usuario, permitiendo que el navegador interprete y ejecute código
        JavaScript enviado por un atacante.
      </p>

      <div>
          <h3 className="text-lg font-semibold mb-2">
            Impacto en Notaría Central Digital
          </h3>

          <ul className="list-disc ml-6">
            <li>Robo de identidad.</li>
            <li>Fraude financiero.</li>
            <li>Robo de credenciales.</li>
            <li>Fuga de informacion.</li>
          </ul>
        </div>

      <h3 className="text-lg font-semibold mb-2">
        Evaluación CVSS
        </h3>

      <p><strong>Puntaje:</strong> 6.1 </p>
        <p><strong>Severidad:</strong>Alta</p>
      <h3>Medidas de Seguridad</h3>

      <ul>
        <li>Validar y sanitizar entradas de usuario.</li>
        <li>Escapar caracteres especiales en HTML.</li>
        <li>Implementar Content Security Policy (CSP).</li>
        <li>Utilizar frameworks que protejan contra XSS.</li>
        <li>Realizar pruebas periódicas de seguridad.</li>
      </ul>
    </div>
    </section>

  );
}