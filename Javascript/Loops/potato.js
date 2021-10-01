function potato() {
    let count = 1;
    while (count <= 8) {
        if (count !== 4 && count !== 8) {
            console.log(count + " potato,");
        } else if
            (count === 4) {
            console.log("four!");
        } else
            console.log("more!");
        count = count + 1;
    };
}

potato();