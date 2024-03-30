//- Primitives: Call by value
// 1. Number
const number1 = 100;
console.log(number1);
console.log(typeof(number1));

// 2. String
const name1 = "manasi";
console.log(name1);
console.log(typeof(name1));

// 3. BigInt
const population = 85317802758243984394398572n;
console.log(population);
console.log(typeof(population));

// 4. Boolean
const isSmart1 = true;
console.log(isSmart1);
console.log(typeof(isSmart1));

// 5. Undefined
let isSmart2;
console.log(isSmart2);
console.log(typeof(isSmart2));

// 6. Symbol
const id = Symbol(10);
const id1 = Symbol(10);
console.log(id == id1);
console.log(typeof(id), typeof(id1));


//- Non primitives
// 1. Null
const nullVar = null;
console.log(nullVar);
console.log(typeof(nullVar));

// 2. Object
let obj1 = {
    name2: "ankita",
    age: 22,
}
console.log(obj1);
console.log(typeof(obj1));

// 3. Arrays
let marks = [67, 98, 100, 89, 90]
console.log(marks);
console.log(typeof(marks));

// 4. Function
let function1 = function(){
    console.log("hello world!");
}
function1();