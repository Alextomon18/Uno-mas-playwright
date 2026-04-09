import {test, Browser, Page, expect} from '@playwright/test';


let browser: Browser;
let page: Page;

test.describe("Ir a freeRangeTesters", () => {

    test("Redirecciones correcta", async ({page}) => {

    const secciones = [
        { nombre: 'Cursos', url: '/cursos', tituloEsperado: 'Cursos' },
        { nombre: 'Blog', url: '/blog', tituloEsperado: 'Free Range Testers' },
        { nombre: 'Recursos', url: '/recursos', tituloEsperado: 'Recursos' },
    ];
    for (const seccion of secciones) {
        await test.step(`Validar redirección a la sección "${seccion.nombre}"`, async () => {
            await page.goto('https://www.freerangetesters.com');
        })

        await test.step(`Cuando hago click en "${seccion.nombre}"`, async () => {
            await page.locator("#page_header").getByRole('link', { name: seccion.nombre, exact: true }).click();
            await page.waitForURL(`**${seccion.url}`);
        })
        await test.step(`Entonces se redirige a la pagina de "${seccion.tituloEsperado}"`, async () => {
            await expect(page).toHaveTitle(seccion.tituloEsperado);
        }) 
    }})        
})