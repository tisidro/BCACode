//an object is a data structure--it structures data! the data can be nested several layers, but you can access that property by using dots until you access the point at where you want to access the value. see first console.log below...

let alice = {
    name: 'Alice Abrams',
    homeAddress: {
        street: '12 Maple St.',
        location: {
            latitude: 44.4759,
            longitude: -73.2121
        }
    },
    pets: ['Mittens', 'Fido']
}

console.log(alice.homeAddress.location.longitude)//-73.2121

console.log(alice.pets[1])//Fido

console.log(Object.keys(alice))//Object key will give all keys for abby [ 'name', 'homeAddress', 'pets' ]

//or can do 

let allKeys = Object.keys(alice)
console.log(allKeys)//[ 'name', 'homeAddress', 'pets' ]

//another way...

allKeys.forEach((eachKey) => {
    console.log(alice[eachKey])//gives value of each
})
