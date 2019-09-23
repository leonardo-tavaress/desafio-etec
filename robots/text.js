const sentenceBoundaryDetection = require('sbd')
const state = require('./state.js')

async function robot(){
    const content = state.load()
    
    content.sentences = []
    console.log("> [text-robot] Breaking the text in to sentences...")
    //Obtendo um array com cada sentença e adicionando-o à um array no content
    const sentences = sentenceBoundaryDetection.sentences(content.userInput)
    sentences.forEach((sentence) => {
        content.sentences.push({
            text: sentence
        })
    })
    console.log("> [text-robot] Action successful")
    state.save(content)
}
module.exports = robot