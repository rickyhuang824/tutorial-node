const EventEmmitter = require('events');

const customEmitter = new EventEmmitter();

customEmitter.on('response', (name, id) => {
    console.log(`data received ${name}, ${id}`);
})

customEmitter.on('response', () => {
    console.log('data received again');
})

customEmitter.emit('response', 'john', 34);