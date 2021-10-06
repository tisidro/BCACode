let grades = {
    midterm: 3.3,
    project: 4.0,
    final: 3.2
}

function gpa(object) {
    const reducer = function (accumulator, gradeCat) {
        return accumulator + Object.keys(grades).length
    }

    let sumGradeProp = grades.reduce(reducer, 0);

    getAverage = sumGradeProp / Object.keys(grades).length

    // here I get an array of keys in the object using object.keys and get the length to be able to divide it by how many keys in the object

    console.log(getAverage)

    return getAverage
}


console.log('The GPA is ' + gpa(grades));

