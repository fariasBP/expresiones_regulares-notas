//  (?< nombre1 - nombre2 > subexpresión )	
// Define una definición de grupo de equilibrio. Para obtener más información, 
// consulte la sección "Definiciones de grupos de equilibrio" en Grouping Constructs.
var exp1 = /(((?'Open'\()[^\(\)]*)+((?'Close-Open'\))[^\(\)]*)+)*(?(Open)(?!))$/;
var text1 = '3+2^((1-3)*(3-1))';

console.log(text1.match(exp1));

/// AUN NO ENTENDIDO ESTA EXPRESION
/// ERROR