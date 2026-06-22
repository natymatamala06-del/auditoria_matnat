# 08 - Plan de Recuperación del Sistema (MatNat)

##  Objetivo
Definir estrategias para restaurar el sistema en caso de fallos, pérdida de datos o explotación de vulnerabilidades.

---

##  Estrategias de recuperación

###  1. Restauración de código fuente
- Uso de control de versiones (Git)
- Repositorio con historial de commits
- Posibilidad de volver a versiones estables anteriores

---

###  2. Recuperación de componentes críticos

| Componente        | Acción de recuperación              |
|------------------|-------------------------------------|
| App.jsx          | Revertir a última versión estable   |
| xss.jsx          | Reemplazar con versión sanitizada   |
| inyeccionSQL.jsx | Validar y corregir entradas         |
| comandos.jsx     | Limitar comandos permitidos         |

---

###  3. Recuperación de recursos

- Restaurar archivos desde carpeta `public/`
- Verificación de integridad de imágenes y assets

---

###  4. Reinstalación del entorno

```bash id="t9env0"
npm install
npm run dev

 Permite reconstruir el entorno en caso de corrupción del proyecto.

---

###  5. Prevención de pérdida de datos

- Uso de control de versiones (Git)
- Backups periódicos del repositorio
- Separación de entornos (desarrollo / producción)

---

### 🧠 Conclusión

El sistema puede ser restaurado de manera eficiente gracias al uso de control de versiones y la modularización de sus componentes. La recuperación depende principalmente del historial del repositorio y buenas prácticas de desarrollo.