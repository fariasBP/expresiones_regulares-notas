Escapes de carácter

El carácter de barra diagonal inversa (\) en una expresión regular indica que el carácter que le sigue es un carácter especial (como se muestra en la tabla siguiente) o que se debe interpretar literalmente. Para más información, consulte Escapes de carácter.
Carácter de escape 	Description 	Modelo 	Coincidencias

\a 	Coincide con un carácter de campana, \u0007. 	\a 	"\u0007" en "¡Error!" + '\u0007'

\b 	En una clase de caracteres, coincide con un retroceso, \u0008. 	[\b]{3,} 	"\b\b\b\b" en "\b\b\b\b"

\t 	Coincide con una tabulación, \u0009. 	(\w+)\t 	"artículo1\t", "artículo2\t" en "artículo1\tartículo2\t"

\r 	Coincide con un retorno de carro, \u000D. (\r no es equivalente al carácter de nueva línea, \n). 	\r\n(\w+) 	"\r\nEstas" en "\r\nEstas son\ndos líneas."

\v 	Coincide con una tabulación vertical, \u000B. 	[\v]{2,} 	"\v\v\v" en "\v\v\v"

\f 	Coincide con un avance de página, \u000C. 	[\f]{2,} 	"\f\f\f" en "\f\f\f"

\n 	Coincide con una nueva línea, \u000A. 	\r\n(\w+) 	"\r\nEstas" en "\r\nEstas son\ndos líneas."

\e 	Coincide con un escape, \u001B. 	\e 	"\x001B" en "\x001B"

\ nnn 	Usa la representación octal para especificar un carácter (nnn consta de dos o tres dígitos). 	\w\040\w 	"a b", "c d" en "a bc d"

\x nn 	Usa la representación hexadecimal para especificar un carácter (nn consta de exactamente dos dígitos). 	\w\x20\w 	"a b", "c d" en "a bc d"

\c X   o tambien   \c x 	Coincide con el carácter de control ASCII especificado por X o x, donde X o x es la letra del carácter de control. 	\cC 	"\x0003" en "\x0003" (Ctrl-C)

\u nnnn 	Coincide con un carácter Unicode usando la representación hexadecimal (exactamente cuatro dígitos, según representa nnnn). 	\w\u0020\w 	"a b", "c d" en "a bc d"

\ 	Cuando va seguido de un carácter que no se reconoce como un carácter de escape en esta y otras tablas de este tema, coincide con ese carácter. Por ejemplo, \* es igual que \x2Ay \. es igual que \x2E. Esto permite que el motor de expresiones regulares elimine la ambigüedad de los elementos del lenguaje (como * o ?) y los literales de carácter (representados por \* o \?). 	\d+[\+-x\*]\d+