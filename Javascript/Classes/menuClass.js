class Menu {
    constructor(burger, fries, shake, salad) {
        this.burger = burger || 5
        this.fries = burger || 3.5
        this.shake = shake || 1.11
        this.salad = salad || 4.25
    }
    //create order as method on class

    order(orderArray) {//need to enter array
        return orderArray.reduce((runningTotal, item) => {
            return runningTotal + this[item]
        }, 0)
    }
}
let fancyDiner = new Menu(8, 5, 3.5, 7)

console.log(fancyDiner.order(["burger", "burger", "fries", "salad"]))//24.50