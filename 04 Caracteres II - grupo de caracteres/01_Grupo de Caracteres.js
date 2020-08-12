/* GRUPO O CONJUNTO DE CARACTERES
    Coincide con cualquier carácter individual de grupo_caracteres. 
    De forma predeterminada, la coincidencia distingue entre mayúsculas y 
    minúsculas.
    TEMAS:
        -[] -> para crear conjunto de expresions
    SINTAXIS:
        - [ grupo_caracteres ]
*/
// EJEMPLO 1 - diferencia de trabajar con o sin conjunto
    // para encontrar aun que uno de las expresion dentro de "[]"
    var expresion1 = /[0123456789]/; // evaluando si hay algun numero del 0 al 9
    console.log(expresion1.test('sucedio en 1998')); //true - porque al menos hay el 1, 9 y 8

    // para encontrar un numero en especifico
    var expresion2 = /0123456789/; // evalua si hay el numero en especifico
    console.log(expresion2.test('sucedio en 1998')) // false - porque no hay el numero 0123456789 al principio

// EJEMPLO 2 - otro ejemplo
//verifica si hay aunque se a uno de los caracteres dentro de los corchetes
var exp1 = /[fr]/;
var exp2 = /[fr]+/;
var texto1 = 'franco';
var texto2 = 'algo';
var texto3 = 'fanco'

console.log(exp1.test(texto1)); // true - por que encontro una f y r
console.log(texto1.match(exp1) + '\n'); // muestra la f - por lo encontro primero

console.log(exp1.test(texto2)); // false porque - no encontro ni la f ni la r
console.log(texto2.match(exp1) + '\n'); // null - porque como no encontra la f o r no hay dat


