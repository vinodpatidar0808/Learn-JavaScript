'use strict';

// when you have to do some tasks that are asynchronously but they are independent of each always try to run them in parallel, this will enhance your performance greatly

const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        // throwing this error means that promise will immediately reject

        if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
        return response.json();
    });
};

const get3Countries = async function (c1, c2, c3) {
    try {
        // this 3 run one after another you can check it in devtools network tab
        /*         const [data1] = await getJSON(
            `https://restcountries.com/v3.1/name/${c1}`
        );
        const [data2] = await getJSON(
            `https://restcountries.com/v3.1/name/${c2}`
        );
        const [data3] = await getJSON(
            `https://restcountries.com/v3.1/name/${c3}`
        ); */

        // to run all 3 in parallel we can use Promise.all(),  all is a static method on Promise constructor, which takes an array of promises and then return another promise which run all this promises in parallel
        // here data will contain array of data of each promise
        // NOTE: if one of the promise rejects then whole of the promise is rejected, i.e promise.all short circuits when promise is rejected
        const data = await Promise.all([
            getJSON(`https://restcountries.com/v3.1/name/${c1}`),
            getJSON(`https://restcountries.com/v3.1/name/${c2}`),
            getJSON(`https://restcountries.com/v3.1/name/${c3}`),
        ]);

        console.log(data.map(d => d[0].capital));
        console.log(data);
    } catch (error) {}
};
get3Countries('bharat', 'tanzania', 'canada');
