const name = "Nitish Kamboj";
const repoCount = 23;
// console.log(name + " has " + repoCount + " repositories.");
console.log(`${name} has ${repoCount} repositories.`);

//another way to declare strings
const gameName = new String("kambo");
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("o"));


// const newString = gameName.replace("kambo", "Nitish");
const newString = gameName.substring(1, 4); //we can't use native value like slice
console.log(newString);

const anotherString = gameName.slice(-1, 4);
console.log(anotherString);
console.log(anotherString.includes("Nitish"));