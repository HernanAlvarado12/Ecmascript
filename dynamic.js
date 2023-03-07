import { line, jumpLines } from './line.js';

/**
 * Esta tecnica nos sirve para no cargar archivo directamente cuanto
 * un documento es cargado por el navegador. Cuando nosotros hacemos
 * uso de import ... from, cada vez que se ejecute el html, tambien
 * va a cargar todos lo archivos que fueron importados de esta forma
 * , pero si hacemos uso de imports dinamicos estos no se van a cargar
 * hasta que sean invodaos.
 * 
 * Para este caso quedaria al usar import normales.
 *  -index.html
 *  -dynamic.js
 *  -line.js
 * 
 * Cuando hacemos uso de dynamic imports.
 *  -index.html
 *  -dynamic.js
 */
const button = document.getElementById('buttonModule')

button.addEventListener('click', async () => {
    const module = await import('./model.js')
    module.printName()
})