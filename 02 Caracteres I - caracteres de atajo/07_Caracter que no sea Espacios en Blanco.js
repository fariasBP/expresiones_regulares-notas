//   \S 	
// Coincide con cualquier carácter que no sea un espacio en blanco.

// Este caracter remplaza, es igual o coincide con cualquier caracter pero que no sea 
// espacios, tabuladores o saltos de linea

var exp1 = /\S/;// muestra la primera coincidencia que no sea espacio
var exp2 = /\S/g;// muestra todas las coincidencias que sean espacios (esto gracias a que es global "g")
var text1 = 'algo no es algo';

console.log(text1.match(exp1) + '\n');// dara a por que es la primera coincidencia
console.log(text1.match(exp2) + '\n');// dara a,l,g, etc.. por que no son espacios en blanco