
console.log(typeof (42));//number

console.log(typeof (1 + 7))//number - sees 1+7 as a number

console.log(typeof 1 + 7)//number7 - it sees the number 1 and types it as a number then concatenates the 7 on to it

console.log("cheese" + 42);//cheese42 concatenates the string cheese with the number 42 because it can't add a number to a string

console.log("4" + 2);//42 since "4" is seen as a string and it sees that first, it concatenates it

console.log(4 + "2");//42

console.log(5 / false)//0 - because false evaluates to 0

console.log(5 / true)//5 - because true evaluates to 1

console.log(typeof (("cheese" + 42)))//string

console.log("pie" + true);//pietrue - concatenates it

console.log(true + 8);//9 - True is seen as having  a value of one

console.log(false + 8);//8 - false seems to have a value of zero/or is ignored here

console.log(typeof (false + 8));//number

console.log(false + "8");//false8

console.log(true + "8"); //true8 --for these javascript will put them together as a string. This is type coercion--not a great plan

console.log(typeof (true + "8"))//string

//better to do type conversion
let bool = true;

console.log(bool.toString());//true - this converts a boolean to a string of "true"(?)


console.log(null + 7);//7 - null does not have a value

console.log(undefined + 7);//NaN - undefined can't be combined with 7

console.log(typeof (null));//object--I looked it up and found that null is an object because it is part of the "object-type primitive" subtree. Not sure what that is, but will study it more later.

console.log(typeof (7 + null));//number because it sees the number seven first so it calls it as a number, then it must be seeing null as zero. 

console.log("cat" - 7);//NaN because you can't subtract a  number from a string

console.log("7" - 4)//3 -- it coerces "7" to be a number

console.log(17 - true);//16

console.log(17 - false);//17

console.log("cat" * 7);//NaN

console.log("cat" / 7);//NaN

console.log("cat" % 7);//NaN

console.log(null / 2); //0

console.log(null * 2);//0