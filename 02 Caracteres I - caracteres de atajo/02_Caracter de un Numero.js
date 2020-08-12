//   \d 	
// Coincide con cualquier dígito decimal

// Este caracter remplaza, es igual o coincide con numeros como 1,2,3,4,... etc...

var exp1 = /\d/g;// verfica todas las coincidencias de numeros (esto gracias a que es global "g")
var text1 = 'el numero 7 es de la suerte pero no el 3';

console.log(text1.match(exp1));// mostrara todas los numeros de text1