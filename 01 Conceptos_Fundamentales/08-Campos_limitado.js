/*
AGREGAR COMPOS LIMITADOS
	- {} -> define dentro de las llaves la cantidad de campos que debe tener
		x,y = Numeros
		- {x,y} -> {minimo de campos, maximo de campos}
		- {x} -> {campo exacto que debe tener}
		- {x,} -> {minimo de campos} -> no existe un maximo de campos puede ser hasta infinito
*/
// evaluar fecha 03-05-2018 19:40
var expresion1 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2,}/;
console.log(expresion1.test('03-05-2018 19:42'));