//write the inverse function for the age calculator; one that takes a number of seconds and tells you the exact age. you can get current date by calling Date.now()

let date = new Date(1965, 05, 30, 9, 30) //new Date(year, month, day, hour, minute)

let ageInMilliSec = Date.now() - date

let msToYr = 1000 * 3600 * 24 * 365

let ageInYr = () => ageInMilliSec / msToYr;

console.log(ageInYr)