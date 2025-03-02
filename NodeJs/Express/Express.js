/*

*1: Library  V/s Framework 
            Library               Framework 
A library is a collection of   | A framework is a set of pre-written
pre-written code that can be   | code that provides a stucture for 
used to perform specific tasks.| developing software applications. 
Ex: axios                      | Ex: express 
 

*2: Express : 
    - A Node.js web application framework that helps us to make web applications 
    - express help us to listen incomming requests. 
    - It is used for server side programming. 

    Uses 4 : 
    1: listen for incomming requests 
    2: parse incomming data : 
    3: Match response with routes. ( routes ex. : https://localhost:8080/search?)
    4: sent suitable response according request: 

    - site for install npm package/framework : npmjs.com/package/express
    l

*3: Getting Started with Express : 
    *Ports are the logical endpoints of a network connection that
    is used to exchange information between a web server and a web client. 

    const express = require("express"); 
    const app = express(); // server side application we make using app.use app is a object.

    let port = 3000; // 8080-------------- 

    app.listen(port, () => {
        console.dir(`app is listening on port ${port}`);
    })

- output : we have to explicitely stop it. unless it run until we not close it.
   use to close/exit "cntrl+c"
    node Express.js
    'app is listening on port 3000'

- to sent request on this system go any browser and search 
- before run start the server. 
- sent request to the server with port 3000
  localhost:3000
  output: cannot get/

- sent request to the server with port 8080 
  localhost:8080
  output: cannot get/ 

*4: app.use : 
    - to run request localhost:8080 on hoppscotch use browser extension 
    link: github.com.hoppscotch/hoppscotch/discussions/2051
    - listen request any type of which comes toward server
    app.use((req, res) => {
        console.log("new incomming request"); 
    })

    example: 
        const express = require("express"); 
        const app = express(); // server side application we make using app. app is a object.

        let port = 8080; 

        app.listen(port, () => {
            console.dir(`app is listening on port ${port}`);
        })

        app.use((req, res) => { //req, resp bydefault in callback create express. 
            console.log("request received"); 
        })

*5: Sending a Response :  
       /           \
    req(obj)      res(obj)
  *Response:for same path at one time we can send just one response that can be object, send html page, single string,  

- http text base process express convert in req object.(parsing)

        app.use((req, res) => { //req, res bydefault in callback create express. 
            // console.log(req); 
            console.log("request received"); 
            // res.send("this is a basic response"); 
        *- in json format create object : 
            res.send({
                name : "apple", 
                color: "red", 
            });

        *- send req in html format : 
            let code = "<h1> Fruit</h1> <ul><li>apple</li><li>orange</li></ul>";
            res.send(code); 
        });

*6: Routing : It is process of selecting a path for 
              traffic in a network or between or across multiple networks. 

    - with different routes  we send dif-different responses even they look like same. 
      example : http://localhost:8080/search  --> search, help-> with these request we see same repsonses.

    *i: some methods of express: 
        https://expressjs.com/en/4x/api.html

    *ii: using the dif-different request we can use various function of app.
        
        app.get("/", (req, res) => {
            res.send("you contacted root path"); 
        });

        - http://localhost:8080/apple
        app.get("/apple", (req, res) => {
            res.send("you contacted apple path")    
        });

        - http://localhost:8080/orange
        app.get("/orange", (req, res) => {
            res.send("you contacted orange path")    
        });

        - all(*) path --------
        - instead of 404 predict diffrent error 
        app.get("*", (res, req) => {
            res.send("this path does not exist"); 
        });

        - Using Post methods : 

        app.post("/", (req, res) => {
            res.send("you send a post request to root"); 
        })


*7: NodeMon : To automatically restart server with code changes. 
    - Server automatically refress according to done/save changes. 
    - npmjs.com/package/nodemon 
    - generally prefere -g(global) save globally.
    - nodemon -v , to run file ==> nodemon Express.js

*8: Path parameters : 
    req.params : 
      example instagram: https://www.instagram.com/microsoft/?h!=en
                                                      ↳tukaram bhoye, apple, here will open accounts 
      means these paths are not written by a developer. these are the variables(here->microsoft, apple)
    - in such cases generally with the path send some variable value which is called "path parameters" 
      this variable change automatically. 

    example of path parameters : 
    app.get("/", (req, res) => {
        res.send("Hello, i am root path"); 
    });

    app.get("/:username/:id", (req, res) => {
        let { username, id } = req.params;
        let htmlStr = `<h1> welcome to the page of @${username}!</h1>` ; 
        res.send(htmlStr); 
    });
    - after this sent request on hoppscotch/browser: 
     input:   http://localhost:8080/tukarambhoye/123/
     output: welcome to the page of @tukarambhoye!
            page redirect on another page.
            
*9: Query String : in url q(queryString)=apple
  Google : search in search engine apple 
  response : https://togglesearch.co/dynamiclander/?chnm=in&chnm2=tin2&chnm3=&q=apple
  npmjs : express
  https://www.npmjs.com/search?q=express


  *i: additional information with query string
        app.get("/search", (req, res) => {
            console.log(req.query); 
            res.send("no results"); 
        }); 
    - http://localhost:8080/search?q=apple&color=green
    - in parameters we sent additional information in the form of query string that information in app.get comes in req obj and store in query parameter.
    - Deconstruct : 
        app.get("/search", (req, res) => {
            let { q } = req.query; 
            res.send(`search results for query: ${q}`);
        });
      input: http://localhost:8080/search?q=apple
      output: search results for query: apple 

    - request nothing search
        app.get("/search", (req, res) => {
            let { q } = req.query; 
            if(!q){
                res.send("<h1>Nothing Searched</h1>");
            }
            res.send(`search results for query: ${q}`);
        }); 
    input : http://localhost:8080/search?
    output: Nothing search


    - 
*/ 

const express = require("express"); 
const app = express(); // server side application we make using app. app is a object.

let port = 8080; 

app.listen(port, () => {
    console.dir(`app is listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("Hello, i am root path"); 
});

// // http://localhost:8080/apple
// app.get("/apple", (req, res) => {
//     res.send("you contacted apple path")    
// });

// // http://localhost:8080/orange
// app.get("/orange", (req, res) => {
//     res.send("you contacted orange path")    
// });

// //  all(*) path --------
// // instead of 404 predict diffrent error 
// app.get("*", (res, req) => {
//     res.send("this path does not exist"); 
// });

// Using Post methods : 

// app.post("/", (req, res) => {
//     res.send("you send a post request to root"); 
// });


// app.get("/:username/:id", (req, res) => {
//     // console.log(req.params); //params var store username.
//     let {username, id} = req.params;
//     res.send(`welcome to the page of @${username}`); 
// });

app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    let htmlStr = `<h1> welcome to the page of @${username}!</h1>` ; 
    res.send(htmlStr); 
});


// with different routes  we send dif-different responses even they look like same. 
// example : http://localhost:8080/search  // search, help-> with these request we same repsonses.

app.get("/search", (req, res) => {
  let { q } = req.query; 
  if(!q){
    res.send("<h1>nothing searched</h1>");
  }
  res.send(`search results for query: ${q}`);
}); 