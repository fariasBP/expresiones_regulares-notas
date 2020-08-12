var expresion1 = /\d+/.exec('Del año 2985');
console.log(expresion1);

var expresion2 = /algo+/i;
console.log(expresion2.exec('es algo bueno'));

console.log('Hasta 1994'.match(/\d+/));

console.log("hafsl asgjls {{1+1}} sdjfg {{var x = 'hola';}}".match(/[^\{\}]+(?=\})/g));
console.log("hafsl asgjls <?php1+1?> sdjfg {{var x = 'hola';}}".match(/[^\{\}]+/g));
console.log("hafsl asgj.ls <?php 1+1 ?> 54675.jff 543.g {{var x = 'hola';}}".match(/[\d]+(?=\.)/g));
//console.log(eval())