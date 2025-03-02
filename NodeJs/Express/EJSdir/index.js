/*
*Chapter_33(backend) Node js: 
 - file path: C:\Users\tcbho\OneDrive\Desktop\Apna College\Development\NodeJs\Express\EJSdir\index.js
 
*1: Templating :EJS(Embedded Javascript templates)
    - fix layouts
    - like blueprint 
    EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. 

    *Note: if nodemon not install in -g then install in this path locally. install -g.

        const express = require("express"); 
        const app = express(); 

        const port = 8080; 
        app.set("view engine", "ejs"); //ejs is package here we not use require bcz express automatically bydefault internally get require so no need. 

        app.listen(port, () =>{
            console.log(`listenening on port ${port}`);
        })

*2: Using ejs :
    - ejs is package here we not use require bcz express 
      automatically bydefault internally get require so no need. 
    - Example : 
      app.set("view engine", "ejs"); 

   *i:res.render : sent file( is a ejs file(ex:html code, file))in form of file that time we use res.render. 
   - create views folder: for rendering template express will find itself viwes file for rendering. 
   - in vies make file : home.ejs // same as html but automatically render in index.js. 

        const express = require("express"); 
        const app = express(); 

        const port = 8080; 

    - ejs is package here we not use require bcz express automatically bydefault internally get require so no need. 
        app.set("view engine", "ejs"); //ejs is package here we not use require bcz express automatically bydefault internally get require so no need. 

    - No need to add ".ejs" as Express will automatically look for files with the .ejs extension in the "views" folder
    app.get("/", (req, res) => {
            res.render("home.ejs"); here we not write directory path. express will find itself.
        });

        app.listen(port, () => {
            console.log(`listening on port ${port}`); 
    });

*3: Second Way to run file on command prompt: 
    
  - input: <files_path> nomedmon EJSdir/index.js
  - output: error.
  - here problem is views file is missing. it not found 

  *solution : 
    const path = require("path"); 

    - setup constant path to prevent errors 
    app.set("views", path.join(__dirname, "/views"))
                                  ↪this path(e.g. Express/EJSdir/) 
    - here path is package


*4: Interpolation Syntax: 
        - Interpolation refers to embedding expressions into marked up text. 

    - template : `this is a ${name}`; 
                                ↳print namevar value.
    -  in EJS TEPLATE WE CAN STORE WHOLE javaScript code  
    - here we have to how we can embed javascript syntax in ejs.  
    - path : https://ejs.co/

    *i: ejs Tags: <%=: output the value in template (HTML escaped)
    - dynamic html    
    - <%=  : convert input into string and in html treat as string that input.
        <body>
            <h1>This is the home page 1+3 :</h1>
            <h3> <%=  1 + 3 %></h3>
            <h3> <%=  "Tukaram".toUpperCase %></h3>
            <h3> <%= ["hello", "bonjour","namaste"][2(seconde index print )] %></h3>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            <button>click me!</button>
        </body>

    - run(path)-> nodemon Express/index.js 
    - output: 4(ex. <%=  1 + 3 %>) & paragraph of lorem here


*5: Passing data to EJS : 
    - rolldice.ejs : 
        <body> 
            <h1>Dice gave value : <%= num //Math.floor(Math.random() * 6) + 1 %></h1>
        </body>

    - index.js: 
        app.get("/rolldice", (req, res) => {
            let diceVal = Math.floor(Math.random() * 6) + 1; 
            res.render("rolldice.ejs", { num : diceVal }); 
        });
    output: 2(a random num in h1 ); 
    

*6: Instagram EJS : 
    - Create a basic template for instagram page based on following route: 
    - /ig/:username
    
    - instagram.ejs
        <body>
            <h2> This page belongs to @<%= username %> </h2>
            <button>follow </button>
            <button>Message </button>
        </body>

    - index.js : 
        app.get("/ig/:username", (req, res) => {
            let { username } = req.params; 
            res.render("instagram.ejs", { username });
        });
    input: http://localhost:8080/ig/tukaram
    output: This page belongs to @Tukaram


*7: conditional Statements in EJS : 
    Adding conditions inside EJS : 
    - <% (scriptlet tag) = for control flow no output: 
    - condtional statements, controll flow we can write using this.

   - rolldice.ejs : 
        <body> 
            <h1>Dice gave value : <%= num //Math.floor(Math.random() * 6) + 1 %></h1>
            <% if(num == 6) { %>
                <h2>Nice Roll dice again. </h2>
            <% } %>
        </body>

   - index.js : 
        app.get("/rolldice", (req, res) => {
            let diceVal = Math.floor(Math.random() * 6) + 1; 
            res.render("rolldice.ejs", { num : diceVal }); 
        });

    ---------------------------------------
    - index.js 
        app.get("/ig/:username", (req, res) => {
            const followers = ["tukaram", "bob", "steve", "abc"];
            let { username } = req.params; 
            res.render("instagram.ejs", { username, followers });
        });

    - instagram.ejs : 
        <body>
            <h2> This page belongs to @<%= username %> </h2>
            <button>follow </button>
            <button>Message </button>

            <h3>Accounts that follow you: </h3>
            <ul>
                <% for(let name of followers) {%>
                    <!-- <li>name</li> -->
                    <!-- make name as var -->
                    <li><%= name %></li>
                <% } %>
            </ul>
        </body>


*8: Instagram page with EJS : 
        const instaData = require("./data.json");

    *i: index.js file

        app.get("/ig/:username", (req, res) => {
            let { username } = req.params; 
            const instaData = require("./data.json");
            const data = instaData[username]; 
            if(data){
                res.render("instagram.ejs", { data });  
            }else{
                res.render("./error.ejs");
            }
        });
 
    *ii: instagram.ejs file: 
        <head>
            <style>
                img{
                    height: 100px;
                    width: 100px;
                }
            </style>
        </head>
        <body>
            <h2> This page belongs to @<%=  data.name %> </h2>
            <button>follow </button>
            <button>Message </button>
            <p>
                followers: <%= data.followers %> &nbsp;&nbsp;&nbsp;&nbsp; 
                following: <%= data.following  %>
            </p>
            <hr />
            <% for(let post of data.posts) { %>
                <img src="<%= post.image %>" alt="some img">
                <p>
                    Likes : <%= post.likes %> &nbsp;&nbsp;&nbsp;&nbsp;
                    Post: <%= post.comments %> 
                </p>
            <% } %>
        </body>

    *iii: error.js : 
        <body>
            <h1>No such Account</h1>
        </body>
    
*9: Serving Static Files(ex. css, js files ): 
    app.use(epxress.static(folder_name))
    app.use(express.static(path.join(__dirname, "public"))); 
    ----------------------------------
    - by default all file take express from public files.
    - so always we have to public file to serve static files.  
    - same as view files for ejs. 


    example: ---
    *i: index.js:
        const express = require("express"); 
        const app = express(); 
        const path = require("path"); 

        const port = 8080; 

        app.use(express.static(path.join(__dirname, "public/js"))); 
        app.use(express.static(path.join(__dirname, "public/css"))); 
        app.set("view engine", "ejs") // Set the view engine to EJS
        app.set("views", path.join(__dirname, "/views")); 
        
    *ii: public>js>app.js :
        let btns = document.querySelector("button"); 

        for(btn of btns){
            btn.addEventListener("click", () => {
                console.log("button was clicked"); 
            });
        } 
    *iii: public>css>style.css: 
        body{
            background-color: pink;
        }

        img{
            height: 100px; 
            width: 100px;
        }
    *iv: instagram.ejs(previous file(8)) 
     added extra files: 
     <link rel ="stylesheet" href="/style.css" />
     <script src="/app.js"></script>


*10: Includes(partial) : browser: " https://ejs.co "
    -includes is a way that is use to add subtemplates 
    - <%- includes("includes/head.ejs"); %>
    - use for insert subtemplates of ejs. 
    - <%- : Output the unescaped value into the template.

    - in this we create separate tempalates of  header & footer for these files 
    -->  error.ejs, instagram.ejs file
    --> here, -->ex: includes/head.ejs
      
*/ 
/*
---------------------------------------------------
const express = require("express"); 
const app = express(); 
const path = require("path"); 

const port = 8080; 

app.set("view engine", "ejs") // Set the view engine to EJS
app.set("views", path.join(__dirname, "/views")); 

app.get("/", (req, res) => { // Define the route for the homepage
    res.render("home.ejs"); // No need to add ".ejs" as Express will automatically look for files with the .ejs extension in the "views" folder
});


app.get("/ig/:username", (req, res) => {
    let { username } = req.params; 
    const instaData = require("./data.json");
    const data = instaData[username]; 
    if(data){
        res.render("instagram.ejs", { data });  
    }else{
        res.render("./error.ejs");
    }
});
 
app.get("/hello", (req, res) => {
    res.send("hello"); // No need to add ".ejs" as Express will automatically look for files with the .ejs extension in the "views" folder
});


app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1; 
    res.render("rolldice.ejs", { num : diceVal }); 
});

app.listen(port, () => { // Start the server. 
    console.log(`Server is listening on port ${port}`);
}); 




*/ 

const express = require("express"); 
const app = express(); 
const path = require("path"); 

const port = 8080; 

app.use(express.static(path.join(__dirname, "public/js"))); 
app.use(express.static(path.join(__dirname, "public/css"))); 
app.set("view engine", "ejs") // Set the view engine to EJS
app.set("views", path.join(__dirname, "/views")); 

app.get("/", (req, res) => { // Define the route for the homepage
    res.render("home.ejs"); // No need to add ".ejs" as Express will automatically look for files with the .ejs extension in the "views" folder
});


app.get("/ig/:username", (req, res) => {
    let { username } = req.params; 
    const instaData = require("./data.json");
    const data = instaData[username]; 
    if(data){
        res.render("instagram.ejs", { data });  
    }else{
        res.render("./error.ejs");
    }
});
 
app.get("/hello", (req, res) => {
    res.send("hello"); // No need to add ".ejs" as Express will automatically look for files with the .ejs extension in the "views" folder
});


app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1; 
    res.render("rolldice.ejs", { num : diceVal }); 
});

app.listen(port, () => { // Start the server. 
    console.log(`Server is listening on port ${port}`);
}); 



