//  \D 	
// Coincide con cualquier carácter que no sea un dígito decimal.

// Este Caracter remplaza, es igual o coincide con cualquier caracter que no se numero

var exp1 = /\D/g; // muestra todos los caracteres que no sean numero (esto gracias a que es global "g")
var text1 = '4 = IV';

console.log(text1.match(exp1));