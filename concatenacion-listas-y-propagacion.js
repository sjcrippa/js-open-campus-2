// Como unir dos listas .concat(lista2)

const lista1 = ["hola", 2, false, null];
const lista2 = ["chau", 7, true, undefined];

console.log (lista1.concat(lista2));
console.log(lista1)

const lista3 = lista1.concat(lista2);
console.log(lista3);

// A partir de ES6, se hace lo siguiente:
// Se utiliza el factor de propagación (...listas):
console.log(...lista3);

const lista4 = [...lista1, ...lista2]
console.log(lista4);

// ERROR!!!!!!!!!!! Mal entendido el concepto del factor de propagacion
const lista5 = [lista1, lista2];
console.log(lista5);

