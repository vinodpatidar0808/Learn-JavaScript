'use strict';

/* 
Your tasks:
1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
child class of the 'CarCl' class
2. Make the 'charge' property private
3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
methods of this class, and also update the 'brake' method in the 'CarCl'
class. Then experiment with chaining!
Test data:
§ Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
*/

class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    accelerate() {
        this.speed += 10;
    }
    brake() {
        this.speed -= 5;
        return this;
    }
}

class EVCl extends Car {
    #charge;
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }

    accelerate() {
        this.speed += 20;
        this.#charge -= 1;
        console.log(
            `${this.make} going at ${this.speed} km/h, with a charge of  ${
                this.#charge
            }`
        );
        return this;
    }
}

const evcar = new EVCl('Rivian', 120, 23);
console.log(evcar);
evcar.accelerate().accelerate().brake();
console.log(evcar);
evcar.accelerate().accelerate().brake().chargeBattery(98);
console.log(evcar);
