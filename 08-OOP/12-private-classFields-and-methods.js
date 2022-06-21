'use strict';

// classfields proposal is at stage 3 currently, some part work in chrome

//public fields
//private fields
//public methods
//private methods

// there are static version also, 

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
    }

    // this way you abstract the fact that this withdrawal is a negative value
    withdraw(val) {
        this.#movements.push(-val);
    }

    // protected methods
    _approveLoan(val) {
        return true;
    }

    requestLoan() {
        if (this._approveLoan(val)) {
            this.deposit(val);
            console.log('Loan approved');
        }
    }

    //4. private  methods: not yet supported
    #approveLoan(val) {
        return true;
    }
}

const acc = new Account('Vinod', 'INR', 1111);
// console.log(acc.#pin);
// console.log(acc.#approveLoan(4000));
