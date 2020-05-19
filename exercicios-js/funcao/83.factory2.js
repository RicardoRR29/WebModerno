function criarProduto(nome, preco){
    return {
        nome,
        preco,
        disconto: 0.1
    }
}

console.log(criarProduto("Ipad",5500.49))
console.log(criarProduto('Mi A2', 1150.86))