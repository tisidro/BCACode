//create a function that takes two numbers, and returns the boolean true if the first number is evenly divisible by the second, and false if they are not evenly divisible

function divisible(dividend, divisor) {

    let theRemainder = dividend % divisor;

    if (theRemainder) {
        return false;

    }
    return true;
};


console.log(divisible(23, 5))

//alternative way using arrow function and the ternary operator. If there is no remainder after modulus, it returns true (second condition is met--there's a remainder so not evenly divisible) if there is a remainder, it returns false (if no remainder, it will be evenly divisible so it's true). Since function is all on one line no {} needed here.

let newRemainder = (dividend, divisor) => dividend % divisor ? false : true;

console.log(newRemainder(26, 5))