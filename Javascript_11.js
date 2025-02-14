/*
*CH-11: Javascript : Asynchronous Nature of JavaScript(advance-topic) -

*1: Visualizing the call Stack 
        
*1: JS Call Stack & breakpoint :
    - we use break Point to see function calling of callstack. It predict step by step
    - steps to open[open html document->browser->inspect->sources
                    -> choose folder->breakPoint(in the code choose a aline)
                    -> refresh page->screen visualize debugging-> there a four options choose(one next)
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
        if we have large code and we have to See a line that line how's execute then, we use Breakpoints

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
    
  *i:  Example Of callBack Hell: 
    function savetoDb(data, success, failure){
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4){
            success(); 
        }else{
            failure(); 
        }
    }

        //! call back hell 
        - function calling become hard sometime, it mostly uses with database. 
        savetoDb(
            "tukaram bhoye", () => {
                console.log("success: yout data was saved"); 
                savetoDb(
                    "hello world", () => {
                        console.log("success2: data3 saved"); 
                    }, () => {
                        console.log("failure3 : weak connection"); 
                        savetoDb(
                            "tukaram", () => {
                                console.log("succes3: data3 saved"); 
                            }, 
                            () => {
                                console.log("failure3 : weak connection"); 
                            }
                        );
                    },() => {
                        console.log("failure2 : weak connection");      
                    }
                );
            },() => {
                console.log("failure : weak connection ");
            }
        );

    *ii: - In Promise we see to things 1: resolve 2: reject.

    - Example : 
        function savetoDb(data) {
            return new Promise((resolve, reject) => {
                let internetSpeed = Math.floor(Math.random() * 10) + 1; 
                if (internetSpeed > 4) {
                    resolve("success: data was saved");
                } else {
                    reject("failure: weak connection");
                }
            });
        }

    - output on console
        savetoDb("apna collage");
        savetoDb("apna collage");
        Promise {<fulfilled>: 'success: data was saved'}[[Prototype]]: Promisecatch: ƒ catch()constructor: ƒ Promise()finally: ƒ finally()then: ƒ then()Symbol(Symbol.toStringTag): "Promise"[[Prototype]]: Object[[PromiseState]]: "fulfilled"[[PromiseResult]]: "success: data was saved"
        savetoDb("apna collage");
        Promise {<rejected>: 'failure: weak connection'}


    *iii: Promise chaining: 
     - In promise we use two methods frequently 1) .then() OR .catch()
            - Promise is itself a Object 
                Promise 
                 / \
         fullfill  reject 

        - if promise fullfil or if want still do something use .then()
        - when promise reject throw a error that time if we want still work use .catch() method. 


        - first way : 

            let request = savetoDb("apna college") ;
            request.then(() => {
                console.log("promise was resolved"); 
                console.log(request); // to print Promise
            })
            .catch(() => {
                console.log("Promise was rejected");
            }) 

        - second Way 
            function savetoDb(data){
                return new Promise((resolve, reject) => {
                    let internetSpeed = Math.floor(Math.random() * 10) + 1; 
                    if(internetSpeed > 4){
                        resolve("succes : data was saved"); 
                    }else {
                        reject("failure : weak connection"); 
                    }
                })
            }

     *iv: Promise chaining a Improve version :
        - same like try catch methods we use multiple try methods and with single catch in programming. 
        - here with multiple .then() methods and single catch method. 

        
         savetoDb("apna collage")
            .then(() => {
                console.log("data1 saved"); 
                return savetoDb("helloworld"); 
            }).then(() => {
                console.log("data2 saved"); 
                return savetoDb("tukaram");
            }).then(() => {
                console.log("data3 saved"); 
            })
            .catch(() => {
                console.log("promise was rejected"); 
            });


    *v : Promises are rejected  and resolve with some data (valid results or errors)
        - the situation comes multiple time in programming like call to api's and where promises save succesfully one after one squence wise 
       
        savetoDb("apna collage")
            .then((result) => {
                console.log("data1 saved");
                console.log("result of promise: ", result); 
                return savetoDb("helloworld"); 
            })
            .then((result) =>{
                console.log("data2 saved"); 
                console.log("result of promise: ", result); 
                return savetoDb("shradha"); 
            })
            .then((result) => {
                console.log("data3 saved"); 
                console.log("result of promise : ", result); 
            })

            .catch((error) => {
                console.log("promise was rejectd"); 
                console.log(error); 
            })


     *vi : Let's apply Promises to our callback hell. 


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
/*
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
}); */ 
/* in the previous code happning nesting. 
 - this type of program's comes multiple time in programming 
  in situation like where we call api's, data want to add in database 
- also known as callback hell in it comes in large code when we work in asynchronously in javaScript it occure.
- call back hell comes when we call multiple nested functions as previous example. 

*/

// promises 
/*
function savetoDb(data, success, failure){
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if(internetSpeed > 4){
        success(); 
    }else{
        failure(); 
    }
}

//! call back hell 
savetoDb(
    "tukaram bhoye", 
    () => {
        console.log("success1: your data was saved"); 
        savetoDb(
            "hello world", 
            () => {
                console.log("success2: data saved"); 
                savetoDb(
                    "final data", 
                    () => {
                        console.log("success3: final data saved"); 
                    }, 
                    () => {
                        console.log("failure3: weak connection on final save"); 
                    }
                );
            }, 
            () => {
                console.log("failure2: weak connection on second save"); 
                savetoDb(
                    "retrying hello world", 
                    () => {
                        console.log("success3: retried data saved"); 
                    }, 
                    () => {
                        console.log("failure3: still weak connection"); 
                    }
                );
            }
        );
    }, 
    () => {
        console.log("failure1: weak connection"); 
    }
);
*/ 
// return Promise

function savetoDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1; 
        if (internetSpeed > 4) {
            resolve("success: data was saved");
        } else {
            reject("failure: weak connection");
        }
    });
}

// first way : 
/*
let request = savetoDb("apna college") ;
 request.then(() => {
    console.log("promise was resolved"); 
    console.log(request); // to print Promise
 })
 .catch(() => {
    console.log("Promise was rejected");
 })
    */ 
/*
//*second Way 
function savetoDb(data){
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1; 
        if(internetSpeed > 4){
            resolve("succes : data was saved"); 
        }else {
            reject("failure : weak connection"); 
        }
    })
}
*/ 
//*Promise chaining a Improve version :
/*
savetoDb("apna collage")
    .then(() => {
        console.log("data1 saved"); 
        return savetoDb("helloworld"); 
    }).then(() => {
        console.log("data2 saved"); 
        return savetoDb("tukaram");
    }).then(() => {
        console.log("data3 saved"); 
    })
    .catch(() => {
        console.log("promise was rejected"); 
    });
*/ 

//the situation comes multiple time in programming like call to api's and where promises save succesfully one after one squence wise 
/*
savetoDb("apna collage")
    .then((result) => {
        console.log("data1 saved");
        console.log("result of promise: ", result); 
        return savetoDb("helloworld"); 
    })
    .then((result) =>{
        console.log("data2 saved"); 
        console.log("result of promise: ", result); 
        return savetoDb("shradha"); 
    })
    .then((result) => {
        console.log("data3 saved"); 
        console.log("result of promise : ", result); 
    })

    .catch((error) => {
        console.log("promise was rejectd"); 
        console.log(error); 
    })

*/ 
