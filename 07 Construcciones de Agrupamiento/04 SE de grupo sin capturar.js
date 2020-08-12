//  (?: subexpresión )	
// Define un grupo sin captura.

var exp1 = /Write(?:Line)?/;
var exp2 = /hola(?:)/;
var text1 = 'Console.WriteLine()';
var text2 = 'Console.Write(valor)';

console.log(text1.match(exp1) + '');
console.log(text2.match(exp1) + '');