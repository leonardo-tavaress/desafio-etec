const readline = require('readline')
const robots = {
    text: require('./robots/text.js'),
    state: require('./robots/state.js'),
    image: require('./robots/video.js')
}

async function start(){
    const content = robots.state.load()

    //Criando as configurações de leitura
    const leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });   
    
    //Function de callback para obtenção de dados do console
    leitor.question("> [input-robot] Write a text: ", async function(answer) {
        //Obtendo o texto do usuário
        content.userInput = answer
        robots.state.save(content)
        leitor.close()

        //Quebra em sentenças
        await robots.text()
        //Gera as legendas e o vídeo
        await robots.image()
    });    
}
start()