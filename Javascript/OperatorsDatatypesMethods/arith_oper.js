//JS follows PEMDAS but there can be a few strange issues...

console.log(0.1 + 0.2); //0.30000000000000004

console.log(0.2 + 0.4); //0.6000000000000001 -- you can use .toPrecision()

let weirdFrac = 0.1 + 0.2

console.log(weirdFrac.toPrecision(2));//0.30 -- rounds it to 2 decimal points

console.log(2 ** 53 === 2 ** 53 + 1);//true
//after the 53rd power is when JS begins running into trouble. after that it can't really handle it so both #s are equal here

console.log(2 === 2 + 1);//false

console.log((0.8 - 0.7 - 0.1) / (0.5 - 0.4 - 0.1)); //-3

console.log(0.5 - 0.4 - 0.1);//-2.7755575615628914e-17

console.log(2 ** 10000);//infinity--this number is too big for JS to handle so it is just returned as infinity


//addition +

console.log(1 + 3 + 5)//9

//subtraction -

console.log(2 - 4 - 1)//-3


//multiplication *

console.log(3 * 2 * 2)//12

//division /

console.log(6 / 2)//3

//modulus%

console.log(10 % 4)//2 because 4 x 2 would be 8 and 2 left over

//exponent **

console.log(3 ** 3)//27

//mixing decimals and integers

console.log(1 + 0.75);//works as expected, you get 1.75!
