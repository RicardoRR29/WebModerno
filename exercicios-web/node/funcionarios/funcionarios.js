const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// mulher chinesa com menor salário

const isChinese = pessoa => pessoa.pais === 'China'
const isWoman = pessoa => pessoa.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual 
}

axios.get(url).then(response => {
    const funcionarios = response.data
    
    const func = funcionarios
        .filter(isChinese)
        .filter(isWoman)
        .reduce(menorSalario)
    console.log(func)
})
