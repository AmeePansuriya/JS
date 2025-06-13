"use stict"; //treat all JS code as newer version

//alert("hello")
//alert(3 + 3) //we are using nodejs, not browser

let name = "AP"
let age = 20
let state;

//number => 2 to power53
//bigint
//string => ""
//boolean => true/false
//null => standalone value
//undefined 
//symbol=> unique

console.log(typeof "AP");
console.log(typeof age);
console.log(typeof null); //object
console.log(typeof undefined); //undefined


//+++++++++++++++++++++ MEMORY ++++++++++++++++++++++

// Stack (primitive)=>you get a copy of the declared variable
// Heap (non-primitive)=> you get reference of original value

let  myName = "AP"

let anotherName = myName
anotherName = "APansuriya"
console.log(myName);
console.log(anotherName);

