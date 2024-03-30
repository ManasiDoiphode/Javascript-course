//1. String Concatenation
const rollno = 2;
console.log(rollno + " manasi" + "doiphode");  //old syntax: not so readable
//newer syntax: String Interpolation using backticks
console.log(`hello, my roll no is ${rollno} and my name is manasi doiphode`);

//string declaration in object form: so many getter and setters available
const gamename = new String("manasi d 09");
console.log(gamename[0]);
console.log(gamename.length);
console.log(gamename.__proto__);
console.log(gamename.charAt(2));
console.log(gamename.indexOf("n"));
console.log(gamename.toUpperCase());
console.log(gamename.substring(0,4));
console.log(gamename.slice(2, 8));

const name2 = "   mandfjd     ";
console.log(name2);
console.log(name2.trim());

const url = "http://mansi%20doiphode.com";
console.log(url.replace('%20', ' '));

console.log(url.includes("com"));

//convert string to array based on a symbol in string
console.log(gamename.split(" "));

//to reverse a string, 1st split, then reverse, then join