//1. conversion to number
// let v1 = "33"
// console.log(v1)
// console.log(typeof(v1))
// //OR
// console.log(typeof v1)

// let v1Number = Number(v1)
// console.log(typeof v1Number)
// console.log(v1Number)

// let v2 = ""
// console.log(typeof v2)
// let v2Number = Number(v2)
// console.log(typeof v2Number)
// console.log(v2Number)  //NaN

//so coversion with change the typeof variable for sure, but the value may/maynot change
//summary:
//"33" -> 33
//"33abc" -> NaN
//"" -> 0

//true -> 1; false -> 0

//null -> 0

//undefined -> NaN




//2. Conversion to Boolean
// let isTrue = 0;
// let isTrueBool = Boolean(isTrue)
// console.log(typeof isTrueBool);
// console.log(isTrueBool);

//Summary
// 1 -> true
// 0 -> false
//"" -> false
//"Manasi" -> true




//3. Conversion to strings
// let n1 = 10
// let n1String = String(n1)
// console.log(typeof n1String)
// console.log(n1String);

//Summary:
//33 -> "33" (but in terminal, there are no quotes to strings)

//*******************************************Operations**************************************

//Artihmetic
console.log(2+3);
console.log(2-3);
console.log(2*3);
console.log(2**3);
console.log(2/3);
console.log(2%3);

//Negative of a value
let n = 9;
console.log(-n);

//String concatenation
let str1 = "manasi"
let str2 = " doiphode"
let str3 = str1 + str2
console.log(str3)
console.log("1" + "2");
console.log("1" + 2);
console.log(1 + "2");
//below 2 are confusing
console.log("1" + "3" + 2);
console.log(1 + 3 + "2");
//All of this is given as a guidline in js official doc, it is too complex(only asked in exams/questions but not in production) and these things dont have any real time applications and they are making things confusing for no reason. here instead you can use parenthesis for easy understanding.
//below are more examples of confusing operations which should not be used in real life applications
console.log(+true);
console.log(+"");

//Prefix/Postfix: go to mdn doc for this operation
let a = 200
a++
++a
console.log(a);

//how NOT to write the code: bcoz it reduces readability
let num1, num2, num3;
num1 = num2 = num3 = 9;
