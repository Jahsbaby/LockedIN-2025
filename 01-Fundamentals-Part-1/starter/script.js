/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);


console.log("Blessing");
console.log(23);

let firstName = "Blessing";
let $function = 27;
let blessing_james = 'Blessing';
let person = "Blessing";
let PI = 3.1415;

console.log(firstName);

let myFirstJob = "Coder";
let myCurrentJob = "Teacher"; 
let job1 = "Programmer";
let job2 = "teacher";
console.log(myFirstJob);
*/


/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);

console.log(typeof javascriptIsFun);

// console.log(typeof 10);
// console.log(typeof 'Blessing');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);
year = 1991;
console.log(typeof year);

console.log(typeof null); A bug in javascript because it returns object instead of null
*/

/*
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990; // This will throw an error because we cannot reassign a const variable
// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'James';
console.log(lastName);
*/
/*
// Math operators
const now = 2037;
const ageBlessing = now - 2002;
const ageSarah = now - 2018;
console.log(ageBlessing, ageSarah);


console.log(ageBlessing * 2, ageBlessing / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Blessing';
const lastName = 'James';
console.log(firstName + ' ' + lastName);

//AAssignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++;
x--;
console.log(x);

// Comparison operators

console.log(ageBlessing > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);
// == checks if the values are equal, === checks if the values and data type are equal

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);
*/

/*
const now = 2037;
const ageBlessing = now - 2002;
const ageSarah = now - 2018;

console.log(now - 2002 > now - 2018);
console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;// x = y = 10, x = 10, y = 10
console.log(x, y);

const averageAge = (ageBlessing + ageSarah) / 2;
console.log(ageBlessing, ageSarah, averageAge);

// Coding Challenge #1
/*
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;
*/

/*
const markWeight = 95;
const markHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;

const markBmi = markWeight / (markHeight ** 2);

const johnBmi = johnWeight / (johnHeight ** 2);

const markHigherBMI = markBmi > johnBmi;

console.log(markBmi, johnBmi, markHigherBMI);

*/


// Strings and Template Literals
/*
const firstName = 'Blessing';
const job = 'Teacher';
const birthYear = 2002;
const year = 2037;
*/
// Old way of concatenating strings
/*
const blessing ='My name is ' + firstName + ' and I am a ' + job + '. I was born in ' + (year - birthYear) years ago.';

console.log(blessing);

const blessingNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;

console.log(blessingNew);

console.log(`Just a regular string...`);

// Multiline strings

console.log('String with \n\
multiple \n\
lines');

// String methods
const greeting = 'Hello, there!';
  */
 /*
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log('Sarah can start driving license');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}
const birthYear = 2002;

let century;
if (birthYear <= 2000) {
  let century = 20;
} else {
  let century = 21;
}
console.log(century);



// Switch statement

const day = 'monday';


// Coding challenge 2
/*

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
*/
// coding challenge 2
/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / (heightMark ** 2);

const BMIJohn = massJohn / (heightJohn ** heightJohn);

console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
*/

//TYPE CONVERSION
/*
const inputYear = "2002";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Blessing'));
console.log(typeof NaN);

console.log(String(23), 23)
console.log(Boolean(0), Boolean(undefined), Boolean(''), Boolean(null), Boolean(NaN), Boolean('Blessing'));



//TYPE COERCION
console.log('i am ' + 23 + ' years old');
console.log('i am ' + 23 + ' years old'); // implicit type coercion
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1 // '11'
n = n - 1;
console.log(n);
*/
// 5 falsy values : 0, '', undefined, null, NaN
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Blessing'));
console.log(Boolean(''));
console.log(Boolean({}));
console.log(Boolean(''));


