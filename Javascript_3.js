/* 
*Javascript Part 3: ----------------------

*1: String Methods : 
    - Methods : actions that can be performed on object

    Format 
    stringName.method()

  *i: let msg = "Hello"; 
      str.trim() 
      Trims whitespaces from both ends of string & returns a new one. 
      let msg = " Hello "; 
      masg.trim();
      'Hello' 
      msg ==> 
      ' Hello ' 

      output : Hello but value of msg remains same. 

   *ii: Strings are Immutable in js : 
        - No changes can be made to strings. 
        Whenever we do try to make a change, a new string is created and old one remains same. 

   *iii: let str = "Random string"; 
        str.toUpperCase() "RANDOM STRING"
        str.toLowerCase() "random string"

   *iv: String methods with Arguments
        - Argument is a some value that we pass to the method 

        Format 
        stringName.method(arg)

       - Index Of : 
        - It returs the first index occurence of some value in string. 
          Or gives -1 if not found. 
        
        let str = "ILoveCoding";
           
            str.indexOf("love");  // 1
            str.indexOf("J");  // -1 (not found)
            str.indexOf("o")  // 2(only 1 index)

*2:  * common Methods Of javascript: 
     *- Method Chaining : Using one method after another. Order of execution will be left to right 
          str.UpperCase().trim()
    
     *i: Slice : Returns a part of the original string as a new string. 
          let str - " ILoveCoding"; 
                    index str-> 0 1.....
          str.slice(5)   //"Coding"
          str.slice(1, 5) //  "love"
          str.slice(-num) = str.slice(length-num) 
     
     * - Slice with Negative value : 
          let msg = "tukaram"; 
          console.log(msg.slice(-1)) // op: length of msg
     *ii: replace : searches a value in the string and returns a new string with the value replaced. 
          let str = "ILoveCoding"; 
          str.slice("love", "do") // "IdoCoding"
          str.slice("0", "x") // "llxveCoding"

     *iii: repeat : Returs a string with the number of a string 
          let str = "Mango"; 
          str.repeat(3) // "MangoMangoMango"

*3: Array(Data Structure): typeof -->object
     Linear collectin of things
     - 

     *i: Visualizing Array : 
        array:       2  4  6  8
        index:       0  1  2  3

     *ii: creating Array : 
          - in c++, java, we  create similar type of arryay 
           BUT in javascript we can create diff-diffrent type of array. 
          let marks = [99, 85, 93, 76, 62]; 
          let names = ["adam", "zampa", "catlyn"]; 
          let info = ["aman", 25, 6.1]; // mixed array 

          - empty array : 
          let newArr = []; 

           names[0] [0]
                /     \
 index of arrayString|  index of inner character of that string


     *iii: Arrays are Mutable : 
       let fruits = ["mango", "apple", "banana"]
       fruits[0] = 'orange'; 
       op : ["orange", "apple", "banana"]

       fruits[10] = "papaya" ;
       fruits with length 11. 
       op :  ['orange', 'apple', 'banana', empty × 7, 'papaya']

     *Methods :
          *Push : add to end 
               let cars = ["audi", "suv", "maruti", "bmw"]; 
               cars.push("toyota"); 
          *Unshift : add to start
               cars.unshift("toyota"); add at start
          *Pop : delete from end & return it 
               cars.pop() // delete last elem
          *shift: delete from start & returns it.

               let followers = ["a", "b", "c"]; 
               let blocked = followers.shift(); 
               followers
               op : (2) ['b', 'c']
               blocked
               op : 'a'

      *i: indexOf: returns index of something
          let primary = ["red", "yellow", "blue"]; 

        - primary.indexOf("yellow"); 
          1 
          primary.indexOf("green"); 
          -1
          primary.indexOf(Yellow); 
          -1  
          
        - includes(): search for a value : 
          primary.includes("red"); 
          true
          primary.includes("green"); 
          false

     *ii: concat() Methods : 
          let primary = ["red", "yellow", "blue"]; 
          let secondary = ["orange", "green", "violet"]; 
          
          concat : merge 2 arrays 
          primary.concat(secondary); 

        - primary.concat(secondary); 
       -> ['red', 'yellow', 'blue', 'orange', 'green', 'violet']



     *iii: reverse(): reverse an array : 
          primary.reverse(); 
          op : ['blue', 'yellow', 'red']

     *iv: slice() Method in Array : did not change original array 
      - ending index always exclusive.
        let colors = ['red', 'yellow', 'blue', 'orange', 'green', 'violet'];
          colors.slice(-1) // Op: violet
          colors.slice(1) // Op: red
          colors.slice(1, 3) // Op: 'yellow', 'blue'

     *v: splice(): - changes in original array -- 
     removes / replaces / add elements in place 
          -   splice(start, deleteCount, item0....itemN)
           
          let colors = ['red', 'yellow', 'blue', 'orange', 'green', 'violet'];

     *vi: sort() in Array : 
          let days = ["Monday", "sunday", "wednesday", "tuesday"]; 
          console.log(cars.sort()); 

          *numbers convert in string and after sort by lexicographically  : 
          ex: 1, 4, 6, 8, 9
          ooutput of following : [100, 42, 67, 89, 99]
          let marks = [99, 89, 67, 42, 100]; 
          console.log(marks.sort());
     
     *vii: Array References(address) : 
          let arr = ["a", "b", "c"]; 

          //* make copy and reflect changes in both 
          let arrCopy = arr; 
          arr == arrCopy ;  <-- add reference 
          --> True ;

          let arr = ["a", "b", "c"]; 
          let arrCopy = ["a", "b", "c"]; 
          arr = arrCopy --> true 
          but --> 
          if we done changes in both of one then addresswill change
          --> false  let arr = ["a", "b", "c" "d"]; 
     
     *viii: Constant Arrays : address/ref not change.
          - we can do operations on array elements like, pop, push, remove etc. 
          - address and referece of array doesn't possible to change. in javascript.
          
          const arr = [1, 2, 3, 4]; 

           "name" === "name";
          true

          //* here compare with addres both have unique address. 
          [1] === [1] 
          false
          [1] == [1] 
          false
          [] === []
          false

     *ix: Nested Array(Multidimensional Array): Array of arrays :
          let nums = [2, 4]
          let nums = [   [1, 2],     [3, 4],    [4, 5]  ]; 
     -->  Op: nums : (3) [Array(2), Array(2), Array(2)]
     
         - we can make multiple nested array same array into array 
     *access individual array 
         0,0 0,1  
         ______ 
         |__|__|
     1,0 |__|__| 1,1
     2,0 |__|__| 2,1



         
        


*/

