#  Análisis de Vulnerabilidad: Cross Site Scripting (XSS Reflected)

##  Evidencia del Ataque
Durante la auditoría en el módulo de pruebas DVWA, se validó la presencia de XSS mediante la inyección del siguiente payload:

<script>alert('XSS')</script>

Resultado: La aplicación ejecutó el código inyectado directamente en el navegador, confirmando que los datos proporcionados por el usuario no están siendo validados ni sanitizados antes de su procesamiento.

---

##  Explicación Técnica
El XSS Reflected ocurre cuando una aplicación web toma datos ingresados por un usuario y los refleja en la respuesta HTTP sin el escapado de seguridad correspondiente.

* Mecanismo: El navegador de la víctima confía en el contenido generado por la aplicación legítima, ejecutando cualquier script incrustado en la respuesta.
* Consecuencia: Un atacante puede manipular la sesión, robar datos privados o alterar la experiencia de navegación del usuario.

---

##  Impacto en Notaría Central Digital
La presencia de esta vulnerabilidad en el portal notarial permitiría a un atacante:
* Robo de cookies de sesión: Accediendo a cuentas de clientes o funcionarios.
* Suplantación de identidad: Realizando acciones en nombre de usuarios legítimos.
* Redirecciones fraudulentas: Enviando a los clientes a sitios externos maliciosos.
* Alteración de información: Modificando visualmente el portal para capturar datos sensibles.

---

##  Evaluación CVSS 3.1
Puntaje: 6.1 (Media)

| Métrica | Valor |
| :--- | :--- |
| Vector de ataque | Red |
| Complejidad | Baja |
| Privilegios requeridos | Ninguno |
| Interacción del usuario | Requerida |
| Confidencialidad/Integridad | Baja |
| Disponibilidad | Ninguna |

---

##  Estrategias de Seguridad

### Política de Prevención
* Capacitación: Instrucción constante a desarrolladores sobre el OWASP Top 10.
* SDLC Seguro: Integración de pruebas de seguridad desde la fase de diseño.
* Revisiones de Código: Auditorías específicas sobre la gestión de entradas y salidas de datos.

### Controles de Mitigación
1. Validación de Entradas: Filtrar y validar rigurosamente todo dato recibido.
2. Escapado de Salida: Codificar caracteres especiales antes de renderizarlos.
3. Content Security Policy (CSP): Implementar cabeceras para restringir fuentes de scripts autorizados.
4. Protección de Sesiones: Marcar cookies con atributos HttpOnly y Secure.

---

##  Conclusión
Aunque el XSS Reflected presenta una severidad media, su capacidad para comprometer sesiones de usuario es un riesgo directo para la confidencialidad en la Notaría Central Digital.