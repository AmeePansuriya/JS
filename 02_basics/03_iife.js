//IIFE(Immediately Invoked Function Expression)
//use: global scope ke variables or declarations ke pollution ko hatane ke liye(because it executes immediately)

(function connect() {
    console.log(`DB connected`)
})();       //semicolon , when using two iife in a row

(() => {
    console.log(`DB CONNECTED AGAIN`)
})();

((name) => {
    console.log(`DB CONNECTED TO ${name}`)
})('Amee')

//1st parentheses(): function defination
//2nd (): for execution of the function