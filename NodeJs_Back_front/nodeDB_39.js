/* 
*Ch: 39: Backend NodeJs With my SQL 
*purpose : how to add new data, delete, Update (CRUD)


*1: package -->Faker(to generate fake data)
    - download:  https://npmjs.com/package/@faker-js/faker


const { faker } = require('@faker-js/faker');
let createRandomUser = () => {
    return {
      userId: faker.string.uuid(),
      username: faker.internet.username(), // before version 9.1.0, use userName()
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    };
  }

  console.log(createRandomUser());


*2: MYSQL2 Package (To connect Node with MYSQL)
    Client Request --> Server(Back(api like something)) --> SQL_DB
    - To Form connection between Node & SQL_DB We use "MYSQL2". instead of "MYSQL" to prevent authentication errors.
    - MYSQL2 Is a => Package 
    - to close connection : Connection.end();
    *i: Create connection to database 

    - DAtabase accessing Ways:
       *i: using sql file  *ii: Workbench *iii: CLI  *IV: using sql files. 
       
       - what we done? 
       *i: connection form *ii: connection.query run on databse *iii: Use cli for command line(mysql -u root -p)
      

      - Build Connection : 
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'delta_app',
            password: 'Tbhoye@123'
        });

    *ii: how to use for databases connection, changes, or query place 
      
        - Use method : connection.query("SHOW TABLES");

        - Example : 
        try{
            connection.query("SHOW TABLEs", (err, result) => {
                if(err) throw err; 
                console.log(result);
                console.log(result.length); // to see array length
                console.log(result(0)); // to see result 
                console.log(result(1)); 
            });
        }catch(err){
            console.log(err); 
        }

*3: MYSQL Using From CLI : 
         - mysql -u root -p

        - We use SQL with --> workbench, MySQL2 Package, CLI 

     *i: Create SQL File to run sql: schema.sql 
      - to run on VS CLI : source file_name.sql

        CREATE TABLE user(
            id varchar(50) PRIMARY KEY, 
            username VARCHAR(50) UNIQUE, 
            email VARCHAR(50) UNIQUE NOT NULL, 
            password VARCHAR(50) NOT NULL
        );

    - to verify table go--> workbench->database->table

    *ii:to insert data in table : 

    *a: single data
        let q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";
        let user = ["123b", "123_newuserb", "abc@gmail.comb", "abcb"];
       
        try{
            connection.query(q, user, (err, result) => {
                if(err) throw err; 
                console.log(result);
            });
        }catch(err){
            console.log(err); 
        }

        connection.end(); 
    
    *b: multiple data :
        let q = "INSERT INTO user (id, username, email, password) VALUES (?)";
 
        let users =[ 
            ["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
            ["123c", "123_newuserc", "abc@gmail.comc", "abcc"]
        ];
        try{
            //*bcz of arr use --> "[users]" 
            connection.query(q, [users], (err, result) => {
                if(err) throw err; 
                console.log(result);
            });
        }catch(err){
            console.log(err); 
        }

        connection.end(); 

*4: INSERT in BULK:  Using Faker pkg

        let q = "INSERT INTO user (id, username, email, password) VALUES ?";
        let data = []; 
        for (let i=1; i<=100; i++){
            data.push(getRandomUser()); // 100 fake user generate using faker.
        }


*5: Routing : REST 
     - GET - POST - PATCH(edit just some part of user(use for editing also use put(edit all user))) mETHODS 

    *I: setting Up Express App 
     GET: Fetch & show total numer of users on our app 

    *I: Example : 
        app.get("/user", (req, res) => {
        let q = `SELECT  * FROM user`; 

            try {
                connection.query(q, (err, result)=> {
                    if(err) throw err; 
                    console.log(result); 
                    res.send(result); 
                }); 
            }catch (err){
                console.log(err); 
                res.send("some error in DB"); 
            } 
        });

    OP: 103 users fake data with -> id, username, email, password

    *ii: print data in table :
    *file : index.js
        app.get("/user", (req, res) => {
        let q = `SELECT  * FROM user`; 

            try {
                connection.query(q, (err, users)=> {
                    if(err) throw err; 
                    res.render("showUsers.ejs", { users });
                }); 
            }catch (err){
                console.log(err); 
                res.send("some error in DB"); 
            } 
        }); 

    *file : showUsers.ejs 
        <style>
                table, th, td {
                    border: 1px solid black;
                }
            </style>
        </head>
        <body>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Email</th>
                    <th>Username</th>
                </tr>
                <tr>
                    <!-- <td>123</td>
                    <td>tukaram@gmail.com</td>
                    <td>tukaram</td> -->
                    <% for(user of users) { %> 
                        <tr> 
                            <td><%= user.id %></td>
                            <td><%= user.email %></td>
                            <td><%= user.username %></td>
                        </tr>
                    <% } %> 
                </tr>
            </table>
        </body>

*6: Creating Our Routes : 
    - GEt/user/:id/edit : To get form to edit the username, based on id this form will require a password 

    - PATCH/user/:id : To edit username, if correct password was entered in form

    *i: method override package : npm i method-override

*Complete insert, Update Code : 

const { faker } = require('@faker-js/faker');
const mysql = require("mysql2"); 
const express = require("express"); 
const app = express(); 
const path = require("path");
const methodOverride = require("method-override"); 

app.use(methodOverride("_method"));
app.use(express.urlencoded ({ extended: true}));
app.set("view engine", "ejs"); 
app.set("views", path.join(__dirname, "/views")); 

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Tbhoye@123'
});

// --fAKER-----------------------------------------------
let getRandomUser = () => {
    return [
      faker.string.uuid(),
      faker.internet.username(), // before version 9.1.0, use userName()
      faker.internet.email(),
      faker.internet.password(),
    ];
  };
  
// Home Route
app.get ("/", (req, res) => {
    let q = `SELECT count(*) FROM user`;
    try {
        connection.query(q, (err, result)=> {
            if(err) throw err; 
            let count = result[0]["count(*)"]; 
            res.render("home.ejs", { count }); 
        }); 
    }catch (err){
        console.log(err); 
        res.send("some error in DB"); 
    } 
});

// Show Route 
app.get("/user", (req, res) => {
   let q = `SELECT  * FROM user`; 

    try {
        connection.query(q, (err, users)=> {
            if(err) throw err; 
            res.render("showUsers.ejs", { users });
        }); 
    }catch (err){
        console.log(err); 
        res.send("some error in DB"); 
    } 
});

// Edit Route 
app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`; // we added here single quotes for string type data. either it sends just values. 
    
    try {
        connection.query(q, (err, result) => {
            if(err) throw err; 
           let user = result[0]; 
            res.render("edit.ejs", { user });
        }); 
    }catch (err){
        console.log(err); 
        res.send("some error in DB"); 
    } 
});

// UPDATE (DB) Route 
app.patch("/user/:id", (req, res) => {
    let { id } = req.params;
    let { password: formPass, username: newUsername} = req.body;
    let q = `SELECT * FROM user WHERE id = '${id}'`; // we added here single quotes for string type data. either it sends just values. 
    
    try {
        connection.query(q, (err, result) => {
            if(err) throw err; 
            let user = result[0]; 

            if(formPass != user.password){
                res.send("Wrong Password!"); 
            }else{
                let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
                connection.query(q2, (err, result) => {
                    if(err) throw err;
                    res.redirect("/user"); 
                });
            }
        }); 
    }catch (err){
        console.log(err); 
        res.send("some error in DB"); 
    } 
});

app.listen("8080", () => { //Server start 
    console.log("server is listening to port 8080 "); 
}); 

*Home.ejs file: path: C:\Users\tcbho\OneDrive\Desktop\Apna College\Development\NodeJs_Back_front\mySql_Class\views\home.ejs
<head>
    <title>Home Page</title>
</head>
<body>
    <h2>The total number of users are : <%= count %>  </h2>
    <button> Join us today ! </button>
</body>


*edit.ejs file path: C:\Users\tcbho\OneDrive\Desktop\Apna College\Development\NodeJs_Back_front\mySql_Class\views\edit.ejs
<title>Edit Username </title>
</head>
<body>
    <h2>Your about to edit this User: <%= user.email %> </h2>
    <form method="post" action="/user/<%=user.id%>?_method=PATCH">
        <textarea name="username"> <%= user.username %> </textarea>
        <input type="password" name = "password" placeholder="enter password">
        <button> Edit </button>
    </form>
</body>

*showUser.ejs : -----------------
<title>All Users</title>
    <style>
        table, th, td {
            border: 1px solid black;
        }
    </style>
</head>
<body>
    <table>
        <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Username</th>
        </tr>
        <tr>
            <!-- <td>123</td>
            <td>tukaram@gmail.com</td>
            <td>tukaram</td> -->
            <% for(user of users) { %> 
                <tr> 
                    <td><%= user.id %></td>
                    <td><%= user.email %></td>
                    <td><%= user.username %></td>
                    <td>
                    <form method="GET" action="/user/<%=user.id%>/edit">
                        <button>Edit username</button>
                    </form>
                    </td>
                </tr>
            <% } %> 
        </tr>
    </table>
</body>
//////////////////////////////////
-------------
*Homework : 
1: Create Form to Add a new user to the Database 
2: Create Form to Delete a user Database if they enter correct email id & password. 
-------------------------------------
-----------------------------------------------
*A: Data insert into sql db
        const { faker } = require('@faker-js/faker');
        const mysql = require("mysql2"); 

        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'delta_app',
            password: 'Tbhoye@123'
        });

        // Inserting New Data
        // let q = "INSERT INTO user (id, username, email, password) VALUES(?, ?, ?, ?)";
        // for single data single(?)
        let q = "INSERT INTO user (id, username, email, password) VALUES ?";
        let users =[ 
            ["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
            ["123c", "123_newuserc", "abc@gmail.comc", "abcc"]
        ];
        try{
            // - bcz of arr "[users]" in arr unless it for single var-> "users"
            connection.query(q, [users], (err, result) => {
                if(err) throw err; 
                console.log(result);
            });
        }catch(err){
            console.log(err); 
        }

        connection.end(); 

    
-----------------------

*/ 
// ---------------------------------------
//in this create fake data just -> id, username, email, password.
/* 
const { faker } = require('@faker-js/faker');
const mysql = require("mysql2"); 

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Tbhoye@123'
});

// --fAKER-----------------------------------------------
let getRandomUser = () => {
    return [
      faker.string.uuid(),
      faker.internet.username(), // before version 9.1.0, use userName()
      faker.internet.email(),
      faker.internet.password(),
    ];
  };
  

let q = "INSERT INTO user (id, username, email, password) VALUES ?";
let data = []; 
for (let i=1; i<=100; i++){
    data.push(getRandomUser()); // 100 fake user created
}

try{
    // - bcz of arr "[users]" in arr unless it for single var-> "users"
    connection.query(q, [data], (err, result) => {
        if(err) throw err; 
        console.log(result);
    });
}catch(err){
    console.log(err); 
}

connection.end(); 
*/

