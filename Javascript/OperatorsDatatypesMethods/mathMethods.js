
//the Math class has many methods like floor, round, and ceil

//Math.floor is a function that rounds a number down and returns an integer value.

console.log(Math.floor(42.3675)) //42

console.log(Math.floor(42)) //42 

//Math.round rounds off a number depending on the fractional part of the number. So, if the fractional part is >=.5, it’ll return the smallest integer that is still greater than the passed value. If the number is <=.4, we’ll get the largest possible integer that is still smaller than the number we passed.

console.log(Math.round(42.756)) //43 - rounded up b/c 0.7

console.log(Math.round(42.3675)) //42 - rounded down b/c 0.4

//Math.random() returns a Number value with positive sign, greater than or equal to 0 but less than 1, chosen randomly or pseudo randomly with approximately uniform distribution over that range

console.log(Math.random())//will generate a bunch of random decimals less than 1

//Math.ceil() rounds up a number that is passed into it to its nearest integer

console.log(Math.ceil(42.3675)) //43