/*

let msg1 = "  hello " ; 
// console.log(msg.trim()); 

let name = "Tukaram Bhoye"; 
console.log(name.toLowerCase());
console.log(name.toUpperCase());

// index : 
let a = "ILoveCoding"; 
msg1.indexOf("love"); 
msg1.indexOf("o");
msg1.indexOf("z");
msg1.indexOf("e");

let msg = " Tukaram "; 
let newMsg = msg.trim(); 
console.log("After trim", newMsg);

newMsg = newMsg.toUpperCase(); 
console.log("After Uppercase", newMsg); 

// Method chaining: back to back methods add 
newMsg = msg.trim().toLowerCase();  // compute left to right 

console.log(newMsg);


// Slice method :
let hell = "hello" ; 
console.log(hell.slice(0, 4)); // print from 0 --> 3 op: hell               

console.log(msg.slice(4)); // op : hello // not skip any 0->4

//replace
let msg2 = "ILoveCoding";

//repeat
let msg3 = "Mango"; 

// Assignment: 
let msg4 = "help!" ;
console.log(msg4.trim().toUpperCase()); 

let name1 = "ApnaCollage"; 

console.log(name1.slice(4, 9));
 
console.log(name1.indexOf("na"));
console.log(name1.replace("Apna", "Our")); 

console.log(name1.slice(4).replace('l', 't')); 

let newStr = name1.slice(4).replace('l', 't').replace('l', 't'); 
console.log(newStr); 
*/ 


// Arrays : 

let students = ["aman", "shradha", "tukaram", "akshay"]; 

// Mutable: 
let fruits = ["mango", "apple", "banana"];  

// methods array  ;
let cars = ["audi", "suv", "maruti", "bmw"]; 
cars.push("toyota"); 
cars.push("ferrari"); 
//pop 
cars.pop(); // remove last element 

// same methods but from start 
cars.unshift("toyota"); //add starting
cars.unshift("ferrari"); 

let months = ["january", "july", "march", "august"];

months.shift();
months.shift();
months.unshift("july"); 
months.unshift("january"); 

// Array Methods : 

let primary = ["red", "yellow", "blue"]; 
let secondary = ["orange", "green", "violet"]; 

// splice : 
let colors = ['red', 'yellow', 'blue', 'orange', 'green', 'violet'];

// sort(): did not work on numbers  
let days = ["Monday", "sunday", "wednesday", "tuesday"]; 
console.log(days.sort()); 
let marks = [99, 89, 67, 42, 100]; 
console.log(marks.sort());

//Qs for the given start state of an array, hange it to final form using splice.

let start = ["january", "july", "march", "august"]; 
start.splice(0, 2, "july", "june"); 
//           ━━┳━━     ━━━━┳━━━━ 
//           remove       add
console.log(start); 

// Qs: REturn the index o the "javascript" from the given array, if it was reversed. 
let lang = ['c', 'c++', 'html', 'javascript', 'pythod', 'java', 'c#', 'sql']
console.log(lang.reverse().indexOf("javascript"));


// Qs. create a nested array to show the following tic-tac-toe game state. 

let ticTac = [ ["x", null, "o"], [null, "x", null], ["o", "null", "x"], ];
console.log(ticTac); 
// Qs
let jp = [7, 9, 0, -2] ; 
console.log(jp[0]); 

//Qs. is character at given index is lowerCase. 

let char = " tukaram ";
let idx = 3; 
char.trim(); 

if(char[idx].toLowerCase()){
     console.log("char is lowercase");
}else{
     console.log("not lowercase")
}

// Qs. array element exist or not 
let arr = ["tuka", 23, "jay", "marathi"]; 
let elem = "tuka"; 
if(arr.indexOf(elem) != -1){
     console.log("elem is present in the Array");
}else{
     console.log("terese nahi hoga bhag.."); 
}


