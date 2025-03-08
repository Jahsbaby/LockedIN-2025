//Strict Mode
/*
'use strict'; //it has to be the very first code in my script for it  be activated, it helps avoid bugs and errors

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

//const interface = 'Audio';
//const private = 534;
//const if = 15;

//Functions (the most important building block of js - it's a piece of code that's reusuable)
// a variable holds a value, but a function can hold one or more line of code

function logger() {
    //function body
    console.log('my name is Blessing');
}
logger();//invoking, calling, running;
logger();
logger();// logger(); //this will run the function and print the message to the console 3 times because we called it 3 times.

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProcessor(5, 0);//5, 0 are the arguments
console.log(appleJuice);
//console.log(fruitProcessor(5, 0)); //this will print the function itself,
//but to print the result of the function, we have to store it in a variable
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');//Number is a built-in function in js.
*/

//Function Declaration vs. Function Expression

//Function Declaration(they can be called before they are defined)
/*
function calcAge1(birthYear) { //generic function
    const age = 2037 - birthYear;
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1);

//Function Expression(they cannot be called before they are defined)
const calcAge2 = function (birthYear) { //anonymous function (expressions produce values)
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);
//console.log(calcAge2(1991)); //this will throw an error because calcAge2
//is not defined before it is called.

*/
//Arrow Functions
/*
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

//Arrow Functions with multiple parameters
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    const firstName = 'Blessing';
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Blessing'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/


//Functions calling other functions
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces
 
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of  oranges.`;
    return juice;
}
fruitProcessor(2, 3);
*/
//Reviewing Functions
/*
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if(retirement > 0){
        return retirement;// it will first return the value then exit the function or terminates execution
        onsole.log(`${firstName} retires in ${retirement} years`);
    } else {
        console.log(`${firstName} is already retired.`);
        return -1;
    }
    const firstName = 'Blessing';
    //return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Blessing'));
console.log(yearsUntilRetirement(1970, 'Bob'));
*/


//Challenge 1
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);
const checkWinner = function(avgDolphins, avgKoalas) {
    if(avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }else if(avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
}
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111); - //stand alone function

// Challenge 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/

//DATA STRUCTURES - ARRAYS AND OBJECTS

//ARRAYS
/*
const friend1 = 'Micheal';
const friend2 = 'Stephen';
const friend3 = 'Peter';

const friends = ['Micheal', 'Stephen', 'Peter'];  //literal syntax
console.log(friends);

//different way of using array
const years = new Array(1991, 1984, 2008, 2020); // Array function and the new keyword

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.lenght);
console.log(friends[friends.lenght - 1]);

friends[2] = 'Jay';// only primitive value are immutable but arrays are mutable even if it was declared with const
console.log(friends);
//friends = ['Bob', 'Alice'];

const blessing = ['Blessing', 'James', 2037 - 2002,
    'teacher', friends
];
console.log(Blessing)
console.log(Blessing.lenght);


//Exercise 
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}
const years = [1999, 1967, 2002, 2010, 2018];
console.log(calcAge(years));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.lenght - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.lenght - 1])];
console.log(ages);
*/

//Basic ARRAY OPERATIONS (METHODS)

/*
const friends = ['Micheal', 'Stephen', 'Peter'];
const newLenght = friends.push('Jay');// push methods add value/elements to the end of the array
console.log(friends);
console.log(newLenght);

friends.unshift('John');// to add elements to the array
console.log(friends);

//remove last value/element from the array
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);


friends.shift();//remove the first element in the array
console.log(friends);

console.log(friends.indexOf('Stephen'));
console.log(friends.indexOf('Bob'));

friends.push(23);// this will return false value cos it's testing with strict equality, which means it doesn't do type coercion.
console.log(friends.includes('Stephen'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));

if(friends.includes('Stephen')) {
    console.log('You have a friend called Stephen');
}

*/
//Challenge 2
/*
const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0], + tips[0], bills[1], + tips[1], + bills[2], + tips[2]]
console.log(bills, tips, totals);
*/

//INTRODUCTION TO OBJECTS

/*
const blessingArray = [
    'Blessing',
    'James',
    2037 - 2002,
    'student',
    ['Micheal', 'Stephen', 'Peter']
];
const blessing = { // the object literal syntax
  firstName: 'Blessing',
  lastName: 'James',
  age: 2037 - 1914,
  job: 'student',
  friends: ['Bukky', 'Hannah', 'Queen']
}

*/

//Data Structures

//OBJECTS FOR MORE UNORDERED DATA (Objects - it's used to essentially group together different variable that really belong together
 //in object the order of values doesn't really matter at all when we'd retrieve them
 //ARRAYS FOR MORE ORDERED DATA (while in arrays, the order with which we specify the elements matters a lot because that's how we access this elements
 


//Dot vs bracket notation

