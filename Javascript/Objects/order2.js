let order = process.argv.slice(2)

let menu = { burger: 5, fries: 3.5, shake: 1.11, salad: 4.25 }

let orderPrice = order.forEach((item) => { orderPrice += menu[item] })

console.log("Your order total is $" + orderPrice)




console.log(menu.order())