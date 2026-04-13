# Uno más Playwright

Este repositorio contiene ejercicios de prueba automatizada con Playwright en TypeScript. Las pruebas se enfocan en interacciones con la página de sandbox de Free Range Testers y en validación de redirecciones del sitio principal.

## Tecnologías usadas

- Node.js
- Playwright
- TypeScript

## Dependencias

- `@playwright/test` v1.59.1
- `@types/node`

## Configuración

La configuración de Playwright está en `playwright.config.ts` y define:

- Directorio de pruebas: `tests`
- Reportero: `html`
- Toma de screenshots: `on`
- Reintentos en CI: `2`
- Navegadores configurados: `chromium`, `firefox`, `webkit`

## Cómo ejecutar las pruebas

1. Instalar dependencias:

```bash
npm install
```

2. Ejecutar todas las pruebas:

```bash
npx playwright test
```

3. Ejecutar un archivo específico:

```bash
npx playwright test tests/AautomationSandbox.spec.ts
```

4. Abrir el reporte HTML después de la ejecución:

```bash
npx playwright show-report
```

## Estructura del proyecto

- `tests/` — contiene los archivos de prueba.
- `playwright.config.ts` — configuración de Playwright.
- `package.json` — dependencias del proyecto.
- `README.md` — descripción del ejercicio y escenarios.

## Escenarios de prueba actuales

### `tests/AautomationSandbox.spec.ts`

1. **Click en botón de ID dinámico**
   - Navega a la página de sandbox.
   - Hace click en el botón que genera un ID dinámico.
   - Verifica que aparece el texto `OMG, aparezco después de 3`.

2. **Validación de llenado de campo de texto**
   - Navega a la página de sandbox.
   - Localiza el campo con placeholder `Ingresá texto`.
   - Llena el campo con texto de prueba.
   - Verifica que el valor ingresado coincide con lo esperado.

3. **Validación de checkbox**
   - Navega a la página de sandbox.
   - Selecciona el checkbox `Pasta 🍝`.
   - Verifica que quedó marcado.
   - Deselecciona el checkbox.
   - Verifica que ya no está marcado.

4. **Validación de radio buttons**
   - Navega a la página de sandbox.
   - Selecciona el radio button `No`.
   - Verifica que quedó seleccionado.

5. **Validación de dropdown principal**
   - Navega a la página de sandbox.
   - Verifica que existen las opciones `Fútbol`, `Tennis` y `Basketball`.
   - Selecciona la opción `Tennis`.
   - Verifica que el dropdown quedó con el valor `Tennis`.

6. **Validación de dropdown de días de la semana**
   - Navega a la página de sandbox.
   - Abre el dropdown de `Día de la semana`.
   - Selecciona `Miércoles`.

7. **Validación de tabla estática**
   - Navega a la página de sandbox.
   - Extrae los nombres listados en la tabla estática.
   - Verifica que los nombres sean exactamente `Messi`, `Ronaldo` y `Mbappe`.

> Nota: hay una prueba de drag and drop comentada en el archivo que no se ejecuta actualmente.

### `tests/freeRanger.spec.ts`

1. **Redirecciones correctas en Free Range Testers**
   - Navega al sitio principal `https://www.freerangetesters.com`.
   - Valida la carga del título `Free Range Testers`.
   - Hace clic en las secciones `Cursos`, `Blog` y `Recursos`.
   - Verifica que cada sección redirige a la URL y título esperados:
     - `Cursos` → `/cursos`
     - `Blog` → `/blog`
     - `Recursos` → `/recursos`

## Buenas prácticas

- Mantener los pasos de cada prueba bien separados con `test.step` para mayor claridad.
- Usar selectores semánticos de Playwright (`getByRole`, `getByLabel`, `getByPlaceholder`).
- Verificar el estado final esperado después de cada interacción.

## Recomendaciones

- Añadir más escenarios de validación de formularios y elementos dinámicos.
- Activar y completar la prueba de drag and drop si se desea validar comportamiento visual.
- Considerar agregar scripts npm útiles en `package.json` como:

```json
"scripts": {
  "test": "playwright test",
  "test:headed": "playwright test --headed",
  "show-report": "playwright show-report"
}
```
