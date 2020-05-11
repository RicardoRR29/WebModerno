// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'
//pessoa.end = 'Barra da Tijuca'  EXT
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = { nome: 'Ana'} ERRO

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Joao'})
console.log(pessoaConstante)
