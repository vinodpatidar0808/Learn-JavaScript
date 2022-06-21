'use strict';
/* 
Your tasks:
1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')




2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide 
by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but 
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.
Test data:
§ Data car 1: 'Ford' going at 120 km/h
*/

class Car {
    constructor(make, speed) {
        this.speed = speed;
        this.make = make;
    }

    accelerate() {
        this.speed += 10;
        console.log(this.speed);
    }
    brake() {
        this.speed -= 5;
        console.log(this.speed);
    }

    get speedUs() {
        return this.speed / 1.6;
    }

    set speedUs(s) {
        this.speed = s * 1.6;
    }
}

const car1 = new Car('Ford', 120);
console.log(car1);
car1.accelerate();
car1.brake();
console.log('speed US: ', car1.speedUs);
car1.speedUs = 100;
console.log(car1);
