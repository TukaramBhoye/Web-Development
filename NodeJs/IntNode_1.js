/*
*chapter 32:1: BackEnd : Node.js 

*1: Node.js : 
        - Javascript Runtime Evioronment. before we run it on browser without node.js.
        - It is used for server side programming. 
        *Node.js is not a language, library or Framework

        - installation check : PS C:\Users\tcbho> node -v
                      v20.15.1

*2: Node REPL(Real, evaluate, Print, Loop): .help gives us commands.

    *i: first run Program in node envt: 
      - open terminal --> Type "node" --> run first code(console.log("hello"); ).
      - .help, .global , .exit (press ctrl+c(2-times to exit))


*3: Process : 
    - Process : This object provides information about, and control over, the current Node.js process. 
    - Process.argv : returns an array containing the command-line arguments passed when the Node.js process was launched. 

    - commands :
        process.version, process.release, process.cwd();, 
        process.argv

    - process.argv : if we want our overall files/code have to use some special values through the user same like prompt we can use arguments to take some values.
        let args = process.argv;

        for(let i=2; i<args.length; i++){
            console.log("Hello & welcome to ",args[i]); 
        }

*4: Module.exports : requiring files 
     *i: require() : a built-in function to include external modules that exist in separate files 
      *file_2: IntNode_1.js
      - if we want access Export_math.js where we use module.exports so use require method ex: 
        const someValue = require("./Export_math"); // current directory(./)
      - here take value form export_math file and that store into a variable-->someValue
        console.log(someValue); 

     *ii: module.exports -> a special object 
    
      *file_1 : Export_math.js 
        const sum = (a, b) => a + b; 
        const mul = (a, b) => a * b; 
        const g = 9.8; 
        const PI = 3.14; 

        // module.exports is a object. properties, methods if want to sent into same directory we use this method.
        module.exports = "hello";

       - module.exports is a object. properties, methods if want to sent into same directory we use this method.
       
    *iii: also we can do using exports but its treat as like normal variable.
       
        const sum = (a, b) => a + b; 
        const mul = (a, b) => a * b; 
        const g = 9.8; 
        // here variable will treat like normal variable not like other module.exports . 
        exports.PI = 3.14; 

        // module.exports is a object. properties, methods if want to sent into same directory we use this method.
        module.exports = "hello";

        let obj = {
            sum : sum, 
            mul : mul, 
            g : g, 
            PI: PI,
        };
        module.exports = obj; 

*5: How to send data one dir to another directory.
    *index.js is special file. it compulsary required like main file of java, c++. and after then we use require.


        const info = require("./Fruits"); 
        console.log(info);

        *output : 
        C: \Development\NodeJs> node IntNode_1.js
        [
            { name: 'apple', color: 'red' },
            { name: 'banana', color: 'Yellow' },
            { name: 'orange', color: 'ora' }
        ]
    *console.log(info[0].name); 
     op: apple 



*/ 

/*
let n = 5 ; 

for (let i=0; i<n; i++){
    console.log("hello", i); 
}

console.log("bye!");
*/ /*
//*process.argv : if we want our overall files/code have to use some special values through the user same like prompt we can use arguments to take some values.
// let args = process.argv;

// for(let i=2; i<args.length; i++){
//     console.log("Hello & welcome to ",args[i]); 
// }

//* module.exports is a object. properties, methods if want to sent into same directory we use this method.
//* if we want access Export_math.js where we use module.exports so use require method ex: 
const someValue = require("./Export_math"); // current directory(./)

//* here take value form export_math file and that store into a variable-->someValue
console.log(someValue); 

//* ---------------------------
const math = require("./Export_math"); 
console.log(math); 
*/ 
// -npm_2.js file-----------------
//*Note : 
import {sum, PI} from './npm_2.js'; 
import { generate } from "random-words";
console.log(PI); 
console.log(generate()); 