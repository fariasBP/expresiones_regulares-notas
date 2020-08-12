//   \W 	
// Coincide con cualquier carácter que no pertenezca a una palabra.

// Este caracter es igual o coincide a cualquier caracter que no sea alfanumerico como
// .(punto) (espacio) ,(coma) entre otros

var exp1 = /\W/;// verifca si hay alguna caracter que no sea alfanumerico mostrara la primera coincidencia
var exp2 = /\W/g;// verifica si hay algun caracter que no sea alfanumerico mostrara todas las coincidencias (gracias a que es global con el caracter "g")
var text1 = 'ID A1.3';

console.log(text1.match(exp1) + '\n');// en esta no se vera nada lo unico que hay es espacio eso es por que es la primera coincidencia que encuentra
console.log(text1.match(exp2) + '\n');// en esta se vera una espacio una coma y un punto por que muestra todas las coincidencias