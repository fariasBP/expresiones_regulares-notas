/*
AGRUPANDO PATRONES EN SUBEXPRESIONES
*/
// ver si existe la expresion woo pero tambien hoo (+) aun que se repeten y sin importar si es mayuscula o miniscula
var expresion1 = /Woo+(hoo)+/i;

//Evaluando el string: "Woohoooooo"
console.log(expresion1.test('Woooohooooooooo'));
