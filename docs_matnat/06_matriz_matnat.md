# 06 - Matriz de Riesgos (MatNat)

##  Objetivo
Evaluar los activos del sistema identificados previamente, asignando niveles de riesgo según impacto y probabilidad de explotación.

---

##  Escala utilizada

- **Impacto:** Bajo / Medio / Alto
- **Probabilidad:** Baja / Media / Alta
- **Riesgo:** Bajo / Medio / Alto (resultado combinado)

---

##  Matriz de evaluación

| Activo              | Vulnerabilidad asociada        | Impacto | Probabilidad | Riesgo |
|---------------------|--------------------------------|----------|--------------|--------|
| xss.jsx             | XSS (DOM / innerHTML)          | Alto     | Alta         | Alto   |
| inyeccionSQL.jsx    | Inyección de datos (simulada)   | Alto     | Media        | Alto   |
| comandos.jsx        | Ejecución simulada de comandos  | Medio    | Baja         | Bajo   |
| App.jsx             | Integración general del sistema | Medio    | Baja         | Bajo   |
| public/xss.png      | Recurso estático                | Bajo     | Baja         | Bajo   |

---

##  Análisis

- El componente **xss.jsx** representa el mayor riesgo debido a la ejecución directa de HTML sin sanitización.
- Las simulaciones de inyección de datos permiten comprender ataques comunes en formularios.
- Los componentes de interfaz general no presentan riesgo directo, pero dependen de la seguridad de los módulos internos.

---

##  Conclusión

El sistema presenta vulnerabilidades controladas con fines educativos, destacando principalmente XSS como riesgo crítico. La matriz permite visualizar prioridades de mitigación.