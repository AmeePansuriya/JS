//object literals

// const mySym = Symbol("key1")

// const user = {
//     name: "AP",
//     "full name": "Amee Pansuriya",
//     [mySym]: "myKey1",
//     age: 20,
//     email: "ap123@gmail.com",
//     isLoggedIn: false
// }

// console.log("user name is: ", user.name);
// console.log(user.age);
// console.log(user["full name"]); //because we declared the full name as string so have to do...
// console.log(user[mySym]);

// ______________________________________________________________________________________________


// Singleton

//const JSuser = new Object() //this is a singleton obj
// const JSuser = {} //non-singleton objeect

// JSuser.id = "123abc"
// JSuser.name= "sammy"
// JSuser.isLoggedIn = false

// //console.log(JSuser);

// const regularUser = {
//     email: "r123@gamil.com",
//     fullname: {
//         userfullname: {
//             firstname: "amee",
//             lastname: "pansuriya"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname.lastname);


// const obj1 = {1:"a", 2:"b"}
// const obj2 = {3:"a", 4:"b"}

// //const obj3 = {obj1, obj2}
// //const obj3 = Object.assign({}, obj1, obj2)

// const obj3 = {...obj1, ...obj2}//simpler and latest
// console.log(obj3);


// const users = [
//     {
//         id: 1,
//         email: "u1@gmail.com"
//     },
//     {
//         id: 1,
//         email: "u1@gmail.com"
//     },
//     {
//         id: 1,
//         email: "u1@gmail.com"
//     }
// ]

// users[1].email

// console.log(JSuser);
// console.log(Object.keys(JSuser));
// console.log(Object.values(JSuser));
// console.log(Object.entries(JSuser));

// console.log(JSuser.hasOwnProperty('isLoggedIn'));



//_________________Destructuring__________________________


const course = {
    coursename: "c1",
    price: "999",
    courseInstructor: "xyz"
}

//course.courseInstructor
const {courseInstructor: instructor} = course //destuctured courseInsturctor so we dont have to write it each time 
console.log(instructor); //we can now just use instructor instead of courseInsturctor




//-------------------------FUNCTIONS-------------------------------------

function calculateCartPrice(...num1){ //... => for rest and spread both 
    return num1
}
console.log(calculateCartPrice(200, 400, 5000, 1000));
 

// function calculateCartPrice(val1, val2, ...num1){ //stores 1st value in val1, 2 in val2 and rest in num1
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 5000, 1000));
