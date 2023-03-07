/**
 * GLOBALTHIS
 * Es una propiedad global que contiene un valor global que abstrae
 * los siguientes valores
 * 
 * window => navegador
 * global => node
 * self => webworker
 * globalThis => es un combinación de las anteriores variables para
 * hacer uso de prototipos sin importar al ambiente en el que nos
 * encontremos, ya sea en el navegador, node o en un webworker
 */

export const printName = () => {
    setTimeout(() => console.log('This is a messge'), 3000)
}