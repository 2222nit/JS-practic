// # Primitive Data Types Summary
// 7 types of primitive data types in JavaScript
// 1. String
// 2. Number    
// 3. BigInt: //    Used for large integers, e.g., BigInt(1234567890123456789012345678901234567890)
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol


//reference data types or non-primitive data types
// 1. Object: Used to store collections of data and more complex entities.
// 2. Array: A special type of object used to store ordered collections of values.
// 3. Function: A block of code designed to perform a particular task, which can be executed when called.
// 4. Date: Used to work with dates and times.
// 5. RegExp: Used for pattern matching in strings, allowing for complex search and replace operations.
// 6. Map: A collection of keyed data items, similar to an object but with keys of any type.
// 7. Set: A collection of unique values, where each value can only occur once.
// 8. WeakMap: Similar to Map, but keys are weakly referenced, allowing for garbage collection.


const score = 100;
const scoreValue = 100.3;
const isLoggedIn = true;
const userName = "Nitish";
// const outsideTemp = Null;
let userEmail;
const bigIntValue = BigInt(1234567890123456789012345678901234567890);

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId);

// // Array
// const user = ["Nitish", "Kamboj", 3, 4, 5, 6, 7, 8, 9];
// console.log(user[0]);


// let myObj = {
//     name : "Nitish",
//     age: 23,
// }
// console.log(myObj);
const myFunction = function() {
    console.log("Hello from my function");
}

console.log(typeof id);