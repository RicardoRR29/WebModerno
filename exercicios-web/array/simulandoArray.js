const quaseArray = { 0: 'Rick', 1: 'Oli', 2: 'Lily'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {            //criando o atributo toString
    value: function() { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)