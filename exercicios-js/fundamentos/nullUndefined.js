let valor // não inicializada
console.log(valor)
//console.log(valor2) diferente de undefined

valor = null // ausência de valor "vazia"
console.log(valor)
//console.log(valor.toString()) // Erro! Não tentar acessar valores nulos

const produto = {} 
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco= undefined // evite atribuir undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)