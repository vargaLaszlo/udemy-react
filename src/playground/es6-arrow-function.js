function square(x) {
    return x * x;
}

console.log(square(8));

// Arrow function

//const squareArrow = (x) => {
//   return x * x;
//};

const squareArrow = (x) => x * x;

console.log(squareArrow(9));


// Challange
const fullName = "János Géza";

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName(fullName));
