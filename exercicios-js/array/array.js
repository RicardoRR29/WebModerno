console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados =['Bia','Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[7] = 'Paulo'
aprovados.push('Ricardo')
console.log(aprovados.length)

console.log(aprovados[5] === null)
console.log(aprovados[5] === undefined)

console.log(aprovados)
aprovados.sort()          // Ordena o array
console.log(aprovados)

delete aprovados[1]

aprovados =['Bia','Carlos', 'Ana']
aprovados.splice(1,1) //exclui de um elemento até o outro
console.log(aprovados)

aprovados =['Bia','Carlos', 'Ana']
aprovados.splice(1,2, 'Elemento1', 'Elemento2') //exclui de um elemento até o outro e adiciona o que foi passado como parametro extra
console.log(aprovados)

aprovados =['Bia','Carlos', 'Ana']
aprovados.splice(1,0, 'Elemento1', 'Elemento2') //não exclui nada, mas a partir da posição escolhida ele adiciona o que foi passado como parametro extra
console.log(aprovados)

//SPLICE É TOPP