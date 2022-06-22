'use strict';

// NOTE: callback-hell:
// sequence of AJAX calls so that one 2nd runs only when first is finished

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

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
    countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
    // Ajax call country 1
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    // you can not simply store data in a variable because the request is made in background and data is not available yet and rest of the code keeps running AJAX is asynchronous

    request.send();
    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);
        // render country 1
        renderCountry(data);

        // get neighbour country
        const neighbour = data.borders?.[0];

        // AJAX call for neighbour country
        const request2 = new XMLHttpRequest();
        request2.open(
            'GET',
            `https://restcountries.com/v3.1/alpha/${neighbour}`
        );
        request2.send();
        request2.addEventListener('load', function () {
            const [data2] = JSON.parse(this.responseText);
            console.log(data2);
            renderCountry(data2, 'neighbour');
        });

        // what if you wanted to get neighbours of neighbours ..... then you would have this nested callbacks this is what is called callback hell
    });
};

getCountryAndNeighbour('bharat');
getCountryAndNeighbour('usa');

// NOTE: timer callback hell, you can easily identify callback hell by looking at this triangular shape
// NOTE: makes our code hard to understand and difficult to reason about, a code that is hard to read will surely cause more bugs
setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
        console.log('2 second passed');
        setTimeout(() => {
            console.log('3 second passed');
            setTimeout(() => {
                console.log('4 second passed');
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