/*
const blessing = {
    firstName: 'Blessing',
    lastName: 'James',
    age: 2037 - 2002,
    job: 'Student',
    friends: ['Grace', 'Umar', 'Joan']
};
console.log(blessing);

console.log(blessing.lastName);
console.log(blessing['lastName']);

const nameKey = 'Name';
console.log(blessing['first' + nameKey]);
console.log(blessing['last' + nameKey]);

// console.log(blessing.'last' + nameKey)

const interestedIn = prompt('What do you want to know about blessing? Choose between firstNmae, LastName, age, job, and friends')

console.log(blessing[interestedIn]);

if (blessing[interestedIn]) {
    console.log(blessing[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

blessing.location = 'Nigeria';
blessing['twitter'] = '@blessin8699'
console.log(blessing);


//Challenge

//"BLESSING has 3 friends, and her best friend is called Grace"

console.log(`${blessing.firstName} has ${blessing.friends.lenght} friends, and her best friend is called ${blessing.friends[0]}`);

*/


/*

//OBJECTS METHODS

const blessing = { // the object literal syntax
    firstName: 'Blessing',
    lastName: 'James',
    birthYear: 2002,
    job: 'student',
    friends: ['Bukky', 'Hannah', 'Queen'],
    hasDriversLicense: true,

   // calcAge: function (birthYear) {
       // return 2037 - birthYear;
   // }
//calcAge: function(){
    //console.log(this);
    return 2037 - this.birthYear;
}

   calcAge: function (){
    this.age = 2037 - this.birthYear;
    return;
}
getSummary: function() {
    return `${this.firstName} is a ${this.calcAge()}-year old ${blessing.job}, and she has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
}


console.log(blessing.calcAge());

blessing.calcAge = calcAge;
console.log(blessing.age());
console.log(blessing.age());
console.log(blessing.age());
//console.log(blessing['calcAge'](2002));//bracket notation


//Challenge
// "BLESSING is a 22 year old student, and she has a driver's license"
console.log(blessing.getSummary());
*/


// CHALLENGE

/*
const mark = {
  fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2; 
        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();
if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than $(john.fullName)'s BMI (${john.bmi})`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}

*/


//ITERATION: THE FOR LOOPS
/*
//console.log('Lifting weights repetition 1');
//console.log('Lifting weights repetition 2');
//console.log('Lifting weights repetition 3');
//console.log('Lifting weights repetition 4');
//console.log('Lifting weights repetition 5');
//console.log('Lifting weights repetition 6');
//console.log('Lifting weights repetition 7');
//console.log('Lifting weights repetition 8');
//console.log('Lifting weights repetition 9');
//console.log('Lifting weights repetition 10');


//for loop keeps running while condition is TRUE
for(let rep = 1; rep <= 10; rep = rep++) {
    console.log(`Lifting weights repetiton ${rep}`);
}

*/

//LOOPING ARRAY (BREAKING AND CONTINUING)

/*
const blessingArray = [
    'Blessing',
    'James',
    2037 - 2002,
    'student',
    ['Micheal', 'Stephen', 'Peter']
    true
];

const types = [];

//console.log(blessing[0])
//console.log(blessing[1])
//console.log(blessing[2])
//console.log(blessing[3])
//console.log(blessing[4])
//blessing[5] does NOT exist


for (let i = 0; i < blessing.length; i++) {
    //READING FROM BLESSING ARRAY
    console.log(blessing[i], typeof blessing[i]);
}

//FILLING TYPES OF ARRAY
//types[i] = typeof blessing[i];
types.push(typeof blessing[i]);


console.log(types);
const years = [1991, 2002, 2007, 1969];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

//Continue and break

//continue
console.log('----- ONLY STRINGS ----')
for (let i = 0; i < blessing.length; i++) {
    if (typeof blessing[i] !== 'string') continue;
    console.log(blessing[i], typeof blessing[i]);
}

console.log('----- BREAK WITH NUMBER ----')
for (let i = 0; i < blessing.length; i++) {
    if (typeof blessing[i] !== 'number') break;
    console.log(blessing[i], typeof blessing[i]);
}
*/

//LOOPING BACKWARDS AND LOOPS IN LOOPS

/*
const blessing = [
    'Blessing',
    'James',
    2037 - 1914,
    'student',
    ['Micheal', 'Peter', 'Stephen'],
    true
];
//0, 1, ..., 4
// 4, 3, ..., 0

for (let i = blessing.length - 1; i >= 0; i--) {
    console.log(i, blessing[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);

        for (let rep = 1; rep <= 6; rep++) {
            console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
        }
}
*/

//THE WHILE LOOP
/*

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}
let rep = 1;
while (rep <= 10) {
 console.log(`WHILE: Lifting weights repetition ${rep}`);
 rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}//for loop is better for this kind of situation(when looping over an array)
*/


//CODING CHALLENGE 4

/*
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 :
        bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);


const calcAverage = function (arr) {// function expression
    let = sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    console.log(sum);
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/



