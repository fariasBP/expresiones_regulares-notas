/*
PATRONES NO SENSIBLES A MAYUSCULAS NI MINUSCULAS (NO CASESENSITIVE)
	- i -> ignora la mayusculas o minusculas de la expresion
*/

var expresion1 = /Hola Mundo/i; // evaluando la expresion "Hola Mundo" sin importar si es mayuscula ni minuscula

console.log(expresion1.test('hoLa MUndO'));