let fruits = ["orange","apple","banana"];


// access each elements

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// change elements in the array

fruits[0] = "coconut";

// adding values

fruits.push("lemon");
fruits.pop(); // removes last element

fruits.unshift("mango"); // add element to begining
fruits.shift();//removes element from the begining

let length = fruits.length;
let index = fruits.indexOf("kiwi");

console.log(index);
console.log(length);



console.log(fruits); 