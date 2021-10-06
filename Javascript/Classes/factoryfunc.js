//what if you don't have radius, but instead have diameter?

class Circle {
    static greenDiam(diameter) {
        return new Circle(diameter / 2,
            "green")
    }//using it as factory method...don't need to call circle b/c greenDiam does it...if it's in Circle you need to use the word static to bind it to the class. It goes above the constructor to indicate it is attached to the class

    constructor(radius) {
        this.radius = radius;
    }
    circumference() {
        return Math.PI * this.radius * 2;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }

}
//When the constructor accepts different parameters from the ones that you have on hand, you could define a factory function like this. If you write factor functions inside the Class, be sure to put static in front of method

function circleFromDiameter(diameter) {
    return new Circle(diameter / 2);
    //this refers to the Circle class above, but it has to have the function in front of it

}
let greeny = Circle.greenDiam(10)//note that the Class must be capitalized

console.log(greeny)


//preserves encapsulation -- the idea that an object should be responsible for setting its own properties

//ENCAPSULATION:Prevents accidental reassignmentAllows consistent and predictable outcomesPreserves the state of the data



