names = ['bob', 'sam']
moreNames = ['bob', 'sam']

console.log(names === moreNames)//false because JS does not read file contents! Would need to write a program that checks and cmopares each index

let areEquiv = false

names.forEach((item, index) => {
    if (item === moreNames[index]) {
        areEquiv = true
    } else {
        areEquiv = false
    }
})

console.log(areEquiv)//true