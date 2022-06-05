function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return juice;
}

console.log(fruitProcessor(2, 3));

// eg 2
const calcAge = function (birthYear) {
    return 2022 - birthYear;
};

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge(birthYear);
    const retirement = 60 - age;
    // conditional return
    if (retirement > 0) {
        // return statement will immediately stops the execution
        return retirement;
    } else {
        return -1;
    }
};

console.log(yearsUntilRetirement(1996, 'vinod'));
console.log(yearsUntilRetirement(1960, 'person'));
