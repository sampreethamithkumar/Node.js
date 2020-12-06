//  var hello = 'Hello';

const EventEmitter = require('events');

class Logger extends EventEmitter {

    log(message) {
        console.log(message);

        // Raise an event.
        this.emit('logging', {id:1, value: 10});
    };
    
}


module.exports = Logger;