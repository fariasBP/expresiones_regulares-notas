//    ( subexpresión ) 	
// Captura la subexpresión coincidente y le asigna un número ordinal basado en uno.

// esta sirve para operar en una expresion mas expresiones

var exp1 = /Hoo+(laa+)+/;// verificamos si hay hooolaaa pero sin saber cuantos 'o' y 'a' hay 
                        //asi que con '+' podemos decir que pueden ser de 2 o mas repeticiones 
                        //y con subexpresiones operamos dos expresiones en una
var text1 = 'Hooooooolaaaaaaaaaaaaaaa'

console.log(exp1.test(text1));// saldra true