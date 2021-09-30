let count = 0;

//despite the fact you have an infinite loop, it stops because you added a break. Don't do that though :)

while (true) {
    console.log(count);
    count = count + 1;
    if (count > 100) {
        break;
    }
}
