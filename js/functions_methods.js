// function getSize(width, height, depth) {
//     const area = width*depth;
//     const volume = width*depth*height;
//     const sizes = [area, volume]
//     return sizes;
// }

// let areaOne = getSize(2, 4, 6)[0];
// let volOne = getSize(3, 6, 9)[1];

// console.log(areaOne);
// console.log(volOne);

// //Function Declarations

// function greet(firstName = 'John', lastName = 'Doe'){

//     //condole.log('Hello');
//     return 'Hello'

// }

// console.log(greet())

function findBiggestFraction(a = 3/4, b = 5/8){
    a>b ? console.log('a: ', a) : console.log('b: ', b);

}

let firstFraction = 3/4;
let secondFraction = 2/12;

findBiggestFraction(firstFraction,secondFraction);
findBiggestFraction(1/10,5/15);