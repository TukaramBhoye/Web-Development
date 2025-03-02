/* 
*35:ch: Revisiting JS(OOPS): 
*1 : Object Oriented Programming Meaning:
    - To Structure Our Code. 
        *i: Prototype
        *ii: New Operator
        *iii: constructors 
        *iv:  classes
        *v:  keywords (extends, super)

*i: A way to write code properly: 
   - To Avoid Repeating: 
   - Example of repetitive Code: 
        const stud1 = {
            name: "adam", 
            age: 25, 
            marks: 95, 
            getmarks: function() {
                return this.marks; 
            }
        };
        const stud2 = {
            name: "eve", 
            age: 25, 
            marks: 95, 
            getmarks: function() {
                return this.marks; 
            }
        };

*i: Object Prototypes : 
        - Prototypes are the mechanism by which JavaScript Objects features from 
          one another. 
        - It is like a single template object that all objects inherit methods 
          and Properties from without having their own copy. 
        - Every object in JS has a built-in Property, which is called its 
          prototype The Prototype is itself an object, so the Prototype will 
          have its own prototype, making what's called a prototype chain The chain 
          ends when we reach a prototype that has null for its own prototype. 

    *i: Example redundant code: 
        let arr = [1, 2, 3]; 
        let arr2 = [1, 2, 3]; 

        arr.sayHello = () => {console.log("hello!")}

        - this is not in prototype. we called it separately. this redundant work.
        arr2.sayHello = () => {console.log("hello!")}

    *ii: arr.__proto__(reference) : 
       - we can access prototype and also we can change definition for our specific object. 
        
       - Here arr & arr2 are store in dif memory. or make separate copy of function. 
         arr.sayHello === arr2.sayHello
         op: false

       - true bcz use same Uppercase both are not individual functions. bcz these store under prototype and use same function.
       - "abc".toUpperCase === "xyz".toUpperCase
         op: true 

    *iii: Factory Functions : A function that creates objects. 

    - this is efficient way to make than creating multiple objects.  

        function personMaker(name, age){
            const person = {
                name: name, 
                age  : age,
                talk(){
                    console.log(`Hi, My name is ${this.name}`); 
                },
            };
            return person; 
        }
        let p1 = personMaker("adam", 35);
        let p2 = personMaker("tukaram", 35);

    - Factory Function Disadvantage is : 
      every object make itself copy

      example : 
        -  p1.talk === p2.talk 
        op: false
        - reason : Even we create once in factory function(talk) 
         but p1 ke liye become it's itself copy. and for every object. 
         this unefficient for memory. 

    *iv: New Operator : better way than factory function: 
      - The new operator lets developer create an instance of a user-difined 
        object type or of one of the built-in object types that has a constructor function. 

      - constructor(write/start with capital letter): doesn't return anything. 
           function Person(name, age){
                const person = {
                    name: name, 
                    age  : age,
                    talk(){
                        console.log(`Hi, My name is ${this.name}`); 
                    },
                };
                return person; 
            }

       - constructor : 
            function Person(name, age){
                this.name = name; 
                this.age = age; 
                console.log(this)
            }

        Person.prototype.talk = function(){
            console.log(`Hi, my name is `)
        }

      - using constructor creating object
      - new keyword change this in side the constructor function. 
      - new keyword used to new object instance initialize with the help of constructor.  
       
        let p1 = new Person("adam", 43); 
        let p2 = new Person("eve", 25); 

        Person {name: 'adam', age: 43}
            age: 43 
            name: "adam"
            [[Prototype]]: Object
        app.js:142 Person {name: 'eve', age: 25}
       
    - here, both p1 & P2 belongs in the prototype. both not create itself copy or with own both. 
    p1.talk === p2.talk; 
      true

*ii: Classes : third better way
     - Classes are a template for creating objects 
     - The constructor method is a special method of a class for 
       creating and initializing an object instance of that class. 

class Person {
    //*constructor work is make instance of every class object. 
    constructor(name, age){
        this.name; 
        this.age;
    }

    talk(){
        console.log(`Hi, My Name Is ${this.name}`); 
    }
}


*iii: Inheritance : 
    - Inheritance is a mechanism that allows us to create new
      classes on the basis of already existing classes.


*/ 

/*

let arr = [1, 2, 3]; 
let arr2 = [1, 2, 3]; 

arr.sayHello = () => {
    console.log("hello!");
}

// - this is not in prototype. we called it separately. this redundant work.
arr2.sayHello = () => {
    console.log("hello!");
}

//factory function: 

function personMaker(name, age){
    const person = {
        name: name, 
        age  : age,
        talk(){
            console.log(`Hi, My name is ${this.name}`); 
        },
    };
    return person; 
}
let p1 = personMaker("adam", 35);
let p2 = personMaker("tukaram", 35);



// New Operator: 
// constructor(write with capital letter): doesn't return anything & start with capital. 
function Person(name, age){
    const person = {
        name: name, 
        age  : age,
        talk(){
            console.log(`Hi, My name is ${this.name}`); 
        },
    };
    return person; 
}

// constructor : 
function Person(name, age){
    this.name = name; 
    this.age = age; 
    console.log(this)
}

Person.prototype.talk = function(){
    console.log(`Hi, my name is `)
}

// using constructor creating object
// new keyword change this in side the constructor function. 
// new keyword used to new object instance initialize with the help of constructor.  
let p1 = new Person("adam", 43); 
let p2 = new Person("eve", 25); 

*/

// classes : 

class Person{
    constructor(name, age){
        console.log("Person class constructor")

        this.name = name; 
        this.age  = age; 
    }
    talk(){
        console.log()
    }
}

class Student extends Person{
    //constructor work is make instance of every class object. 
    constructor(name, age, marks){
        console.log("student class constructor")
        super(name, age); // parent class constructor is being called
        this.marks = marks; 
    }

    talk(){
        console.log(`Hi, My Name Is ${this.name}`); 
    }
}

class Teacher extends Person{
    constructor(name, age, subject){
        super(name, age); // parent class constructor is being called
        this.subject = subject; 
    }
    talk(){
        console.log(`Hi, I am ${this.name}`); 
    }
}

// 2nd example : 

class Mammal {
    constructor(name) {
        this.name = name; 
        this.type = "warm-blooded" 
    }

    eat() {
        console.log("I am eating"); 
    }
}

class Dog extends Mammal{
    constructor(name){
        super(name); 
    }

    bark(){
        console.log("wooff..")
    }
}

class Cat extends Mammal {
    constructor(name){
        super(name); 
    }

    meow() {
        console.log("meow.."); 
    }
}