//Since JavaScript is a dynamic language, you can add methods to any object.
//remember, this means "this object I'm in right now" which in this case is the rectangle
//this.height on the inside of the object means the same as rectangle.height on the outside

let rectangle = {
    height: 10,
    width: 8,
}

//rectangle.area()   //=> TypeError: rectangle.area is not a function--so let's create it!

rectangle.area = function () {
    return this.height * this.width;
}

console.log(rectangle.area())   //=> 80