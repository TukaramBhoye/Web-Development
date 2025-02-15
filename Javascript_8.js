/*
*23 chapter: Javascript_8 : 

*1: For Each : 
    - arr. forEach(some function definition of name); 

    *i: example : 
        let arr = [ 1, 2, 3]; 

        function print(el){
            console.log(el); 
        };
        arr.forEach(print);  // function pass 

        arr.forEach(function(el){
            console.log(el); 
        }); // directly pass definition 

    *ii: example: 
     - for each for access individual array objects and its properties :  

        let arr2 = [
        {
            name : "aman", 
            marks : 95, 
        }, {
            name : "tukaram",
            marks : 60,
        }, {
            name : "akshay", 
            marks : 80,
        },]; 

        arr2.forEach((student) => { 
            console.log(student.marks);  
        });

*2: Map : 

    - is work like forEach but we can perform operation 
      on given elements using map . 

    - Syntax : let newArr = arr.map(some function definition or name); 

    - Example : 
       let num = [1, 2, 4, 5]; 
        let double = num.map((el) => {
            return el * el; 
        }); 

        console.log(double);  

    *- let double = num.map((el) => {}) // op : undefine
      
    let gpa = student.map((el) => {
            return el.marks/10; 
        })

        console.log(gpa); 
    
*3: filter : 
    - Syntax : let newArr = arr.filter(some function definition of name); 
    let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9]; 
    let even = nums.filter((num) => (num % 2 == 0)); 

*4: Every : logic similar to (&)operator
    Returns true if every element of array gives true for 
    some function. Else returns false. 

    arr.every(some function definition or name); 
    [1, 2, 3, 4].every ((el) => (el%2 == 0));
    false
    [2, 4, 6].every((el) => (el%2 == 0));  
    true

*5: some : like Logical (||)Or.
    - Returns true if some elements of array give true for some function. 
      Else returns false. 

    arr.some(some function definition or name); 
    [1, 2, 3, 4].some((el) => (el%2 == 0));  
    true 
    [1,  3].some((el) => (el%2 == 0));  
    false

*6: Reduce: 
    Reduces the array to a single value : 
    arr.reduce(reducer function with 2 variables for(accumulator, element)); 

   - example : 
    [1, 2, 3, 4].reduce((res, el) => (res + el));
    
   - example2 : 
        let num1 = [1, 2, 3, 4]; 
        let finalVal = num1.reduce((res, el) => {
            console.log(res); 

            return res + el; 
        }); 
        console.log(finalVal);

    - workFlow of reduce method for sum: 
        (0,1) => 1 
        (1, 2) => 3 
        (3, 3) => 6
        (6, 4) => 10
      
    *i: Finding maximum in an array using reduce : 
      
    let num2 = [2, 3, 4, 5, 6, 7, 8, 9]; 
        let max = -1; 

        //* simple loop 
        for(let i=0; i<arr.length; i++){
            if(max < arr[i]){
                max = arr[i]; 
            }
        }
        console.log(max); 
        
        //* with reduce 
        let maxG = arr.reduce((max, el) => {
            if(max < el){
                return el; 
            }else{
                return max; 
            }
        });

        console.log(maxG); 

*PQs: Check if all numbers in our array are multiple of 10 or not. 
    
    let numbers = [10, 20, 30, 50 ]; 
    let areMul = numbers.every((el) => (el%10 == 0)); 
    console.log(areMul); 

*PQs: Check if all numbers in our array are multiple of 10 or not. 

    function getMin (numbers){
        let min = numbers.reduce((min, el) => {
            if(min < el){
                return min; 
            }else{
                return el; 
            }
        });
        return min 
    }
    console.log(min); 
            
*7: Default Parameters : 
    - Giving a default value to the arguments 
        function func(a, b = 2){
            //*do something
        }
        
        
        function sum(a, b = 3){
            return a + b; 
        }
        
        here value will change of b: until val will default 3
        sum(1, 4)

        function sum2(a, b){
        return a + b; 
        }// op : NaN


        //* Here value assign by Order : 
        function sum3( a = 2, b){
            return a + b; 
        }//

        sum3(1, 3); 
        sum(1)// a = 1, b = undefined

*8 : Spread : 
   - Expands an iterable into multiple values 
   - exmple : array, string..
        function func(...arr){   (...arr)<--- syntax of spread
            statements ...
        }
    
    *i : spread with array
        let arr = [ 1, 23, 4, 5, 6, 2, 3, 4, 1, 4, 4, 5, 7] ; 
      - Math.min(...arr2); 
      - console.log(...arr2); // will print whole arr2

    *ii: spread with strings : 
      - console.log("apnacollege"); // will spread separately 
        op: a p n a c o l l e g e

    *iii: spread with Array Literals : 
        let arr = [ 1, 2, 3, 4, 5]; 
        let newArr = [..arr]; 
        let chars = [..."hello"]; 

        let odd = [1, 3, 5, 7]; 
        let even = [2, 4, 6, 8, 10]; 

        let nums = [...odd, ...even]; 

    *iv: Spread with  Object Literals : 
        let data = {
            email : "tukarambhoye2019@gmail.com", 
            password: "abcd", 
        }

        let dataCopy = { ...data, id: 123}; 

        let arr2 = [1, 2, 3, 4, 5]; // val 
        let obj1 = { ...arr2 }; //obj -> key: val

        let obj2 = { ..."hello" }; // op: {0: 'h', 1: 'e', 2: 'l', 3: 'l', 4: 'o'};


    *v: Rest : 
        - Allows a function to take an indefinite number of arguments and bundle them in an 
          array.

    
    *vi: Argument: Argument is a collection of array type 
                but we can not use array methods on this.

        - Not work in argument array functions : pop, push, reduce, every, some....ect

    
    *vii: Destructuring : 
       -  Storing values of array into multiple variables 
       -  here using dstructuring method values of array assign into individual 
          variable and also can use here rest method at the last to store all values in a single variable.  

        let names = ['tony', 'bruce', 'steve', 'peter', 'abc', 'xyz', 'aks']; 
        //*let [winner, runnerup] = names; 
        //* console.log(winner, runnerup); 

        //* here using rest concept (...others) next array elements store into the others
        let [winner, runnerup, ...others] = names

    *viii: Destructuring with objects : use{braces} to assign
          
        const student1 = {
            name : 'karan', 
            age : 14, 
            class: 9, 
            subjects: ["hindi", "english", "math", "science"], 
            username: "karan@123", 
            password : 'abcd', 
            city: "nashik", // first priority 
        };

        - here city has low preference(mumbai)
        let {username:user, password: secret, city = "Mumbai"} =  student1;


--------------------------------------------------------------
-------------------------------------------------------------
*/


