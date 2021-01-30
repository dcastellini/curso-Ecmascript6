function newFunction(name, age, country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'ARG';
    console.log(name,age,country);
}

// es6
// Parametros por defecto
function newFunction2(name = 'oscar', age = 32, country = 'ARG'){
    console.log(name,age,country);
}

newFunction2(); // toma los elementos por defecto
newFunction2('Damian', '23', 'MX'); // le paso los elementos y piso lo que estaba


let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;

console.log(epicPhrase);

// TEMPLATE LITERAL ES PARA CONCATENAR COMILLAS FRANCESAS `` 

let epicPhrase2 = `${hello} ${world}`;

console.log(epicPhrase2);

let lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n"
    + "Otra frase Epica que necesitamos."

// CONCATENACION CON COMILLAS FRANCESAS

let lorem2 = `Otra frase epica
agrego mas cosas
`;

console.log(lorem);
console.log(lorem2);

// OBJETO PERSON CON 3 ELEMENTOS

let person = {
    'name': 'oscar',
    'age': '32',
    'country': 'ARG'
}

// ACCEDIENDO A LOS OBJETOS 
console.log(person.name, person.age);

// DESESTRUCTURO EL OBJETO
let { name, age, country } = person;
console.log(name,age,country);

// ...array concatena

let team1 = ['Oscar','Julian','Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];


{   
    // VAR ES GLOBAL
    var globalvar = "Global var";
}

{
    // LET ES SOLO CONTEXTUAL EN EL SCOPE
    let globalLet = "Global let";
    console.log(globalLet);
}

console.log(globalvar);

// CONSTANTE QUE NO PUEDE CAMBIAR
const a = 'b';
a = 'a'


let name = 'oscar';
let age = 32;
// es5
obj = {name: name, age: age};
// es6
obj2 = {name, age};

console.log(obj);
console.log(obj2)

// FUNCIONES FLECHA

const names = [
    {name: 'Oscar', age: 32, country: 'ARG'},
    {name: 'Damian', age: 31, country: 'MEX'}
]

// AL OBJETO NAMES LE ENVIO UNA FUNCION ANONIMA

let listOfNames = names.map(function(item){
    console.log(item.name);
})

// CON ARROW FUNCTION

let listOfNames2 = names.map(item => console.log(item.name));

// ENVIO LOS PARAMETROS

const listOfNames3 = (name, age, country) => {
    console.log(name, age, country)
}

// ENVIO UN SOLO PARAMETRO

const listOfNames4 = name => {
    console.log(name);
}

// ARROW FUNCTION ACOTADA

const square = num => num * num;


// PROMESA
// RESOLVE = RESUELVE
// REJECT = RECHAZA

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!');
        } else {
            reject('Oops!');
        }
    });
}

// EJECUCION DE PROMESA
// SE PUEDEN ANIDAR LOS "THEN"

helloPromise()
.then(response => console.log(response)) //RESOLVE
.catch(error => console.log(error)) //REJECT

// CLASES 

class calculator {
    // INICIALIZAMOS LA CLASE
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    // METODO DEL OBJETO
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }

}

// INSTANCIO EL OBJETO 
const calc = new calculator();

console.log(calc.sum(2,2));

// IMPORTACION Y EXPORTACION NODE.JS

const hello = require('./module');

console.log(hello());

// GENERATOR * FUNCION ESPECIAL QUE RETORNA DISTINTOS VALORES
// YIELD ES EL RETURN

function* helloWorld(){
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
}   

const generatorHello = helloWorld();

console.log(generatorHello.next().value); // OBTENGO LA PRIMER LOGICA Hello
console.log(generatorHello.next().value); // OBTENGO LA SEGUNDA LOGICA World
console.log(generatorHello.next().value); // OBTENGO LA TERCER LOGICA undefined