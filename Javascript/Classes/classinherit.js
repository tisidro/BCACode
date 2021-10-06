class Rectangle {
    constructor(length, width) {
        this.length = length
        this.width = width
    }

    area() {
        return this.length * this.width
    }
}

class Prism extends Rectangle {
    static doesItInherit() {
        console.log("yup")
    }

    //fyi...can only have one constructor per class!!
    constructor(length, width, height) {

        super(length, width)
        //super calls parent class's constructor(the rectangle constructor to establish length and width properties)--need this if adding PROPERTIES
        this.height = height

    }

    //make Prism class child of Rectangle

    volume() {
        return this.length * this.width * this.height
    }
}

Prism.doesItInherit()//yup it inherits!

