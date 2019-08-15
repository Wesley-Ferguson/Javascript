/*
//Variables

let firstName = 'John';
console.log(firstName);

let lastName = 'Smith';
let age = 28;

let fullAge = true;
console.log(fullAge);

let job;
console.log(job);

job = 'Teacher';
console.log(job);

// Testing Variable naming rules.
let _3years = 3;
let johnMark = 'John and Mark';
let function = 23;
*/

/***********
 * Variable mutation and type coersion
 */

//  let firstName = 'John';
//  let age = 28;

//  console.log(firstName + ' ' + age);

//  let job, isMarried;
//  job = 'Teacher';
//  isMarried = false;

//  console.log(firstName + ' is a ' + age + 'year old' + job + '. Is he married ' + isMarried + '.');

//  //Variable Mutation
//  age = 'twenty eight';
//  job = 'Driver';

//  alert(firstName + ' is a ' + age + 'year old' + job + '. Is he married ? ' + isMarried + '.');

//  let lastName = prompt('What is his last name?');
//  console.log(firstName + ' ' + lastName);

 /************
  * Basic Operators
  */

//   let year, yearMark, yearJohn;
//   now = 2020;
//   ageJohn = 28;
//   ageMark = 33;

//   //Math Operators
//   yearJohn = now - ageJohn
//   yearMark = now - ageMark
  
//   console.log(now - 2);
//   console.log(now + 2);
//   console.log(now * 2);

//   //Logical Operators
//   let johnOlder = ageJohn > ageMark;
//   console.log(johnOlder);

//   //typeof Operator
//   console.log(typeof johnOlder);
//   console.log(typeof ageJohn);
//   console.log(typeof 'Mark is older than John');
//   let x;
//   console.log(typeof x);

/************
 * Operator precedence
 */
/*
let now = 2019;
let yearJohn = 1981;
let fullAge = 18;

let isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

let ageJohn = now - yearJohn;
let ageMark = 38;
let average = (ageJohn + ageMark) /2;
console.log(average);

//Multiple Assignments
let x, y;
x = y =(3+5) * 4 - 6;
console.log(x,y);

//More Operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x ++;
console.log(x);

*/

/*****
 * If/else statements
 */

// let firstName = 'John';
// let civilStatus = 'Single';

// if (civilStatus === 'Married') {
//     console.log(firstName + ' is married.');
// } else {
//     console.log(firstName + 'is not married yet')
// };

// let isMarried = false;
// if (isMarried) {
//     console.log(firstName + ' is married')
// } else{
//     console.log(firstName + ' will soon be married, maybe, hopefully')
// };

// let massMark, heightMark, bmi_Mark, massJohn, heightJohn, bmi_John;
// massMark = 66;
// heightMark = 1.82;
// massJohn = 105;
// heightJohn = 1.95;


// bmi_Mark = massMark / Math.pow(heightMark,2);
// console.log(bmi_Mark);

// bmi_John = massJohn / Math.pow(heightJohn,2);
// console.log(bmi_John);

// if (bmi_Mark > bmi_John) {
//     console.log('Mark is fatter that John!');
// } else {
//     console.log('John is fatter that Mark!');
// };

/**********
 * Bolean Logic
 */

//  let age = 15;

//  if (age <= 13) {
//     console.log('This is a boy.');
//  } else if (age >= 13 && age < 20) {
//     console.log('This is a teenager');
//  } else if (age > 20 || age < 30) {
//     console.log('This is a young man');
//  } else {
//      console.log('This is a man!');
//  };

 /***************
  * Ternery & Switch
  */

//   age >= 18 ? console.log('You may dring beer') : console.log('You may drink juice') 

//   let drink = age >= 18 ? 'Drinks Beer' : 'Drinks Juice';
//   console.log(drink);  

/*
switch (true) {
    case age <= 13 :
        console.log('This is a boy.');
        break;
    case age >= 13 && age < 20 :
        console.log('This is a teenager');
        break;
    case age > 20 || age < 30 :
        console.log('This is a young man');
        break;
    
    default:
        console.log('This is a man');                
};*/

// let height = 0;

// height || height === 0 ? console.log('Variable is defined') : console.log('Variable is not defined');

/*
function noPlay (gender, age) {
        if (gender === 'female' || age < 16) {
                console.log('You are not eligible to participate!');
        }else {
            console.log('Find this player a team!')
        };            
};

console.log(noPlay('female', 21));

function calculateAge(birthYear) {
        return 2018 - birthYear;    
}

let ageJohn = calculateAge(1981);
let ageMike = calculateAge(1972);
let ageJane = calculateAge(1954);

console.log(ageJohn, ageMike, ageJane  );


function yearsToRetirement(year, firstName) {
    let age = calculateAge(year);
    let retirement = 65 - age;
        
    if (retirement > 0) {
        console.log(firstName + ' ' + 'retires in' + ' ' + retirement + ' years.' );
    }else {
        console.log(firstName + ' ' + 'is already retired.');
    }
};

yearsToRetirement(1990, 'Wes');
yearsToRetirement(1945, 'Meg');
yearsToRetirement(2020, 'Ali');

//Function Expressions

let whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches Kids to code.'
        case 'driver':
            return firstName + ' drives cabs in Lisbon.'
        case 'designer':
            return firstName + ' design websites.'
        default:
            return firstName + ' does something else.'
    };
};

console.log(whatDoYouDo('teacher', 'Barry'));
console.log(whatDoYouDo('Driver', 'Kate'));
console.log(whatDoYouDo('muppett', 'Warren'));
*/

/***************
 * Arrays
 */

 /*
 let names = ['Mike', 'John', 'Jane'];
 let year = [1990, 2001, 2016];

 console.log(names);
 console.log(year.length);

 names[1] = 'Ben';
 names[names.length] = 'Ben';
 console.log(names);

 //Different Data Types
let john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr');

john.pop();
john.shift();
john.push('designer');

console.log(john);
console.log(john.indexOf('Smith'));

let isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer.' : 'John IS a designer.';

console.log(isDesigner);

*/

/***************
 * Objects & Methods

 const wes = {
        firstName: 'Wesley',
        midName: 'Richard',
        lastName: 'Ferguson',
        family: ['Mike', 'Elize', 'Meg'],
        isMarried: false,
        birthYear: 1981,
    //Methods
        calcAge: function() {
            this.age = 2019- this.birthYear;
        },
 };

wes.calcAge();
wes.isMarried = true;
wes.family = wes.family.unshift('Milo');
console.log(wes);
*/

/************
 * Loops & Iteration
 */
 
//  for(i = 1; i < 20; i +=2) {
//      console.log(i);
//  };

 let john = ['John', 'Smith', 1990, 'teacher', false]

 for(let i = 0; i < john.length; i++) {
    if(typeof john[i] !== 'string') break;
     console.log(john[i]);
 };

for(let i = (john.length-1); i >= 0; i --) {
    if(typeof john[i] === 'string') continue;
        console.log(john[i]);
}






























/************PRACTICE******* */

//ARRAYS

// let rvtFiles = [];

// rvtFiles.push('First file', 'Second File');

// console.log(rvtFiles);

// rvtFiles.pop();
// rvtFiles.unshift(1);

// console.log(rvtFiles);

//FUNCTIONS

// const rvtFiles = (ar_file, se_file) => {
//     if(ar_file != se_file) {
//         console.log('Se cannot be loaded');
//     }else {
//         console.log('AR & Se are merged')
//     };

//     return console.log('Model coordination complete');
// };

// rvtFiles('AR_1', 'AR_1');
