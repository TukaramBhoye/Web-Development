/* 
*24: JAvascript_9 : DOM(Document Object Model)

*1: DOM(Document Object Model)
  - The DOM represent a document with a logical tree. 
  - It allows us to manipulate/change webpage content(HTML elements). 

            document  
                |          <body> 
              body            <div> <h1> Todo</h1> 
            /      \            </div> 
        div         ul        <ul> 
         |         / | \        <li> Eat </li> 
        h1        li li li      <li> Eat </li> 
                              </ul>
                          </body> 

*3: how to elements from console : 
Download Starter files: https://drive.google.com/drive/folders/18G_CAxxjofKdUDVkYWJhEIHUDmaKgyF9?usp=sharing

      - console.dir(document.all); 
        HTMLAllCollection(38)
      - console.dir(document.all[8]); 
        h1
      - console.dir(document.all[8].innerText); 
        Spider Man
      - console.dir(document.all[8].innerText = "Peter Parker"); 
        Peter Parker
      - document.all[8].innerText
        'Peter Parker'
        

*4: Selecting Elements : 
    
    *i: getElementById
        document.getElementById("description");
        <p id=​"description">​…​</p>​" In 1962, with... "</p>​
      - Returns the Element as an object or null (if not found)
     
    *ii: getElementsByClassName 
          - Returns the Elements as an HTML Collection(not Array) or empty Collection(if not found)  
        
    *iii: getElementByTegName 
      - Returns the Elements as an HTML Collections or empty collections(if not found)
        
          document.getElementsByTagName("p"); // tags : p, i, b, body, span...& more
          HTMLCollection(2) [p, p#description, 
                            description: p#description]


*5: Query Selector : 
    - Allows us to use any CSS selector :

      document.querySelector('p');  // Selects first p element
      document.querySelectorAll('p');  // Selects All p element

      document.querySelector('#myId'); // Selects first element with id = myId
      document.querySelector('.myClass'); // Selects first element with class = myClass 

*6: Using Properties & Methods 
      *i: innerText 
           - Shows the visible text collection on web document

      *ii: textContent 
           - Shows all the full text 

      *iii: innerHTML 
            Shows the full markup(uses tags and text); 

      - code from web console ----------    
          let heading = document.querySelector('h1'); 
          heading.innerHTML = `<u>${heading.innerText}</u>`; 
          '<u>Spider Man</u>'

*7: Manipulating Attributes 
      
     - in programming term also known as getters and setters 
        obj.gtAttribute(attr)
        obj.setAttribute(attr, val)
     - to change getAttribute use SetAttribute
      
     - Example : 
      let img = document.querySelector('img'); 
      console.dir(img); 

      img.getAttribute('id'); 
      //* think before change id/class name -- changes will reflect on document
      - to change the id val. can change of getAttr--> id, class, src and more 
      img.setAttribute('id', 'spidermanImg'); kisi bhi object ke liye ek specific attribute ki value hame de deta hai 
      img.setAttribute('src', './creation_3.');

*8: Manipulating style : 
        style Property : 
        obj.style 

    - Injavascript naming in camelCase: 
      css                  Javascript 
      background-image   : backgroundImage 
      border-bottom      : borderBottom

    - Examples :

    - to all anchor tags 
      let links = document.querySelectorAll('.box a'); 
      for(link of links ){
        link.style.color = "red"; //inline css
      }

    - to h1 first element : 
      let heading = document.querySelector('h1'); 
      heading.style; 
      heading.style.color = 'purple'; 
      heading.style.color = 'green' ;
      heading.style.backgroundColor = 'yellow';

      console.dir(heading); 
        
*9 : ClassList Property 
  - Manpulating Style using classList 
  obj.classList 
  
  i.classList.add() to add new classes 
      
  Examples : 
      let heading = document.querySelector('h1');
    - heading.classList.add('green'); 
      undefined
    - heading.classList.add('underline'); 
      undefined

  ii.classList.remove() to remove classes 
    - heading.classList.remove('green'); 
      undefine
    - heading.classList.remove('greem'); 
      undefine

    *at the setAttribute just can one class value could remain.  means either we take value of 'green' OR 'underline'
    - heading.setAttribute('class', 'green'); 
      undefine

      if you want to create multiple class and assign values all of them that time we always use classList for styling because using setAttribute as older value(means all values will convert single class value)
  iii. classList.contains() to check if class exists 
      - heading.classList.add('underline'); 
        undefined
      - heading.classList
        DOMTokenList(2) ['green', 'underline', value: 'green underline']
      - heading.classList.contains("underline"); 
        true
  iv. classList.toggle() to toggle between add & remove 
    - toggle means ==> if press yes become no if no then yes. (ex. 0 or 1 state)

    example: 
   

    - heading.toggle("green");
      error==> toggle is not function 
    - heading.classList.toggle("green"); 
      true
    -  heading.classList
       DOMTokenList(2)['underline', 'green', value: 'underline green']

    - heading.classList.toggle("underline"); 
      false   // remove underline 

    v. styling Reset : 

        let box = document.querySelector(".box"); 
        undefined
        box.classList; 
        DOMTokenList ['box', value: 'box']
        undefined
        box.classList.add(".yellowBg"); 
        undefined
        box.classList;
        DOMTokenList(3) ['box', 'yellowBg', '.yellowBg', value: 'box yellowBg .yellowBg']

    
*10: Navigation : 
    i: ParentElement
      - let h4 = document.querySelector('h4'); 
      - h4.parentElement
        <div class=​"box">​…​</div>​
      - h4.children
        HTMLCollection []length: 0[[Prototype]]: HTMLCollection
      
      

      - let ul = document.querySelector('ul'); 
      
      - ul.childElementCount; 
        3
      - ul.children
        HTMLCollection(3) [li, li, li]
      - ul.children[1]; 
        <li>​…​</li>​
      - ul.children[2]; 
        <li>​…​</li>​
      - ul.children[1].previousElementSibling;
        <li>​…​</li>​

      
    ii: children 

      - let box = document.querySelector('.box'); 
        box.children;
        HTMLCollection(2) [h4, ul]0: h41: ullength: 2[[Prototype]]: HTMLCollection

      - box.childElementCount
        2

    iii: PreviousElementSibling / nextElementSibling

      - let img = document.querySelector('img'); 
      - img.previousElementSibling; 
        <h1 style=​"color:​ green;​ background-color:​ yellow;​">​Spider Man​</h1>​
      - img.previousElementSibling.style; 
        CSSStyleDeclaration {0: 'color', 1: 'background-color', accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
      - img.previousElementSibling.style.color = "green"; 
        'green'
    
*11. Adding Elements in the documents :
     let newP = document.createElement('p'); 
     console.dir(newP); 
     >p
      - newP.innerText = 'hi i am new p'; 
        'hi i am new p'

    i:appendChild(element)
      - let body = document.querySelector('body'); 
        body.appendChild(newP); 
        <p>​hi i am new p​</p>​
      - btn.innerText = "click me!";
          'click me!'
      - box.appendChild(btn);
        <button>click me​</button>​
      
           
    ii: append(element) : Mostly prefer append for add element instead of appendChild
        using this we can add new content OR Elements. 
      - newP.append(btn); 
      - newP.append("do not click this button"); 
       
    iii: Create Element : 
        - let btn = document.createElement('button'); 
          undefined
        - console.dir('btn'); 
          btn
        - console.dir(btn); 
          button

    iii: Prepend(element)
         box.prepend(newP); // this will add before the box

    iv: insertAdjacent(where, element)
      - here paragraph will move afterbegin, afterend, beforebigin, beforeend,
        let p = document.querySelector('p'); 
       
        p.insertAdjacentElement('beforebegin', btn); 
        <button>​NEW BUTTON !!!​</button>
        p.insertAdjacentElement('afterbegin', btn); 
        <button>​NEW BUTTON !!!​</button>​
        p.insertAdjacentElement('beforeend', btn); 
        <button>​NEW BUTTON !!!​</button>​
        
*11. Removing Elements :
      - removeChild(element) 
      - remove(element)

      ex: p.remove(); 
*/

