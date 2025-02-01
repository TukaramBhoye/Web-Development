/*
*Chapter 10 : DOM Events ---------------
*1:  To track events :  in this" onclick" or "onmouseenter" such values one time we can just set one value. 
    i: onclick(When an Element is clicked)
    ii: on mouseenter(when mouse enters an element)

*2: Event Listener : 
    *1: addEventListener : for a single event we can make multiple event listener. 
    element.addEventListener("event", callback)
    Example : 
    btn.addEventListener("click", function() {
        console.log("button clicked"); 
    });

----------------------------------------------------------------------------------------------
|------onclick--------------------------|------addEventListener----------------
|- only one function can be assigned    |- multiple functions can be attached
|- requires overwriting the property    |- Easy using removeEventListener
|- element.onclick = function() { ... };|- element.addEventListener("event", function() { ... }, [options]);
|- Flexibility	Less                    |- More flexible
|- can become messy in complex code     |- better for complex applications
|- Avoid for complex scenarios	        |- Preferred and recommended
-------------------------------------------------------------------------------------------

*3 : Generate a Random color 
       Assignment Generate Color 

        let btn = document.querySelector("button"); 

        btn.addEventListener("click", function(){
            let h3 = document.querySelector("h3"); 
            let randomColor = getRandomColor(); 
            h3.innerText = randomColor;  

            let div = document.querySelector("div"); 
            div.style.backgroundColor = randomColor; 
            console.log("color updated"); 
        });

        function getRandomColor(){
            let red  = Math.floor(Math.random() * 255); 
            let green = Math.floor(Math.random() * 255); 
            let blue = Math.floor(Math.random() * 255); 

            let color = `rgb(${red}, ${green}, ${blue})`; 
            return color;
        }

*4:  Event Listener for multiple elements 
 
     let p = document.querySelector("p"); 
        p.addEventListener("click", function(){
            console.log("parah was clicked"); 
        });

        let box = document.querySelector(".box"); 
        box.addEventListener("mouseenter", function(){
            console.log("mouse inside box"); 
        });

*5 : "This" in Event Listener : 
     - when '"This" is used in a callback of event handler of something, it refers to that something. 
       obj --> event Listener/handler--> there is two var 1. event, 2. callback(also use here "this") 

       let btn = document.querySelector("button"); 
       let p = document.querySelector("p"); 
       let h1 = document.querySelector("h1"); 
    
        btn.addEventListener("click", function(){ // here this means object-->btn
            console.log(this); 
            console.log(this.innerText); 
            console.dir(this); 

            this.style.backgroundColor = "blue"; 
        });

        //* use this way for Avoid Redundancy --------
        function changeColor(){
            console.log(this.innerText); 
            this.style.backgroundColor = "blue"; 
        }
        btn.addEventListener("click", changeColor); 
        p.addEventListener("click", changeColor); 
        h1.addEventListener("click", changeColor); 

*6. Keyboard Events : use in the game where each key track left right like position. 

        event 
          /\
         /  \
      code  key

      let inp = document.querySelector("input"); 
        //* ------- keyboard key press count 
        inp.addEventListener("keydown", function(event){
            // console.log(event); 
            console.log("key = ", event.key);
            console.log("code = ", event.code); 
            console.log("key was pressed"); 
        });

*7: Form Events : 
        let form = documentquerySelector("form"); 
        //*form submit but redirect to another page

        form.addEventListener("submit", function(){
            console.log("form submitted"); 
        })  

        //*instead of redirect submit form next page and stay at the current page; 
        form.addEventListener("submit", function(event){
            event.preventDefault(); //
            console.log("form submitted"); 
       })
-Imp part -------------------------------------------------
*8 : Extracting form Data : 
        let form = document.querySelector("form");
        form.addEventListener("submit", function(event){
            event.preventDefault(); //

            let inp = document.querySelector("input"); 
            console.log(inp);  
            console.log(inp.value); 
        });

    *- To Stop Redirecting Page Use "preventDefault()"
        form.addEventListener("submit", function(event){
            event.preventDefault(); //

            let user = document.querySelector("#user");
            let user1 = this.elements[0]; // form.elements[0] <-- this also we access like this
            let pass = document.querySelector("#pass");  

        *- To access Internal elements value such as pass, user 
            console.log(user.value); 
            console.log(pass.value); 

            alert(`Hi ${user.value}, your password is set to ${pass.value}`); 
        }); 

*9: More Events : 

        let form = document.querySelector("form"); 
            form.addEventListener("submit", function(event){
                event.preventDefault(); 
            })
    let user = document.querySelector("#user");

    i: change event : 
        The change event occurs when the value of an element has been changed(only works on<input>, <textarea> & <select Element). 
       
        user.addEventListener("change", function(){
            console.log("change event"); 
            console.log("final value", this.value); 
        })

    ii: input event : just character key trigger input Event.
        The input event fires when the value of an <input> or <textarea> element has been changed. 
        
        user.addEventListener("input", function(){
            console.log("input change"); 
            console.log("final value", this.value); 
        })

       
    *iii: Using this type of events we can make our simple Text Editor : 
            let inp = document.querySelector("#text"); 
            let p = document.querySelector("p"); 

            inp.addEventListener("input", function(){
                console.log(inp.value); 
                p.innerText = inp.value; 
            });

      
        
*/
// ---------------------------------------------------
/*
let btn = document.querySelector("button");
console.dir(btn); 

btn.onclick = function() {
    console.log("button was clicked"); 
    // alert("buttion was clicked"); 
}

function sayHello() {
    // alert ("Hello"); 
    console.log("hello"); 
}
btn.onclick = sayHello;

let btns = document.querySelectorAll("button"); 
for(btn of btns){
    btn.onclick = sayHello; // sayHello()<-- means we execute directly
    btn.onmouseenter = function(){
        console.log("You enetered a button");
    };
    console.dir(btn); 

    
}


// Add event Listener 
for(btn of btns)  {
    //  btn.onclick = sayHello; 
    //  btn.onclick = sayName; 

    btn.addEventListener("click", sayHello);// "click" is a event where we have to define eventListener
    btn.addEventListener("click", sayName);
    btn.addEventListener("dblclick", function(){
        console.log("you double clicked me");
    });
}

function sayHello() {
    alert("Hello"); 
}

function sayName() {
    alert("Apna Collage"); 
}
 


// AssignMent : 
let btn = document.querySelector("button"); 

btn.addEventListener("click", function(){
    let h3 = document.querySelector("h3"); 
    let randomColor = getRandomColor(); 
    h3.innerText = randomColor;  

    let div = document.querySelector("div"); 
    div.style.backgroundColor = randomColor; 

    console.log("color updated"); 
});

function getRandomColor(){
    let red  = Math.floor(Math.random() * 255); 
    let green = Math.floor(Math.random() * 255); 
    let blue = Math.floor(Math.random() * 255); 

    let color = `rgb(${red}, ${green}, ${blue})`; 
    return color;
}
*/ 
/*
//* for multiple element selection
let p = document.querySelector("p"); 
p.addEventListener("click", function(){
    console.log("parah was clicked"); 
});

let box = document.querySelector(".box"); 
box.addEventListener("mouseenter", function(){
    console.log("mouse inside box"); 
});
*/ 
/*
//* This keyword us
let btn = document.querySelector("button"); 
let p = document.querySelector("p"); 
let h1 = document.querySelector("h1"); 
let h3 = document.querySelector("h3"); 

btn.addEventListener("click", function(){ // here this means object-->btn
    console.dir(this.innerText); 
    this.style.backgroundColor = "blue"; 
});


//* Avoid This Redundancy ---means multiple functions for same effect--------
btn.addEventListener("click", function(){ // here this means object-->btn
    console.log(this.innerText); 
    this.style.backgroundColor = "blue"; 
});

p.addEventListener("click", function(){ // here this means object-->btn
    console.log(this.innerText); 
    this.style.backgroundColor = "blue"; 
});

h1.addEventListener("click", function(){ // here this means object-->btn
    console.log(this.innerText); 
    this.style.backgroundColor = "blue"; 
});

h3.addEventListener("click", function(){ // here this means object-->btn
    console.log(this.innerText); 
    this.style.backgroundColor = "blue"; 
});

// use this way for Avoid Redundancy --------
function changeColor(){
    console.log(this.innerText); 
    this.style.backgroundColor = "blue"; 
}
btn.addEventListener("click", changeColor); 
p.addEventListener("click", changeColor); 
h1.addEventListener("click", changeColor); 
h3.addEventListener("click", changeColor); 

*/ 

