// let myDate = new Date()

// let myCurrentDate = new Date(2025, 0, 1, 4, 24)//JS takes month starting from 0 here beacuse, its written in array form
// console.log(myCurrentDate.toDateString());
// console.log(myCurrentDate.toLocaleString());

let myCurrentDate = new Date("2025-01-11")//takes month starting from 1
console.log(myCurrentDate.toLocaleString());


let myTimeStamp = Date.now();
console.log(myTimeStamp);

console.log(myCurrentDate.getTime());
///////if asked in seconds
console.log(Math.floor(Date.now()/1000));
