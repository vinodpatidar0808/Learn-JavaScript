// in js there are different ways to write functions and each works slightly differently but still they are very similar

// function declaration
function calcAge1(birthYear) {
    // this parameter birthYear are only accessible inside function body
    const age = 2022 - birthYear;
    return age;
}

// 1996 here is called argument
const age1 = calcAge1(1996);
console.log(age1);

// parameter is placeholder in function and argument is actual value to fill in that placeholder

// function expression
// remember expression produces value.
// in js functions are values, without any type so you can store it inside a variable or pass to another function etc.
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
};

const age2 = calcAge2(1996);
console.log(age2);

// main difference bw function declaration and function expression is that function declaration can be used even before they are defined which is not the case with  function expression. eg

// using calcAge3 before declaring it
const age3 = calcAge3(1996);
console.log(age3);
function calcAge3(birthYear) {
    return 2022 - birthYear;
}

// which one to use : depends on personal preferences. to make code more structured use function expression