const money = 0;
if (money) {
  console.log('Don't spend it at all');
} else {
  console.log('You should get a job');
  }
let height;
  if (height) {
    console.log('You are tall');
  } else {
    console.log('You are not tall');
  }
// Truthy values : any value that converts to true when evaluated in a boolean context
console.log(Boolean('Blessing'));
console.log(Boolean(1));
console.log(Boolean(new Date()));
*/


//equality operators

/*
  const age = 18;
  if (age === 18) console.log('You just became an adult:D (strict)');

if (age == 18) console.log('You just became an adult:D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // '22' == 23 -> FALSE
  console.log('Cool! 23 is an amazing number!')
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?');
*/


//Boolean logic
/*
age = 16
A.Age is greater or equal 20 - false
B.Age is less than 30 - true

!A(false) - true
A(false) && B(true) - false
A(false) || B(true) - true
A(true) && B(true) - true
A(false) || !B(false) - false
*/


// Logical operators
/*
const hasDriversLicense = true; // A

const hasGoodVision = true; // B

const isTired = false; // C

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense && hasGoodVision && isTired);
console.log(hasDriversLicense && hasGoodVision || isTired);
// The logical AND operator (&&) returns true if ALL conditions are met
// The logical OR operator (||) returns true if ANY condition is met
// The logical NOT operator (!) returns true if the condition is false
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
/*
const shouldDrive = hasDriversLicense && hasGoodVision;
if (hasDriversLicense && hasGoodVision) {
  console.log('Sarah is able to drive');
} else {
  console.log('Someone else should drive...');
}*/
/*
const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive');
} else {
  console.log('Someone else should drive...');
}*/
// The if/else statement is a way to make decisions based on conditions
// The ternary operator is a shorthand way of writing if/else statements
// The switch statement is a way to make decisions based on multiple conditions

// coding challenge 3
/*
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins) {
  console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas) {
  console.log('It\'s a tie');
}*/
// Bonus 1
/*
const scoreDolphins = (197 + 112 + 81) / 3;
const scoreKoalas = (109 + 95 + 86) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy');
  } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log('It\'s a tie');
} else {
  console.log('No team is eligible for the trophy');
  }
*/

// switch statement
// Bonus 2
/*
const bill = 250;

switch (bill) {
  case bill < 50:
    console.log('The bill is small');
    break;
  case bill >= 50 && bill < 200:
    console.log('The bill is medium');
    break;
  case bill >= 200:
    console.log('The bill is large');
    break;
  default:
    console.log('Invalid bill amount');
}
*/
/*
const day = 'Monday';
switch (day) {
  case 'Monday': // day === 'monday'
    console.log('Eat a salad');
    console.log('listen to sad songs just to feel depressed');
    break;
  case 'Tuesday':
    console.log('sew/mend my clothes');
    break;
  case 'Wednesday':
  case 'Thursday':
    console.log('coding');
    break;
  case 'Friday':
    console.log('ALT SCHOOL LIVE CLASSES');
    break;
  case 'Saturday':
  case 'Sunday':
    console.log('Another weekend in the trenches');
    break;
  default:
    console.log('Invalid day');
}

if (day === 'Tuesday') {
  console.log('sew/mend my clothes');
} else if (day === 'monday') {
  console.log('Eat a salad');
} else if (day === 'wednesday' || day === 'Thursday') {
  console.log('coding');
} else if (day === 'Friday') {
  console.log('ALT SCHOOL LIVE CLASSES');
} else if (day === 'Saturday' || day === 'Sunday') {
  console.log('Another weekend in the trenches');
}

*/

//statement and expressions
/*
3 + 4
1991
true && false && !false
if (23 > 10) {
  const str = '23 is bigger'
}
  const me = 'Blessing'
console.log(`i'm ${2037 - 1991} years old ${}`);

*/
// conditional or ternary operator
//const age = 18;
//age >= 18 ? console.log('I like to drink wine');
//console.log('I like to drink water');

//const drink = age >= 18 ? 'wine' ; 'water';
//console.log(drink);

/*
let drink2;
if (age >= 18) {
  drink2 = 'wine';
} else {
  drink2 = 'water'
}
console.log(drink2);
console.log(`i like to drink ${age >= 18 ? 'wine' ; 'water'}`);

  
//CODING CHALLENGE #4

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 :
bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

//Javascript releases(made in 10 days)
//Brief History of Javascript(it was to add simple dynamics to a webpage)

//backwards compatibility despite new releases over the years(to not break the web).
