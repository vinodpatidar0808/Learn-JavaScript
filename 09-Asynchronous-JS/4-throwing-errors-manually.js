'use strict';

// NOTE: throwing errors manually: fetch API is unable to catch errors like 404

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
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
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        // throwing this error means that promise will immediately reject

        if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
        return response.json();
    });
};

const getCountryData = function (country) {
    getJSON(
        `https://restcountries.com/v3.1/name/${country}`,
        'Country not found'
    )
        .then(data => {
            renderCountry(data[0]);
            const neighbour = data[0].borders?.[0];

            // this if statement does not do anything for catching errors by catch method
            // if (!neighbour) return;
            // this will be thrown and promise will be rejected here immediately, and also this will be traced by catch
            if (!neighbour) throw new Error('No neighbour found');

            return getJSON(
                `https://restcountries.com/v3.1/alpha/${neighbour}`,
                'Country not found'
            );
        })
        .then(data2 => renderCountry(data2[0], 'neighbour'))
        .catch(err => {
            console.error(`${err} 💥💥💥`);
            renderError(
                `Something went wrong 💥💥💥 ${err.message}. Try again! `
            );
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        });
};

btn.addEventListener('click', function () {
    getCountryData('bharat');
});

getCountryData('gjkhsdjfkghjdfksghj');
