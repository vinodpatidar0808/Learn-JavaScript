// this file i specially created to work with parcel

console.log('Importing module');
import add from './shoppingCart.js';

add('pizza', 2);
add('bread', 5);
add('apples', 4);

import cloneDeep from 'lodash-es';

const state = {
    cart: [
        { product: 'bread', quantity: 5 },
        { product: 'pizza', quantity: 5 },
    ],
    user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

// manages the state
if (module.hot) {
    module.hot.accept();
}
