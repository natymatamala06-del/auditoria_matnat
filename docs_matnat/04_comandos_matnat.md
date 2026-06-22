# 04 - Comandos y Evidencia de Pruebas (MatNat)

##  Objetivo
Documentar los comandos utilizados durante las pruebas de seguridad del proyecto, junto con su propósito dentro de la auditoría.

##  Comandos Utilizados

### Gestión del Entorno

* `npm install`
    *  Permite instalar todas las librerías necesarias del proyecto React.
* `npm run dev`
    *  Inicia el servidor de desarrollo para visualizar los componentes vulnerables.
* `npm run build`
    *  Genera una versión optimizada del proyecto para producción.
* `npm run lint`
    *  Detecta errores de sintaxis y malas prácticas en el código.

##  Comandos y Payloads de Auditoría

### Simulación de XSS
Ingreso de payload en el componente `xss.jsx` para verificar la ejecución de scripts maliciosos en el DOM:

```html
<img src=x onerror=alert('XSS') />

### Simulación de Inyección SQL (Referencial)
Ejemplo de prueba teórica utilizada en campos de entrada:

```sql
' OR 1=1 --

### 📌 Observaciones
* Los comandos fueron ejecutados exclusivamente en un entorno de desarrollo local.
* Las pruebas se realizaron únicamente con fines educativos.
* No se comprometieron sistemas reales ni datos sensibles.

### 🧠 Conclusión
El uso de comandos de desarrollo y la ejecución controlada de payloads de prueba permiten identificar vulnerabilidades en etapas tempranas del ciclo de desarrollo, facilitando la implementación de controles de seguridad robustos antes de poner el sistema en producción.