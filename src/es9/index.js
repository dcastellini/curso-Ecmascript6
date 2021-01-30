const obj = {
    name: 'oscar',
    age: 32,
    country: 'MX',
};

// TODO LO DEMAS DENTRO DEL OBJETO LO GUARDO EN ALL

let { country, ...all } = obj;
console.log(all);

const obj = {
    name : 'oscar',
    age: 34
}

const obj1 = {
    ...obj, // OPERADOR DE PROPAGACION , UNE OBJ A OBJ1
    country: 'MX'
}

console.log(obj1);

// PROMESA CON THEN CATCH Y FINALLY

const helloWorld = () => { 
    return new Promise((resolve,reject) => {
        (true)
            ? setTimeout(() => resolve('Hello world'), 3000) // LE AGREGO COMPLEJIDAD
            : reject(new Error('Test Error'))
    });
};

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Finalizo'))


// EXPRESION REGULAR

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20'); // MATCH

const year = match[1];
const month = match[2];
const day = match[3];

console.log(year,month,day);
