/*
*CH:36: REST (Representational State Transfer): 
    - REST is an architectural style that defines a set of constraints to be used for creating web services. 
    
    Example : Twitter api's that are write with best practices. 
    - REST api uses : https://stackoverflow.blog/2020/03/02/best-practice-for-rest-api-design


    - req(request) : client sents request. ex. html forms
    - res(response) : server sends response.

*1: CRUD Operations :
 
  - HTTP Verbs : 
    - GET Retrives resources(read). 
    - POST submits new data to the server(create).
    - PUT updates existing data(put).
    - PATCH update existing data partially(update)
    - DELETE removes data(delete). 


*2: Quora Posts create: 
    Post : 
    i) View 
    ii: individual para/msg
    iii: edit
    iv: Delete

*3: Creating RESTful API's 

GET /post       to get data for all posts --(index file(main))
POST /posts     to add a new post -- (create)
GET  /posts/:id  to get one post(using id)--
Patch /post/:id  to update specific post UPDATE 
DELETE /POSTS/:id to delete specificc post.  --- in rest langauge --> destroy. 

        //*step 1: 
        const express = require("express");
        const app = express(); 
        const port = 8080;
        const path = require("path"); 

        //*step 4: 
        app.use(express.urlencoded({extended: true})); 

        app.set("view engine", "ejs"); 
        app.set("views", path.join(__dirname, "public")); 

        app.set(express.static(path.join(__dirname, "public"))); 


        app.get("/", (req, res) => {
            res.send("serving working well ");
        });
        //*step 2 : step 3: create folder public & views
        app.listen(port, () => {
            console.log("listening to port: 8080");
        });


*4: Implement : GET/posts 
   - Index Route 
   *i:  GET--- /posts--- to get data for all posts 
  *in get method request ke parameter ke andar info ati hai. 
  *in post method request ke body ke andar info ati hai.
    //* step 1: 
        const express = require("express");
        const app = express();
        const port = 8080;
        const path = require("path");

    //* step 4: 
        app.use(express.urlencoded({ extended: true }));

        app.set("view engine", "ejs"); 
        app.set("views", path.join(__dirname, "views")); 

        app.use(express.static(path.join(__dirname, "public"))); 

        let posts = [
            {
                username : "tukaram2019", 
                content : "I love coding!"
            },
            {
                username : "tukaram", 
                content : "hardwork is important for achieve success!"
            },
            {
                username : "Akshay", 
                content : "he is not selected for any internship. !"
            },
        ];

        app.get("/posts", (req, res) => {
            res.render("index.ejs", {posts});
        });

    //*step 2 : step 3: create folder public & views
        app.listen(port, () => {
            console.log("listening to port: 8080");
        });

  *II: Implement/posts 
    - Create Route : 
    - POST   /post   to add a new post 

    - 2 routes : 
        a) serve the form   GET /posts/new
        b) Add the new Post POST /posts 

        //* to add new post add new route
        app.get("/posts/new", (req, res) => {
            res.render("form.ejs" )
        })

        //* path to send form at posts. when use post request info comes through request body. 
        app.post("/posts", (req, res) => {
        let {username, content} = req.body; 
        posts.push({username, content});
            res.send("post request working");
        });
        

   *III: Redirect : use to connect different pages.means redirect at dif paths 
    - res.redirect(URL)

    app.post("/posts", (req, res) => {
        const { username, content } = req.body;
        posts.push({ username, content });
        res.redirect("/posts");
    });

    *iv: Implement : GET/posts/:id
    show Route : 
    GET --- /post/:id ------ to get one post using id.

        app.get("/posts/:id", (req, res) => {
            let { id } = req.params; 
            console.log(id); 
            let post =  posts.find((p) => id === p.id) ;
            res.render("show.ejs", { post });
        });
    
    *Here we face a problem when we try to create new pages that doesn't redirect
    at "view in detail page".
    the solution is at the further---.

    *v: Create id for Posts: 
        - UUID Package : v4(version4)
        - Universally unique identifier
        - npm install uuid
        - automatically create string type unique ID  
    
        - https://npmjs.com/package/uuid   
          const { v4: uuidv4 } = require('uuid'); 

        //* Route to handle form submission and add a new post
        app.post("/posts", (req, res) => {
            let { username, content } = req.body;
            let id = uuidv4(); 
            posts.push({ id, username, content });
            res.redirect("/posts");
        });

    *vi: Implement : Patch/posts/:id 
        - Update Route 
        - Patch----/posts/:id ---- to update specific post    

        app.patch("/posts/:id", (req, res) => {
            let { id } = req.params;
            let newContent = req.body.content;  
            let post =  posts.find((p) => id === p.id) ;
            post.content = newContent;
            console.log(newContent); 
            res.send("patch request working"); 
        });


    *vii: Create Form for Update : 
        Edit Route : 
        Serve the edit form--- GET --- /posts/:id/edit
    *we have to create flow like : 
     all posts-->edit-->forms/edit/newContent/submit-->Redirect-all Posts.

    *- with the the HTML doc we can send just GET, OR Post requests
      so we use 


    *viii: Method Override package : override req method 
        *- with the the HTML doc we can send just GET, OR Post requests
          so we use Override package 
        - npm install overrideMethod
        - https://npmjs.com/package/method-override?activeTab=readme
        - use : Override using a query value. 
          - use to convert --> delete, patch, Put methods. 

        const methodOverride = require("method-override");
        app.use(methodOverride("_method"));

        app.patch("/posts/:id", (req, res) => {
            let { id } = req.params;
            let newContent = req.body.content;  
            let post =  posts.find((p) => id === p.id) ;
            post.content = newContent;
            console.log(post); 
            res.redirect("/posts"); 
        });

    *ix: Ipmplement : /posts/:id
         - Destroy Route : 
         - Delete---> /posts/:id-->-------to delete specific post.

        - working flow : delete ---> delete /posts/id ---/posts
                                              ━┳━　        ━┳━　
                            ele filter&cre New arr------->New Posts
*/
// step 1: 

