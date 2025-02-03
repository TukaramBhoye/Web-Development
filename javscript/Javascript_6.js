/*
*21 : Chapter:  Functions IN Js 

*1: Functions :
    - instead of write multiple same peace of code just we can done using one function.

    - Syntax of function : 
        function funName(){
          //* do something 
        }
    - Function Calling(Using the function)
      FunName(); 

        - Ex : 
            function hello(){
                console.log("hello");
            }
            hello(); // we can called multiple times : 

   *i: Practice Qs : 
       - Create a function that prints a poem.
       function prinPoem(){
           console.log("Twinkle Twinkle, Little star");
           console.log("How i wonder What you are"); 
        }

    *ii: Create a Function to roll a dice & always display the value of the dice(1 to 6). 
    function rollDice(){
        let rand = Math.floor(Math.random() * 6) + 1; 
         console.log(); 
        }
    rollDice();

*2: Functions with Argumets : 
    - values we pass to the function
        function funcName(arg1, arg2....){
            // do Something
        }

    *i : function sum(a, b){
          console.log(a + b); 
        }
        sum(1, 3)

    *ii: 
        function printName(name, age){
            console.log(`${name}'s age is ${age}.`);
        }
        printName("tukaram", 25); 
        printName("Akshay", 23); 
        printName("Akash"); 

    *ii: Practice QS: 
        - Create a function that gives us the average of 3 numbers. 
        function avarage(a, b, c){
           let totalSum = a + b + c ;
           let avg = totalSum/3; 
           console.log(avg);
        }

        console.log(99, 77, 88); 
    
    * PrQs : Create a Function that prints the multiplication table 

            function printTable(n){
                for(let i=n; i<=n*10; i+=n){
                    console.log(i); 
                }
            }
            printTable(); 

*3: Return: return keyword is used to return some value from the function. 

    input ------> Function{does some work} -------> output

    function funcName(arg, arg2..){
        //do Something
        return val; 
    }

    *i: 
        function sum(a, b){
            return a + b; 
        }
        console.log(sum(3, 5));  // Op: 8

    - for third value we can a way
      console.log(sum(sum(3, 5), 2)); // Op: 10

    *ii: function isAdult(age){
            if(age >= 23){
                return "adult"; 
            }else {
                return "not adult"; 
            }
            console.log("bye, bye"); // bcz of Return Not Run this Method : 
        }
        - Always return single values : 
        - for such a cases we store values in Objects then 
          after return with single object. such like array, object data structures.

          
*4: Scope : 
    - Scope determines the accessibility of variables, objects, 
      and functions from different parts of the code. 
    
    - Function
    - Block 
    - lexical 

    *i: Function Scope : 
        - Variables defined inside a function are not accessible(visible) from outside the 
          function. 
        ----------------  
     *Functions/private Scope : only valid in that specific scope
        function calcSum(a, b){
            let sum = a + b; //here "sum" just access inside the function.
        }
        calcSum(1, 2); 
        console.log(sum) // Error: here "sum" is not declare 
        --------------
     
     *Global Variable : 
        let sum = 54 ; 
        function calcSum(a, b){
            let sum = a + b; //here "sum" just access inside the function.
        }
        calcSum(1, 2); 
        console.log(sum) // Error: here "sum" is not declare 
       
    *Functions Scope Always wins bcz he is valid for just specific scope----------------

    *ii: Block Scope : 
        - Variables declared inside a() block cannot be 
          accessed from outside the block.

        a)
          {
           let a = 25; 
          }
        
        b) 
        for(let i=0; i<=0; i++){
          console.log(i); 
        }
        console.log(i) // Error

        c) let age = 24; 
        if(age >= 18){
            let str = "adult";
            console.log(str);  
        }
        console.log(str); 

    *iii: Lexical Scope : 
        - a variable defined outside a function can be accessible inside of another function 
          defined  the variable declaration.
          The opposite is NOT true. 

        function outerFunc() {
            let x = 5; 
            let y = 6; 
            function innerFunc() {
                console.log(x); 
                console.log(y); 
            }
        }

*5: Function Expressions : 
        const variable = function(arg1, arg2...){
            //do or return something 
        }
        
        const sum = function (a, b){
            return a + b; 
        }
   
        let name = "tukaram" ; 
        let x = 5; 

        let addition = function(a, b) {
            return a + b;
        };
        console.log(addition(2, 1)); 

        let hell = function(){
            console.log("hello"); 
        };
        hell(); 

        - This type of functions we can as argument pass, return, and possible for change

    

*6: Higher Order Functions: 
    - A function that does one or both : 
        - Takes one or multiple functions as arguments 
        - returns a function 
        - Example: 
        let greet = function(){
            console.log("hello"); 
        }
        greet(); 
        greet() ; 
        greet() ; 

        function multipleGreet(func, count){
            for(let i=1; i<=count; i++){
                func(); 
            }
        }

        multipleGreet(greet, 5); //OP: Greet function will prints 5 times 
        multipleGreet(function(){ console.log("nameste")}, 10); 


    *- function calling time error : 
         multipleGreet(greet(), 5);

      - error ->greet() execute. instead of we have to pass definition of function :
        because we have to work with him. 


      - Returns a function ; 
        function oddOrEvenFactory(request){
            if(request == "odd"){
                return function(n){
                    console.log(!(n%2==0)); 
                };
            }else if(request == "even"){
                return function(n){
                    console.log(n%2==0); 
                }
            }else{
                console.log("wrong request"); 
            }
        }

        let request = "odd"; 


*7: Methods : 
    - Actions that can be performed on an object. 

    *i  const calculator = {
        add: function(a, b){
            return a+b; 
        },

        mul: function(a, b){
            return a * b; 
        }, 

        div: function(a, b){
            return a / b;
        }, 
    }
        
    console.log(calculator.add(1, 3));
 
           


    *II: - In JavaScript all things behave like object 
        ex: 
        [1, 2, 3]  <--------- as it is 
        [1, 2, 3].push(); <----  Op: 4(just 4)
        [1, 2, 3].pop() <----- 4 : remove last element  

    *iii: shortHand Methods : 
        const calculator2 = {
            add(a, b){
                return a+b; 
            },

            mul(a, b){
                return a * b; 
            }, 

            div(a, b){
                return a / b;
            }, 
        }
        console.log(calculator2.add(1, 3));


*/

