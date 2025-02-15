/* Object & classes: 
 Prototype : A javaScript obejct is an entity having state and behavior (properties and method) Js Objects Have a special property called prototype. 
 We can set prototype using  __proto__
 *note: If object & prototype have same method Object's method will be used. */

/*Direct way to create Object :  
const student = {
    fullName :"Tukaram Bhoye",
    marks : 94.4,

    printMarks: function(){
        console.log("marks = ", this.marks) // this use for current object student                                           
    }
}
*/
// let arr = ["apple", "mango", "banana"]; // in js arr is object 
/*
const employee = {
    calcTax(){
        console.log("tax rate is 10%");
    },
    // calcTax1(){
    //     console.log("tax rate is 10%..");
    // }
};

const karanArjun = {
    salary: 50000,
}; 
const karanArjun2 = {
    salary: 50000,
}; 
const karanArjun3 = {
    salary: 50000,
}; 
const karanArjun4 = {
    salary: 50000,
    calcTax() {
        console.loga("tax rate is 20%") // suppose he havae additional taxpa
    }, //note: If object & prototype have same method Object's method will be used. 

}; 

karanArjun.__proto__ = employee; // is special property called prototype 
karanArjun2.__proto__ = employee; // We can set prototype using __proto__
karanArjun3.__proto__ = employee; 
karanArjun4.__proto__ = employee; */

// ***************************************************************

/*2: Classes in Js : Class is a program-code template for creating objects. 
- those Objects will have same state(variables) & some behaviour (functions) inside it. 
class MyClass{
    constructor(){.....}
    myMethod(){.....}
}
- syntax for create Object : 
let myObj = new MyClass(); 
*/
/*classe use for same template ke andar multiple object banane ho 
class ToyotaCar {
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }
    setBrand (brand){
        this.brand = brand; // this.brand : Object Property
    }
}
let toyota = new ToyotaCar();
toyota.setBrand("toyota");
let fortuner = new ToyotaCar(); 
fortuner.setBrand("lexus"); 
*/
/* i. : Constructor(): method is :               class MyClass {
    - automatically invoked by new          constructor(){...} 
    -Initializes object                     myMethod(){...}
                                            } 
class ToyotaCar{
    constructor(brand, mileage){
        console.log("creating new object"); 
        this.brand = brand; 
        this.mileage = mileage; 
    }
    start(){
        console.log("Start"); 
    }
    stop() {
        console.log("Stop"); 
    }
}
let fortuner = new ToyotaCar("fortuner", 10); // execute first position 
console.log(fortuner);
// we can make multile------------

***************************************************/

/*ii. Inheritance : inheritance is passing down properties & Methods from parent class to child class 
syntax: class Parent {
        -----
    }
    class child : extends Parent {
        statements.....
    }
*Note: child nad Parent Have same Method Child's will be use. [Method Overriding]
*/
/*
class Person { 
    constructor(){
        this.species = "homo Sapiens";
    }

    eat(){
        console.log("eat"); 
    }

    sleep(){
        console.log("sleep"); 
    }

    work(){
        console.log("do nothing");
    }
}

class Engineer extends Person {
    work(){
        console.log("solve Problems, build Somenthing");
    }
}

let p1= new Person(); 
let e1 = new Engineer(); 
console.log(e1.work); 
*/
/*iii.: Super KeyWord : The super keyword is used to call the constructor of its parent to access the parent' properties and methods. 

super(args) // clls Parent's constructor
super.parentMethod(args)
*/
/*
class Person {
    constructor(name){
        this.species = "homo sapiens" ; 
        this.name = name; 
    }
    eat(){
        console.log("eat");
    }
}

class Engineer extends Person { 
    constructor(name){
        super(name); // invoke the parent class constructor  
    }
    work(){
        super.eat();
        console.log("solve problems and build something");
    }
}
let eng_Obj = new Engineer("tukaram");
 

***********************************************************************/
/*Q. You are creating a website for your college. Create a class User with 2 Properties, name & email. It also has a method called viewData() that allows user to view website data. 

let = DATA = "secret information"; 
class User {
    constructor (name, email){
        this.name = name; 
        this.emain = email 
    }

    vieWdata(){
        console.log("data = ", DATA);
    }
}
let student1 = new User("tukaram", "tukaram@gmail.com");
let student2 = new User("aman", "aman@gmail.com");

let teacher1 = new User("Dean", "dean@collage.com"); */

