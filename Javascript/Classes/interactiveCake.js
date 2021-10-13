class Cake {

    constructor(flavor, icing, decoration) {
        this.flavor = flavor || "lemon";
        this.icing = icing || "vanilla";
        this.decoration = decoration || "M&Ms";

    }
    
    describe() {
        console.log(`It is a ${this.flavor} cake with ${this.icing} icing and decorated with ${this.decoration}`)
    }

}