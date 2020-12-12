let a = 1
console.log(a)

/*
let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(3, 4) //só será considerado o primeiro valor
})

p.then(function(valor, x) {
    console.log(valor, x)  // result: 3 undefined
})
*/


const primeiroElemento = array => array[0]

const primeiraLetra = string => string[0]

const letraMinuscula = letra => letra.toLowerCase()

let p = new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel']) /*só será considerado o primeiro valor*/
})

p
.then(primeiroElemento)
.then(primeiraLetra)
.then(letraMinuscula)
.then(console.log)
    // .then()

new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel']) /*só será considerado o primeiro valor*/
})
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)
        // .then()