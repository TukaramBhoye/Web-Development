/* tukaram = "tukaram"; 
console.log(tukaram);

// 2015 before use var variable 
var age = 24; 
var age = 59; 
var age = 86; // A global scope variable 
console.log(age); 
*/
/*let age = 24; 
let age = 59; 
let age = 86; // block of scope variable : can use same var name out of scope but not in scope. 
 console.log(age); canNot be redeclare var even if in var.

 Mostly use let and const key word 
 Why use let ?  : it just makes things more confusing. For these reasons and more, we recommend that you use let in your code, rather than var.
 Mostly use let and const key word */
// const PI = 3.14; 

// data Types primitive : sunnboosy : string undefine null number boolean symbol 
// non primitive : objects 
/*
let age = 24 ; 
let x = null; // absence of an object :
*/ /*

// loops 
let x = 5; 
for(let i = 1; i<x; i++) {
    console.log("tukaram");
}

// arrays: 
let marks = [97, 32, 54, 64, 23]; // java = []: c++ = {} 

console.log(marks.length); // property 

// functions: block of code that performs a specific task, can be invoke whenever needed 

// ex: 1
console.log("hello");
function myFunction () {
    console.log("tukaram bhoye"); 
    console.log("marathi");
}
// ex: 2
myFunction();  // can called number of times. yes
function myAction (msg) {
    console.log(msg);    
}
myAction("I am learning javascript");

// ex: 3
function sum(x, y){
    s = x + y; 
    return s;
    console.log("hi tuka ") ; // not return kabhi bhi nahi after return 
}

let val = sum(3, 4);
console.log(val);
*/

/*  Arrow function : Compact way of writing a function: 

// ex: 1
// part of modern javascript mostly use now 
const arrowSum = (a, b) => {
    console.log(a + b); 
};

const arrowMul= (a, b) => {
    return a * b; 
}; 

console.log(arrowMul(3, 4));  *//*

// Q. count the vowels : 
function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    console.log(count);
}

// Q. 2 : use Arrow function : 

const countVow = (str) => {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    console.log(count);
};
*/
/*forEach Loop Loop in Arrays : 
- syntax: arr.forEach(callbackFunction)
  functions we can pass or return as normal variable in javascript
 - callBackFunction : here, it is a function to execute for each element in the array
 - A callback Function is a function passed as an argument to another function.
 
// example : 1  for each also called higher order method/function
            // : means functions use as parameter or return function as parameter
let arr = [1, 2 , 3, 4, 5, 6];
arr.forEach(function printVal(val){
    console.log(val);
});

// with arrow : 
let array = ["tukaram", "marathi", "nagshevadi", "Post"]
array.forEach((val, idx, array) => {
    console.log(val.toUpperCase(), idx);
});

// Ex: square no. 
let nums = [2, 3 , 4, 6, 5]; 

nums.forEach((num) => {
    console.log(num**2); // num * num; : num is callback variable
}); 
-----------------------------------------------------------------------------
*/ /* ARRAY METHODS 
- foreach : 
- map : Creates a new array with the results of sum operation. The     value its callback returns are used to form new array.
- filter : creates a new array of elements that give true for a condition/filter eg: all even elements
        -  copy somw filter out elements ex : odd even number, greater less than, numbers
- reduce : Performs some Operatios & reduces the array to a single value. It returns that single value. 
        - sum calulate 
*/ 

/*
let nums = [67, 52, 39]; 

let newArr = nums.map((val)=> { //map  use to create new array 
    return val; 
});

console.log(newArr); 

let calcSquare = ((nums) => {
    console.log(nums * nums);
});
// ex : 2 
let arr = [67, 52, 39, 23, 45]; 
let evenArr = arr.filter((val)=> { //map  use to create new array 
    return val % 2 === 0; 
});
console.log(evenArr); 
*//*
// - REDUCE
let num = [67, 52, 39, 23, 45]; 
const output = num.reduce((res, curr)=> { // reduce all in one 
    return res + curr; // store in res 
}); //  sum = 226 : curr reach at every element and print that sum 

console.log(output);

let arr = [5, 6, 2, 1, 101, 3]; 
const outPut = arr.reduce((prev,  curr) => {
    return prev > curr ? prev: curr; // O/P 101 : value 
});

console.log(outPut); 
// Q. 1  print the student marks
let marks = [78, 88, 97, 87, 43, 76, 85];
// new array me return karega : 
let toppers = marks.filter((val) => {
    return val > 80;
});

console.log(toppers); 
*//*
// Q. 2: 
let n = prompt("enter the num: "); 
 let arr = []; 

 for(let i = 1; i<=n; i++) 
    arr[i-1] = i; // 1(0), 2(1),  index 0 ,1

console.log(arr); 
// use the reduce method to calculate sum of all numbers in the Array. 
let sum = arr.reduce((res, curr) => {
    return res + curr; 
});
console.log("sum : ",sum); 
// Use the reduce to  calculate product of all numbers in the array. 
let factorial = arr.reduce((res, curr) => {
    return res * curr; 
});
console.log("factorial: ", factorial);
*/