//termination a.k.a. base case a.k.a. guard clause stops recursion
function countdown(seconds) {
    let count = 10;
    while (count > 0) {
        console.log(count + "...");
        count = count - 1;

        if (count === 0) {
            console.log("Blastoff!");
        }
    };
};

countdown()