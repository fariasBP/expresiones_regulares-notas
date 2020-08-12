/*
PATRONES OPCIONALES
	- ? -> para que el caracter a la izquierda de este simbolo sea opcional (dicho tambien que no sea necesario que exista)
*/
var expresion1 = /Como T?u? ?Estas/; // evaluamos si existe la expresion "Como Tu Estas" o "Como Estas"
console.log(expresion1.test('Como Tu Estas'));//true
console.log(expresion1.test('Como Estas'));//true

// en el caso del espacio entre el "Tu" y el "Estas"
var expresion2 = /Como T?u? Estas/; // es necesario colocar el espacio si no saldria error como esto:
console.log(expresion2.test('Como Estas'));//false