//Q. Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data. 
/*
let = DATA = "secret information"; 
class User {
    constructor (name, email){
        this.name = name; 
        this.emain = email 
    }

    vieWdata(){
        console.log("data = ", DATA);
    }
}

class Admin extends User {
    constructor(name, email){
        super(name, email);
    }
    editData(){
        DATA = "some new Value"; 
    }
}
let student1 = new User("tukaram", "tukaram@gmail.com");
let student2 = new User("aman", "aman@gmail.com");
let teacher1 = new User("Dean", "dean@collage.com"); 
let admin1 = new Admin("tukaram", "tcbhoye@gmail"); //admin1--->    admin1.editData();  ---> DATA
*/
/*************************************************************************
3: Error Handling : try-catch- blocks 
    try{
        wrong code lines ---> jj
    }
    catch(err) {//err is error object 
        console.log(err)
    } 
    example: 
    *//*
let a = 5; 
let b = 2; 

console.log("a + b : ",a + b); 
console.log("a + b : ",a + b); 
//console.log("a + b : ",a + c); // error
try{
console.log("a + b : ",a + c);
}
catch(err){
console.log(err); 
}
console.log("a + b : ",a + b); 
console.log("a + b : ",a + b); 
console.log("a + b : ",a + b); 
console.log("a + b : ",a + b); 
console.log("a + b : ",a + b); 
********************************************************//* 
4: What ithis chapter is About : 
Async >> better-than >> primose chains >> better-than >> callback hell 

i. Sync In Js : Synchronous : 
Synchronous means the code runs in a particular sequence of instructions given in the program Each instruction waits for the previous instruction to complete its execution: 

Example: console.log("one"); 
console.log("two"); 
console.log("three"); 
O/P : One, two, three : called synchronous

ii. A-Synchronous : Due to synchronous programming, something important instructions get blocked due to some previous instructions, which causes a delay in the UI. 
Asynchrounous code execution allows to execute next instructions immediately and doesn't block the flow. 
*/ /*
function hello(){
    console.log("Hello");
}
setTimeout(hello, 2000); // 4s = 4000 ml second
 setTimeout get call back val fun hello

setTimeout(() => {
    console.log("hello"); 
}, 4000); 

console.log("HI..."); // this print before setTimeout function 
console.log("marathi.."); 
*/
// *************************************************************************
// 5: Callback : A callback is a function passed as an argument to another function

