// Como trabajar con listas (arrays, arreglos, vectores)

let var1 = 2;
let array = [1, "hola", false, {id: 5}, null, undefined, var1];

console.log (array);

// Acceder a los valores de un array a traves de su posicion

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);

// Metodos para introducir nuevos valores en arrays.
// .push() y .unshift() => mutan el valor del array.

// .push() para que los valores se agreguen al final
array.push("final", 45, 100, false);
console.log(array)

// .unshift() para que lso valores sean al principio
array.unshift("hola", 213);
console.log(array);

const array2 = [1, 3, "hola", false];

// Metodos para eliminar valores en nuestros arrays
// ,pop() .shift() => Mutan el valor del array

// valores al final => Pop
array2.pop();
console.log(array2);

// Valores al principio => Shift
array2.shift()
console.log(array2);

// Metodo para eliminar, modificar o añadir valores en nuestros arrays
// .splice(x, y, z)

const array3 = [1, 2, 3, 4, 5, 6]

// Eliminar valores .splice(indice, numValoresAEliminar)

array3.splice(2, 3); // a partir del indice, que en este caso seria el 2, elimina todo lo que le digas despues, en este caso, las 3 posiciones.
console.log(array3);

// Añadir valores .splice(indice, 0, valores)

array3.splice(2, 0, "hola", 3, 20);
console.log(array3);

// Modificar valores .splice(indice, 1, valores)

array3.splice(2, 1, 3)
console.log(array3);
