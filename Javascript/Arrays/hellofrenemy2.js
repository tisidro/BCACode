const readline = require('readline')
const rli = readline.createInterface(process.stdin, process.stdout)

function ask(questionText) {
    return new Promise((res, rej) => {
        rli.question(questionText, res)
    })
}

async function greeter() {
    let name = await ask('What is your name? ')

    let frenemy = name.toLowerCase().trim()

    let enemies = ['vader', 'sauron', 'robotnik', 'alduin', 'chicken man']

    if (enemies.includes(frenemy)) {
        console.log("NOOOOOOO! That's impossible!")
        process.exit()
    } else {
        let properName = name.split(' ').map((word) => {
            let firstLett = word[0].toUpperCase()
            let rest = word.slice(1).toLowerCase()

            return firstLett + rest
        })

        console.log(`Hello, ${properName.join(' ')}`)
    }
}

greeter()