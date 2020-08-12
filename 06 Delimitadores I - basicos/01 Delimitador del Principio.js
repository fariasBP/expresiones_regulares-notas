//  ^ 	
// La coincidencia debe comenzar al principio de la cadena o de la línea.

// verifica si la palabra despues de '^' hay  pero tiene que estar enel principio

var exp1 = /^hola/; // busca si hay en el principio la palabra 'hola' 
var text1 = 'hola a todos';
var text2 = 'el dice hola';

console.log(exp1.test(text1)); // mostrara true por que si hay un 'hola' al principio
console.log(exp1.test(text2)); // mostrara false por que no hay un 'hola' al principio