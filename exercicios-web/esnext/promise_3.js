function gerarNumerosEntre(min, max) {
    if(min > max){
        let [max, min]= [min, max]
        //const [x, y, z] = a  // destructuring x=a[0] y=a[1] z=a[2]
    }

    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

gerarNumerosEntre(10,30)
    .then(num => num * 10)
    .then(numX10 => `O numero gerado foi ${numX10}`)
    .then(console.log)