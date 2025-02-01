/*
*1: console.log(); 
    - To write(log) a message on the console 
    
    - console.log("apna collage"); 
    - console.log(1234); 
    - console.log(2 + 2); 
    - console.log("Apna", "College", 123);  
    
*2: Linking JS File: 
        <script src="app.js"></script> 

*3: Template Literals : 
    - They are used to add embedded expressions in a string

    let = 5; 
    let b = 10; 
    console.log(`your pay ${a + b } rupees); 

*4: Operator in JS 
    - Arithmetic(-, +, *, /, %, **)
    - Unary(--, ++)
    - Assignment(=, +=, -=, /=, %=, etc.)

    - Comparison: Comparison Operators to compare 2 Values : 
         >, >=, <, <= , ==, != 
    

    - Logical :  Logical Operators : 
        Logical operators to combine expressions 

       - && Logical AND (exp1) && (exp2)
       - ||, &&, != 

    - Unicode Value:   'a' -> 61, 'b' -> 62.... 
                        'A' -> 41 'B' -> 42... 
    
                        check on internate : 
*5: Conditional Statements: 
     - if - else : 
     - nested if-else
     - switch 

    *i: if Statement : 
        - some code before if 
        ex : if(some condition){
                //*do something
            }

            some code after if : 
        

    *ii: else if statement :
        if(condition){
            DO something......
        }else if(condition){
            do something else ..
        }else if(condition){
            do something else ..
        }else {
            Do something .......
        }


    *iii: Nested if-else : 
       - Nesting is writing if-else inside if-else statements. It can have many levels. 
 
        if (marks >= 33){
            if(marks >= 80){
             print "0"
            }else 
                print "A"
        }else {
            print "better luck next time!"
        }


*6: truthy & falsy : apply on conditional statement
   - Everything in JS is true or false(in boolean context). 
   - This doesn't mean their value itself is false or true, 
     but they are treated as false or true if taken in boolean context.
   - Falsy values : 
     false, 0, -0, On(BigInt value), ""(empty string), null, undefined, NaN

   - Truthy values
     Everything else 

*7: Switch Statement : 
    Used when we have some fixed values that we need to compare to

    let color = "red"; 
    switch(color){
    case "red" : 
        console.log("stop"): 
        break; 
    case "yellow": 
        console.log("slow down"); 
        break;
    case  "green"; 
        console.log("GO"); 
        break; 
    default:
        console.log("broken Light"); 
    
    }

*8: Alert & Prompt : 
  - Alert display an alert message on the page. 
    alert(something is wrong1); 

  - Prompt display a dialog box that asks user for some input. 
    prompt("please enter your roll no."); 

  - messeges: 
    console.error("this is an error msg"); 
    console.warn("this is warning");

*9: 
*/
// -----------------------------------------------
/*
console.log("hello world!");
console.log("tukaram bhoye");

let c = 5;
let d = 10;
console.log(c + d + "sum of a and b");


//3:  template literal : 
let pencilePrice = 10;
let eraseorPrice = 5;
console.log("the total price is : ", pencilePrice + eraseorPrice, " Rupees.");
console.log(`the total price is : ${pencilePrice + eraseorPrice} Rupees.`);

//4: Arithmetic Operator : 

let a = 10;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log(a--);
console.log("predecrement " + (--a));
console.log(b++);
console.log("preincrement " + (++b));

// comparison operator : 
let n = 5;
let str = "5";
console.log(n == str); //true  : compare with val
console.log(n === str); //false : also check type of value

let m = 5;
let str1 = 5;
console.log(m == str1);  // true
console.log(m === str1);  // true

console.log(null == undefined); //true
console.log(null === undefined); //false

console.log(0 == ' ');// true
console.log(0 === ' '); //false 

//*comparison for non-numbers : 
        // - unicode values

*/ 


//*5 Condtional statement: 

/*
console.log("before mu if statement");
let age = 14;
if (age = 23) {
    console.log("you can drive")
}

if (age < 13) {
    console.log("you cannot drive")
}

console.log("after my if statement");
if (age > 20) {
    console.log("you are in your 20s");
}

let firstName = "aman"; 
if(firstName == "shradha"){
    console.log(`welcome ${firstName}`); 
}
*/ 


// Qs.1 Create trafic light system that shows what to do based on color. 

let color = "red"; 

// Traffic Light FileSystem

if(color === "red"){
    console.log("stop!"); 
}
if(color=== "yellow"){
    console.log("slow down"); 
}
if(color==="green"){
    console.log("go. light color is green"); 
}

// if else conditions : 

let age = 10; 
if (age >= 18){
    console.log("you can vote"); 
}else if (age < 18){
    console.log("you cannot vote"); 
}

let marks = 6; 

if(marks >= 30){
    console.log(" Passed ")
} else if(marks >= 50){
    console.log("you got B grade");
}else if(marks < 30 ){
    console.log(" Napas ") // op
}


