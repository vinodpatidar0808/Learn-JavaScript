'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

//in  js there are multiple ways to make api calls
// old school of AJAX

const getCountryData = function (country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    // you can not simply store data in a variable because the request is made in background and data is not available yet and rest of the code keeps running AJAX is asynchronous

    request.send();
    request.addEventListener('load', function () {
        // console.log(this.responseText);
        const [data] = JSON.parse(this.responseText);
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
    <article class="country">
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
    });
};

// all the request works simultaneously behind the scene, but we will get data in order of function calls, if you want to have something done once you get response of request then you have to chain requests
getCountryData('bharat');
getCountryData('usa');



