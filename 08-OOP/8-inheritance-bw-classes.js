'use strict';

// inheritance using constructor function:
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
    console.log(2022 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
    // this is duplicate with Person object
    // this.firstName = firstName;
    // this.birthYear = birthYear;
    // this does not work here we are calling Person as a regular function and regular function have this as undefined
    // Person(firstName, birthYear)
    Person.call(this, firstName, birthYear);
    this.course = course;
};

// this should be done before creating any method on student, because Object.create will return an empty object and then this new student methods will be applied to it, if you do it other way then Object.create will simply override you  previously declared methods
// this is to set prototype chain correctly
Student.prototype = Object.create(Person.prototype);
// this also does not work
// Student.prototype = Person.prototype

const vinod = new Student('Vinod', 1996, 'computer science');
Student.prototype.introduce = function () {
    console.log(`my name is ${this.firstName} and I study ${this.course}`);
};
vinod.introduce();
// prototype chain
vinod.calcAge();

console.log(vinod.__proto__);
console.log(vinod.__proto__.__proto__);
console.log(vinod instanceof Student);
console.log(vinod instanceof Person);
console.log(vinod instanceof Object);
// returns person but it should be Student
console.dir(Student.prototype.constructor);
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
