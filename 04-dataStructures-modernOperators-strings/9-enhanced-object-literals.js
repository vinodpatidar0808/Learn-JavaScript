'use strict';

// ES -6: introduced 3 ways to create objects

const weekdays = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
];

const openingHours = {
    // enhanced way:
    [weekdays[2]]: { open: 20, close: 6 },
    thu: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    sat: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    // before es6, property name is same as value name
    // openingHours: openingHours,
    // enhanced object literal es6: you do just like this when property and value both have same name
    openingHours,
    // enhanced method declaration
    orderDelivery({ starterIndex = 1, mainIndex = 1 }) {
        console.log(starterIndex, mainIndex);
    },
};

// what  if we wanted to have openingHours inside restaurant also

// 2nd enhancement is about writing methods
// old way of writing method : methodName : function(params){...}
// enhanced way :  methodName(params){}

// 3rd enhancement
// you can now compute property values also : 
// [`day-${weekdays[1]}`]: somevalue