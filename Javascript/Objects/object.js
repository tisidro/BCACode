
const readline = require('readline')
const rli = readline.createInterface(process.stdin, process.stdout)
function ask(questText) {
    return new Promise((res, rej) => {
        rli.question(questText, res)
    })
}


let states = {
    VT: 'Vermont',
    CA: 'California',
    MA: 'Massachusetts',
    NY: 'New York'
};

async function whichState() {
    let abbrev = await ask(`Tell me the abbreviation and I'll tell you the full name`)

    console.log(states[abbrev]);
    process.exit()
}


whichState()


