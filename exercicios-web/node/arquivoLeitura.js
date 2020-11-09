const fs = require('fs') //filesystem que já é previamente instalado

const caminho = __dirname + '/arquivo.json'

// sincrono                                       //não usar em arquivos pesados
const conteudo = fs.readFileSync(caminho, 'utf-8')   
console.log(conteudo)

// assincrono                 //dar preferencia para essa leitura, lendo toda a página primeiro

fs.readFile(caminho, "utf-8", (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//sincrono novamente
const config = require('./arquivo.json')
console.log(config.db)

//leitura do diretorio atual
fs.readdir(__dirname, (err, arquivos) => {
    console.log('conteúdo da pasta...')
    console.log(arquivos)
})