////*5. Keyboard Events -----------------------
/*1: Mouse events : 
let btn = document.querySelector("button");

btn.addEventListener("click", function(event){
    console.log(event); 
    console.log("botton clicked"); 
});

btn.addEventListener("dblclick", function(event){
    console.log(event); 
    console.log("botton clicked"); 
});
*/ 

//2: keyboard Events : 
/*
let inp = document.querySelector("input"); 
// ------- keyboard key press count 
inp.addEventListener("keydown", function(event){
    // console.log(event); 
    console.log("key = ", event.key);
    console.log("code = ", event.code); 
    console.log("kew was pressed"); 
});

    //*---- when keyb key press or release count
    inp.addEventListener("keyup", function(){
        console.log("kew was released"); 
    });

*/

/*
let inp = document.querySelector("input"); 

inp.addEventListener("keydown", function(event){
    console.log("code = ", event.code); // ArrowUp, arrowDown, ArrowLeft, Arrowright
    
    if(event.code == "keyU"){
        console.log("character moves Up"); 
    }else if(event.code == "KeyD"){
        console.log("character moves down"); 
    }else if(event.code == "KeyL"){
        console.log("Character moves left"); 
    }else if(event.code == "KeyR"){
        console.log("character moves Right"); 
    }
});

*/ 

