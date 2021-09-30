console.log("hey there".toUpperCase());//HEY THERE

console.log("LOWERCASE".toLowerCase());//lowercase

console.log("Java".repeat(10));//JavaJavaJavaJavaJavaJavaJavaJavaJavaJava

console.log("berry".charAt(1));//e

console.log("berry".charAt(0));//b

console.log("banana".includes("nan")); //true

console.log("banana".includes("cat"));//false

console.log("banana".endsWith("ana"));//true

console.log("banana".endsWith("cat"));//false

console.log("blueberry".replace("blue", "black"));//blackberry

console.log("blueberry".replace("blue", "cat"));//catberry (lol)

//.length after a string will give you the length of the string
console.log("Superlongword".length
);//13

//you can also use .length on a variable to yield the length of a phrase.
let cat = "all dogs are good dogs";

console.log(cat.length);//as you will see, spaces are counted when you use .length() method!

console.log(`I think that ${cat} -- times ${cat.length}!!`)//22

//using quotes: here I demonstrate that you can use single quotes, double quotes, or back-ticks to delineate a string.

console.log('this is a sentence');
console.log("this is a sentence");
console.log(`this is a sentence`);

//here I show that you can use all these types to concatenate, but if you have to use "" around the quoted phase, you must have single quotes enclosing the entire string.

console.log("butter" + "fly");
console.log('ice' + 'cream');
console.log(`ski` + `slope`);
console.log("When the music's over " + 'turn "out the lights"');

//using slice method. 

console.log("engineering".slice(5))//eering -- if you have only 1 parameter, it slices from that point

console.log("engineering".slice(-1))//g -- a negative will go backwards

console.log("engineering".slice(-3))//ing -- negative three sends it back 3 characters

console.log("engineering".slice(0, 3))//eng --0,3 as parameters will show characters 0, 1, and 2

console.log("engineering".slice(1, 3))//ng -- 1,3 as parameters will show characters 1 and 2 only


//this all worked nicely! :)