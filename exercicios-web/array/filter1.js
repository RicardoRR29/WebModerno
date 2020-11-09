const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const isFragile = p => p.fragil
const isExpensive = p => p.preco > 500    //métodos utilizados no filter


console.log(produtos.filter(function(p) {
    return false
}))

console.log(produtos.filter(isFragile))     //utilizando filter
console.log(produtos.filter(isExpensive))