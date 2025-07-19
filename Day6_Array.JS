//types of declare myArray

const myArray = [1,2,3,4,5];
// console.log(myArray[0]); 
// console.log(myArray[0] + myArray[1]); 
// console.log(typeof myArray[0]); 

// const name = ["Nitish", "Kamboj"];
// const myArray2 = new Array(1, 2, 3, 4);
// console.log(myArray[4]);


// Array methods
// myArray.push(6);// adds an element to the end of the array
// myArray.unshift(0); // adds an element to the beginning of the array
// myArray.pop(); // removes the last element of the array
// myArray.shift(); // removes the first element of the array
// myArray.splice(2, 1); // removes the element at index 2
// myArray.splice(2, 0, 10); // adds an element at index
// console.log(myArray);
// console.log(myArray.includes(10)); // checks if the array includes the element 10
// console.log(myArray.indexOf(10)); // returns the index of the element 10


// const newArray = myArray.join(" - "); // joins the array elements into a string
// console.log(newArray); // Output: "1 - 2 - 3 - 4

const AnimeWorrier = ["Naruto", "Luffy", "ichigo", "eren", "Goku"];
const DC = ["Batman", "Superman", "Flash", "WonderWoman"];

// AnimeWorrier.push(DC);
// console.log(AnimeWorrier);
// console.log(AnimeWorrier[2]);
// console.log(AnimeWorrier[5][2]);
// console.log(AnimeWorrier[3][2]);

// const AllHeros = AnimeWorrier.concat(DC); // combines two arrays
// console.log(AllHeros); // Output: ["Naruto", "Luffy", "ichigo", "eren", "Goku", "Batman", "Superman", "Flash", "WonderWoman"]

// const AllHeros = [...AnimeWorrier, ...DC]; // combines two arrays using spread operator
// console.log(AllHeros); // Output: ["Naruto", "Luffy", "ichigo", "eren", "Goku", "Batman", "Superman", "Flash", "WonderWoman"]

const anotherArray = [1, 2,[ 3, 4], 5,[ 6, 7]];
const real_anotherArray = anotherArray.flat(); // flattens the array
console.log(real_anotherArray); // Output: [1, 2, 3,





console.log(Array.isArray(AnimeWorrier));
// Output: true
// console.log(Array.from("AnimeWorrier"));
console.log(Array.from({name: "AnimeWorrier"}));


let score1 = 100;
let score2 = 200;
let score3 = 300;
 console.log(Array.of(score1, score2, score3)); 