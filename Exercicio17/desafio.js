const getFlagValue = require('./meuModulo.js')

console.log(`Oi ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`)