//------------quora code----------------------
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid'); 
const methodOverride = require("method-override");
// step 4: 
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); 

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, "public"))); 
let posts = [
    {
        id: uuidv4(),// create randomly unique id.  
        username: "tukaram2019",
        content: "I love coding!"
    },
    {
        id: uuidv4(),
        username: "tukaram",
        content: "Hard work is important to achieve success!"
    },
    {
        id: uuidv4(),
        username: "Akshay",
        content: "He is not selected for any internship!"
    },
];

// Route to display all posts
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

// Route to display the form to create a new post
app.get("/posts/new", (req, res) => {
    res.render("form.ejs");
});

// Route to handle form submission and add a new post
app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4(); 
    posts.push({ id, username, content });
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params; 
    console.log(id); 
    let post =  posts.find((p) => id === p.id) ;
    res.render("show.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;  
    let post =  posts.find((p) => id === p.id) ;
    post.content = newContent;
    console.log(post); 
    res.redirect("/posts"); 
});

app.get("/posts/:id/edit", (req, res)=> {
    let { id } = req.params; 
    let post = posts.find((p) => id === p.id); 
    res.render("edit.ejs", {post}); 
});

app.delete("/posts/:id", (req, res) => {
    let { id } =req.params;
    posts = posts.filter((p) => id !== p.id); 
    res.redirect("/posts"); 
})

// step2 :start the server. step 3: create folder public & views
app.listen(port, () => {
    console.log("listening to port: 8080");
});

// we learn a single way. this is conventional way to learn
//------------complete quora code----------------------
// Assignment :-----------
/*  
instagram basis on page : photo option, caption , and individual id..
*/
/*
file which we use.
 files Path : C:\Users\tcbho\OneDrive\Desktop\Apna College\Development\NodeJs_Back_front\REST_class
*1:/public/style.css
        h1{
            color: maroon;
        }
        .post{
            background-color: blanchedalmond;
        }
        .user{
            font-style: italic;
        } 

*2:/views/edit.ejs:
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Edit Post</title>
        </head>
        <body>
            <h2>Edit your post</h2>
            <p>Post id :<%= post.id %></p>
            <p>Post username :@<%= post.username %></p>
            <form method="post" action="/posts/<%=post.id%>?_method=PATCH">
                <textarea rows="10" cols="35" name="content"><%= post.content %></textarea>
                <button>Submit</button>
            </form>
        </body>
        </html>

*3:/views/form.ejs: 
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Create New Post</title>
        </head>
        <body>
            <form method="post" action="/posts">
                <input placeholder="Enter username" name="username" /> <br /><br />
                <textarea placeholder="Write your post" name="content"></textarea> <br /><br />
                <button type="submit">Submit Post</button>
            </form>
        </body>
        </html>

*4:/views/index.ejs: 
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>All Posts</title>
            <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
            <h1>Quora posts</h1>
            <% for (let post of posts) { %>
                <div class="post">
                    <h3 class="user">@<%= post.username %></h3>
                    <h4 class="content"><%= post.content %></h4>
            <br />
                <a href="http://localhost:8080/posts/<%=post.id%>">See in Detail</a>
                <a href="http://localhost:8080/posts/<%=post.id%>/edit">Edit</a>
                <form method="post" action="/posts/<%=post.id%>?_method=DELETE%>">
                    <button>Delete Post</button>
                </form>
            </div>
            <% } %>

        <br />
        <br />
        <a href="http://localhost:8080/posts/new">Create New Post</a>
        </body>
        </html>

*5:/views/show.ejs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Post in Detail</title>
    <link rel="stylesheet" href="/style.css">
</head>
<body>
    <h1>Here is your post in detail </h1>
    <p>Post id: <%= post.id %></p>
    <div class="post">
        <h3 class="user">@<%= post.username %></h3>
        <h4><%= post.content %></h4>
    </div>
</body>
</html>
*/ 
