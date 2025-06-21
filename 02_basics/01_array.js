const arr = [0, 1, 2, 3, 4, 5]
// console.log(arr[2]);//to access the element of array

// arr.push(6)
// arr.pop()
// arr.unshift(4)
// arr.shift(4)
// console.log(arr);


let myn1 = arr.slice(1,3) //returns the part of array but don't manipulate the original array
console.log("A: ", myn1);
console.log(arr);

let myn2 = arr.splice(1, 3) //returns the part of array and cuts that particular part off of the array
console.log("B: ", myn2);
console.log(arr);

//slice: don't manipulate the original array
//splice: manipulate the original array



let marvelheros = ["thor", "ironman", "spiderman"]
let dcheros = ["batman", "superman", "flash"]

//connects two array together
const allHeros = marvelheros.concat(dcheros)
console.log(allHeros);


//spreads the arrays and gives two or more array together(same as concat)
const allNewHeros = [...marvelheros, ...dcheros]
console.log(allNewHeros);
