/* 
*24: JAvascript_9 : DOM(Document Object Model)------------------

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
        
    *iii: getElementByTagName 
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

   
      

        
*/
/*
let smallImages = document.getElementsByClassName("oldImg"); 

for(let i = 0; i<smallImages.length; i++){
  smallImages[i].src = "./spiderman_img.png"; 
  console.log(`value of image no. ${i} is changed.`); 
}

console.dir(document.getElementsByTagName("p")); 


// Select single elements using querySelector : 
console.dir(document.querySelector('h1')); 
console.dir(document.querySelector("div a")); // a(anchor tag)

// selects All elements 
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
  link.style.color = "red"; 
}

for(let i=0; i<links.length; i++){
    links[i].style.color = "green";
}