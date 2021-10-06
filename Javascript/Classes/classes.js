//Classes are for making lots of objects with the same methods, but different data. A class defines a type of object.
//An instance is an individual object of that type. Each instance has it's own state

//makes a new empty object, sets the object's class, sets this to point to the new instance, calls the constructor function and INITIALIZES or returns a new object instance

class Circle {
    constructor(rad, color = 'white', size = 'medium sized') {//color = 'white' setting default color
        this.radius = rad;
        this.color = color;//can also do color ||'white' to set the default here
        this.size = size;
    }

    circ() {
        return Math.PI * this.radius * 2
    }
    area() {
        return Math.PI * this.radius ** 2
    }

    describe() {
        console.log(`This is a ${this.size}, ${this.color} circle with a radius of ${this.radius}`)
    }
}

let smallCircle = new Circle(2, "green", "small");

console.log(smallCircle.circ());//12.566
console.log(smallCircle.describe())
console.log(smallCircle);//12.566

let bigCircle = new Circle(10, "red", "big");
console.log(bigCircle.describe())

console.log(bigCircle.circ());//62.3818...
console.log(bigCircle);