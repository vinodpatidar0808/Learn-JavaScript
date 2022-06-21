'use strict';

// NOTE: truly private fields does not exist in js yet, but they will be available in near future
class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        // you can do this, and you can create more properties like this
        // encapsulation: put a _ in front of property name this is not truly private but it's protected, you can still access this outside class
        this._movements = [];
        this.locale = navigator.language;
        // you can execute any code during this constructor
        console.log(`Thanks for opening an account`);
    }

    //public interface
    getMovements() {
        return this._movements;
    }

    // public interface of our object
    deposit(val) {
        this._movements.push(val);
    }

    // this way you abstract the fact that this withdrawal is a negative value
    withdraw(val) {
        this._movements.push(-val);
    }

    _approveLoan(val) {
        return true;
    }

    requestLoan() {
        if (this._approveLoan(val)) {
            this.deposit(val);
            console.log('Loan approved');
        }
    }
}

const acc1 = new Account('vinod', 'INR', 1111);
console.log(acc1);
// this way manipulating properties may cause bugs
// acc1.movements.push(5000);
// acc1._movements.push(-100);

acc1.deposit(5000);

acc1.withdraw(200);
// if someone can access this then there is no privacy hence this is why we need data encapsulation and data privacy
acc1.approveLoan(100);
console.log(acc1.getMovements());
