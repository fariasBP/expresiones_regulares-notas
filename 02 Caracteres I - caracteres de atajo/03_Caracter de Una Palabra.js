//    \w 	
// Coincide con cualquier carácter de una palabra.

// este caracter remplaza, es igual o coincide con cualquier letra o numero (alfanumerico)
// como pueden se a, b,...z, 1, 2, ....i

var exp1 = /\w/; // verifica si hay una letra y obtiene la primera coincidencia
var exp2 = /\w/g; // verifica si hay una letra y obtiene todas las coincidencias (esto gracias a que lo hicimos global con "g")
var text1 = 'ID A1.3'; 

console.log(text1.match(exp1) + '\n');// en ambos saldra numeros y letras pero no saldra ni espacios
console.log(text1.match(exp2) + '\n');// ni puntos por que no son alfanumericos