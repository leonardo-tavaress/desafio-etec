const readline = require('readline-sync')
const state = require('./state.js')


async function robot(){
    
    const content = state.load()
    content.userInput = readline.question("[input-robot] Write a text: ")
    state.save(content)
}
module.exports = robot

