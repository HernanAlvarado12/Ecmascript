/**
 * NUMBER
 * Es la interface que maneja los datos numericos dentro de javascript, cualquier clase 
 * o prototipo que haga uso de Number hereda de este prototipo.
 * 
 * parseFloat => nos permite convertir un numero entero a un numero decimal, en caso que
 * no se pueda convertir un numero de punto flotante retornara el valor de NaN
 * 
 * 
 * parseInt => nos permite convertir un numero deciaml a un numero entero, en caso de que
 * no se puede convertie a numero entero retornara el valor de NaN, en caso de que el 
 * parametro ingresado tambien contenga letras este solo leera los primeros numeros que
 * encuentre antes de la dicha letra o letras.
 * 
 * 
 * toExponential => nos permite convertir un numero a notacion de expenentes, indicandole
 * la cantida de decimales que deseamos, en caso de no ingresar este valor su valor por 
 * defecto sera 1
 * 
 * 
 * toFixed => nos permite controlar la cantidade de decimales que tiene un numero, el valor
 * a ingresar debe estar entre 0 y 100, en dado caso que ingresemos un numero fuera de este
 * rango lanzara un excepcion de tipo RangeError.
 * 
 * 
 * toPrecision => nos permite controlar la cantidad de digitos de un numero, al igual que el
 * metodo anterior su rango de espera esta entre 0 y 100
 * 
 * 
 * toString => representación de un numero en un sistema numerico, su rango de espera esta 
 * entre 2 y 36
 * 2 => binario
 * 8 => octal
 * 10 => decimal
 * 16 => hexadecimal
 * 36 => alfanumerico
 * 
 */


const string = '12345String6789'
console.log(Number.parseInt(string))


const exponent = 123456
console.log(exponent.toExponential(2), exponent.toExponential(4))


const limit = 123.9887777
console.log(limit.toFixed(0), limit.toFixed(2), limit.toFixed(4))


const precision = 123.98765
console.log(precision.toPrecision(1), precision.toPrecision(3), precision.toPrecision(5))


const tostring = 256
console.log(tostring.toString(36))