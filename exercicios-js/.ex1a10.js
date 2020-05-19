// 1)
/*
function Operacoes(a,b){
    console.log(a+b)
    console.log(a-b)
    console.log(a*b)
    console.log(a/b)
}
*/
/* Versão Arrow
Operacoes = (a,b) => console.log(a+b, a-b, a*b, a/b)

Operacoes(3,4)
*/ 
// 2)
/*
isTriangule = (a,b,c) => {
    if(a!=b && a!=c && b!=c){
        return 'Escaleno'
    };
    if(a==b && a==c && b==c){
        return 'Equilatero'
    };
    return 'Isósceles'
}
console.log(isTriangule(12,12,20))
console.log(isTriangule(12,12,12))
console.log(isTriangule(12,15,20))
*/

// 3)
/*
baseElevada = (base, exp) => base**exp
console.log(baseElevada(2,5))
*/
// 4)
/*
impRestoDiv = (dividendo, divisor) => {
    console.log('Resultado: ', dividendo / divisor)
    console.log('Resto: ', dividendo % divisor)
}
impRestoDiv(1022,100)
*/
// 5)
/*
console.log(0.1 + 0.2)
*/
retornaDinheiro = (valor) => {
    console.log('R$',valor - valor % 1,',',valor % 1)
}
retornaDinheiro(12.5)