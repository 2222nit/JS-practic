// function myName() {
//     console.log("N");
//     console.log("i");
//     console.log("t");
//     console.log("i");
//     console.log("s");
//     console.log("h");
// }
// myName();

// function addTwoNumbers(a, b) {
//     console.log(a + b);
// }
// addTwoNumbers(); 
// addTwoNumbers(5, 10); // Output: 15
// addTwoNumbers("3",4); // Output: 34 (string concatenation)
// addTwoNumbers(5, "a"); // Output: 5a (string concatenation)
// const result = addTwoNumbers(5, 10);
// console.log(`result is ${result}`); // Output: result is undefined (function does not return a value)

// function subtractTwoNumbers(a, b) {
//     return a - b; // returns the difference of a and b
// }

// console.log(subtractTwoNumbers(10, 5)); // Output: 5

// function addTwoNumbers1 (a, b) {
// //     let result = a + b;
// //     return result  
// //     console.log("nitishkamboj"); // This line will not execute because the return statement exits the function
//     return a + b; // returns the sum of a and b
// }
// const result = addTwoNumbers1(5, 10);
// // console.log(`result is ${result}`); // Output: result is 15

// function LoggedIn(username) {
//     if (!username) {   // or if (username === undefined)
//         // console.log("Please provide a username.");
//         return "Please provide a username.";
//     }

//     return`Hello ${username}, you are logged in!`;
// }
// // console.log(LoggedIn("Nitish"));
// console.log(LoggedIn());


// function NumberOfCarts(...num1) {
//     return num1
// }
// console.log(NumberOfCarts(5, 6, 7));


// function NumberOfCarts(val1, val2, ...num1) {
//     return num1,val1, val2;
// }
// console.log(NumberOfCarts(5, 6, 7, 8, 9)); 

const username = {
    username: "Nitish",
    password: "12345",
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} snd password is ${anyobject.password}`);
}
// handleObject(username);
// handleObject({
//     username: "Nitish",
//     password: "1234",})

// const myNewArray = [100, 200, 300, 400, 500];

// function returnSecondValue(getArray){
//     return getArray[1];
// }
// // console.log(returnSecondValue(myNewArray)); // Output: 200
// // console.log(returnSecondValue([10, 20, 30, 40, 50])); // Output: 20
// function returnLastValue(getArray) {
//     return getArray[getArray.length - 1];
// }
// returnLastValue(myNewArray); 
// returnLastValue(myNewArray.length - 2); 





//function and Scope



if(true) {
    let a =10;
const b = 20;
var c = 30;
}

// console.log(a);
// console.log(b);
console.log(c);


