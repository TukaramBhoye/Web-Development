/*  
Chapter 1: Javascript Part 1

* What is javascript? 
   - JavaScript is a versatile programming language used 
   primarily to create dynamic, interactive content on 
   websites. It works on the client-side (browser), 
   allowing for real-time updates, animations, and user 
   interactions without needing to refresh the page. Key 
   features include DOM manipulation, asynchronous 
   programming, and flexibility in programming styles. 
   With Node.js, JavaScript can also run on the 
   server-side, enabling developers to use one language 
   for both front-end and back-end work. It has a rich 
   ecosystem of frameworks like React and Vue for 
   front-end, and Express for back-end, making it 
   essential in modern web development.


*1: Using the Console: console(Temporary work space)
    Uses Repl (Read  -  Evaluate  -  Print  -  Loop) 
                 |         |            |
    read first-> computes+calculations-->ans--->same loop continous  

   - browser-->right click-->inspect-->console 
   - to make empty-->click--> command + l  
   - to access previous/next removable things---> up arrow/down arrow

*2: What is a Variable ? 
    - A variable is simply the name of a storage location.
      ______________________________
     |   | age |      | name       |
     |___|__23_|      |_tony-stark_| 

       
        a = 10           |  name = tukaram <---------ERROR
        10               |  name="tukaram"
        b = 5            |  'tukaram'  
        5                |  -----Reuse variable 
        age = 23         |  a + b 
        23               |  15
      
        
*3: Data Types in JS: 
            Primitive Types: 
           - Number  - Boolean - String - Undefined - Null 
           - Bigint - symbol 
    
    - age = 23
    - 23
    - typeof age --> 'number'
    - name = "tony Stark" -> 'tony Stark' 
    - typeof 5.9  -> 'number'
    - typeof 'a' -> 'string'
*4: Unary Operators in java : uanary means one , binary means two 
   age = age + 1 ;        age = age - 1; 
   age += 1;              age -= 1;
   age++ //incremant       age-- //decrement
   ++age //preincrement    --age // predecrement 

*5: Identifier Rules: case sensitive : 
       All Javascript variable must be identified with unique names(identifiers). 
      - Names can contain letters, digits, underscores, and dollar sign.(no-space)
      - Names must begin with a letter. 
      - Names can also begin with $ and _(underscore). 
      - Names are case sensitive(y and Y are different variables). 
      Reserved words (like Javascript keywords) CANNOT be used as names. 

*6: CamelCase : Way of writing identifiers : 
   camelCase(JS Naming convention) 
   snake_case 
   PascalCase

*7: Boolean in JS : 
    - Boolean represents a truth -> true or false/ Yes or No
    let age =23; 
    let isAdult = true; 
    let age = 13; 
    let isAdult = false;
    
    in Javascript simply change property type. 
    but in java Or c++ such in such languages we cannot be change typeof property; 
    
*8: What is TypeScript? :   Designed by MS company.
      - TS is Static Typed, where JS is dynamic typed(type can be change)
         Static Type means : once we dclare datatype OR variable after then we cannot change 
      - typeScript is a strict Version of JavaScript.
   Extra rule (Stricter Version)

*9: String in JS : 
      String are text or sequence of Characters : 
      let name = "tony Stark"; 
      let role = "ironman"; 
      let num = "23"; 
      let empty = " "; 

      let sentence = 'this is "apple"'; also--> "this is 'apple'"
      output : this is "apple"

*10: String Indices : let name = "Tony Stark"; 
            T O N Y   S T A R K
            0 1 2 3 4 5 6 7 8 9 

      name[0] -> "T"
      name[1] -> '0' ... 

      let name = "Tony Stark";

      name[name.length-1]; 
      'k'
      name[name.length-1]; 

      in console direct string use
      "tukaram".length;  "tukaram"[0] // op : t

*11: Concatenation : 
   Adding string together : 

   "tony" + " " + "stark" = "tony stark"
   "tony" + 1 = "tony1" 
         

*12: null & undefined in JS : 
   -  undefined 
      A variable that has not been assigned a value is of type undefined. 

      worst Practice : 
         let a ; 
       op:  undefined 
   - null 
     The null value represents the intentional absence of any object value. 
     To be explicitly assigned. 

     let a = null ; 
     op : undefined
*13: 



       
       
    




   */ 