let ag = 10; 
if(age  >= 18){
    console.log("you can vote");
}else{
    console.log("you  cannot vote")  // op 
}


/*Q2: Create a system to calculate popcorn prices based on the size customer asked for: */
       
let size = 'XL';

if (size === 'XL'){
    console.log("size is 'XL', price is Rs. 250 ");
}else if (size ==='L'){
    console.log(" if size is 'L', price is Rs.200");
}else if(size === 'M'){
    console.log("if size is 'M', price is Rs.100");
}else if(size === 'S') {
    console.log("if size is 'S', price is Rs.50");
}else {
    console.log( "Size is not exist here " );
}

// Nested if - eles 

if (marks >= 33){
    if(marks >= 80){
     console.log( "0");
    }else 
        console.log("A"); 
}else {
    console.log ("better luck next time!")
}


// Logical Operators : && 
console.log( true && true); // true
console.log( true && false); // false 
console.log( false && true); // false
console.log( false && false); // false

// OR : 
console.log( true || true); // true
console.log( true || false); // false 
console.log( false || true); // false
console.log( false || false); // false


let mark = 75; 
// to calculate logical operators we move left to right 
if ((mark > 33) && (marks <= 80) || !false){
    console.log("pass");
}


/*Qs. A "Good String" is a string that starts with the letter 'a' & has a length > 3. 
    Write a Program to find if a string is a good or not. */ 

let str = "apple"; 
if((str[0] === 'a') && (str.length > 3)){
    console.log("good string"); 
}else{
    console.log("not a good string"); 
}

//Qs. Predict the output of following code: 

let num = 12; 
if((num%3 === 0) && ((num+1 === 15) || (num-1 === 11)) ){
    console.log("safe"); 
}else{
    console.log("unsafe"); 
}

// truthy & falsy 
if(0){  // conditions: 0, false, "", 1, true, " "(space)
    console.log("It has true value");  
}else{
    console.log("it has false value"); 
}

// switch statement 

let colour = "red"; 
switch(colour){
case "red" : 
    console.log("stop"); 
    break; 
case "yellow": 
    console.log("slow down"); 
    break;
case  "green": 
    console.log("GO"); 
    break; 
default:
    console.log("broken Light"); 

}
/* Use switch statement to print the day of the week using a number variable 'day' with
values 1 to 7 */ 
// 1 = Monday, 2 = tuesday & so on

let day = "8"; 
switch(day){
    case "1" : console.log("sunday")
                    break; 
    case "2" : console.log("Monday"); 
                    break;
    case "3" : console.log("Tuesday"); 
                    break;
    case "4" : console.log("Wedensday"); 
                    break;
    case "5" : console.log("Thursday"); 
                    break;
    case "6" : console.log("Friday"); 
                    break;
    case "7" : console.log("Saturday"); 
                    break;
    default : if(day > 7){
                console.log("choose correct day");
             }
}


// alert and Prompt

/* alert("This is a simple alert");
console.error("this is an error msg"); 
console.warn("this is warning");
let firstName = prompt("enter a name"); 

console.log(firstName); 
*/ 
/*
let first = prompt("enter first name"); 
let lastName = prompt(" enter last name"); 

let msg = ("welcome "+first +" "+lastName + "!");
alert(msg); 

*/ 
//* Assignment : 
/* Q1: Create a number variable num with some value . Now, print "good" if the numberi s divisible by 10 and peint "bad" if it is not */ 

let  n = 90 
if(n%10 === 0){
    console.log("good");
} else{
    console.log("bad");
}

// Q2: 

// let user = prompt("enter your name");
// let old = prompt("enter your age");
// alert(`${user} is ${old} years old `);

// Q3: 
let monthsQuarter = 1; 
switch(monthsQuarter){
    case  1 : console.log("january, February, March")
    break; 
    case 2 : console.log("april, May, June"); 
    break; 
    case 3 : console.log("July August, September");
    break; 
    case 4 : console.log("Octomber, November, December"); 

    default : if(monthsQuarter > 4){
        console.log("invalid months quarter");
    }

}

// Q4 
let str1 = "Apple"; 
if(str > 5){
    console.log("it is a Golden String ")
}else{
    console.log("it is not Golden String")
}


//Q5 : 
let a = 10; 
let b = 20;
let c = 40;


if(a > b){
    if(a > c){
        console.log(a + "a is largest number"); 
    }else{
        console.log(c + "c is langest number")
    }
}else{
    if(b > c){
        console.log(b + "b is largest number")
    }else{
         console.log(c +"c is largest number");
    }
}


// Q6: 
let  d = 32 ; 
let e = 47852; 

if((d%10) == (e%10)){
    console.log(" numbers have the same last digit which is"+d%10)
}else{
    console.log(" don't have the same last digit"); 
}