function countdown(seconds) {
    if (seconds == 0) {
        console.log("Blastoff!");
    } else {
        console.log("" + seconds + "...");
        let nextCount = seconds - 1;
        countdown(nextCount);
    }
}

countdown(10);