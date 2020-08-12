/*
REPETICIONES
	- + -> para una o mas repeticion (minimo 1 repeticion)
	- * -> para cero o mas repeticiones (no existe minimo)
*/
var expresion1 = /\d+/; // evaluar si hay uno o mas numeros
console.log(expresion1.test('1998'));//true
console.log(expresion1.test('1'));//true
console.log(expresion1.test(''));//false

var expresion2 = /\d*/; // evaluar si hay mayor o igual a cero repeticiones
console.log(expresion2.test('1998'));//true
console.log(expresion2.test('1'));//true
console.log(expresion2.test(''));//true