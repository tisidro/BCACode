//inheritance example showing extend class

class Shape {
  constructor (shape, numSides) {
    this.shape = shape
    this.numSides = numSides
  }

  changeShape (newShape) {
    this.shape = newShape
  }
}

let octagon = new Shape('octagon', 8)

//when setting up child classes want child to do what parent can do and then more

class Rectangle extends Shape {
  constructor (length, width) {
    //call parents constructor with super
    super('rectangle', 4)
    this.length = length
    this.width = width
  }

  area () {
    return this.length * this.width
  }
}

octagon.changeShape('dodecahedron')
