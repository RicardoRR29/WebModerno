const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

/*
MINHA RESPOSTA
const isTodoAlunoBolsista = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    //console.log(acumulador, atual)
    return acumulador * atual > 0
})
*/

// Desafio 2: Algum aluno é bolsista?
const algumBolsistas = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsistas))


/*
MINHA RESPOSTA
const algumAlunoBolsista = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    //console.log(acumulador, atual)
    return acumulador + atual > 0
})
*/

/*
console.log(isTodoAlunoBolsista)
console.log(algumAlunoBolsista)
*/