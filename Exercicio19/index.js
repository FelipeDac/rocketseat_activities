const { inherits }  = require('util')
const { eventEmitter } = require('events')

function character(name) {
    this.name = name
}

inherits(character, eventEmitter)

const chapolin = new character('Chapolin')
chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} colorado!`))

console.log('Oh! E agora, quem poderá me defender?')
chapolin.emit('help')