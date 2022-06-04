// basic boolean logic : AND, OR and NOT logical operators, true for all programming languages

// AND OPERATOR &&
/**
 * cond1 && cond2 && cond3.. --> true only if all conditions are true.
 * if cond1/cond2 is false it returns false immediately w/o checking cond2/3
 */

// OR operator ||
/**
 * cond1 || cond2 || cond3 ...--> return true when atleast one condition is true
 * if cond1/cond2 is true it return true immediately w/ checking cond2/3
 */

// ! Not operator : converts truthy values to falsy and falsy value to truthy

const hasDrivingLicense = true;
const hasGoodVision = true;
console.log(hasDrivingLicense && hasGoodVision);
console.log(hasDrivingLicense || hasGoodVision);

console.log(!hasDrivingLicense);

const shouldDrive = hasDrivingLicense && hasGoodVision;
if (shouldDrive) {
    console.log('person is able to drive');
} else {
    console.log('someone else should drive:');
}

const isTired = false;
console.log(hasDrivingLicense || hasGoodVision || isTired);
console.log(hasDrivingLicense && hasGoodVision && isTired);

if (hasDrivingLicense && hasGoodVision && !isTired) {
    console.log('person is able to drive');
} else {
    console.log('someone else should drive');
}
