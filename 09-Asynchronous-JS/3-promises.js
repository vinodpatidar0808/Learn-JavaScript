'use strict';

// before ES6 we have to do like this
/* 
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
request.send();
request.addEventListener('load', function ( {
    
})
 */

// NOTE: ES6 and promises way of doing above stuff

// you can pass and Object of options for more options like method, contentheader etc, but for simple get request just fetch('url;)
// const request = fetch('https://restcountries.com/v3.1/name/bharat');
// this fetch function returns a promise:  what is a promise and what it does for us :: read notes
// console.log(request);

// NOTE: besides than and catch you also have finally method available with each promise

// CONSUMING PROMISES
/* 
const getCountryData = function (country) {
    // fetch will return a promise and on each promise we can call then method to consume that promise,
    // then expects a callback function which will be executed as soon as the promise is fulfilled/ result available
    // NOTE: to make this code more shorter and readable you can use arrow function for callbacks 
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(function (response) {
            // any data from APIS need to be parsed
            // JSON function is also asynchronous function, this also returns a promise, so we need to return this
            // all of this becomes a new promise
            return response.json();
            // console.log(response);
        })
        .then(function (data) {
            console.log(data);
        });
};
 */

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    // shifted to finally method
    // countriesContainer.style.opacity = 1;
};

const renderCountry = (data, className = '') => {
    // console.log(data);
    const [currencyCode] = Object.keys(data.currencies);

    const getLanguages = langs => {
        // console.log(langs);
        let languages = '';
        for (const key of Object.keys(langs)) {
            languages += `${langs[key]}, `;
        }
        return languages.trim().slice(0, -1);
    };

    const htmlEl = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
    <h3 class="country__name">${data.name.official} (${data.name.common})
    </h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
            ).toFixed(1)} Million people</p>
                <p class="country__row"><span>🗣️</span>${getLanguages(
                    data.languages
                )}</p>
                    <p class="country__row"><span>💰</span>${
                        data.currencies[currencyCode].name
                    }</p>
                    </div>
                    </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', htmlEl);
    // countriesContainer.style.opacity = 1;
};

// CHAINING PROMISES->
// shorter way using arrow functions
//NOTE: then method always returns a promise no matter whether we return anything or not
const getCountryData = function (country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(
            response => response.json()
            // err => alert(err)
        )
        .then(data => {
            renderCountry(data[0]);
            const neighbour = data[0].borders?.[0];
            console.log(neighbour);
            if (!neighbour) return;
            // neighbour country
            // here you return promise, you can work with that promise in the chain using then. this will become fulfilled value of previous promise
            // don't chain then method after this fetch else this also becomes callback hell
            return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
        })
        .then(
            response => response.json()
            // err => alert(err)
        )
        .then(
            data2 => renderCountry(data2[0], 'neighbour')
            // err => alert(err)
        )
        .catch(err => {
            console.error(`${err} 💥💥💥`);
            // every error produced by js contains a message property
            renderError(
                `Something went wrong 💥💥💥 ${err.message}. Try again! `
            );
        })
        .finally(() => {
            // generally we use finally method when we want something to happen irrespective of promise success or rejected
            countriesContainer.style.opacity = 1;
        });
    //NOTE: console.error prints your custom error message on console
};

// getCountryData('usa');

//NOTE: Handling rejected PROMISES or handling errors
// 2 ways to handle rejected promises : pass 2nd callback to then method, you have to add error callback for each promise to handle it's rejection.
// then(successCallback, rejectionCallback)
// 2nd way : handle rejections for all promises globally using catch
// Errors propagate down the chain untill they get caught if they are not caugth they will throw error like uncaught rejected promises....
// catch cannot catch 404 errors or similar kind of errors, so we need to handle them differently
btn.addEventListener('click', function () {
    getCountryData('bharat');
});

// something that won't be found on API
getCountryData('gjkhsdjfkghjdfksghj');
