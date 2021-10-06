let rectangle = {
    height: 10,
    width: 8,
    area: function () {
        return this.height * this.width;
    }
}

let rectangle2 = {
    height: 25,
    width: 7,
    area: function () {
        return this.height * this.width;
    }
}
console.log(rectangle.height)   //=> 10
rectangle.area()   //=> 80


rectangle2.height   //=>
rectangle2.area()   //=> 

  //this keyword refers to the object that called the method