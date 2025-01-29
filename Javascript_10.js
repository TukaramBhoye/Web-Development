/*
*Chapter 10 : DOM Events ---------------
*1:  To track events :  in this onclick or onmouseenter such values one time we can just set one value. 
    i: onclick(When an Element is clicked)
    ii: on mouseenter (when mouse enters an element)

*2: Event Listener : 
    *1: addEventListener : for a single event we can make multiple event listener. 

    element.addEventListenr(event, callback)
    btn.addEventListener("click", function () {
        console.log("button clickd"); 
    });

----------------------------------------------------------------------------------------------
   	onclick	-------------------------------addEventListener
only one function can be assigned    | multiple functions can be attached
requires overwriting the property    | Easy using removeEventListener
element.onclick = function() { ... };| element.addEventListener("event", function() { ... }, [options]);
Flexibility	Less                     | More flexible
can become messy in complex code     | better for complex applications
Avoid for complex scenarios	         | Preferred and recommended
-------------------------------------------------------------------------------------------

*3 : Generate a Random color 
        Generate Color 



*/ 
// ------------------
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
*/ 

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

