const imprimirResultado = function(nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra')     //uma vez que entrou no case 10, ele sai executando todos os codigos abaixo
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3 , 2 , 1 , 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }    
}


imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.5)
imprimirResultado(11)
imprimirResultado(-1)