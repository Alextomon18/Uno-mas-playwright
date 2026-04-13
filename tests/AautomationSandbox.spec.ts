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
            const boton = page.getByRole('button', { name: 'Hacé click para generar un ID' });
            await boton.click({force: true});
            await expect(page.getByText('OMG, aparezco después de 3')).toBeVisible();
        })
    });

    test('Validacion de llenado campo de texto', async ({ page }) => {
        await test.step('Dado que navego a la página de sandbox', async () => {
            await page.goto("https://thefreerangetester.github.io/sandbox-automation-testing/");
        })

        await test.step('Puedo ingresar texto en el campo "Un aburrido texto"', async () => {
            await expect(page.getByPlaceholder('Ingresá texto'), 'El campo de texto no es editable').toBeEditable();
            await page.getByPlaceholder('Ingresá texto').fill(textoDePrueba);
            await expect(page.getByPlaceholder('Ingresá texto')).toHaveValue(textoDePrueba);
        })
    });
    
    test('Validacion de checkbox', async ({ page }) => {
        await test.step('Dado que navego a la página de sandbox', async () => {
            await page.goto("https://thefreerangetester.github.io/sandbox-automation-testing/");
        })
            
        await test.step('Puedo seleccionar el checkbox "pasta"', async () => {
            await page.getByRole('checkbox', { name: 'Pasta 🍝' }).check();
            await expect(page.getByRole('checkbox', { name: 'Pasta 🍝' })).toBeChecked();
            });
        await test.step('Puedo deseleccionar el checkbox "pasta"', async () => {
            await page.getByRole('checkbox', { name: 'Pasta 🍝' }).uncheck();
            await expect(page.getByRole('checkbox', { name: 'Pasta 🍝' }), 'El checkbox no está seleccionado').not.toBeChecked();
        });
    });
    test('Validacion de radio buttons', async ({ page }) => {
        await test.step('Dado que navego a la página de sandbox', async () => {
            await page.goto("https://thefreerangetester.github.io/sandbox-automation-testing/");
        })
        await test.step('Puedo seleccionar el radio button "Opción 2"', async () => {
            await page.getByRole('radio', { name: 'No' }).check();
            await expect(page.getByRole('radio', { name: 'No' }), 'El radio button no está seleccionado').toBeChecked();
        });
    });

    test('Validacion dropdown', async ({ page }) => {
        await test.step('Dado que navego a la página de sandbox', async () => {
            await page.goto("https://thefreerangetester.github.io/sandbox-automation-testing/");
        })
        await test.step('Puedo seleccionar una opción del dropdown', async () => {
            const deportes = ['Fútbol', 'Tennis', 'Basketball'];
            for(let opcion of deportes){
                const elemento = await page.$(`select#formBasicSelect > option:is(:text("${opcion}"))`)
                if(elemento){
                    console.log(`La opción ${opcion} existe en el dropdown`);
                } else {
                    throw new Error(`La opción ${opcion} NO existe en el dropdown`);
                }
            }
            await page.getByLabel('Dropdown').selectOption('Tennis');
            await expect(page.getByLabel('Dropdown')).toHaveValue('Tennis');
        });
        
    });

    test('Validacion dropdown dias de la semana', async ({ page }) => {
        await test.step('Dado que navego a la página de sandbox', async () => {
            await page.goto("https://thefreerangetester.github.io/sandbox-automation-testing/");
        })
        await test.step('Puedo seleccionar una opción del dropdown de dias de la semana', async () => {
            await page.getByRole('button', { name: 'Día de la semana' }).click();
            await page.getByRole('link', { name: 'Miércoles' }).click();
        });        
        
    });

    /*test('Validacion drag and drop en la página de sandbox', async ({ page }) => {
        await test.step('Dado que navego a la página de sandbox', async () => {
            await page.goto("https://thefreerangetester.github.io/sandbox-automation-testing/");
        })
        await test.step('quiero ver funcionamiento de drag n drop', async () => {
            await page.getByRole('button', { name: 'Mostrar popup' }).dragTo(page.getByText('Popup de ejemplo'))
        });        
        
    });*/
})