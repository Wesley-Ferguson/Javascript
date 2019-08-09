let massMark, heightMark, bmi_Mark, massJohn, heightJohn, bmi_John;
massMark = 86;
heightMark = 1.82;
massJohn = 105;
heightJohn = 1.95;

bmi_Mark = massMark / (heightMark * heightMark);
console.log(bmi_Mark);
//Test using math method
bmi_Mark = massMark / Math.pow(heightMark,2);
console.log(bmi_Mark);

bmi_John = massJohn / (heightJohn * heightJohn);
console.log(bmi_John);
//Test using math method
bmi_John = massJohn / Math.pow(heightJohn,2);
console.log(bmi_John);

let fatter = bmi_Mark > bmi_John;

console.log('Is Marks BMI greater that John\'s?' + ' ' + fatter + '.');