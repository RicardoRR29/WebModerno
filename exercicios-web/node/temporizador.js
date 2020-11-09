const schedule = require('node-schedule')

//executar de 5 em 5 segundos(*/5), qualquer minuto(*),12 horas(12), todos meses(*), qualquer mes(*), terça-feira(2) 
const tarefa1 = schedule.scheduleJob('*/5 * 23 * * 2', function() {
    console.log('Executando tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando tarefa 1!')
}, 20000)

// setImmediate
// setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]//segunda a sexta
regra.hour = 23
regra.second = [30, 10, 20] //

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando tarefa 2!', new Date().getSeconds())
})