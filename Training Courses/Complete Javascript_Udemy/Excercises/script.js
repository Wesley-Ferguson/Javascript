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