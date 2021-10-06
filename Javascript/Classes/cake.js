

class Cake {

    constructor(flavor, icing, decoration) {
        this.flavor = flavor || "lemon";
        this.icing = icing || "vanilla";
        this.decoration = decoration || "M&Ms";

    }//this gives default values


    describe() {

        console.log(`It is a ${this.flavor} cake with ${this.icing} icing and decorated with ${this.decoration}`)

        let count = 0;
        if (count < 10) {

            console.log(`YUM! What a great slice of cake!`)
        } else {
            console.log(`Boo hoo we are all out of cake!`)
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