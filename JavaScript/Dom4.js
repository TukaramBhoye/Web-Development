/*<style> tag connects HTML WITH css 
<script> tag connects html with js 

1: Window Object : The window Object represents an open window in a browser. It is browser's object (not Javascript's) & is automatically created by browser. 
It is a global object with lots of properties & methods

2: What is DOM ? 
    when a web page is loaded, the browser creates a document a document Object Model(DOM) of the page

    - console.dir(document.body.childnodes)// we can access each node 

3:part1 :  DOM Manipulation : 
   - class : to access use (.)
   - id : to access use (#)
    - selecting with id : document.getelementById("myId"); 
    - selecting with class : document.getElementByClassName("myClass");
    - selecting with tag : document.getElementByTagName("p"); 

    i.: Query-Selector: better tarika to access dom elements
    - document.querySelector("myId/myClass/tag")  // matching first element return 
        // returns first element 
    - document.querySelectorAll(myId/myClass/tag)matching all element return 
        //returns a Nodelist 

    ii.: Properties : 
    - tagName : returns tag for element nodes
    - innerText : returns the text content of the element and all its   children 
    - innerHTML: returns the plain text or HTML contents in the elements
    - textContent : returns textual content even for hidden elements  
            let div = document.querySelector("div");
            console.dir(div);
    document.querySelector(firstChild)
        HOMEWORK: learn abput children 
        body -> firstChild
         |
        div - > body-children
         |
        img -- img -- h1 -- p ---> div-children 
4: PART 2:  DOM MANIPULATION : 
    i. Attributes : 
    - getAttributes(attr) // to get the attribute value 

    - setAttribute(attr, value) // tp set the attribute val th
    ii. style : node.style 

    iii. Insert Elemments : let el = document.createElement("div")
       - node.append (el) // adds at the end of node(inside)
       - node.prepend(el) // adds at the start of node (inside)
       - node.before(el) // adds at the before of node(outside)
       - node.after(el) // adds after the node (outside)

    iv. Delete Element : 
        noderemove() //remove the node 
5. Events: The change in the state of an object is known as an Event
    - Events are fired to modify code of "interesting changes" that affect code execution. 

    - mouse Events (click, dooble click etc.)
    - keyboard Events(KeyPress, keUp, keDown)
    - form Events (Submit etc.)
    - Print Events & Many More

    i. Event Object : 
    - It is a special object that has details about the event. 
    - All event handlers have access to the Event Object's properties   and methods. 

    node.event = (e) => {
        // handle here
    }
    e.target, e.type, e.clientX, e.clientY 

    ii. Event Listeners : 
        - node.addEventListener(event, callback)
        - node.removeeventListener(event, callback)
        *Note.the callback reference should be same to remove

class : to access use (.)
id : to access use (#)
*/ /*
document.body.style.background = "green"; 

let headings = document.getElementsByClassName("heading-class");
console.dir(headings);
console.log(headings);

let buttons = document.getElementById("#myId");
console.log(buttons);

let para = document.getElementsByTagName("p");
console.log(para);

let elements = document.querySelectorAll("p"); // matching all element return 
console.log(elements);

let firstEl = document.querySelector(".heading-class"); 
let alltEl = document.querySelector(".heading-class"); 
*/

/*let div = document.querySelector("div");
console.dir(div);

let h1 = document.querySelector("h1"); 
document.log(h1); 
*/
/*
let h2 = document.querySelector("h2"); 
console.dir(h2.innerText);

h2.innerText = h2.innerText +"from Apna Collage students"; //concatenate using (+)
*/
/* divs[0].innerText = "new uinique val 1"; // individually access :
divs[1].innerText = "new uinique val 1";
divs[2].innerText = "new uinique val 1";

// same as work : 
let divs = document.querySelectorAll(".box"); 
let idx = 1; 
for(div of divs) { 
    div.innerText = `new unique value ${idx}`;
    idx++; 
}
*/
/*
let div = document.querySelector("div"); 
console.log(div);

let id = document.querySelector("#box"); 
console.log(div);

let para = document.querySelector("p");
console.log(para.getAttribute("class, newClass"))
*/
/*
let div = document.querySelector("div"); 
div.style.backgroundcolor = "green"; 
div.style.backgroundColor = purple ; 

div.innerText = "Hello";

*//*
let newBtn  = document.createElement("button");
newBtn.innerText = "click me";
console.log(newBtn); 

let div = document.querySelector("div");
div.append(newBtn);
div.before(newBtn);
div.after(newBtn); 
div.prepend(newBtn); // bcz same var last one execute

let newHeading = document.createElement("h1"); 
newHeading.innerHTML = "<i>Hi, I an new! </i>"; 

document.querySelector("body").prepend(newHeading); 
// Delete Element:
let para = document.querySelector("p");
para.remove(); 
//newHeading.remove(); // delete
// append child & remove child learn self :
*/
//Q. crete a new button. element. Give it a text "click me", background color of red & text color of white. Insert button sd the first element inside the body tag. 

/*

let newBtn = document.createElement("button");
newBtn.innerText = "click me"; 

newBtn.style.backgroundColor = "green"; 
document.querySelector("body").prepend(newBtn); 

// Q.s 
let para = document.querySelector("p"); 

// learn about class list 
*/

// let btn1 = document.querySelector("#btn1"); 

// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 25; 
//     a++;
//     console.log(a); 
// };
/*
let btn1 = document.querySelector("#btn1"); 

btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type); 
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY); 
}

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("you are inside div"); 
};*/
/* 
let btn1 = document.querySelector("#btn1"); 

btn1.addEventListener("click", ()=> {
    console.log("button 1 was clicked - handler1");
});

btn1.addEventListener("click", () =>{
    console.log("button was clicked - handler2");
});

const handler3 = () => {
    console.log("button was clicked - handler3");
}

btn1. addEventListener("click", handler3); 
// callback reference should be same to remove.

btn1.addEventListener("click", () =>{
    console.log("button was clicked - handler4");
});

btn1.removeEventListener("click", handler3);

*/ 
//  toggle : eka state pasun dusrya state kade jato ani clicked kelyavar parat tyach thikani yete 
// toogle switch : tow states ke bich me toggle karte rahana use ham    toggle switch kahate hai 
// Q. create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again. 
/*
let modeBtn = document.querySelector("#mode");
let currMode = "light"; // dark 
let body = document.querySelector("body");

modeBtn.addEventListener("click", () =>{
   if(currMode === "light") {
    currMode = "dark"; 
    body.classList.add("dark");
    body.classList.remove("light");
   }else{
    currMode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
   }
   console.log(currMode);
}); 
HOmework : mouseover: 

**************************************************************/ 
