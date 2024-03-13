//between same datatypes: mo issue
console.log(2<3)
console.log(2>=3)
console.log(2==3)
console.log(2!=3)

//comparison betn diff datatypes
console.log(3 > "2");
console.log("3" >= 2);
console.log("3" == "3");

//for below: The reason is that an equality check == and comparisons > < >= <= work differently.Comparisons convert null to a number, treating it as O. That's why (3) null >= 0 is true and (1) null > 0 is false.
console.log(null == 0);
console.log(null > 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined >= 0);

//Strict check(===): checks both value and datatype
console.log(2 == "2");
console.log(2 === "2");
