// const name = "AP"
// const repoCount = 20

// console.log(name + repoCount + " value"); //old way
// console.log(`my name is ${name} and my repoCount is ${repoCount}`); //new and better way


const gameName = new String('ameepansuriya')

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('m'));

console.log(gameName.__proto__);
//slice
const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

//trim 
const str = "  hello  "
console.log(str);
console.log(str.trim());
//
const url = "https://amee.com/amee%20pansuriya"
console.log(url.replace('%20', '-'));
console.log(url.includes('amee'));
console.log(url.includes('hey'));


