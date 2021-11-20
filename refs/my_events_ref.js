const EventEmitter = require('events')

class Logger extends EventEmitter {
    log(message) {
        this.emit('message', `${message} ${Date.now()}`)
    }
}

const logger = new Logger()

logger.on('message', data => {
    console.log(data)
})


logger.log('Olga Ivanova')
logger.log('SKTVp20')
logger.log(2021)


