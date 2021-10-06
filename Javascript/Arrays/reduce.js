
//The reduce method keeps track of a running total (aka accumulator or memo); whatever value the function returns is used as the accumulator for the next pass.

//requires 2 arguments, can take a third

//reducer function and .reduce both need 2 args


let numbers = [17, 3, 2, 20];

const reducer = function (accumulator, nextNum) {

    return accumulator + nextNum;
    //return accumulator and next number. The accumulator is used to pass information from one iteration to the next.
};

let totalCount = numbers.reduce(reducer, 0);//first argumet is callback function, second is start value

//=> 42

console.log(totalCount)