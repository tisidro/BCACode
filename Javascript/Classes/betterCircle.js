class Circle {
    constructor(radius) {
        if (radius <= 0) {
            throw ('radius must be a positive number')//throw is a special built in function that forces an error
        }
        this.radius = radius;
    }
    circumference() {
        return Math.PI * this.radius * 2;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
//Use it like this...

let circle = new Circle(2);  // create a new Circle instance with radius 2
console.log(circle.area()); // call the area method for the circle taking in radius of 2, which returns 12.566370614359172

let newCircle = new Circle(0);  // create a new Circle instance with radius 0
console.log(newCircle.area());//throws error'radius must be a positive number'
