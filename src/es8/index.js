const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}

// TRANSFORMO EL OBJETO EN UNA MATRIZ

const entries = Object.entries(data);

console.log(entries);

// SABER CUANTOS ELEMENTOS HAY

console.log(entries.length);

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}

// DEVUELVE LOS VALORES DE UN OBJETO A UN ARRAY

const values = Object.values(data);
console.log(values);
console.log(values.length);

// PADDING ANTEPONER O AGREGAR A UNA CADENA

const string = 'hello';
console.log(string.padStart(7,'hi')); // QUIERO AÑADIR 2 , hello tiene 5, le pongo 7 , añado "hi"
console.log(string.padEnd(12,'----')) // QUIERO AÑADIR 7, hello tiene 5 , le pongo ---- y no se que pasa 

// TRAILING COMAS ES PONER UNA COMA AL FINAL 

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana', // No falla
}

// https://platzi.com/tutoriales/1789-asincronismo-js/5063-las-promesas-y-async-await-logicamente-no-son-iguales-y-te-explico-el-porque/


// PROMESA

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    })
};

// ASYNC Y AWAIT

const helloAsync = async() => {
    const hello = await helloWorld();
    // PODEMOS PONER MAS FUNCIONES
    console.log(hello);
}

// LLAMADA

helloAsync();

const anotherFunction = async() => {
    try{
        const hello = await(helloWorld());
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

anotherFunction();