// -Routing----------------------------

const { faker } = require('@faker-js/faker');
const mysql = require("mysql2"); 
const express = require("express"); 
const app = express(); 
const path = require("path");
const methodOverride = require("method-override"); 

app.use(methodOverride("_method"));
app.use(express.urlencoded ({ extended: true}));
app.set("view engine", "ejs"); 
app.set("views", path.join(__dirname, "/views")); 

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Tbhoye@123'
});

// --fAKER-----------------------------------------------
let getRandomUser = () => {
    return [
      faker.string.uuid(),
      faker.internet.username(), // before version 9.1.0, use userName()
      faker.internet.email(),
      faker.internet.password(),
    ];
  };
  
// Home Route
app.get ("/", (req, res) => {
    let q = `SELECT count(*) FROM user`;
    try {
        connection.query(q, (err, result)=> {
            if(err) throw err; 
            let count = result[0]["count(*)"]; 
            res.render("home.ejs", { count }); 
        }); 
    }catch (err){
        console.log(err); 
        res.send("some error in DB"); 
    } 
});

// Show Route 
app.get("/user", (req, res) => {
   let q = `SELECT  * FROM user`; 

    try {
        connection.query(q, (err, users)=> {
            if(err) throw err; 
            res.render("showUsers.ejs", { users });
        }); 
    }catch (err){
        console.log(err); 
        res.send("some error in DB"); 
    } 
});

// Edit Route 
app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`; // we added here single quotes for string type data. either it sends just values. 
    
    try {
        connection.query(q, (err, result) => {
            if(err) throw err; 
           let user = result[0]; 
            res.render("edit.ejs", { user });
        }); 
    }catch (err){
        console.log(err); 
        res.send("some error in DB"); 
    } 
});

// UPDATE (DB) Route 
app.patch("/user/:id", (req, res) => {
    let { id } = req.params;
    let { password: formPass, username: newUsername} = req.body;
    let q = `SELECT * FROM user WHERE id = '${id}'`; // we added here single quotes for string type data. either it sends just values. 
    
    try {
        connection.query(q, (err, result) => {
            if(err) throw err; 
            let user = result[0]; 

            if(formPass != user.password){
                res.send("Wrong Password!"); 
            }else{
                let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
                connection.query(q2, (err, result) => {
                    if(err) throw err;
                    res.redirect("/user"); 
                });
            }
        }); 
    }catch (err){
        console.log(err); 
        res.send("some error in DB"); 
    } 
});

app.listen("8080", () => { //Server start 
    console.log("server is listening to port 8080 "); 
}); 
