/*
*Chapter 12:  Async Functions & Complex Topics_6.
 
*1: async & await Keywords
    - Async keword creates ans async function And return a Promise.
    - after return promises we can apply methods on the functions.  
    - return promise even function not return something
    - use throw keyword for throw error 

        async function greet(){
            throw "404 page not found";  
            return "hello!"; 
        }

        greet() 
        .then(() => {
            console.log("promise was resolve"); 
            console.log("result was : ", result); 
        })
        .catch((err) => {
            console.log("promise was rejected with err : ", err); 
        })

        let demo = async () => {
            return 5;
        };

*2 : Await Keyword : await only use with async function.
       -  pauses the execution of its surrounding async function until the promise is settled 
          (resolve or rejected)
       - till the await function call not complete other functions will wait for the execution. 
        
        function getNum() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    let  num = Math.floor(Math.random() * 10) + 1; 
                    console.log(num); 
                    resolve(); 
                }, 1000);
            });
        }

        //* Await use only with async function
        async function demo1(){
            await getNum(); 
            getNum(); 
            getNum(); 
        }

*3:  with the promises we use async and await instead of .then() or .catch() methods for thus type situation handling. 
        h1 = document.querySelector("h1");
        function changeColor(color, delay) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    h1.style.color = color;
                    resolve("color changed!"); 
                }, delay);
            });
        }

        async function demo2() {
            await changeColor("red", 1000);
            await changeColor("orange", 1000); 
            await changeColor("blue", 1000); 
            await changeColor("green", 1000)
        }

*4: generate error using random number :
        h1 = document.querySelector("h1");
        function changeColor(color, delay) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    //  for generate error 
                    let num = Math.floor(Math.random() * 5)
                    if(num > 3){
                        reject("promise rejected");
                    }

                    h1.style.color = color;
                    resolve("color changed!"); 
                }, delay);
            });
        }

        async function demo2() {
            await changeColor("red", 1000);
            await changeColor("orange", 1000); 
            await changeColor("blue", 1000); 
            await changeColor("green", 1000)


        - if error generate then this will not print/output. 
            let a = 5; 
            console.log(a); 
            console.log("new number = ", a + 3); 
        }
        
*5: Handling Rejections with Await
      we use the Try and Catch methods to handling the error 
    - those statements are with await that add in try block or to 

    example: 

        async function demo2() {
        try{
            await changeColor("red", 1000);
            await changeColor("orange", 1000); 
            await changeColor("blue", 1000); 
            await changeColor("green", 1000)
        } catch (err) {
            let a = 5; 
            console.log("error caught"); 
            console.log(err); 
        }
      
*6: CompleX Topics : --------------------------------
*6:API's : api's return in jason format data.
        Api's : request to the server and we got a response. like hotel waiter--😅 
        ex. : amazon.in------>-request------>amazon server--response -->raw data--> browser. 
         
    - Api(application Programming Interface)
        user/client ⇄ url_api ⇄ link

    - some Random API's Example : 
        - https://catfact.ninja/fact (sends random cat facts)
        - https://www.boredapi.com/api/activity (sends an activity to do when bored)
        - https://dog.ceo/api/breeds/image/random (sends cute dog pictures)

    *Example : 
        twitter api -- we can make bot accounts, randomly personal account if anyone tag we can send automatic replies even we don't have to create account 

    - api endpoint suppose a URL--> normal(xkey(password(for user)), xpaid ) 

*7: Jason : JavaScript Object Notation  - www.json.org
           xml :  before jason format mostly used XML(xtensible markup language).
    - jason format most similar like javascript objects 
    - official sites which data can we use 
    - jasonlint.com : <- here we check jason format is valid or not

*8: JSON : Accessing Data from JSON.
    - JSON.parse(data) Method 
        To parse a string data into a JS object 
    
    - JSON.stringify(json)Method 
        To parse a JS object data into JSON 

    - Example : 
        let jsonRes = '{"fact":"Cats can judge within 3 inches the precise location of a sound being made 1 yard away.","length":86}'
        let validResp = JSON.parse(jsonRes)
        console.log(validResp.fact); 

        let student = {
            name: "tukaram", 
            marks: "95",
        };

        let student1 = JSON.stringify(student);
        console.log(student1);

*9: Testing API Requests: 
    Tools : - Hoppscoth, Postman
    - in this we use hoppscoth(free, open source) for api testing. 

*10: Ajax(Asynchronous JavaScript and XML(here we use json not xml(old)) : 
        - api request-response process done in asynchronously. 
          example: -->insta likes where we did not do refreshing. 

    i: GET: To get information we use GET
    ii: POST : when we want to post some data using api request
    iii: DELETE :To Delete things we request. 
    
*11: Status code : check on MDN 
    Examples : 
        200 = OK, 404 = Not Found, 400 = Bad Request, 
        500 = Internal Server Error 

*12: Add Information in URL's : 
        - Query Strings 
        - https://www.google.com/search?q=harry+potter
                                        /     \ 
                                      Key    Value
        - https://api.potterdb.com 

    *i: Use from GitHub(https://github.com/Hipo/university-domains-list) 
        - http://universities.hipolabs.com
        - to found
        - countries of collages : 
          http://universities.hipolabs.com/search?name=middle
        - collages of countries information which available : 
          http://universities.hipolabs.com/search?country=turkey

    
*13: http headers : 
        header, value
    - To open headers section :
        browser->inspect->network->search something on google search engine
        ->we see some sites automatically updates->click on anyone-> open header section. 
    
    *i: api jokes : 
        https://icanhazdadjoke.com/
                 
*14: Our First Request : 
            using Fetch  
            fetch(url)  
    - let url = "https://catfact.ninja/fact"; 
        fetch(url);
       - we work with promises methods using api responses
    *i: we work with promises methods using api responses
            let url = "https://catfact.ninja/fact"; 
            fetch(url).then((res) => {
                console.log(res)
                console.log(res.json()); // to read json 
            }).then((data) => {
                console.log(data);
            }).catch((err) =>{
                console.log("ERROR - ", err)
            })

    
    *ii: api calls are work asynchronously 
            fetch(url).then((res) => {
            console.log(res);
            return res.json(); 
            }).then((data) => {
                console.log("data1 = ", data.fact);
                return fetch(url); 
            }).then((res) => {
            return res.json(); 
            }).then((data2) => {
                console.log("data =", data2.fact);
            }).catch((err) =>{
                console.log("ERROR - ", err)
            })

            console.log("i am happy "); 

    *iii: async and await combination 
        - async and await combination: A readable format to call api  of call  

        async function getFacts() {
            try {
                let res = await fetch(url); 
                let data = await res.json(); 
                console.log(data.fact);

                let res2 = await fetch(url); 
                let data2 = await res2.json(); 
                console.log(data2.fact);
            }catch(e){
                console.log("error -", e); 
            }

            console.log("bye"); 
        }

    */ 