/*
function hello(){
    console.log("hello") ;
}

hello(); 

function printName(){
    console.log("apnaCollage"); 
}
printName();

function print1to5(){
    for(let i=1; i<=5; i++){
        console.log(i); 
    }
}
print1to5(); 

function isAdult(){
    let age = 13; 
    if(age >= 13){
        console.log("adult"); 
    }else{
        console.log("not adult"); 
    }
}
// function call 
isAdult(); 


// *i: Practice Qs : 
// - Create a function that prints a poem.
function prinPoem(){
    console.log("Twinkle Twinkle, Little star");
    console.log("How i wonder What you are"); 
 }
prinPoem(); 
// *ii: Create a Funtion to roll a dice & always display the value of the dice(1 to 6). 
 
function rollDice(){
    let rand = Math.floor(Math.random() * 6) + 1; 
    console.log(); 
}
rollDice();

// functions with argument

function printName(name){
    // console.log("apna college"); 
    console.log(name);
}

printName("tukaram"); 

function printName(name, age){
    console.log(`${name} 's age is ${age}.`);
}
printName("tukaram", 25); 
printName("Akshay", 23); 
printName("Akash"); // OP: Akash's age is undefine

function sum(a, b){
    console.log(a + b); 
}
sum(1, 3)
sum(4, 2); 
sum(438945, 348954); 


// - Create a function that gives us the average of 3 numbers. 
function average(a, b, c){
    let totalSum = a + b + c ;
    let avg = totalSum/3; 
    console.log(Math.floor(avg),  totalSum);
 }

 average(99, 65, 65); 

//  PrQs : Create a Function that prints the multiplication table 

function printTable(n){
    for(let i=n; i<=n*10; i+=n){
        console.log(i); 
    }
}
printTable(); 


let arr = [1, 2, 3, 4];
arr.slice(2, 4); 

// Return Method
function sum1(a, b){
    return a + b; 
}
console.log(sum1(3, 5)); 
console.log(sum1(sum1(3, 5), 2)); // Op: 10 - for third value we can a way


function isAdult(age){
    if(age >= 23){
        return "adult"; 
    }else {
        return "not adult"; 
    }
    console.log("bye, bye"); // bcz od Return Not Run this Method : 
}

// Pr.Qs. Create a Function that returns the sum of numbers from 1 to n. 

function getSum(n){
    let sum = 0; 
    for(let i=1; i<=n; i++){
        sum = sum + i; 
    
    }

    return sum; 
}

getSum(); // n = 5 <--write here getSum(5)

// Practice Create a Function that returns the concatenation of all strings in Array. 

let str = ["hi", "hello", "bye", "!"];

function concate(str){
    let result ="" ; 

    for(let i=0; i<str.length; i++){
        result += str[i]; 
    }
    return result; 
}

concate(); 

// Scope of function : --------

function calcSum(a, b){
    let sum = a + b; //here "sum" just access inside the function.
}
calcSum(1, 2); 
console.log(sum) // Error: here "sum" is not declare 

// lexical Scope 

function outerFunc() {
    let x = 5; 
    let y = 6; 
    function innerFunc() {
        console.log(x); 
        console.log(y); 
    }
}


// PQ : What will be the output ? 
let greet = "hello"; 
function changeGreet(){
    let greet = "namaste"; 

    console.log(greet); // OP: "namaste"
    function innerGreet(){
        console.log(greet); 
    }
}
console.log(greet); //"hello "
changeGreet(); // "namaste"
 

*/

