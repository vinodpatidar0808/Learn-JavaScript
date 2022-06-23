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
    } catch (err) {
        console.error(err);
        renderError(`Something went wrong ${err.message}`);
    }
};



whereAmI();

// NOTE: please never ignore handling errors in async code
