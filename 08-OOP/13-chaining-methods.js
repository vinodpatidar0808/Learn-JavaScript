'use strict';

class Account {
    // no let or const : public field(instances), also referencable by this keywords
    //1 public fields
    locale = navigator.language;

    // 2 private fields, won't be accessible outside of class
    #movements = [];
    #pin;
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        // console.log(`Thanks for opening an account`);
    }

    //public interface
    getMovements() {
        return this.#movements;
    }

    // public interface of our object
    deposit(val) {
        this.#movements.push(val);
        // chaining won't work without this
        return this;
    }

    // this way you abstract the fact that this withdrawal is a negative value
    withdraw(val) {
        this.#movements.push(-val);
        return this;
    }

    // protected methods
    _approveLoan(val) {
        return true;
    }

    requestLoan(val) {
        if (this._approveLoan(val)) {
            this.deposit(val);
            console.log('Loan approved');
        }
        return this;
    }

    //4. private  methods: not yet supported
    #approveLoan(val) {
        return true;
    }
}

const acc = new Account('Vinod', 'INR', 1111);

// chaining
// this won't work as deposit method returns nothing so acc.deposit will be undefined, and undefined.deposit() is nothing;
// to make it work return this from methods which you want to be chainable
acc.deposit(3000).deposit(500).withdraw(34).requestLoan(400);
console.log(acc.getMovements());
