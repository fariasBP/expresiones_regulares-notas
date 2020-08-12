//  \s 	
// Coincide con cualquier carácter que sea un espacio en blanco.

// este caracter remplaza, es igual o coincide a espacios sean 
// espacios simples, tabulaciones o saltos de linea

var exp1 = /\s/;// verifica un espacio en blanco muestra la primera coincidencia
var exp2 = /\s/g;// verifica un espacio en blanco muestra todas las coincidencias (gracias a que es global "g")
var text1 = 'algo esta  aqui';

console.log(exp1.test(text1));// en este sale true por que encuentra un espacio en blanco
console.log(text1.match(exp2));// muestra todos los espacios en blanco en un array