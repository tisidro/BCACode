let abby = {
    species: 'dog',
    color: 'brown',
    spayed: true,
    breed: 'mutt',
    weight: 40,
    favoriteActivity: 'chasing squirrels'
};

let attribute = "color"
console.log(abby.color)
console.log(abby['color'])

abby.color = "grey"//resetting object property to grey
abby['breed'] = 'dobie'//resetting breed

console.log(abby)//we have updated color property so now it shows as grey and breed shows as dobie