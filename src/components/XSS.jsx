import xssImg from "../../docs_matnat/img_matnat/xss_matnat.png";

export default function Xss() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>XSS Reflejado (Cross-Site Scripting)</h1>

      <h2>Descripción</h2>
      <p>
        La vulnerabilidad XSS permite que un atacante inyecte código JavaScript
        malicioso que será ejecutado en el navegador de otros usuarios.
      </p>

      <h2>Payload utilizado</h2>

      <pre
        style={{
          background: "#f4f4f4",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        {"<script>alert('XSS')</script>"}
      </pre>

      <h2>Evidencia del ataque</h2>

      <img
        src={xssImg}
        alt="Ataque XSS"
        style={{
          maxWidth: "100%",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      />

      <h2>¿Por qué funciona?</h2>

      <p>
        La aplicación no valida ni filtra correctamente los datos ingresados por
        el usuario, permitiendo que el navegador interprete y ejecute código
        JavaScript enviado por un atacante.
      </p>

      <h2>CVSS</h2>

      <p>
        <strong>Puntaje:</strong> 6.1 (Media)
      </p>

      <h2>Medidas de mitigación</h2>

      <ul>
        <li>Validar y sanitizar entradas de usuario.</li>
        <li>Escapar caracteres especiales en HTML.</li>
        <li>Implementar Content Security Policy (CSP).</li>
        <li>Utilizar frameworks que protejan contra XSS.</li>
        <li>Realizar pruebas periódicas de seguridad.</li>
      </ul>
    </div>
  );
}