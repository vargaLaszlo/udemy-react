'use strict';

// Arguments object - no longer bound with arrow functions

// es5 function
var add = function add(a, b) {
    console.log(arguments);
    return a + b;
};

console.log(add(55, 1, 1001));

// es6 arrow function
var addArrow = function addArrow(a, b) {
    //console.log(arguments); //throws an error, not accessible
    return a + b;
};

console.log(addArrow(55, 2, 1001));

// This keyword - no longer bound

var user = {
    name: 'Bob',
    cities: ['Gödöllő', 'Budapest', 'Lacháza'],

    /*printPlacesLived: function() {
        console.log(this.name);
        console.log(this.cities);
         this.cities.forEach( function(city) {
            console.log(this.name + ' has lived in ' + city);
            // this here cant acces object
        }); 
    }*/

    printPlacesLived: function printPlacesLived() {
        var _this = this;

        /*this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        }); */

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};

console.log(user.printPlacesLived());

// Challenge area

var multipier = {
    number: [10, 20, 30, 40, 50],
    multiplyBy: 12,
    multiply: function multiply() {
        var _this2 = this;

        return this.number.map(function (nmb) {
            return _this2.multiplyBy * nmb;
        });
    }
};

console.log(multipier.multiply());
