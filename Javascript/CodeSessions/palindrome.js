//code taking user input and reversing it to test if it's a palindrome. Explanation of code:

//using process.argv.slice(2)to take input from a user. The reason you use index #2 with process.argv.slice() is because the input from the terminal is at the 2nd index. Index 0 is location of NodeJs install and Index 1 is location of file in use (both on the local machine).

//Next, we join input if separated by a space using .join("") to put input together and .toLowerCase() to standardize it into one case if they entered some caps/some lowercase

//the .split("") method to split at any spaces again, and the reverse() reverses the string. Finally, .join("") puts back together the word we split

//I also added condition (if - else)checking if the answer is a palindrome or not

let palinInput = process.argv.slice(2);

console.log(palinInput);

let answer = palinInput.join("").toLowerCase();

console.log(answer)

let reverseAnswer = answer.split("").reverse().join("");

console.log(reverseAnswer);

if (answer === reverseAnswer) {
    console.log(answer + " is a palindrome");
    process.exit();
} else {
    console.log(answer + " is not a palindrome");
    process.exit();
}