let arr = [ 1, 2, 3]; 

function print(el){
    console.log(el); 
};
arr.forEach(print);  // function pass 

arr.forEach(function(el){
    console.log(el); 
}); // directly pass definition 


let print1 = function(el){ 
    console.log(el); 
};
arr.forEach(print1);


// for each for access individual array objects and its properties :  

let student = [
{
    name : "aman", 
    marks : 95, 
}, {
    name : "tukaram",
    marks : 60,
}, {
    name : "akshay", 
    marks : 80,
},]; 

student.forEach((students) => { 
    console.log(students.marks);  
});


let num = [1, 2, 4, 5]; 
let double = num.map((el) => {
    return el * el; 
}); 

console.log(double);  

// let double = num.map((el) => {}) // op : undefine

let gpa = student.map((el) => {
    return el.marks/10; 
})

console.log(gpa); 

// filter : 
let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9]; 
let even = nums.filter((num) => {
    return num % 2 == 0; // even number will output
});

let odd = nums.filter((num) => {
    return num % 2 == 1; // even number will output
});
 
let less = nums.filter((num) => {
    return num < 5; // even number will output
});
 
let greater = nums.filter((num) => {
    return num > 5 ; // even number will output
});
 
//every 
[1, 2, 3, 4].every((el) => (el%2 == 0));  

// reduce 
let num1 = [1, 2, 3, 4]; 
let finalVal = num1.reduce((res, el) => {
    console.log(res); 

    return res + el; 
}); 
console.log(finalVal);


let num2 = [2, 3, 4, 5, 6, 7, 8, 9]; 
let max = -1; 

// simple loop 
for(let i=0; i<arr.length; i++){
    if(max < arr[i]){
        max = arr[i]; 
    }
}
console.log(max); 
// with reduce 
let maxG = arr.reduce((max, el) => {
    if(max < el){
        return el; 
    }else{
        return max; 
    }
});

