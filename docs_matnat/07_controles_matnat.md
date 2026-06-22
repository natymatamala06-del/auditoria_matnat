# 07 - Controles y Mitigaciones (MatNat)

##  Objetivo
Definir medidas de seguridad recomendadas para mitigar las vulnerabilidades identificadas en el sistema.

---

##  Vulnerabilidades y controles asociados

###  XSS (Cross-Site Scripting)
**Activo:** `xss.jsx`

**Problema:**
- Uso de `dangerouslySetInnerHTML`
- Inyección directa de HTML sin sanitización

**Controles recomendados:**
- Sanitizar entradas con librerías como DOMPurify
- Evitar renderizado directo de HTML dinámico
- Escapar caracteres especiales
- Validación estricta de inputs

---

###  Inyección de datos (simulada SQL)
**Activo:** `inyeccionSQL.jsx`

**Problema:**
- Entradas no validadas
- Simulación de consultas inseguras

**Controles recomendados:**
- Uso de consultas parametrizadas
- Validación de inputs en frontend y backend
- ORM seguro (Prisma, Sequelize, etc.)
- Filtrado de caracteres especiales

---

###  Ejecución simulada de comandos
**Activo:** `comandos.jsx`

**Problema:**
- Simulación sin restricciones de comandos

**Controles recomendados:**
- Validar comandos permitidos (whitelist)
- Evitar ejecución dinámica de código
- Separar lógica de UI y lógica de sistema

---

###  Seguridad general del sistema
**Activo:** `App.jsx`

**Controles recomendados:**
- Modularización del código
- Validación global de entradas
- Manejo centralizado de errores

---

##  Conclusión

La mayoría de las vulnerabilidades detectadas pueden ser mitigadas mediante validación de entradas, sanitización de datos y buenas prácticas de desarrollo seguro. La implementación de controles reduce significativamente el riesgo de explotación.