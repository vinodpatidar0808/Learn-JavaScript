'use strict';

// still have prototypal inheritance but no constructor function involved no new operator involved

const PersonProto = {
    calcAge() {
        console.log(2022 - this.birthYear);
    },

    // similar to constructor in classes
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

// least used in real world but still remember you will see it outside
const vinod = Object.create(PersonProto);
console.log(vinod);
// creating properties this way is against the spirit
vinod.name = 'Vinod';
vinod.birthYear = 1996;
vinod.calcAge();
console.log(vinod.__proto__);

const gagan = Object.create(PersonProto);
gagan.init('Gagan', 1998);
gagan.calcAge();
