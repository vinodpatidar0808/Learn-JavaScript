'use strict';

const num = 354334536.34;

// new Intl.NumberFormat('locale string', [Options])
console.log('US : ', new Intl.NumberFormat('en-US').format(num));
console.log('Europe/britain : ', new Intl.NumberFormat('en-GB').format(num));
console.log('India : ', new Intl.NumberFormat('en-IN').format(num));
console.log('Syria : ', new Intl.NumberFormat('ar-SY').format(num));

// you can get the locale from browser also using navigator object
console.log(navigator.language);
console.log(new Intl.NumberFormat(navigator.language).format(num));

const options = {
    // style: 'unit', // there are tonnes of units you can read about them from mdn
    // unit: 'mile-per-hour',
    // unit : 'celsius'
    style: 'currency',
    currency: 'INR', //  USD, EUR
    useGroup: false,
};
console.log(new Intl.NumberFormat(navigator.language, options).format(num));
