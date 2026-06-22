import comandosImg from "../../docs_matnat/img_matnat/comandos_matnat.png";

export default function Comandos() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Inyección de Comandos (Command Injection)</h1>

      <h2>Descripción</h2>
      <p>
        La vulnerabilidad de Inyección de Comandos permite ejecutar comandos del
        sistema operativo debido a una validación insuficiente de las entradas
        proporcionadas por el usuario.
      </p>

      <h2>Payload utilizado</h2>

      <pre
        style={{
          background: "#f4f4f4",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        127.0.0.1; cat /etc/passwd
      </pre>

      <h2>Evidencia del ataque</h2>

      <img
        src={comandosImg}
        alt="Command Injection"
        style={{
          maxWidth: "100%",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      />

      <h2>¿Por qué funciona?</h2>

      <p>
        La aplicación incorpora directamente la entrada del usuario en un
        comando del sistema operativo. Al utilizar el carácter ";", el atacante
        puede ejecutar comandos adicionales.
      </p>

      <h2>CVSS</h2>

      <p>
        <strong>Puntaje:</strong> 9.8 (Crítica)
      </p>

      <h2>Medidas de mitigación</h2>

      <ul>
        <li>Validar todas las entradas de usuario.</li>
        <li>Utilizar listas blancas de caracteres permitidos.</li>
        <li>Evitar funciones que ejecuten comandos del sistema.</li>
        <li>Aplicar el principio de mínimo privilegio.</li>
        <li>Monitorear y registrar eventos de seguridad.</li>
      </ul>
    </div>
  );
}