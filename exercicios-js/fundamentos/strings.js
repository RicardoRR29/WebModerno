const escola = "Cod3r"

console.log(escola.charAt(4))

console.log('digito no indice 5:', escola.charAt(5)) //comecei a usar a extensão Wrap console log
console.log('valor da letra na tabela ASC:', escola.charCodeAt(3))


console.log('substring:', escola.substring(1))
console.log('substring:', escola.substring(0,3))

console.log('Escola: '.concat(escola).concat("!"))
console.log('Escola: '+ escola +"!")

console.log(escola.replace(3,'e'))
console.log(escola.replace(/\d/,'e')) // d = digitos
console.log(escola.replace(/\w/g,'e')) // w = letras e digitos,  g = global

console.log('Ana,Maria,Pedro:'.split(','))