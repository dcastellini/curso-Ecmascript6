let array = [1,2,3, [1,2,3, [1,2,3]]];

// APLANAR ARREGLOS

console.log(array.flat(2));

let array = [1,2,3,4,5];

// ME PERMITE MAPEAR EL ELEMENTO, PASAR UNA FUNCION Y APLANARLO SEGUN EL RESULTADO

console.log(array.flatMap(value => [value, value * 2]));

// ELIMINAR ESPACIOS EN BLANCO DE UN STRING AL PRINCIPIO

let hello = '                 hello world';
console.log(hello);
console.log(hello.trimStart());

// ELIMINAR ESPACIOS EN BLANCO DE UN STRING AL FINAL

let hello = 'hello world        ';
console.log(hello);
console.log(hello.trimEnd());



try {

} catch(error){
    error
}

// TRANSFORMA EL ARREGLO EN OBJETOS

let entries = [["name", "oscar"], ["age", 32]];

console.log(Object.fromEntries(entries));


let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);

// Accedo a la descripcion de un objeto de tipo Symbol
console.log(symbol.description);