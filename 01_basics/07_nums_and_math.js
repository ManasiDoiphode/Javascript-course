const score = 100;  //dynamically given a type of number
console.log(score);
console.log(typeof(score));

//to ensure it is of the type number, we can explicitly define it.
const balance = new Number(100);
console.log(balance);
console.log(typeof(balance));
//ABOVE GIVES A LOT OF GETTERS AND SETTERS
console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));  //no. of decimals
console.log(balance.toPrecision(3));  //total no. of digits the answer should be precised to.
//IT MUST BE GREATER OR EQUAL TO NO. OF DIGITS IN THE NUMBER

const stocks = 1000000000000;
console.log(stocks.toLocaleString());  //deafult is USA standard
console.log(stocks.toLocaleString('en-IN'));  //Indian standard

//min max values:
let maxi = Number.MAX_VALUE;
let mini = Number.MIN_VALUE;
console.log(maxi, mini);

//-------------------Maths---------------------------------------------------------
//Math is buildin library in js
console.log(Math);  //provides so many features, view them in browser console
console.log(Math.abs(-3));
console.log(Math.pow(3, 4));
console.log(Math.round(4.3));
console.log(Math.round(4.5));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.sqrt(49));
console.log(Math.max(49, 38, 1, 9, 90));
console.log(Math.min(49, 43, 1, 34, 9));

//Random function: IMP
console.log(Math.random());  //gives values in between 0 and 1
console.log(Math.random()*10);  //but this can still be less than 1
console.log((Math.random()*10) + 1);  //hard to find this formula for difference values of range.
console.log(Math.floor((Math.random()*10) + 1));

//If we know the range in which random should lie, use below format
const min = 10;
const max = 20;
let randomNumber = Math.floor((Math.random() * (max - min + 1)) + min);
console.log(randomNumber);