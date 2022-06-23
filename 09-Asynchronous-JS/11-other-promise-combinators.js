'use strict';

const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        // throwing this error means that promise will immediately reject

        if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
        return response.json();
    });
};

// race, allSettled and any

//race useful for creating timeout promises to avoid very long promises , like when user is on slow internet connection
// Promise.race : accepts an array of promises and returns a promise as soon as a promise get settled(either resolved or rejected) this Promise.race gets settled i.e. the first promise to settle wins the race
(async function () {
    const res = await Promise.race([
        getJSON(`https://restcountries.com/v3.1/name/bharat`),
        getJSON(`https://restcountries.com/v3.1/name/italy`),
        getJSON(`https://restcountries.com/v3.1/name/egypt`),
    ]);
    console.log(res);
    console.log(res[0]);
})();

const timeout = function (sec) {
    return new Promise(function (_, reject) {
        setTimeout(() => {
            reject(new Error('Request took too long!'));
        }, sec * 1000);
    });
};
Promise.race([getJSON(`https://restcountries.com/v3.1/name/egypt`), timeout(1)])
    .then(res => console.log(res[0]))
    .catch(err => console.error(err));

// promise.race and promise.all are important combination

//ES2020 : promise.allSettled : accepts an array of promises and return an array of all the settled (resolved or rejected), never short circuits. promise.all short circuits as soon as a promise gets rejected

Promise.allSettled([
    Promise.resolve('Success'),
    Promise.reject('ERROR'),
    Promise.resolve('Another Success'),
]).then(res => console.log(res));

Promise.all([
    Promise.resolve('Success'),
    Promise.reject('ERROR'),
    Promise.resolve('Another Success'),
])
    .then(res => console.log(res))
    .catch(err => console.error(err));

//ES-2021 Promise.any : accepts an array of promise and then returns first fulfilled promise, ignores the rejected promises. If all promises are rejected then this promise is also rejected
Promise.any([
    Promise.resolve('Success'),
    Promise.reject('ERROR'),
    Promise.reject('ERROR 2'),
    Promise.reject('ERROR 3'),
    // Promise.resolve('Another Success'),
])
    .then(res => console.log(res))
    .catch(err => console.err(err));
