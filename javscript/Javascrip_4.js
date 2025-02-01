/*
*Javascript: chapter 4 : 

*LOOPs : 
*1: for Loop : 
    for(initialization; condition; updation){
        do something........
    }
    
    for(let i = 1; i<=5; i++){
        console.log(i)
    }

    *i: Print all Odd numbers 1 t 15;
       for(let i=1; i<=15; i++){
         if(i%2 == 1){
            console.log(i + " this is odd number")
         }else{
            console.log(i + " is even number"); 
         }  
       }
        ----------------
        for(let i=1; i<=15; i=i+2){
            console.log(i +" Odd numbers")
        }
        for(let i=;15 i>=1; i=i-2){
            console.log(i +" Odd numbers")
        }

    *ii: infinite loop : 
        ex1:  
        for(let i=1; i<=15; i=i+2){
            console.log(i +" Odd numbers")
        }
        
        ex2: for(let i=1; i>=0; i=i++){
            console.log(i);
        }

    *iii: Nested Loop : 
        for(let i=1; i<=3; i++){     <------- Outer loop 
            for(let j=1; j<=3; j++){ <------- Inner Loop 
                console.log(j); 
            }
        }

*2: While Loop : work same as for loop 
        prefer in case whre numbers are not mostly involved. 

    *i: Syntax : 
        while(condition){
            do something ......
        }
        
        let i =1 ;
        while(i <= 5){
            console.log(i); 
            i++; 
        }
*3: Loops with Arrays: 
    *i: let fruits = ["mango", "apple", "banana", "litchi", "orange"];

        for(let i=0; i<fruits.length; i++){
            console.log(i, fruits[i]);
        }

    *ii: Loops with Array nested Loops with Nested Arrays : 
        let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder-woman", "flash"]]
       -- Example: 
        let student = [ ["aman", 95], ["shradha", 94.4], ["tukaram", 63] ]; 
        for (let i=0; i<student.length; i++){
            console.log("info of student ")
            for(let j = 0; j< student[i].length; j++){
                console.log(student[i][j]); 
            }
        }
           
        
*4: For of Loop : Use to access collection/complex array of items 
    for(element){
        do something...........
    }

    --Example : 
    let fruit = ["mango", "apple", "banana", "litchi", "orange"];
    for(box of fruit){
        console.log(box); 
    }

    //*access individual character : 
    for(char of "tukaram"){
        console.log(char); 
    }

    *ii: Nested for of Loop : 
        let heroes = 


    let marval = [["ironman", "spiderman", "thor"], 
        ["superman", "wonder-woman", "flash"]
    ];

    for(list of marval){
        // console.log("Heroes of Marvals "+list);
        for(dc of list){
            console.log(dc); 
        }
    }

*5: ToDo App using only javascript : 
  file directory name --> development/jsProjects
    - list - to show all todos 
    - add - to add a todo 
    - delete - to delete a task 
    - quit - to exit the todo



    
*/
/* 
// first program 
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");

// for loop :
for (let i = 1; i <= 5; i++) {
    console.log(i)
}

// Odd Numbers : 

for (let i = 1; i <= 15; i++) {
    if (i % 2 == 1) {
        console.log(i + " this is odd number")
    } else {
        console.log(i + " is even number");
    }
}

for (let i = 1; i <= 15; i = i + 2) {
    console.log(i + " Odd numbers")
}

//5 table : 
for (let i = 3; i<=30; i= i+3){
    console.log(i); 
}

// let n = prompt("enter value"); 
// n = parseInt(n);  
// for(let i = n; i<= n*10 ;i = i+n){
//     console.log(n); 
// }

// Nested loop 

for(let i=1; i<=3; i++){     
    for(let j=1; j<=3; j++){ 
        console.log(j); 
    }
}


// while loop : 

    let i =1 ;
    while(i <= 5){
        console.log(i); 
        i++; 
    }
    let  j=1 ;
    while(j <= 20){
        console.log(j); 
        j = j+2; 
    }
*/ 
/*
    favMovie
    let favMovie = "avatar"; 
    let guess = prompt("guess my fav Movie ")
    while((guess != favMovie) && (guess != 'quit')){
        console.log('wrong guess'); 
        guess = prompt("Try again, wring gues "); 
    
    if(guess == favMovie){
        console.log("Congrats! yahi karlo dinbhar"); 
    }else{
        console.log("Nahi khelna bhau..");
    }

while(i <= 5){
    if(i== 3){
        break; 
    }
    console.log(i); 
    i++; 
}

// Loops with array : 

    let fruits = ["mango", "apple", "banana", "litchi", "orange"];
    fruits.push("pineApple"); 

        for(let i=0; i<fruits.length; i++){
            console.log(i, fruits[i]);
        }

        console.log("aaposite Sorting of array using for loop")
        for(let i = fruits.length-1; i>=0; i--){
            console.log(i, fruits[i]); 
        }



// Array with nested loops 
let heroes = [["ironman", "spiderman", "thor"], 
        ["superman", "wonder-woman", "flash"]
    ];

for(let i= 0; i<heroes.length; i++){
    console.log("i = " + i, heroes[i], heroes[i].length);
    for(let j=0; j<heroes[i].length; j++){
        console.log("j = "+j, heroes[i][j]);
    }
}
// ----------------------------------------
//  nested Array
let student = [ ["aman", 95], ["shradha", 94.4], ["tukaram", 63] ]; 
for (let i=0; i<student.length; i++){
    console.log("info of student ")
    for(let j = 0; j< student[i].length; j++){
        console.log(student[i][j]); 
    }
}

// for of Loop 

let fruit = ["mango", "apple", "banana", "litchi", "orange"];
for(box of fruit){
    console.log(box); 
}

for(char of "tukaram"){
    console.log(char); 
}

// nestet for of Loop 
let marval = [["ironman", "spiderman", "thor"], 
        ["superman", "wonder-woman", "flash"]
    ];

    for(list of marval){
        // console.log("Heroes of Marvals "+list);
        for(dc of list){
            console.log(dc); 
        }
    }

    */ 

    // Assignment : 

// QS. delete all occurances of num from given array

let arr = [1, 2, 3, 4, 5, 6, 2]; 
let num = 2; 
for (let i=0; i<arr.length; i++){
    if(arr[i] === num){
        arr.splice(i, 1);     
    }
}

console.log(arr);

// Q2 : find the number of digits from given number : 
 let number = 287152; 
 let count = 0; 
 let copy = number ; 

 while(copy>0){
    count++; 
    copy = Math.floor(copy/10);
 }

 console.log(count); 

// Qs. Write a JS program to find the sum of digits in a number. 

let number2 = 287152; 

let sum = 0; 
while (number2 > 0){
   let digits =  number2%10; 
   sum = digits + sum ; 
   number2 = Math.floor(number2/10); 
}
console.log(sum);

let n = prompt("Enter a number which you want to predict"); 
let factorial = 1; 
for(let i=1; i <= n; i++ ){
     factorial = factorial * i;
}   

console.log(factorial);  

// Qs Find the largest array . 

let arr1 = [1, 2, 3, 4, 5, 6, 2]; 
let largest = 0; 
for(let i=0; i<=arr1.length; i++){
    if(arr[i] > largest){
       largest = arr[i]; 
    }
}
console.log(largest); 