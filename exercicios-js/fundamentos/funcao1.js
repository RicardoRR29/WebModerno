//função sem retorno
function imprimirSoma(a,b) {
    console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(2)           // Como não foi passado um segundo valor, a função faz 2 + undefined, que dá NaN
imprimirSoma(2,10,3,4,5,6,7)
imprimirSoma()

// Função com retorno
function soma(a,b=1) {    //Se não for passado um valor para b, b = 1
    return a + b
}
console.log(soma(2,3))
console.log(soma(2))
console.log(soma())