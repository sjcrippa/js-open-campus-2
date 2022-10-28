// Operador .valueOf() - Obtener valores numericos a partir de literales

let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a + b);
console.log(a.valueOf() + b.valueOf());

console.log(b.valueOf()); // en vez de sumar ambas variables completas, solo suma LOS VALORES de ambas variables, asi se obtienen solo los valores primitivos.

let str = new String("Hola soy un string");
console.log(str);
console.log(str.valueOf());


// NaN (Not a Number) - Infinity

let n = Number("adios");
console.log(n);
console.log(isNaN(n));

let numerador = 19;
let divisor = 0;

let divisor_2 = null;

console.log(numerador / divisor);

console.log(numerador / divisor_2);

// Como convertir los strings a valores numericos con Number, parseInt, parseFloat

let numero = "5.89";
let num2 = 17.2;

console.log(typeof numero);
console.log(numero + num2);// el signo "+" convierte el number en un string y lo concatena con la otra variable.
console.log(typeof (numero + num2));

console.log(Number(numero) + num2);

console.log(parseInt(numero));

console.log(parseFloat(numero));

let num3 = 4;
console.log(parseInt(num3));
console.log(parseFloat(num3));
// lo de arriba es de lo mas utilizado para obtener o decimales o enteros.


// NUMEROS HEXADECIMALES (base 16, es decir que utiliza 2 bites por cada numero)
//los numeros hexadecimales no son de coma flotante, no existen los decimales dentro de los hexa

let numHex = "0x3a5b7"; 
console.log(parseInt(numHex, 16));


//Obtener los valores maximo y minimo en JavaScript

let min_precision = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log(min_precision); // minimo valor con el que se puede trabajar
console.log(min_valor_JS);
console.log(max_valor_JS);
console.log (2 ** 1023) // esto es 2 elevado a X.
