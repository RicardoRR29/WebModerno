// par nome/valor
const saudacao = 'Opa' // contexto lexico 1

function exec() {
    const saudacao = 'Falaaa' // contexto lexico 2
    return saudacao
}

// Objetos são grupos aninhados
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {                              //contexto lexico 3
        logradouro: 'Rua Top',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)