/*
There are 2 versions of js. In newer version, features like classes, etc are used. The engine can identify the code and won't matter the standard, but to striclty use the newer versions standards, use the following command:
*/
"use strict";

//In nodejs, alert() doesnt work. This command works on browser and gives a notification as the alert message.
//alert(3+3)

//Readability is important, thus use extensions like prettier, etc.
console.log(3+3); console.log("manasi")
//so dont do like above, each statement should be on new line.


//datatypes: Primitives
let name = "manasi"  //1. string (represented using ""(prefered) and '')
let age = 20  //2. number (range till 2^53)
let population = 3245415423435  //3. BigInt
let isloggedIn = true  //4. boolean (true/false)
let eyecolour;  //5. Undefined
//6. Symbol: used to find uniqueness of eg. conponents(more used in react)


//datatypes: Non Primitives: objects
//null: standalone value/empty value: datatype is object

console.log(typeof eyecolour)  //type is undefined
console.log(typeof null)  //type is object

