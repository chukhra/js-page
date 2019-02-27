const greettings = 'Hello World';
alert('Hello World!');

// number
// string
// boolean
// null
// undefined
// object
// Symbol

const age = 42;
let isMerried = false;

const userAge = parseFloat(prompt('Enter your age'));
alert('Your age is ' + userAge);
const nextAge = userAge + 1;
alert('Next year you will be ' + nextAge);

const ageString = checkAge(userAge);
alert('You are ' + ageString);

function checkAge(age) {
    if (age > 100) {
        return 'old';
    }
    if (age < 18) { // < > <= >= == === != !==
        return 'child';
    } else {
        return 'adult';
    }
}