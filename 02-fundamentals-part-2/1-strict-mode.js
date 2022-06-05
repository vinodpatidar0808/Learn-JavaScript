// below line activates strict mode. strict mode is a special mode which makes it easy for us to write secure js code. Strict  mode forbids us for doing certain things
'use strict';
let hasDriversLicense = false;
const passTest = true;

if (passTest) {
    // uncomment below line to see strict mode in action
    // hasDriverLicense = true;
    hasDriversLicense = true;
}
if (hasDriversLicense) {
    console.log('you can drive');
}

// strict mode also introduces a short list of keyword that are reserved and may be used in language in future eg.
// const interface =  'Audio' // error
// const private = 345345; // private is also reserved