/*
// Async function
async function greet(){
    // throw "some random error"; //for throw random error use throw keyword
    throw "404 page not found";  
    return "hello!"; 
}

greet () 
.then(() => {
    console.log("promise was resolve"); 
    console.log("result was : ", result); 
})
.catch((err) => {
    console.log("prmise was rejected with err : ", err); 
})

let demo = async () => {
    return 5;
};


function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let  num = Math.floor(Math.random() * 10) + 1; 
            console.log(num); 
            resolve(); 
        }, 1000);
    });
}

// Await 
async function demo1(){
    await getNum(); 
    getNum(); 
    getNum(); 
}
*/
/* 
//await with other functions
h1 = document.querySelector("h1");
function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //  for generate error 
            let num = Math.floor(Math.random() * 5)
            if(num > 3){
                reject("promise rejected");
            }

            h1.style.color = color;
            resolve("color changed!"); 
        }, delay);
    });
}

async function demo2() {
    await changeColor("red", 1000);
    await changeColor("orange", 1000); 
    await changeColor("blue", 1000); 
    await changeColor("green", 1000)

    let a = 5; 
    console.log(a); 
    console.log("new number = ", a + 3); 
} */ 
//*----------------------------------------------
// Api's : 
// JSON.parse(data)Method 
/*
let jsonRes = '{"fact":"Cats can judge within 3 inches the precise location of a sound being made 1 yard away.","length":86}'
let validResp = JSON.parse(jsonRes)
console.log(validResp.fact); 

let student = {
    name: "tukaram", 
    marks: "95",
};

let student1 = JSON.stringify(student);
console.log(student1);
*/


 
// we work with promises methods using api responses
let url = "https://catfact.ninja/fact"; 
// fetch(url).then((res) => {
//     console.log(res)
//      console.log(res.json()); // to read json 
// }).then((data) => {
//     console.log(data);
// }).catch((err) =>{
//     console.log("ERROR - ", err)
// })


// api calls are work asynchronously 
/*
fetch(url).then((res) => {
   console.log(res);
   return res.json(); 
}).then((data) => {
    console.log("data1 = ", data.fact);
    return fetch(url); 
}).then((res) => {
   return res.json(); 
}).then((data2) => {
    console.log("data =", data2.fact);
}).catch((err) =>{
    console.log("ERROR - ", err)
})


console.log("i am happy "); 
*/

// async and await combination: A readable format to call api  of call  
// 
async function getFacts() {
    try {
        let res = await fetch(url); 
        let data = await res.json(); 
        console.log(data.fact);

        let res2 = await fetch(url); 
        let data2 = await res2.json(); 
        console.log(data2.fact);
    }catch(e){
        console.log("error -", e); 
    }

    console.log("bye"); 
}
