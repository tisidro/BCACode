//this code still  needs work. gpa is returning as NaN. I'm trying to make this as dynamic as possible by referring to Object.keys and the keys w/in the object defined in function gpa

let grades = {
    midterm:
    {
        grade: 3.3,
        weight: 1
    },

    project:
    {
        grade: 4.0,
        weight: 1
    },
    final:
    {
        grade: 3.2,
        weight: 2
    },
}

function gpa(object) {

    getAverage = object[Object.keys(object)[0]].grade * [Object.keys(object)[1]].weight + object[Object.keys(object)[1]].grade * [Object.keys(object)[1]].weight + object[Object.keys(object)[2]].grade * [Object.keys(object)[2]].weight / Object.keys(object).length
    //here I get an array of keys in the object using object.keys and get the length to be able to divide it by how many keys in the

    console.log(Object.keys(object)[0])

    console.log(Object.keys(grades))

    console.log(getAverage)

    return getAverage
}


console.log('The GPA is ' + gpa(grades));
