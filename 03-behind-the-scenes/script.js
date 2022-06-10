'use strict';

// scoping in practice
function calcAge(birthYear) {
    const age = 2037 - birthYear;
    // this doesn't creates the problem as the function is called after  variable declaration. so variable is already in global execution context before the function is called and variable is used
    console.log(firstName);

    function printAge() {
        const output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);
        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            // firstName declared again as it is inside a different scope and will be accessible inside this if block only.
            const firstName = 'rahul';
            const str = `Oh, and you're a millenial ${firstName}`;
            console.log(str);

            // this function will be block scoped
            function add(a, b) {
                return a + b;
            }
            // reassigining outer scop variable
            output = 'New output';

            // creating new variable with same name as outer scope's variable
            // const output = 'new output variable inside if block'
        }
        // this doesn't work as str is defined as const inside a block
        // console.log(str);
        // this works as the var variables extends their scope to nearest function scope
        console.log(millenial);
        // add function will not be accessible here
        // add(6, 5);
    }
    printAge();
    return age;
}

const firstName = 'Vinod';
calcAge(1996);
// this doesn't work as the age in not accessible here. Variables are accessible in parent to child scoping manner so global execution context variables are accessible inside functions but not the vice versa
// console.log(age)
