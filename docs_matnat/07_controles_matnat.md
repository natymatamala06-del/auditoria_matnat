# 07 - Políticas de Prevención y Controles de Mitigación (MatNat)

## Objetivo

Definir las políticas y controles de seguridad que permitan reducir los riesgos identificados durante la auditoría de la Notaría Central Digital.

---

## Vulnerabilidad: SQL Injection

### Activo afectado
Base de Datos de Clientes

### Política de Prevención

La organización debe exigir que todas las consultas a bases de datos se desarrollen utilizando mecanismos seguros que impidan la manipulación de instrucciones SQL mediante datos ingresados por usuarios.

### Controles de Mitigación

- Utilizar consultas parametrizadas.
- Implementar validación de entradas.
- Aplicar principios de mínimo privilegio en las cuentas de base de datos.
- Realizar pruebas periódicas de seguridad.
- Monitorear accesos y consultas sospechosas.

---

## Vulnerabilidad: Cross-Site Scripting (XSS)

### Activo afectado

Portal Web de Clientes

### Política de Prevención

Toda información ingresada por usuarios deberá ser validada y sanitizada antes de ser procesada o mostrada en el navegador.

### Controles de Mitigación

- Sanitizar entradas de usuario.
- Escapar caracteres especiales.
- Implementar Content Security Policy (CSP).
- Validar formularios en cliente y servidor.
- Mantener actualizadas las librerías utilizadas por la aplicación.

---

## Vulnerabilidad: Command Injection

### Activo afectado

Servidor Principal

### Política de Prevención

La organización debe prohibir la ejecución directa de comandos del sistema operativo utilizando entradas proporcionadas por usuarios.

### Controles de Mitigación

- Validar estrictamente los datos de entrada.
- Utilizar listas blancas de caracteres permitidos.
- Evitar funciones que ejecuten comandos del sistema.
- Aplicar el principio de mínimo privilegio.
- Implementar monitoreo y registros de eventos de seguridad.

---

## Controles Generales de Seguridad

### Gestión de Accesos

- Aplicar autenticación multifactor.
- Gestionar privilegios según funciones laborales.
- Revisar periódicamente los accesos otorgados.

### Protección de la Información

- Cifrar información sensible.
- Mantener respaldos periódicos.
- Proteger certificados digitales y firmas electrónicas.

### Gestión de Vulnerabilidades

- Mantener sistemas actualizados.
- Realizar auditorías de seguridad periódicas.
- Corregir vulnerabilidades identificadas oportunamente.

---

## Conclusión

La implementación de políticas de prevención y controles de mitigación permite reducir significativamente los riesgos identificados durante la auditoría. Estas medidas contribuyen a proteger la confidencialidad, integridad y disponibilidad de la información administrada por la Notaría Central Digital.