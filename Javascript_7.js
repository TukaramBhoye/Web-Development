/*
*Chapter 22: Javascript_7 Part -------------

*Window : in javaScript window is global object. which is run on Browser Environment. 
          this represent the window(viewport) of browser 
        - it is a primary medium to access available on browser all global variables, 
         function, and API's 

         ex: 
         - window.alert("this is alert box"); 
         - var name = "tuka"; 
          console.log(window.name); 

        - also we can access functions and which are in global 
          

*1: this Keyword : 
    - this keyword is by default stores window object : 

    - "This"keyword refers to an object that is executing the current
      piece of code. 

    const student = {
        name : "tukaram", 
        age : 23,
        eng: 95, 
        math: 84, 
        phy: 97,

        getAvg(){
            let avg = (this.eng + this.math + this.phy)/3; 
            console.log(`${this.name} got avg marks = ${avg}` ); 
        }
    }
    

*2: Try & Catch : 
    - The Try statement allows you to define a block of code to be tested for errors while it
     is being executed. 
    - The catch statement allows you to define a block of code to executed, if an error occurs in the
     try block.

    *why we use try and catch ? 
    ex: 
    console.log("hello"); 
    console.log(a);  // Error : because the a is declare 
    console.log("hello2"); // after Error: also this and further code will not run.  

    - such type of cases we use try and catch
    
    - example : 
        console.log("hello"); 
        try{
            console.log(a);
        } catch{
            console.log("caught an error... a is not defined");
        }
        console.log("hello2"); 
        console.log("hello2"); 
    
    - to print error----- 
        console.log("hello"); 
        try{
            console.log(a);
        } catch(e){
            console.log("caught an error... a is not defined");
            console.log(e); 
        } 
        console.log("hello2"); 

*3 : Miscellaneous Topics : (small-small concepts );
        
   *i: Arrow Function : 
      - Syntax  :
        const func = (arg1, arg2,..) => {function definition}
      - Example: 
        const sum = (a , b) => {
            console.log(a, b); 
        };

        const cube = (n) => {
            return n * n * n; 
        };

   *ii: Arrow functions : Implicit return(automatic = we don't have need to say return);
      - Syntax : 
        const func = (a, b) => (single value to return); 

        const mul = (a, b) => (a * b); 

    
   *iii: Set TimeOut : 
     - setTimeout(function, timeout)
     
     - 1000ms = 1second; 
     - Example : 
        setTimeout(() => {
            console.log("Apna Collage");
        }, 4000); // after 4 second msg will print 


    *iv: Set Interval : 
        setInterval(() => {
            console.log("Set Interval "); 
        } 2000);
    - msg will repeated every 2s infinitely.
    *- to stop setInterval use in console -->clearInterval(arg);
        let intrval = setInterval(() => {
            console.log("Set Interval 3s "); 
        },3000);


*4: This with Arrow Functions : 

       *-Note: for this keyword:
         Avoid arrow functions in object methods when this context 
         is crucial; use regular functions instead. Arrow functions 
         are ideal for preserving lexical this in nested scopes.
        
         *- Example
        const student3 = {
            name: "aman",
            marks: 95,
            prop: this, // global scope

            getName: function(){
                console.log(this); 
                return this.marks; 
            }, 

            getMarks: () => {  
                console.log(this); 
                return this.marks; // parent's scope->window 
            }, //OP : undefine 

            getInfo1: function(){
                setTimeout(() => {
                    console.log(this); // student
                },2000);
            },

            getInfo2: function(){
                setTimeout(function(){
                    console.log(this); // window(student3 global object)
                },2000);
            }
        };

*/ 

const student = {
    name : "tukaram", 
    age : 23,
    eng: 95, 
    math: 84, 
    phy: 97,

    getAvg(){
        let avg = (this.eng + this.math + this.phy)/3; 
        console.log(`${this.name} got avg marks = ${avg}` ); 
    }
}


// try and catch : 
console.log("hello"); 
console.log("hello"); 
try{
    console.log(a);//Error :  a is not define
} catch{
    console.log("caught an error... a is not defined");
}
console.log("hello2"); 
console.log("hello2"); 

// to print error : 
console.log("hello"); 
try{
    console.log(a);// a is not define
} catch(e){
    console.log("caught an error... a is not defined");
    console.log(e); 
} 
console.log("hello2"); 

// Arrow Function : 

const sum = (a , b) => {
    console.log(a, b); 
};

const cube = (n) => {
    return n * n * n; 
};

console.log(cube(3)); 

const pow = (a, b) => {
    return a**b ; 
}


// Implicit Return : 

const mul = (a, b) => (a * b);
/*
// set Timeout : 
console.log("Hi there! "); 
setTimeout(() => {
    console.log("Apna Collage");
}, 4000);
console.log("welcome to"); 

// Set Interval : 
setInterval(() => {
    console.log("Set Interval 2s"); 
}, 2000); 

// to stop setInterval use clearInterval(arg) method : 
let intrval = setInterval(() => {
    console.log("Set Interval 3s "); 
},3000);
*/ 

// Normal Function and Arrow function : 
// - avoid Arrow function for such cases 
const student2 = {
    name: "aman",
    marks: 95,
    prop: this, // global scope

    getName: function(){
        console.log(this); 
        return this.marks; 
    }, 

    getMarks: () => {  
        console.log(this); 
        return this.marks; // parent's scope->window 
    } //OP : undefine 
};


// Benefits with arrow function, when use 

const student3 = {
    name: "aman",
    marks: 95,
    prop: this, // global scope

    getName: function(){
        console.log(this); 
        return this.marks; 
    }, 

    getMarks: () => {  
        console.log(this); 
        return this.marks; // parent's scope->window 
    }, //OP : undefine 

    getInfo1: function(){
        setTimeout(() => {
            console.log(this); // student
        },2000);
    },

    getInfo2: function(){
        setTimeout(function(){
            console.log(this); // window(student3 global object)
        },2000);
    }
};



// PrQs: write an arrow function that returns the square of a number 'n'. 
 let  square = (n) => (n*n); 
 console.log(square(3));
 
//prQs : Write a function that prints "hello World" 5 times at intervals of 2s each 



let intTime = setInterval(() =>{
    console.log("Hello World"); 
},2000);

setTimeout(() => {
    clearInterval(intTime); 
    console.log("clear interval"); 
}, 10000); 


// What is the output of the following code : 
let length = 4; 
function callback(){
    console.log(this.length); 
}

const object = {
    length : 5, 
    method(callback){
        callback(); 
    },
};
object.method(callback, 1, 2); 

// Qs  Arrrow function that accept an array of numbers and returns the average of those numbers. 

let arrayAverage = (a, b, c) =>{
  total = 0; 
  for(let numbert of arr){
        total += numbert; 
  }

  return total/ arr.length; 
};


let arr = [32, 34, 52, 64,75, 34];
console.log(arrayAverage(arr)); 

let isEven = (n) => {
    if(n%2 == 0){
        console.log(`${n} the Number is Even`); 
    }else{
        console.log(`${n} Given number is odd`)
    }
}

const iseven = (num) => num%2 == 0; 

console.log(isEven(20)); 

let length1 = 4; 
function callback() {
    console.log(this.length); // length is property of window/this
    //return counts frames of browsers window
    //  if not present any frame then ans will be 0; 
}

const Object = {
    length: 5,   
    method(callback){
       console.log(this.length); 
    }
}
Object.method(callback, 1, 2); 