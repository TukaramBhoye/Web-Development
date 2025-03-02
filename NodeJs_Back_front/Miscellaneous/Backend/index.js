/*
*ch:35: FrontEnd & Backend : 

        GET                | POST
Used to GET some response  | Used to POST something(for Create/Write/Update)
Data sent in query strings | Data sent via request body (any type of data)
(limited, string data & visible in URL)

*1: GET : 
    <form method="get" action="/register">
        <input placeholder="enter username" name = "user" type="text" />
        <input placeholder="enter password" name="password" type="password" />
        <button>Submit</button>
    </form>

  - Submit form -> /register(redirect page)
    Output In URL Bar : file:///C:/register?user=tukaram&password=34897
                          *  seen input data ----tukaram-↲----34897-↲ 
    - We Seen here sensitive data in URL Bar. 
---------------------
*Note :             let  {    user,     password} = req.query;
                                    ↑______________↑____________|
req: http://localhost:8080/register?user=tukaram+&password=94043
----------------
*2: POST: 
        - Used to POST something(for Create/Write/Update)
        - Data sent via request body (any type of data).
    
        - currently our server exist in local system so, but we want work our server on "http" server.  
    ex : action="http://localhost:8080/register">
    
    *i: GET request: 
    - index.html -----
        <form method="get" action="http://localhost:8080/register">
            <input placeholder="enter username" name = "user" type="text" />
            <input placeholder="enter password" name="password" type="password" />
            <button>Submit</button>
        </form>
    - index.js------
        app.get("/register", (req, res) => {
            let {user, password} = req.query; 
            res.send(`standard GET response. Welcome ${user}!`); 
        }); 

    output: standard GET response. Welcome tukaram! 

    *ii: Post Request: 
    - index.html
        <form method="POST" action="http://localhost:8080/register">
            <input placeholder="enter username" name = "user" type="text" />
            <input placeholder="enter password" name="password" type="password" />
            <button>Submit</button>
        </form>

    - index.js:
        app.post("/register", (req, res) => {
            console.log(req.body)
            res.send("standard POST response"); 
        }); 

    *output: Undefine 

*3: Handling Post Requests : 
    - Set up Post Request route to get some response 
    - Parse Post request data: 
    - using this express will automatically parse and understand the data. 
        use(express.urlencoded({ extended: true})); 
    
    *i: to reade/parse json data.  
     - app.use(express.json()); 
     - hoppscotch: 
        {
        "user" : "tukaram",
        "password": "1123"
        }
    output: standard POST response. Welcome tukaram!
    - req.body :  here nothing anything default return so req.body return undefine. 
      req.body has nown which type data currently present in request body. 
   - Example: 
        const express = require("express");
        const app = express(); 
        const port = 8080; 

        app.use(express.urlencoded({extended: true}));
        app.use(express.json());

        app.post("/register", (req, res) => {
            let { user, password} = req.body; 
            res.send(`standard POST response. Welcome ${user}!`); 
        }); 

        app.listen(port, () => {
            console.log(`listening to port ${port}`); 
        });    

*/ 

const express = require("express");
const app = express(); 
const port = 8080; 

app.use(express.urlencoded({extended: true}));
app.use(express.json()); 

app.get("/register", (req, res) => {
    let {user, password} = req.query; 
    res.send(`standard GET response. Welcome ${user}!`); 
}); 

app.post("/register", (req, res) => {
    let { user, password} = req.body; 
    res.send(`standard POST response. Welcome ${user}!`); 
}); 

app.listen(port, () => {
    console.log(`listening to port ${port}`); 
});

