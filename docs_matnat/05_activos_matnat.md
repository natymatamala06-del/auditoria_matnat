# 05 - Inventario de Activos del Sistema (MatNat)

##  Objetivo
Identificar y documentar los componentes, recursos y elementos relevantes del sistema evaluado en la auditoría.

---

##  Activos del proyecto

###  Componentes principales (React)

- `App.jsx`  
  Componente raíz que integra toda la aplicación.

- `xss.jsx`  
  Componente que simula vulnerabilidad XSS mediante inserción de HTML sin sanitización.

- `inyeccionSQL.jsx`  
  Simulación de entrada vulnerable a inyección SQL (modo educativo).

- `comandos.jsx`  
  Simulador de terminal para ejecución de comandos del entorno de desarrollo.

---

###  Recursos estáticos

- `public/xss.png`  
  Imagen utilizada como apoyo visual en la demostración de XSS.

---

###  Configuración del proyecto

- `package.json`  
  Contiene dependencias y scripts del proyecto.

- `vite.config.js` (si aplica)  
  Configuración del entorno de desarrollo.

- `eslint.config.js`  
  Reglas de calidad de código.

---

##  Activos relacionados con seguridad

- Uso de `dangerouslySetInnerHTML` (riesgo XSS)
- Inputs sin sanitización en pruebas
- Payloads de prueba:
  - `<img src=x onerror=alert('XSS') />`
  - `' OR 1=1 --`

---

##  Observaciones

- Los activos identificados corresponden a un entorno de desarrollo local.
- El sistema no maneja datos reales ni sensibles.
- Las vulnerabilidades están implementadas de forma intencional para fines educativos.

---

##  Conclusión

El sistema contiene componentes que permiten simular y analizar vulnerabilidades comunes en aplicaciones web modernas, facilitando el aprendizaje de seguridad en desarrollo frontend.