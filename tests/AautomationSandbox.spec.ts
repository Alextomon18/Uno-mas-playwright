import {test, Browser, Page, expect} from '@playwright/test';

let browser: Browser;
let page: Page; 
let textoDePrueba: string = "Este es un texto de prueba para validar el llenado del campo de texto en la página de sandbox.";

test.describe("Acciones en la página", () => {

    test("Click en boton ID Dinamico", async ({page}) => {
        await test.step('Dado que navego a la página de sandbox', async () => {
            await page.goto("https://thefreerangetester.github.io/sandbox-automation-testing/");
        })

        await test.step('Puedo dar click en el boton con ID dinamico', async () => {
           await page.getByRole('button', { name: 'Hacé click para generar un ID' }).click();
        })
    });

    test('Validacion de llenado campo de texto', async ({ page }) => {
        await test.step('Dado que navego a la página de sandbox', async () => {
            await page.goto("https://thefreerangetester.github.io/sandbox-automation-testing/");
        })

        await test.step('Puedo ingresar texto en el campo "Un aburrido texto"', async () => {
            await page.getByPlaceholder('Ingresá texto').fill(textoDePrueba);
        })
    });
    
    test('Validacion de checkbox', async ({ page }) => {
        await test.step('Dado que navego a la página de sandbox', async () => {
            await page.goto("https://thefreerangetester.github.io/sandbox-automation-testing/");
        })
            
        await test.step('Puedo seleccionar el checkbox "Opción 1"', async () => {
            
        });
    });
    test('Validacion de radio buttons', async ({ page }) => {
        await test.step('Dado que navego a la página de sandbox', async () => {
            await page.goto("https://thefreerangetester.github.io/sandbox-automation-testing/");
        })
        await test.step('Puedo seleccionar el radio button "Opción 2"', async () => {
            
        });
    });
})