//* Form Events : 
/*
let form = document.querySelector("form"); 
// form submit but redirect to another page

form.addEventListener("submit", function(){
    console.log("form submitted"); 
})  

//instead of redirect submit form next page and stay at the current page; 
form.addEventListener("submit", function(event){
    event.preventDefault(); //
    console.log("form submitted"); 
})

*/ 
// -Extract form Data -------------
/*
let form = document.querySelector("form"); 

form.addEventListener("submit", function(event){
    event.preventDefault(); //

    let inp = document.querySelector("input"); 
    console.log(inp);  
    console.log(inp.value); 
}); 

// To Prevent Redirect Page -----
form.addEventListener("submit", function(event){
    event.preventDefault(); //

    let user = document.querySelector("#user");
    let user1 = this.elements[0]; // form.elements[0] <-- this also we access like this
    let pass = document.querySelector("#pass");  

    console.log(user.value); 
    console.log(pass.value); 

    alert(`Hi ${user.value}, your password is set to ${pass.value}`); 
}); 

*/ 
// to access all elements of form

/*
// MORE EVENTS : 

let form = document.querySelector("form"); 
form.addEventListener("submit", function(event){
    event.preventDefault(); 
})

let user = document.querySelector("#user");

// i: change event final value 
user.addEventListener("change", function(){
    console.log("change event"); 
    console.log("final value", this.value); 
})
// ii: input Event final value (just character key trigger input Event) 
user.addEventListener("input", function(){
    console.log("input change"); 
    console.log("final value", this.value); 
});

*/ 
//*To make editor : 
/*
let inp = document.querySelector("#text"); 
let p = document.querySelector("p"); 

inp.addEventListener("input", function(){
    console.log(inp.value); 
    p.innerText = inp.value; 
});
*/ 
// Assingment 

// QS 1. Try out the following events in Event Listener on your own: 
// - mouseout - keypress - Scroll - load 
/*
let p = document.querySelector("p"); 
p.addEventListener("mouseout", function(){
    console.log(p); 
}); 

let ipt = document.querySelector("#text"); 

ipt.addEventListener("keypress", function(){
    console.log(ipt.value)
});

const scrollable = document.querySelector("#scrollable"); 

scrollable.addEventListener("scroll", function() {
    console.log("Scroll position before timeout: ", scrollable.scrollTop);

    // Set a timeout to scroll programmatically
    setTimeout(() => {
        scrollable.scrollTo({
            top: 100, // Vertical scroll to 100px
            left: 0,  // No horizontal scrolling
            behavior: "smooth" // Smooth scrolling behavior
        });
    }, 5000); // Wait 5 seconds before executing the scroll
});


load: 
const mediaElem = document.querySelector("#mediaElem")
const reloadBtn = document.querySelector("#reloadBtn");
reloadBtn.addEventListener("click", function(){
    mediaElem.load(); 
    mediaElem.load(); 
})

*/ 
/*Qs2 : create a button on the page using JavaScript. Add an event listener to the button 
    that changes the button's color to green when it is clicked.
*/ 

let btn = document.createElement("button"); 
btn.innerText = "Click me"; 
document.body.appendChild(btn); 

btn.addEventListener("click", function(){
    this.style.backgroundColor = "green"; 
    console.log("btn color", btn); 
}); 


/* Qs3 : create an input element on page with a placeholder "enter your name" and an 
H2 heading on the page inside HTML. The purpose of this input element is to enter a user's name so it should only input letterns from a - z, A - Z ans spce (all other characters shoud not be detected). Whenever the user inputs their name, their input should be dynamically visible inside heading. [Please note that no other character apart from the allowd characters should be visible in the heading]
 */ 

let ipt = document.createElement("input"); 
ipt.placeholder =  "enter your name"; 
ipt.style.display = "block"; 
ipt.style.marginBotton = "10px"; 
document.body.appendChild(ipt); 

let heading = document.createElement("h2");  
document.body.appendChild(heading); 

// remove any character that is not a-z, A-Z, or space
ipt.addEventListener("input", function(){
    let sanitizedInput = this.value.replace(/^a-zA-Z ]/g, ""); 
    this.value = sanitizedInput; 
    heading.innerText = sanitizedInput || "Your name will appear here...."; 
});