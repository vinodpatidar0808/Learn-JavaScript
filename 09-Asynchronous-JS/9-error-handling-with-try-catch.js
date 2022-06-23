'use strict';

// we can't use catch of promise here as we don't have a place to  attach it
// try catch is used in regular js and it's has nothing to do with async await, it is in languages since beginning

// you can put your code in try block then js will try to execute it, if it throws some error then catch block will catch it
/* try {
    let y = 1;
    const x = 2;
    x = 3;
} catch (error) {
    console.log(error);
    console.error(error.message);
}
 */

// more real/practical example of try catch

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
};

const renderCountry = (data, className = '') => {
    const [currencyCode] = Object.keys(data.currencies);

    const getLanguages = langs => {
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
    countriesContainer.style.opacity = 1;
};

const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

const whereAmI = async function () {
    try {
        const pos = await getPosition();
        const { latitude: lat, longitude: lng } = pos.coords;
        const resGeo = await fetch(
            `https://geocode.xyz/${lat},${lng}?geoit=json`
        );

        if (!resGeo.ok) throw new Error('Problem fetching country');
        const dataGeo = await resGeo.json();
        console.log(dataGeo);

        const res = await fetch(
            `https://restcountries.com/v3.1/name/${dataGeo.country}`
        );
        const data = await res.json();

        console.log(data);
        renderCountry(data[0]);

        // fulfilled value of the promise will be this string as we return it, if there is no error somewhere in the code above
        return `You are in ${dataGeo.city}, ${dataGeo.country}`;
    } catch (err) {
        console.error(err);
        renderError(`Something went wrong ${err.message}`);

        // to reject promise you have to manually throw error here again to propagate it down, you can throw new error or rethrow the same error
        throw err;
    }
};
// NOTE: please never ignore handling errors in async code

// returning values from async functions
console.log('1: will get location');
// async function returns  a promise, city will be a promise with pending status
// const city = whereAmI();
// to get value from promise you can use then method like this
// even if there is error in whereAmI the promise will still be fulfilled, (try creating some random error) this then block will still run
/*
whereAmI()
    .then(city => console.log(`2: ${city}`))
    .catch(err => console.error(`2: ${err.message}`))
    .finally(() => console.log('3: finished getting location'));
console.log(city);
console.log('2: finished loading location');
*/

// the above approach works but there is still problem here, we are mixing philosophy of async await with then catch, so you can do this stuff also using async await

// you can use await only inside a async function not outside and not anywhere

// IIFE: immediately invoked function execution
(async function () {
    try {
        const city = await whereAmI();
        console.log(`2: ${city}`);
    } catch (err) {
        console.log(`2: ${err.message} 💥`);
    }
    console.log(`3: finished getting location`);
})();
