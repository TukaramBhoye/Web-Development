/*
*chapter 32:1: BackEnd : Node.js 

*1: Node.js : 
        - Javascript Runtime Evioronment. before we run it on browser without node.js.
        - It is used for server side programming. 
        *Node.js is not a language, library or Framework

        installation check : PS C:\Users\tcbho> node -v
                      v20.15.1

*2: Node REPL(Real, evaluate, Print, Loop): .help gives us commands.

    *i: first run Program in node envt: 
      - open terminal --> Type node --> run first code(console.log("hello"); ).
      - .help, .global , .exit (press ctrl+c(2-times to exit))


*/ 

let n = 5 ; 

for (let i=0; i<n; i++){
    console.log("hello", i); 
}

console.log("bye!");
