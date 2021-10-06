let orderItem = process.argv[2];
console.log(orderItem)

let menu = {
    burger: 5.00,
    fries: 3.50,
    shake: 1.11,
    salad: 4.25,
    order: function (orderItem) {

        console.log(this.shake)
    }


}

console.log(menu.order())