/*e1: 
function sum(a, b){
    console.log (a+b); 
}
function calculator(a, b, sumCallBack){
    sumCallBack(a, b); 
}
calculator(1, 2, sum);

// this also valid
calculator(1, 6, (a, b) => {
   console.log (a+b); 
});
*/
/*6: Call-Back Hell : Nested callbacks stacked below another forming a pyramid structure.(Pyramid of Doom )

This style of programming becomes difficult to understand & manage. */
/* 
function getData(dataId, getNextData){
    //2s 
    setTimeout(() => {
        console.log("data", dataId);
         if(getNextData){ // if exist : 
            getNextData(); 
        }
    }, 2000); 
}
** 1 way printing : 
getData(1, () => {
    console.log("getting 2nd Data.........."); 
    getData(2, () => {
        console.log("getting 3rd Data....");
        getData(3, () => {
            console.log("getting 4nd Data.....");
              getData (4)  
        });
    });
});
**call back hell-2Example : Of printing 2nd way
// promises -------------------
getData(1)
    .then((res)=>{
        return getData(2);
    });
    .then((res)=>{
        return getData(3); 
    });
    .then((res)=>{
        console.log(res); 
    });

**7: Promises: To Solve CallBack Problem {Use Promises}:

Promises : promises is for "eventual" completion of task. It is an object in JS. It is a solution to callback hell. 

let Promise = new Promise(resolve, reject => {...})
                            ------1-------------2---
                   **  function with two handler

*resolve & reject are callbacks Provided by JS 
- Use three states to resolve promises 1: pending 2: resolved 3: reject. 
- we have to function then() & catch() that will execute when promise fullfill or Rejected 
        promise.catch()((rjjes) => {....});  // execute when fullfill 

        promised.catch((err) =>{....}); // execute when reject 

*/ /*example 1: promise: 
let promise = new Promise ((resolve, reject) => {
        console.log("I am a promise");
        reject("some error occured"); 
});

function getData(dataId, getNextData) { 
    return new promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success"); 
            if(getNextData){
                getNextData(); 
            }
        },5000);
    });
}
Example 2:*//*  
const getPromise = () => {
        return new Promise((resolve, reject) => {
            console.log("I am a Promise"); 
            // resolve ("success");  // fullfill
            reject("error ocuured"); 
        });
} 
let = promise = getPromise();

promise.then((res) => {
    console.log("promise fullfilled", res); 
});
// to catch error : 
promise.catch((err) => {
    console.log("rejected", err); 
})
*/
//Ex 3: Promise chaining Work : means 1 the ke sath 2 then use kiya 
/*
function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success");
        }, 4000);
    });
}
function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success");
        }, 4000);
    });
}

console.log("fetching data");
asyncFunc1().then((res) => {
    console.log("fetching data1....");
    asyncFunc2().then((res) => {

    });
});
*****************************************************************
*8. async-await >> Promise chain >> callback : await = to wait meaning 
- Async-Await : async function always returns a promise. 

async function myFunc(){....}

- await pauses the execution of its surrounding function until the promise is settled. 
Example 1:*/
/*
function api(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("weather data"); 
            resolve(200); 
        }, 2000); 
    });
}
*//*
async function getWeather() {
    await api(); // 1 call......
    await api(); // 2 call......
}
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    });
}

// Async - Await : 
// -  either use then catch OR Async-await
async function getAllData() { //getAllData unncecessary call to avoid use
    await getData(1);
    console.log("getting data1.....");  // after 2 sec 
    await (getData(2));
    console.log("getting data2......");
    console.log(3);
    console.log("getting data3....");
}
*/
// IIFE : execute immediately but just for one time 
/* - An IIFe (immediatelly invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The name IIFE is promoted by Ben Almen.
- we can define: syntax : 
- 1.  - (function () {
        // - 
    })();
- 2. (() => {
    //
  })(); 

- 3.(async () =>{

    // - 
  })(); 
  */ 
/*Ex.
(async function () {
    await getData(1);
    console.log("getting data1.....");  // after 2 sec 
    await (getData(2));
    console.log("getting data2......");
    console.log(3);
    console.log("getting data3....");
})();
*************************************************************************/
/* *9: Fetch API : Request <---[]----> reaponse to who request 
- status 200 means successfull request : 
- The Fetch API Provides an interface for fetching (sending/receiving) resources. It used Request objects. The fetch() method is used to fetch a resource (data). 
Syntax: 
let Promise = fetch(url, [options]) 
*/ /*
const URL = "https://cat-fact.herokuapp.com/facts"; 
const factPara = document.querySelector("#fact"); 
const btn = document.querySelector("#btn"); 

const getfacts = async() => {
    console.log("getting data....");
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data); 
    factPara.innerText = data[2].text;
}

btn.addEventListener("click", getfacts);


// 2nd : way -- this program run 
// parse means : change format 
function getFacts(){
    fetch(URL) 
    .then((response) => {
        return response.json(); 
    })
    .then((data) => {
        console.log(data); 
        factPara.innerText = data[2].text; 
    });
}
*/
/*Understanding terms : 
- Ajax i asynchrounous JS & xml 
- json is ajvascript Object Notation 
- json() method: returns a second promise that resolves with the result of parsing the response body text as JSON.(Input is JSON, OUTPUT IS JS OBJECT) */

/***********************************************************************/

/* 10. Request & Response : 
- http Verbs 
- Response Status Code 
HTTP response codes : 200 successful , 400 bad Rquest, 404 not found 

/* HTTP response headers also contain details about the responses, such as content type, HTTP status code etc.

Q. Home Work : Use Get Method, And Post  */ 

