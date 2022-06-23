'use strict';
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
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

// ES-2017 : async and await -> a much better way of consuming promises
// async await are syntactic sugar over then method, we are still using promises behind the scenes

// we start by creating a special kind of function known as async function , simply add async to your normal function. async function will keep running in the background while performing their task
// inside an async function you can have one or more await statements

const whereAmI = async function () {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    // console.log(pos);

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    /**NOTE:
     * await promise/ or something that returns  a promise.
     * await stops the execution of code at this point untill the promise is fulfilled/ in this case data is fetched
     * blocking code in an async function is not a problem as it is running in background, it does not block main thread of execution
     * as soon as the promise is fulfilled the value of expression on right side will be resonse
     * fetch(`https://restcountries.com/v3.1/name/${country}`).then(()=>{})
     * */

    // Country data
    const res = await fetch(
        `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    const data = await res.json();

    console.log(data);
    renderCountry(data[0]);
};

whereAmI();
// console.log('above code does not block my execution');
