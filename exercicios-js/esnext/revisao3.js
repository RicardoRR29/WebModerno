// ES8 Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))
//console.log(Object.keys(obj))

// Melhorias no Notação Literal
const nome = 'Carla'
const pessoa = {
    nome, //não necessário repetição nome: nome,
    ola() {  //não necessário repetição ola: function() {}
        return 'Oi gente!'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'au au!'
    }
}

console.log(new Cachorro().falar())