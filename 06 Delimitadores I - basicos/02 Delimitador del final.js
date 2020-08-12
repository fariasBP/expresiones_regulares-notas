//  $ 	
// La coincidencia se debe producir al final de la cadena o antes de \n al final 
// de la línea o de la cadena.

// verifica si la pabra antes de '$' hay pero en el final

var exp1 = /hola$/; // busca un 'hola' al final
var text1 = 'hola a todos';
var text2 = 'el dice hola';

console.log(exp1.test(text1)); // mostrara false por que no hay un 'hola' al final
console.log(exp1.test(text2)); // mostrara true por que si hay una 'hola' al final