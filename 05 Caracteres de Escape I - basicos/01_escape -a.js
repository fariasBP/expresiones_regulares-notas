// \a 	Coincide con un carácter de campana, \u0007.

var exp1 = /\a/;
var text1 = '!hola';
console.log(exp1.test(text1));
console.log(text1.match(exp1));