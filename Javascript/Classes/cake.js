//this is throwing an error no matter what
let something

class Cake {

    constructor(flavor, icing, decoration) {
    if(typeof flavor !== "string" && typeof icing !== "string" && typeof decoration !== "string"){

       throw(`enter string (words) types only!`)
    }
            
       this.flavor = flavor || "lemon";
        this.icing = icing || "vanilla";
        this.decoration = decoration || "M&Ms"; 
            
    }//this gives default values



    describe() {
 console.log(`It is a ${this.flavor} cake with ${this.icing} icing and decorated with ${this.decoration}`)
 
 while (){
let count = 0
        if {
            console.log(`YUM! What a great slice of cake!`)
        } else {
            console.log(`No more cake for you, you've had enough!`)
           
        }
    }

}

let myCake = new Cake("chocolate", "caramel", "sprinkles");

let tinaCake = new Cake("tuna", "mouse", "moths");

let franCake = new Cake("red velvet", "cream cheese", "chocolate chips")

let someCake = new Cake()


console.log(myCake.describe())//It is a chocolate cake with caramel icing and decorated with sprinkles)

console.log(tinaCake.describe())//It is a tuna cake with mouse icing and decorated with moths

console.log(franCake.describe())//It is a red velvet cake with cream cheese icing and decorated with chocolate chips

console.log(someCake.describe())//"default cake"



console.log(myCake.describe())//It is a chocolate cake with caramel icing and decorated with sprinkles)

console.log(tinaCake.describe())//It is a tuna cake with mouse icing and decorated with moths

console.log(franCake.describe())//It is a red velvet cake with cream cheese icing and decorated with chocolate chips

console.log(someCake.describe())//"default cake"