/*

// Functions Expression
let name = "tukaram" ; 
let x = 5; 

let addition = function(a, b) {
    return a + b;
};
console.log(addition(2, 1)); 

let hell = function(){
    console.log("hello"); 
};

hell(); 
 
// Higher order functions : 
let greet = function(){
    console.log("hello"); 
}
greet(); 
greet() ; 
greet() ; 

function multipleGreet(func, count){
    for(let i=1; i<=count; i++){
        func(); 
    }
}

multipleGreet(greet, 5); //OP: Greet function will prints 5 times 
multipleGreet(function(){ console.log("namaste")}, 10); 

// Example of Higher order function : 
let odd = function(n){
    console.log(!(n%2 == 0));
};

let even = function(n){
    console.log(n%2 == 0); 
}; 

// - Returns a function ; 
function oddOrEvenFactory(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n%2==0)); 
        };
    }else if(request == "even"){
        return function(n){
            console.log(n%2==0); 
        }
    }else{
        console.log("wrong request"); 
    }
}

let request = "odd"; 


// Methods : 
const calculator = {
    add: function(a, b){
        return a+b; 
    },

    mul: function(a, b){
        return a * b; 
    }, 

    div: function(a, b){
        return a / b;
    }, 
}

console.log(calculator.add(1, 3));


// in javascript all things behave as object
[1, 2, 3]; 
console.log([1, 2, 3].push(4)); // OP: 4


const calculator2 = {
    add(a, b){
        return a+b; 
    },

    mul(a, b){
        return a * b; 
    }, 

    div(a, b){
        return a / b;
    }, 
}

console.log(calculator2.add(1, 3));
*/
// -Assignments : ----------------------------------------------

// Qs1: Write a JavaScript finction that returns array elements larger than a number. 
let arr1 = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;
function getElements(arr1, num) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] > num) {
            console.log(arr1[i]);
        }
    }
}
getElements(arr1, num);

let arr2 = [2, 3, 5, 1, 3, 5];
let largest = 0;
function largerEl() {
    for (i = 0; i <= arr2.length; i++) {
        if (arr2[i] >= arr2[i + 1]) {
            largest = arr2[i];
        }
    }
    console.log(largest);
}

largerEl();


// QS2 : Write a JavaScript function to extract unique characters from a string. 

let str = "aadjfksdkfhjdj";

function uniqueChars(str) {
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];
        if (ans.indexOf(currChar) == -1) {

            ans += currChar;
        }
    }
    return ans;

}

uniqueChars(str);


// QS : Write a JavaScript function that accepts a list of country 
//      names as input and returns the longest country names as output. 

let country = ["Australia", "Germany", "United States of America"];

function countryList(country) {

    let longCountry = 0;

    for (let i = 0; i < country.length; i++) {
        let ansLen = country [longCountry].length; 
        let currLen = country[i].length; 
        
        if (currLen > ansLen) {
           longCountry = i; 
        }   
       
    }
    return country[longCountry];
}

countryList(country);

// Qs4 Write JavaScript function to count the number of vowels in a String argument. 

let strr = "tukaram" ; 

function strCounter(strr){
    let count = 0; 
    let index = 0; 

    while(index < strr.length){
       let str = strr[index]; 
        if(str=='a' || str == 'e' || str == 'i' 
            || str == 'o'|| str == 'u') {
                 count++;
            }

            index++;     
    }

    return count; 
}

strCounter(strr); 


let stt = "tukaram"; 

function stCou(stt){
    let Count = 0; 
    for(let i=0; i< stt.length; i++){
        let st = stt[i]; 
        if(st =='a' || st == 'e' || st == 'i' 
            || st == 'o'|| st == 'u'){
                Count ++ ; 
            }
    }
   

   return Count; 
}

stCou(stt); 


// Qs5" write a JavaScript function to generate a random number within a range(start, end).

let start = 100; 
let end = 200; 

function RandomN(start, end){
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start; 
}
