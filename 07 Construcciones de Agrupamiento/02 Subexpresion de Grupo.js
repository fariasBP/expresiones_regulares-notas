//    (?< name > subexpresión ) 	
// Captura la subexpresión coincidente en un grupo con nombre.
var exp1 = /(?<double>\w)\k<double>/;
var text1 = 'aron';
console.log(text1.match(exp1));
///     SALE ERROR AUN NO ENTENDIDO ESTAS CLASES DE ESPRESIONES
///     ERROR