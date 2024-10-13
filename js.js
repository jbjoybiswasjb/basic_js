// /* 
// 1. Variable
// ===============================================================================================
// */

// // How to declare a variable.
// // keyword variableName = variableValue;


// // 3 Case of variable naming convention.
// /*

// 1. snake_case
// 2. PascalCase
// 3. camelCase
// 4. UPPER_SNAKE_CASE

// */


// // Const, Let.
// // Const have to use when variable value have to update but not replace. Usually const used for non-primitive data type array, object.


// // Variable.
// // Number, String, Boolean, Array, Object, Null, Undefined.

// let nickAge = 1;
// let nicksPetName = 'Zo';
// let isPassed = true;
// const NICK_FRIENDS = ['Selena', 'Priyanka', 'Gomez', 'Chopra'];
// const NICK_DETAILS = {
//     name: 'Nick',
//     age: 29,
//     girlFriends: ['Honey', 'Selena Gomez'],
//     car: {
//         firstCar : 'Toyota',
//         price: 2300000,
//         color: 'Black',
//     }
// }



// // Type check.
// console.log(typeof 1);
// console.log(typeof 'Nick');
// console.log(typeof true);



// console.log(typeof [1, 2]);
// const numbers = [1, 2, 3, 4];
// // const numbers = {name: 'Nick'};
// console.log(Array.isArray(numbers));


// console.log(typeof {name: 'Nick', age: 28,});
const student = {
    name: 'Rajib',
    age: 30,
    isPassed: true,
}
console.log(typeof student);

let value = {};
if (
    (typeof value === 'object') &&
    !(Array.isArray(value)) &&
    (value !== null)) {
    console.log("Object.");
}
else {
    console.log('Not Object.');
}