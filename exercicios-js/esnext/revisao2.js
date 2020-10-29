// Arrow function
const soma = (a, b) => a + b  //função anonima + return implícito
console.log(soma(2,3))

// Arrow function (this)
const lexico1 = () => console.log(this === exports) //em arrow functions o this aponta SEMPRE para o module.exports
const lexico2 = lexico1.bind({})                    //mesmo tentando forçar a mudar de contexto usando bind  
lexico1()                                           // não ocorre em função tradicional
lexico2()

// parametro default
function log(texto = 'Node') {
    console.log(texto)
}
log()
log(undefined)
log('Sou mais forte')
log(null)

// operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(1,5,8,6,7))