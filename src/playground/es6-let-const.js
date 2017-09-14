var nameVar = 'Lacus';
var nameVar = "Péter";
console.log('nameVar', nameVar);

let nameLet = 'Gizi';
nameLet = 'Kriszta';
console.log('nameLet', nameLet);

const nameConst = 'a';
//nameConst = 'b'; // Nope, no reassigne
console.log('nameConst', nameConst);

// Functon scoping
function getPetName() {
    var petName = "Jhony";
    return petName;
}

getPetName();
//console.log(petName); // no acess in global scope

// Block scoping works with let, const
var fullName = "János Géza";

if (fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
    const lastName = fullName.split(' ')[1];
    console.log(lastName);
}

console.log(firstName);
//console.log(lastName); //Not in global scope