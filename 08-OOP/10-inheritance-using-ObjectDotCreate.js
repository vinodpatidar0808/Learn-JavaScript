'use strict';

const PersonProto = {
    calcAge() {
        console.log(2022 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};
const vinod = Object.create(PersonProto);
const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
};

StudentProto.introduce = function () {
    console.log(`my name is ${this.firstName} and I study ${this.course}`);
};

const gagan = Object.create(StudentProto);
gagan.init('Gagan', 1998, 'Human resource management');
console.log(gagan);
gagan.introduce();
