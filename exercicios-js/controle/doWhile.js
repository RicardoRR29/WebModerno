function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max-min)+min
    return Math.floor(valor)
}

let opcao = 10
do {
    opcao = getInteiroAleatorioEntre(1,11)
    console.log(`Opção igual a ${opcao}`)
} while (opcao!=10)

console.log('Agora sim irmão')
