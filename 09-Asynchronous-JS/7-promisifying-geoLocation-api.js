'use strict';

// geolocation api: here it is callback based api, this also does not block code
/* 
navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    err => console.error(err)
);
 */
// console.log('getting position');

// promified geolocation

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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
    // promise will be success when we get position

    return new Promise(function (resolve, reject) {
        // navigator.geolocation.getCurrentPosition(
        //     position => resolve(position),
        //     err => reject(err)
        // );

        // simplifying above: what we do above happens here automatically, resolve function will get called when it gets position or reject will be called when there is an error
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

const whereAmI = function () {
    getPosition()
        .then(pos => {
            const { latitude: lat, longitude: lng } = pos.coords;

            console.log(pos);
            return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
        })
        .then(res => {
            if (!res.ok)
                throw new Error(`Problem with geocoding ${res.status}`);
            return res.json();
        })
        .then(data => {
            console.log(data);
            console.log(`You are in ${data.city}, ${data.country}`);

            return fetch(
                `https://restcountries.eu/rest/v2/name/${data.country}`
            );
        })
        .then(res => {
            if (!res.ok) throw new Error(`Country not found (${res.status})`);

            return res.json();
        })
        .then(data => renderCountry(data[0]))
        .catch(err => console.error(`${err.message} 💥`));
    // .catch(err => console.error(err));
};

btn.addEventListener('click', whereAmI);
