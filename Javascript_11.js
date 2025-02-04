/*
*CH-11: Javascript : Asynchronous Nature of JavaScript(advance-topic) -

*1: Visualizing the call Stack 
        
*1: JS Call Stack & breakpoint :
    - we use break Point to see function calling of callstack. It predict step by step
    - steps to open[open html document->browser->inspect->sources
                    -> choose folder->breakPoint(in the code choose a aline)
                    -> refresh page->screen visualize debugging-> there a four options upon choose(one next)
                    -> reflect changes on CallStack execution step-by-step ]

        - Stack is dataStructure LIFO
        - Example Books each opon :  

        function one(){
            return 1; 
        }
        
        function two(){
            return one() + one(); 
        }

        function three(){
            let ans = two() + one(); 
            console.log(ans);
        }

    *ii: Breakpoints : Uses for debugging
        if we have large code and we have to See a line that line how's execute then we use Breakpoints

*2: Javascript Single Threaded nature 
        - programming langauge two type -
        i) single threaded
            javascript : javascript at one time just do one task
                        its called asynchronous.

                asynchronously execution time we faced some problems 
                to avoid these problems those problems in this chapter we will learn about it. 


        ii) multithreaded

        ii) api : take request and send response 
            setTimeout done by browser. browser save code in js CallStack or after end time it execute

*2: Problems occure asynchronously while we programme in js 
!i : Callback Hell : 


*3: Promises 
    The Promise object represents the eventual completion (or Failure) of an asynchronous operation and its resulting vlaue. 
*/
/*
// Call stack 
function one(){
    return 1; 
}

function two(){
    return one() + one(); 
}

function three(){
    let ans = two() + one(); 
    console.log(ans);
}

three(); 


// single thread 

setTimeout(() =>{
    console.log("jay hind"); 
}, 2000); 

setTimeout(() =>{
    console.log("Hello world"); 
}, 2000); 

console.log("hello..."); 
*/ 

//callBack hell : 

h1 = document.querySelector("h1"); 

setTimeout(() => {
    h1.style.color = "red"; 
}, 1000);

setTimeout(() => {
    h1.style.color = "orange"; 
}, 2000);

setTimeout(() => {
    h1.style.color = "green"; 
}, 3000);


// to implement better this(previous) three functions 
function changeColor(color, delay){
    setTimeout(() => {
        h1.style.color = color;
    }, delay) ;
}

// Not Good Way to Call --> to show Dependnecy we Use in this Callbacks in Previos function --> nextColorCahnge()
changeColor("red", 1000); 
changeColor("range", 2000); 
changeColor("green", 3000); 


function changeColor(color, delay, nextColorCahnge){
    setTimeout(() => {
        h1.style.color = color;
        if(nextColorCahnge) nextColorCahnge(); 
    }, delay) ;
}

// call backs nesting ------- 
changeColor("red", 1000, () => {
    changeColor("orange", 1000, () => {
        changeColor("green", 1000, () => {
            changeColor("yellow", 1000, () =>{
            });
        });
    });
}); 
/* in the previous code happning nesting. 
 - this type of program's comes multiple time in programming 
  in situation like where we call api's, data want to add in database 
- also known as callback hell in it comes in large code when we work in asynchronously in javaScript it occure.
- call back hell comes when we call multiple nested functions as previous example. 

*/


