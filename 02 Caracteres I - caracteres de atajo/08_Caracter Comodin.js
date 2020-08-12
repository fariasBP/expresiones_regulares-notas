//  . 	
// Carácter comodín: coincide con cualquier carácter excepto con \n.
// Para coincidir con un carácter de punto literal (. o \u002E), debe anteponerle 
// el carácter de escape (\.).

// el punto remplaza a cualquier caracter ej. ho.a daria true con hola hoja hosa etc....

var exp1 = /a.e/; // busca loa caracteres en la cual el primero sea 'a' el segundo sea 'e' y el del medio cualquier caracter
var text1 = 'llave'; // sale ave por que hay una 'a' al principio y una 'e' al final
console.log(text1.match(exp1) + '\n');