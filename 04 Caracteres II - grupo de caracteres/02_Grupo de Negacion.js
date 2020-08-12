/*GRUPO DE NEGACION
    Negación: coincide con cualquier carácter individual que no esté en grupo_caracteres. 
    De forma predeterminada, los caracteres de grupo_caracteres distinguen entre mayúsculas 
    y minúsculas.
    TEMAS:
        - [^] -> Para hacer negaciones de un conjuto de expresiones (ojo: tiene que estar dentro de los corchetes por que es negacion de conjunto de expresiones)
    SINTAXIS:
        - [^Grupo_de_caracteres]
*/

// EJEMPLO 1 - probando la negacion
// verifca si no hay algunos de los caracteres dentro de los corchetes - lo contracion al grupo de caracteres
    var exp1 = /[^abc]/; // verifica que no exista las letras a, b, o c.
    var texto1 = 'hey';

    console.log(exp1.test(texto1)); // menciona si no ha las letra a, b, c en 'hey' lo que dara true
    console.log(texto1.match(exp1) + '\n'); // extra la letra que no sea a, b, c lo que dara es "h"

// EJEMPLO 2 - diferencia de usar y no usar negacion 
    var expresion1 = /[01]/; // verificamos si existe un codigo binario
    console.log(expresion1.test('10100100100110001'));//true
    var expresion2 = /[^01]/; // verificamos que no exista un codigo binario
    console.log(expresion2.test('10100100100110001'));//false