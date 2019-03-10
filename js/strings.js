const name = 'Wesley';
const surname = 'Ferguson';
const age = '38';

let val;

//Concatenating
val = name + ' ' + surname;

//Appending

val = 'Wes ';
val += 'Ferguson';

val = 'Hello my name is ' + name + 'and I am ' + age;

val = 'can\'t';

//Length

val = name.length;

//Concat
val = name.concat(' ', surname);

//Change Case
val = name.toUpperCase();
val = name.toLowerCase();

val = name[2];

//Index of

val = name.indexOf('e');
val = name.lastIndexOf('e');

//CharAt()

val = surname.charAt('2');
val = surname.charAt(surname.length -1);

//Substring

val = surname.substring(1,4);

//Slice

val = surname.slice(1,4);
val = surname.slice(-3);


console.log(val);