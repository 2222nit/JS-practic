// Object literals

const mySym = Symbol('mySymbol');

const person = {
  name: 'John',
  "Full Name": 'John Doe',
  [mySym]: 'mySymbol',
  age: 30,
  isStudent: false,
}

// const {age} = person
// console.log(age);
// console.log(person);
// console.log(person.name);
// console.log(person[`name`]);
// console.log(person["Full Name"]);
// console.log(mySym);
// console.log(person[mySym]);


// person.age = 31; 
// // Object.freeze(person); // prevents any changes to the object
// person.age = 32; // this will not change the age
// console.log(person.age); // Output: 31


// person.greeting = function() {
//     console.log(`Hello, my name is ${this.name}`);
// }
// console.log(person.greeting); // Output: Hello, my name is John

// const person2 = {}
// person2.name = "Nitish"
// person2.age = 25
// person2.LoggedIn = false

// console.log(person2);

// const regularuser = {
//     email:"nitishkamboj8070@gmail.com",
//     fullName: {
//         userfullname: "Nitish Kamboj",
//     }
// }

// console.log(regularuser.fullName.userfullname);

// const obj1 = {1: "one", 2: "two"};
// const obj2 = {3: "three", 4: "four"};
// const obj3 = {...obj1, ...obj2, 5: "five"}; // combines two objects
// // console.log(Object.assign({}, obj1, obj2));
// // console.log(obj3); // Output: {1: "one", 2: "two", 3: "three", 4: "four", 5: "five"}
// console.log(Object.keys(obj3)); 
// console.log(Object.values(obj3)); 
// console.log(Object.entries(obj3)); 


// Destructure objects
// const course = {
//   coursename: "JavaScript",
//   duration: "3 months",
//   price: 100,
// }

// const {coursename} = course; // destructuring
// console.log(coursename); // Output: JavaScript

