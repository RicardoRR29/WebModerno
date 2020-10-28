const schedule = require('node-schedule')

//executar de 5 em 5 segundos(*/5), qualquer minuto(*),12 horas(12), todos meses(*), qualquer mes(*), terça-feira(2) 
const tarefa1 = schedule.scheduleJob('*/5 * 11 * * 2', function() {
    console.log('Executando tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Rag]