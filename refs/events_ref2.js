// All EventEmitters emit the event 'newListener' when new listeners are added and 'removeListener' when existing listeners are removed.
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


logger.log('First')
logger.log('Second')
logger.log('Third')