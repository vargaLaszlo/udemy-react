// Arguments object - no longer bound with arrow functions

// es5 function
const add = function (a, b) {
    console.log(arguments);
    return a + b;
};

console.log(add(55, 1, 1001));

// es6 arrow function
const addArrow = (a, b) => {
    //console.log(arguments); //throws an error, not accessible
    return a + b;
};

console.log(addArrow(55, 2, 1001));

// This keyword - no longer bound

const user = {
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

    printPlacesLived() {
        /*this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        }); */

        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
}

console.log(user.printPlacesLived());

// Challenge area

const multipier = {
    number: [10, 20, 30, 40, 50],
    multiplyBy: 12,
    multiply() {
        return this.number.map((nmb) => this.multiplyBy * nmb);
    }
}

console.log(multipier.multiply());