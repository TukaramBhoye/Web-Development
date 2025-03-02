/*
*ch:32: section: Node Package Manager

*1: NPM(Node Package Manager): inbuilt with node.js 
    - npm is the standard package for Node.js
    - Library of packages 
    - command line tool 
    - use: store packages, make library like through command line handout with other developer. 

*2: Installing Packages(website: npmjs.com) 
        *npm install <- package name ->
        
    *1: figlet(dependency) : 
    * i use figlet repository "index.js" file
    - in node modules we not do any changes/delete. do not temper
    - node_modules : The node_modules folder contains every installed depencency for your project 
    - package-lock.js : It records the exact version of every installed dependency, including its sub-dependencies and their versions.
        
    const figlet = require("figlet");
    
    figlet("Tukaram Bhoye", function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(data);
    });
    PS C:\Users\tcbho\OneDrive\Desktop\Apna College\Development\NodeJs\FigletDir> node index.js
  _____      _                               ____  _
 |_   _|   _| | ____ _ _ __ __ _ _ __ ___   | __ )| |__   ___  _   _  ___   
   | || | | | |/ / _` | '__/ _` | '_ ` _ \  |  _ \| '_ \ / _ \| | | |/ _ \  
   | || |_| |   < (_| | | | (_| | | | | | | | |_) | | | | (_) | |_| |  __/  
   |_| \__,_|_|\_\__,_|_|  \__,_|_| |_| |_| |____/|_| |_|\___/ \__, |\___|  
                                                               |___/        

   *ii: Package.json : Important file
     - here store all details of dependecies. suppose if we delete "node_modules" file the using "package.json" we can recover it. 
     - The package.json file contains descriptive and functional metadata about a project, such as a name, version, and dependencies
     - we can send anyone package.json file istead of node_modules.

     *a) if we delete "node_modules" repo
       run--> index.js throw -->  error

      - to prevent errors we have to recover node_modules 
      - run just --> npm install 
        here, available in package.jason file all dependencies will automatically install.

*3: create first Project/package in node 
      MyProject file: 
      npm init : initialize package.json for any project

*4: Local v/s Global : local Mostly Prefere 
    global install (-g) : npm install -g <package name>
    ex: global install -g figlet
    - error : cannot found module figlet 
    - link before install/Use using this command 
      npm link figlet  

    *we mostly use local not global 

*5: require V/S import
    *from ES 6 version : arrrow functions, import use for packages installing.
    import{sum} from "./math.js"

  - we can't selectively load only the pieces we need with require but with 
    import, we can selectively load only the pieces we need, which can save memory. 

  - Loading is synchronous for 'require' but can be asynchronous for 'import'. 

  *Note when we work on whole project there we either use "require" or "import" methods
   we did not use both in the same. 

   - to use import we use export and here all var's will individually import/export

    export const sum = (a, b) => a * b; 
    export const mul = (a, b) => a * b; 
    export const g = 9.8; 
    export const PI = 3.14; 
   - these variables import into the "IntNode_1.js" file.

   IntNode_1.js file  : 
    import {sum, PI} from './npm_2.js'; 
    console.log(sum(1, 2)); 
    console.log(PI); 

*6:  for import we use here a package that is random words. 
    npm install random words. 
    import { generate } from "random-words";
    console.log(PI); 
    console.log(generate());

    Here generate random words. 
  After we see the Express js A large package.

*7: Library  V/s Framework 
            Library               Framework 
A library is a collection of   | A framework is a set of pre-written
pre-written code that can be   |  code that provides a stucture for 
used to perform specific tasks.| developing software applications. 

  
*/

// to use import we use export and here all var's will individually import/export

export const sum = (a, b) => a * b; 
export const mul = (a, b) => a * b; 
export const g = 9.8; 
export const PI = 3.14; 
//these variables import into the "IntNode_1.js" file.
