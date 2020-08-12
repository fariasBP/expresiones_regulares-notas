/*
EVALUANDO EXPRESIONES
	-test() -> expresion.test(texto) -> evaluador de expresion en textos
*/
var expresion1 = new RegExp('abc'); // creamos la expresion abc
// test(texto a evaluar) -> evalua el texto si hay la expresion retorna true de lo cantrario false
console.log(expresion1.test('abcdef')); // true
console.log(expresion1.test('El texto recitaba: abcdefg')); //true
// en este caso no hay la expresion abc
console.log(expresion1.test('El texto recitaba: abJcdefg')); //false

var expresion2 = /Hola Mundo/;
console.log(expresion2.test('El Primer programa es Hola Mundo')); //true 
// la expresion diferencian entre mayuscula y minuscula (casesensitive)
console.log(expresion2.test('El Primer programa es hola mundo')); //false