// object methods

// objects can take any type of key value pairs

const vinod = {
    firstName: 'vinod',
    lastName: 'patidar',
    birthYear: 1996,
    friends: ['deepak', 'gagan', 'deekshith'],
    hasDriversLicense: true,
    // calcAge: function (birthYear) {
    //     return 2022 - birthYear;
    // },

    // in every method js gives us access to a special variable called this
    // calcAge: function () {
    //     // this here is equals to the object calling the method i.e. vinod
    //     // why not use vinod.birthYear instead of this.birthYear --> violates the DRY principle if you change the object name you have to change the object name here also else it will be undefined
    //     return 2022 - this.birthYear;
    // },

    calcAge: function () {
        // you can use this keyword to store new properties also
        this.age = 2022 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is ${this.calcAge()} years old, and he has ${
            this.hasDriversLicense ? 'a' : 'no'
        } 00 driver's license`;
    },
};
// any function that is attached to an object is called a method. Here calcAge is a method of vinod object

console.log(vinod.calcAge());
console.log(vinod['calcAge']());

// exercise : " vinod is 26 years old, and he has a driver's license"

console.log(vinod.getSummary());
