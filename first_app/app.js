// const EventEmitter = require('events');


// const Logger = require('./logger');
// const logger = new Logger();


// logger.on('logging', (arg) => {
//     console.log('Logging from event listerner');
// })

// logger.log('Message');


// const logger = require('./logger');
// function sayHello(name) {
//     console.log('Hello ' + name);
// }


// sayHello('sampreeth');

// logger.log('Hello world');


// const fs = require('fs');

// // Synchornours file read directory
// // const files = fs.readdirSync('./');
// // console.log(files);

// // Asynchronous file read directory

// fs.readdir('./', function(err,files) {
//     if (err) console.log('Error',err);
//     else console.log('Result ', files);
// })

const http = require('http');

const server = http.createServer((req,res) => {
    if (req.url === '/'){
        res.write('Hello world');
        res.end();
    }

    if (req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3,4]));
        res.end();
    }
});


// server.on('connection', (socket) => {
//     console.log('New Connection....');
// })

server.listen(3000);

console.log('Listening on port 3000....');
