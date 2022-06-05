// objects are also data structure used to store and process data

//  object have property/key :value structure

// object properties should not be in quotes
// this type of declaration is called literal declaration, order of properties does not matter
const vinod = {
    firstName: 'vinod',
    lastName: 'patidar',
    age: 2022 - 1996,
    friends: ['deepak', 'gagan', 'deekshith'],
};
console.log(vinod);

// retrieving data from objects: Dot and bracket notation
//  dot notation
console.log(vinod.lastName);

// bracket notation
console.log(vinod['lastName']);

// the difference between dot notation and bracket notation is  that  in bracket notation we can have any expression that produces a property as value

const nameKey = 'Name';
console.log(vinod['first' + nameKey]);
console.log(vinod['last' + nameKey]);

// below line won't work
// console.log(vinod.'last'+nameKey);

const interestedIn = prompt(
    'what do you want to know about vinod? Choose between firstName, lastName, age or friends '
);

console.log(vinod[interestedIn]);

// when you access a property that does not exist you will get undefined

if (vinod[interestedIn]) {
    console.log(vinod[interestedIn]);
} else {
    console.log(
        'wrong request. choose between firstName, lastName, age or friends'
    );
}

// updating or creating new properties
vinod.location = 'India';
vinod['github'] = 'vinodpatidar0808';
console.log(vinod);

// exercise : 'vinod has 3 friends and his best friend is called gagan'

console.log(
    `${vinod.firstName} has ${vinod.friends.length} friends and his best friend is called ${vinod.friends[1]}`
);

// you can chain dot and bracket notation memeber access as both have hight priority and works left to right

