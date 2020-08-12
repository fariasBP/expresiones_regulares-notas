/*
USANDO SHORTCUTS O ATAJOS
	- \d -> cualquier número
	- \w -> cualquier letra o número (alfanumerico)
	- \s -> cualquier espacio en blanco incluido tabs, salto de línea o similares
	- \D -> cualquier carácter que no sea número
	- \W -> cualquier carácter que no sea alfanumérico
	- \S -> cualquier carácter que no sea expacio en blanco
	- .  -> cualquier carácter excepto nuevas líneas
*/

// creamos una expresion para una fecha numerica con el atajo \d
	var expresion1 = /\d\d-\d\d-\d\d\d\d/;
	console.log(expresion1.test('03-05-2018')); //true
	console.log(expresion1.test('03-mayo-2018')); //false