/* -----------------------------------------------   
let smallImages = document.getElementsByClassName("oldImg"); 

for(let i = 0; i<smallImages.length; i++){
  smallImages[i].src = "./spiderman_img.png"; 
  console.log(`value of image no. ${i} is changed.`); 
}

console.dir(document.getElementsByTagName("p")); 


//* Select single elements using querySelector : 
console.dir(document.querySelector('h1')); 
console.dir(document.querySelector("div a")); // a(anchor tag)

//* selects All elements 
console.dir(document.querySelectorAll("div a"));


let para = document.querySelector('p'); 
console.dir(para); 


let img = document.querySelector('img'); 
console.dir(img); 

img.getAttribute('id'); 
//* think before change id/class name -- changes will reflect on document
// to change the id val. can change of getAttr--> id, class, src and more 
img.setAttribute('id', 'spidermanImg');// kisi bhi object ke liye ek specific attribute ki value hame de deta hai 
img.setAttribute('src', './creation_3.');


*/ 
// Manipulating style
/* 
let img1 = document.querySelector('img'); 
console.dir(img1); 


img1.style ;

let heading = document.querySelector('h1'); 
heading.style; 
heading.style.color = 'purple'; 
heading.style.color = 'green' ;
heading.style.backgroundColor = 'yellow';

console.dir(heading); 

let links = document.querySelectorAll('.box a'); 

for(link of links ){
  link.style.color = "red"; //inline css
}

for(let i=0; i<links.length; i++){
    links[i].style.color = "green";
}

let box = document.querySelector('.box'); 
*/ 

// Practice Qs. 
// Add the following elements to the container using only Javascript and the DOM methods. 

// i: a <p> with red text that says "Hey I'm red!"
let para1 = document.createElement("p"); 
para1.innerText = "Hey I'm red!"; 
document.querySelector("body").append(para1); 
para1.classList.add("red"); 

// ii: an <h3> with blue text that says "i'm a blue h3!"
let h3 = document.createElement("h3"); 
h3.innerText = "I'm a blue h3!"; 
document.querySelector("body").append(h3); 

h3.classList.add("blue"); 

// iii: a <div> with a black border and pink background color with the follwoing elements inside of it: 
let div = document.createElement("div"); 
let h1 = document.createElement("h1"); 
let para2 = document.createElement("p"); 

h1.innerText = "Hi I'm div"; 
para2.innerText = "ME TOO!"; 

div.append(h1); 
div.append(para2); 
div.classList.add("box"); 
document.querySelector("body").append(div);  





