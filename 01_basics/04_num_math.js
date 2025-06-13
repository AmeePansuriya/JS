/*
const score = 200
console.log(score);

const balance = new Number(100)//specifies the type number
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const balance1 = 123.895
console.log(balance1.toPrecision(4));
console.log(balance1.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));
*/



//++++++++++++++++++++++++++++++++++ MATH +++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-1.6));
console.log(Math.round(-1.6));
console.log(Math.ceil(3.4));//for top value in round off
console.log(Math.floor(5.6));//for lower value in round
console.log(Math.min(1, 6, 7, 4, 3, 8, 2));
console.log(Math.max(1, 6, 7, 4, 3, 8, 2));

console.log(Math.random());//gives value between 0 and 1
console.log((Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min +1)) + min);
