/*
*Chapter 20 : Javascript 5: 

*1: JS Objects Literals : 
    - Used to store keyed collections & complex entities. 
     -  Property => (key, value) pair
     -  Objects are a collection of properties  

      name : "tukaram",

        name =====> "tukaram"
         |             | 
        key__________value
               |
            Property 

    

    *i: Object Literals : 

        let nashik = {
            lattitude : "23.4534 N " ,
            longitude: "77.1035 E"
        };

        *print alternately not follow orders 
        const student = {
            name: "tukaram",
            age: 23,
            marks: 94.4, 
            city: "nashik"
        };
        
        *also we can write like this
        - followed order
        let student2 = ["tukaram", 23, 94.4]; 

    *ii: Get Values: 
     - JS automatically converts objects keys to strings
     - Even if we made the number as a key, the number will be converted to sring. 
       
        let Student = {
            name: "tukaram", 
            marks: 70
        };

      -->- To Get values : 
            Student["name"]; 
         - second way  :
            Student.name;
       
        *- Here Js reads reserved keywords as String 
        const obj = {
            1: "a", 
            2: "b", 
            true: "c", 
            null: "d", 
            undefined: "e"
        };

    *iii: Add/Update Value : 
        -  to Change the city to "Mumbai" 
        -  to Add a new property, gender: "Female"
        -  Change the marks to "A" 
       
        const student = {
            name : "shradha" ; 
            age : 24, 
            marks : 94.4, 
            city: "Delhi"
        };

  
    
    *iv: Objects Of Objects 
        - Storing information of multiple students. 


      Examples : 
        const classInfo = {
            tukaram : {
                grade : "B", 
                city: "Delhi"
            }, 
            shradha : {
                grade: "A+", 
                city: "Pune"
            },
            karan : {
                grade: "0", 
                city : "Mumbai"
            }
        };

        *Inputs/Outputs : 
            student3.marks = [99.4, 94, 64, 87, 99];
        ->  (5) [99.4, 94, 64, 87, 99]
            student3;
        ->  {name: 'Tukaram', age: 24, marks: Array(5), city: 'Nashik', gender: 'Male'}age: 24city: "Nashik"gender: "Male"marks: (5) [99.4, 94, 64, 87, 99]name: "Tukaram"[[Prototype]]: Object
            delete student3.marks;
        ->  true

       
        *with Array-------> 
        const classInfo2 = [
            {
                name : "Aman", 
                grade : "A", 
                city: "Delhi"

            },
            { name : "Tukaram", 
                grade : "B", 
                city: "Nashik"
            }, 
            {
                name : "shradha", 
                grade : "A+", 
                city: "Pune"
            }, 
        ]

        *Inputs/Outputs : 
        classInfo2
        (3) [{…}, {…}, {…}]
        classInfo2[0];
        {name: 'Aman', grade: 'A', city: 'Delhi'}
        classInfo2[1]
        {name: 'Tukaram', grade: 'B', city: 'Nashik'}
        classInfo2[2]
        {name: 'shradha', grade: 'A+', city: 'Pune'}
        classInfo2[1].name
        'Tukaram'
        classInfo2[2].grade
        'A+'

*2: Math Object : 
    Properties --------------- Methods : 
    Math.PI           Math.abs(n) <-- -12 --> op-> 12
    Math.E            Math.Pow(a,b) 
                      Math.floor(n) <-- removes decimal choose nearest/smallest Int val
                      Math.ceil(n)  <-- larger Integer value same as floor but always chhose greater val ex 5.001 => 6
                      Math.random() <-- 0 to 9 value randomely print. excluding 1 
    
*3: Random Integers  :
        from   1 to 10 
     
        step1 : let num = Math.random(); 
    ->  0.467943
        step2 : num = num * 10 ; 
    ->  4.674772389475
        step3 : num = Math.floor(num); 
    ->  4
        step4 : num = num + 1; 
    ->  5

    *Random Integers : 
    - for in 1 to 10 numbers want to include 10 
          then use this method --> 

    - /this method genreates random number from 1 to 10/ 
        let random = Math.floor(Math.random() * 10) + 1
    
    - for Generate 1 to 100
        let random = Math.floor(Math.random() * 100) + 1


    *Generate 21 to 25 
     let random = Math.floor(Math.random() * 5) + 21; 


*/

/*

// Object literals : 

//print alternately not follow orders 
const student = {
    name: "tukaram",
    age: 23,
    marks: 94.4, 
    city: "nashik"
};
console.log(student); 
// followed order
let student2 = ["tukaram", 23, 94.4];

const item = {
    price : 100.99, 
    discount: 50, 
    colors:  ['red', 'pink']
};


const post = {
    username: "@tukarambhoye",
    content: "This is my #firstPost", 
    like: 150,
    reposts: 5, 
    tags: ["@greencitynashik", "@delta"]
};

console.log(post); 
// Get values : 
console.log(post["content"])
console.log(post["like"])
console.log(post["tags"])

// Get values second way : 
console.log(post.content); 
console.log(post.like);  

// Js this reads as a string 
const obj = {
    1: "a", 
    2: "b", 
    true: "c", 
    null: "d", 
    undefined: "e"
};

console.log(obj[1]);
console.log(obj[2]);
console.log(obj[null]);
console.log(obj[true]);
console.log(obj[undefined]);

// change value of literals  

const student3 = {
    name : "Tukaram",
    age : 24, 
    marks : 94.4, 
    city: "Nashik"
};

// Add Objects of Objects : 
const classInfo = {
    tukaram : {
        grade : "B", 
        city: "Delhi"
    }, 
    shradha : {
        grade: "A+", 
        city: "Pune"
    },
    karan : {
        grade: "0", 
        city : "Mumbai"
    }
};

const classInfo2 = [
    {
        name : "Aman", 
        grade : "A", 
        city: "Delhi"

    },
    { name : "Tukaram", 
        grade : "B", 
        city: "Nashik"
    }, 
    {
        name : "shradha", 
        grade : "A+", 
        city: "Pune"
    }, 
]
*/  
// Math.Random

/*
// Guessing Game : 
// - Users enters a max & then tries to guess a random generated numberrs between 1 to max. 

const max  = prompt("enter the max number"); 

const random = Math.floor(Math.random() * max ) + 1;

let guess = prompt("guess the number"); 

while(true){
    if(guess == "quit"){
        console.log("user quit"); 
        break; 
    }

    if(guess == random){
        console.log("You are right! congrats!! random number was", random); 
        break;
    }else if (guess < random) {
        guess = prompt("your guess was too small. please tru agaim"); 
    }else{
        guess = prompt("your guess too large. please try again"); 
    }
    
    // {
    //     guess = prompt("your guess was wrong. please try again"); 
    // }

}
*/
// Assignments : --------------
// Qs. Create a program that generates a random number representing a dice roll. 

 let dice = Math.floor(Math.random() * 6) + 1; 
console.log(dice); 


// Qs2
let Car = {
    name : "Maruti", 
    model: 108, 
    color: "WhiteGray"
};
console.log(Car.name); 


// Qs3
let Person = {
    name: "tukaram", 
    age : 25, 
    city : "Nashik"
};

console.log(Person.city = "New York");

console.log(Person.Country = "United States"); 