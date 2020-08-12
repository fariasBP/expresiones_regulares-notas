/* INTERVALOS DE CARACTERES
    Intervalo de caracteres: coincide con cualquier carácter individual en el intervalo de primero a último.
    TEMAS:
        - [x-y] -> para evaluar un rango de un conjunto de expresiones ej /012345/ = /[0-5]/
    SINTAXIS:
        - [firs-last]
*/

// EJEMPLO 1 - usando por primera vez intervalos de caracter
// menciona a un rango de letra por ejemplo del 1 al 10 es [1-3]
var exp1 = /[1-3]/;
var texto1 = 'naci en el 98';
var texto2 = 'naci en el 92';

console.log(exp1.test(texto1));
console.log(exp1.test(texto2));

// EJEMPLO 2 - otro ejemplo de intervalos de caracter
// para encontrar aun que uno de las expresion por rango de "[]"
var expresion2 = /[0-9]/; // evaluando si hay algun numero del 0 al 9
console.log(expresion2.test('Sucedio en 1998')); //true

var expresion3 = /[a-zA-Z]/; // evaluando si hay algun numero de la "a" a la "z" sea mayuscula o minuscula
console.log(expresion3.test('Sucedio en 1998')); //true