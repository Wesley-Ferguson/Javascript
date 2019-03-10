const number = [12,45,78,62,51,8,3,7];
const numbers = new Array(3,5,32,98,74,62,22);
const fruit = ['Apple', 'Pear', 'Banana', 'Grape'];
const mixed = ['Today', 45, true, null];

let val;

//Get Array Length
val = number.length;

//Check is array
val = Array.isArray(numbers);

//Get single value
val = number[3];

//Insert into array 
number[1] = 55;

console.log(number);
console.log(val);