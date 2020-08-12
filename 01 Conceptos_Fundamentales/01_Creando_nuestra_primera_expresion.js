/**
CREANDO EXPRESIONES
	-RegExp(); -> para crear una expresion
	-//; -> para crear una expresion
*/
// hay dos formas para escribir expresiones regulares 
	var expresion1 = new RegExp('abc'); // escribir con el objeto RegExp()
	var expresion2 = /abc/; // escribir con "/"

// Pero al escribir con "/" tiene problemas como al escribir la siguiente
// expresion:
	//var expresion3 = /texto1 /n texto2/;
// el cual saldria error y para solucionar esto seria
	var expresion3 = /texto1 \/n texto2/;