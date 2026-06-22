# 06 - Matriz de Riesgos (MatNat)

## Objetivo

Evaluar los riesgos asociados a los activos críticos de la Notaría Central Digital, considerando el impacto potencial y la probabilidad de ocurrencia de las vulnerabilidades identificadas durante la auditoría.

---

## Escala utilizada

### Impacto

| Nivel | Descripción |
|---------|---------|
| Bajo | Afectación menor a las operaciones |
| Medio | Interrupción parcial de servicios |
| Alto | Compromiso de información crítica o interrupción significativa |

### Probabilidad

| Nivel | Descripción |
|---------|---------|
| Baja | Poco probable |
| Media | Posible bajo ciertas condiciones |
| Alta | Muy probable debido a vulnerabilidades existentes |

### Nivel de Riesgo

Resultado obtenido al combinar Impacto y Probabilidad.

---

## Matriz de Evaluación

| Activo | Vulnerabilidad | Impacto | Probabilidad | Riesgo |
|----------|----------|----------|----------|----------|
| Base de Datos de Clientes | SQL Injection | Alto | Alta | Crítico |
| Portal Web de Clientes | XSS Reflected | Medio | Alta | Alto |
| Servidor Principal | Command Injection | Alto | Alta | Crítico |
| Escrituras Públicas | Acceso no autorizado | Alto | Media | Alto |
| Datos Personales de Clientes | Fuga de información | Alto | Alta | Crítico |
| Certificados Digitales | Robo de credenciales | Alto | Media | Alto |
| Sistema de Gestión Notarial | Manipulación de registros | Alto | Media | Alto |

---

## Mapa de Calor (Probabilidad × Impacto)

| Impacto / Probabilidad | Baja | Media | Alta |
|-----------------------|------|------|------|
| **Alto** | 🟨 Medio | 🟧 Alto | 🟥 Crítico |
| **Medio** | 🟩 Bajo | 🟨 Medio | 🟧 Alto |
| **Bajo** | 🟩 Bajo | 🟩 Bajo | 🟨 Medio |

---

## Interpretación de Resultados

| Nivel | Significado |
|---------|---------|
| 🟥 Crítico | Requiere mitigación inmediata |
| 🟧 Alto | Debe ser tratado en el corto plazo |
| 🟨 Medio | Requiere seguimiento y controles |
| 🟩 Bajo | Riesgo aceptable |

---

## Análisis

- La vulnerabilidad de **SQL Injection** representa uno de los mayores riesgos, ya que podría permitir el acceso o modificación de la base de datos que contiene información sensible de clientes y trámites legales.

- La vulnerabilidad **XSS Reflected** afecta directamente al portal de clientes, pudiendo comprometer sesiones de usuario o facilitar el robo de información.

- La vulnerabilidad de **Command Injection** presenta un riesgo crítico debido a la posibilidad de ejecutar comandos arbitrarios sobre el servidor, comprometiendo completamente la infraestructura.

- Los activos relacionados con documentos legales y datos personales poseen un alto valor para la organización, por lo que cualquier acceso no autorizado podría generar consecuencias legales, económicas y reputacionales.

---

## Conclusión

La evaluación identifica riesgos críticos asociados principalmente a SQL Injection y Command Injection. Debido a la sensibilidad de la información administrada por la Notaría Central Digital, resulta fundamental implementar controles de seguridad que reduzcan la probabilidad de explotación y protejan la confidencialidad, integridad y disponibilidad de los activos críticos.