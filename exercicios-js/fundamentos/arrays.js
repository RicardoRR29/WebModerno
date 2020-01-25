const valores = [7.7,8.9,6.3,9.2]
console.log(valores[0],valores[3])
console.log(valores[4]) //não da erro, diferente de outras linguagens

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') //adiciona elementos
console.log(valores)

console.log(valores.pop()) //retira elementos e deixa null
delete valores[0] // exclui elemento selecionado
console.log(valores)

console.log(typeof valores)