console.log(maxG); 

// *PQs: Check if all numbers in our array are multiple of 10 or not. 

let numbers = [10, 20, 30, 50 ]; 
let areMul = numbers.every((el) => (el%10 == 0)); 

console.log(areMul); 

// pqs: minimum numbers : 

function getMin (numbers){
    let min = numbers.reduce((min, el) => {
        if(min < el){
            return min; 
        }else{
            return el; 
        }
    });
    return min 
}



// default parameters  :
function sum(a, b = 2){
    return a + b; 
}
sum(1,4); //OP : 5

function sum2(a, b){
    return a + b; 
}// op : NaN


function sum3( a = 2, b){
    return a + b; 
}//

sum3(1, 3); 
sum(1)// a = 1, b = undefined

// spread with array literals 
let arr3 = [ 1, 2, 3, 4, 5]; 
let newArr = [...arr3]; 
let chars = [..."hello"]; 

let odd1 = [1, 3, 5, 7]; 
let even2 = [2, 4, 6, 8, 10]; 

let nums1 = [...odd, ...even]; 

// Spread with  Object Literals : 

let data = {
    email : "tukarambhoye2019@gmail.com", 
    password: "abcd", 
}

let dataCopy = { ...data, id: 123}; 

let arr2 = [1, 2, 3, 4, 5]; // val 
let obj1 = { ...arr2 }; //obj -> key: val

let obj2 = { ..."hello" }; // op: {0: 'h', 1: 'e', 2: 'l', 3: 'l', 4: 'o'};


// 
function sum(...args){
    for(let i = 0; i<args.length; i++){
        console.log("You gave us : ", args[i]);
    }
}

// argument : a inbuilt array function 

function min(a, b, c, d){
    console.log(arguments); 
}


// Rest : 
function sum(...args){
    for(let i = 0; i< args.length; i++ ){
        console.log("You gave us : ", args[i]); 
    }
}

// arguments
function min(a, b, c, d){
    console.log(arguments.length);  
}

// Not work in argument array functions : pop, push, reduce, every, some 

function min(msg, ...args){
    console.log(msg); 
    return args.reduce((min, el)=> {
        if(min > el){
            return el;
        }else{
            return min; 
        }
    }); 
}

// Destructuring

let names = ['tony', 'bruce', 'steve', 'peter', 'abc', 'xyz', 'aks']; 
// let [winner, runnerup] = names; 
// console.log(winner, runnerup); 

// here using rest concept (...others) next array elements store into the others
let [winner, runnerup, ...others] = names

// with object destructuring : 

const student1 = {
    name : 'karan', 
    age : 14, 
    class: 9, 
    subjects: ["hindi", "english", "math", "science"], 
    username: "karan@123", 
    password : 'abcd', 
    city: "nashik", // first priority 
};

let {username:user, password: secret, city = "Mumbai"} =  student1;



// Assignments : ---------------------

// Question 1 : square and sum the arrya elements using the arrow function and then find the average of the Array. 

let array = [1, 2, 34, 3, 12, 12];

let sum4 = array.reduce((res, el) => (res + el)); 

let sq  = array.map((a) => (a*a)); 
console.log(sq); 

let ave = sum4 / array.length; 
  
console.log(Math.floor(ave));  

// Qs2: Create a new array using the map function whose each element is equal to the original element plus 5. 

let array1 = [1, 2, 34, 3, 12, 12]; 

let orEl = array1.map((el) => el+5)

// Qs3. Creates a new array whose elements are in uppercase of words present in the original array. 
 let array3 = ["tukaram", "akshay", "shyam", "lahanu", "raju", "mahindra"];
 let array4 = array3.map((el) => el.toUpperCase()); 

 const doubleAndREturnArgs = (arr, ...array1) => [
    ...arr, ...array1.map((v) => v * 2), 
 ];

 console.log(doubleAndREturnArgs([1, 2, 3], 4, 4));// op  [1, 2, 3], 8, 8
 console.log(doubleAndREturnArgs([2], 10, 4)); // [2, 20, 8]

//  Qs. 

let mergeObject = (obj1, obj2) => ({...obj1, ...obj2}); 
console.log(mergeObject({ a : 1, b: 2,}, {c:3, d:4})); 
