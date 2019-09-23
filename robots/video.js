const gm = require('gm').subClass({imageMagick: true})
const state = require('./state.js')
const spawn = require('child_process').spawn
const path = require('path')
const rootPath = path.resolve(__dirname, '..')

async function robot(){
    const content = state.load()
    
    await createAllSentenceImages(content) 
    await createAfterEffectsScript(content)
    await renderVideoWithAfterEffects()
    
    state.save(content)
 
    async function createAllSentenceImages(content) {
        console.log('> [video-robot] Creating image of the sentences...')
        for (let sentenceIndex = 0; sentenceIndex < content.sentences.length; sentenceIndex++) {
          await createSentenceImage(sentenceIndex, content.sentences[sentenceIndex].text)
        }
    }
    
    async function createSentenceImage(sentenceIndex, sentenceText) {
        return new Promise((resolve, reject) => {
          const outputFile = `./content/${sentenceIndex}-sentence.png`
    
          const templateSettings = {
            0: {
              size: '1920x400',
              gravity: 'center'
            },
            1: {
              size: '1920x1080',
              gravity: 'center'
            },
            2: {
              size: '800x1080',
              gravity: 'center'
            },
            3: {
              size: '1920x400',
              gravity: 'center'
            },
            4: {
              size: '1920x1080',
              gravity: 'center'
            },
            5: {
              size: '800x1080',
              gravity: 'west'
            },
            6: {
              size: '1920x400',
              gravity: 'center'
            }
    
        }
    
          gm()
            .out('-size', templateSettings[sentenceIndex].size)
            .out('-gravity', templateSettings[sentenceIndex].gravity)
            .out('-background', 'transparent')
            .out('-fill', 'white')
            .out('-kerning', '-1')
            .out(`caption:${sentenceText}`)
            .write(outputFile, (error) => {
              if (error) {
                return reject(error)
              }
    
              console.log(`> [video-robot] Sentence created: ${outputFile}`)
              resolve()
            })
        })
    }
        
    async function createAfterEffectsScript(content) {
        await state.saveScript(content)
    }
    
    async function renderVideoWithAfterEffects() {
        return new Promise((resolve, reject) => {
        const aerenderFilePath = 'C:/Program Files/Adobe/Adobe After Effects CC 2019/Support Files/aerender.exe'
        const templateFilePath = `${rootPath}/templates/1/template.aep`
        const destinationFilePath = `${rootPath}/content/output.mov`
    
        console.log('> [video-robot] Starting After Effects')
    
        const aerender = spawn(aerenderFilePath, [
          '-comp', 'main',
          '-project', templateFilePath,
          '-output', destinationFilePath
        ])
    
        aerender.stdout.on('data', (data) => {
          process.stdout.write(data)
        })
    
        aerender.on('close', () => {
          console.log('> [video-robot] After Effects closed')
          resolve()
          console.log('> [video-robot] Program finished')
        })
        })
    }
}

module.exports = robot